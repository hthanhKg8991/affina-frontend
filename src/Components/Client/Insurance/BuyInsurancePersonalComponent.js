import React, { useEffect, useState } from 'react';
import { Button, Image, Nav, Navbar, Tab, Tabs } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import accessStyle from '../../../Assets';
import { isStringNullOrEmpty } from '../../../Common/Helper';
import configDefault from '../../../Config/app';
import ProgressBarStep from '../../Common/ProgressBarStep';
import BuyInsurancePersonalStep1Component from './BuyInsurancePersonalStep1Component';
import BuyInsurancePersonalStep2Component from './BuyInsurancePersonalStep2Component';
import BuyInsurancePersonalStep3Component from './BuyInsurancePersonalStep3Component';
import BuyInsurancePersonalStep4Component from './BuyInsurancePersonalStep4Component';
import BuyInsuranceResponse from './BuyInsuranceResponse';
const BuyInsurancePersonalComponent = () => {
    const { isShowPaymentSuccess, paymentData = {} } = useSelector((state) => state.insurancePackagesRedux) || [];

    const params = useParams();
    const navigate = useNavigate();
    const locationRoute = useLocation();
    const paramsSearch = new URLSearchParams(locationRoute.search);
    const [statusPayment, setStatusPayment] = useState(paramsSearch.get('status'));
    const [transaction, setTransaction] = useState(paramsSearch.get('session'));
    const [orderNo, setOrderNo] = useState(paramsSearch.get('order_no'));
    const [birthday, setBirthday] = useState(new Date());
    const [buyInsuranceStep, setBuyInsuranceStep] = useState(1);
    const [standStep, setStandStep] = useState(3);
    const [isShowPayment, setIsShowPayment] = useState(isShowPaymentSuccess);
    const handleButtonContinue = () => {
        if (buyInsuranceStep < 4) {
            if (standStep < 4 && buyInsuranceStep === 3) {
                setBuyInsuranceStep(3)
                setStandStep(standStep + 1)
            } else {
                // setStandStep(standStep + 1)
                setBuyInsuranceStep(buyInsuranceStep + 1)
            }
        } else {
            setBuyInsuranceStep(5)
        }
    }
    const handleButtonGoBack = (step) => {
        if (buyInsuranceStep <= 1) {
            navigate('/');
        } else {
            if (!isStringNullOrEmpty(step)) {
                setBuyInsuranceStep(step)
                setStandStep(3)
            } else {
                if ((standStep <= 4 && standStep > 3) && buyInsuranceStep === 3) {
                    setBuyInsuranceStep(3)
                    setStandStep(standStep - 1)
                } else {
                    setBuyInsuranceStep(buyInsuranceStep - 1)
                }
            }

        }
    }
    const paymentAgain = () => {
        setBuyInsuranceStep(1)
    }
    let textButtonGoBack = 'QUAY LẠI';
    const renderStep = () => {

        // var templateStep = 
        switch (buyInsuranceStep) {
            case 1:
                textButtonGoBack = 'Quay về trang chủ';
                return (
                    <BuyInsurancePersonalStep1Component handleButtonGoBack={handleButtonGoBack} handleButtonContinue={handleButtonContinue} />
                )
            case 2:
                return (
                    <BuyInsurancePersonalStep2Component handleButtonGoBack={handleButtonGoBack} handleButtonContinue={handleButtonContinue} />
                )
            case 3:
                return (
                    <BuyInsurancePersonalStep3Component step={standStep} handleButtonGoBack={handleButtonGoBack} handleButtonContinue={handleButtonContinue} />
                )
            case 4:
                return (
                    <BuyInsurancePersonalStep4Component handleButtonGoBack={handleButtonGoBack} handleButtonContinue={handleButtonContinue} />
                )
            case configDefault.BANK_TRANSFER_SUCCESS:
                return (
                    <div className='response-data response-success bg-white'>
                        <Image
                            src={accessStyle.images.response.success}
                            srcSet={`
                            ${accessStyle.images.response.success2x} 2x, 
                            ${accessStyle.images.response.success3x} 3x
                        `}
                            alt="Logo Affina"
                            width={'auto'}
                            height={'auto'}
                        />
                        <h5>Tạo hồ sơ bảo hiểm thành công!</h5>
                        <p>Thông tin hợp đồng đã được gửi về email của quý khách.</p>
                        <p>Quý khách vui lòng thanh toán để kích hoạt hiệu lực bảo hiểm trong thời gian sớm nhất theo thông tin sau: </p>
                    </div>
                );
            case configDefault.FAILED:
                return (
                    <div className='response-data response-fail bg-white'>
                        <Image
                            src={accessStyle.images.response.fail}
                            srcSet={`
                                ${accessStyle.images.response.fail2x} 2x, 
                                ${accessStyle.images.response.fail3x} 3x
                            `}
                            alt="Logo Affina"
                            width={'auto'}
                            height={'auto'}
                        />
                        <h5>THANH TOÁN Thất bại!</h5>
                        <p>Rất tiếc giao dịch của bạn không thành công!
                            Vui lòng thực hiện lại giao dịch</p>
                    </div>
                );
            default:
                textButtonGoBack = 'Quay về trang chủ';
                return (
                    <BuyInsurancePersonalStep1Component />
                )
        }
    }


    useEffect(() => {
        window.scrollTo(0, 0);
    }, [buyInsuranceStep, standStep]);

    const renderLayoutResponse = (status) => {
        switch (status) {
            case '1':
            case 1:
                return (
                    <BuyInsuranceResponse
                        statusPayment={statusPayment}
                        transaction={transaction}
                        orderNo={orderNo}
                        downloadFile={orderNo}
                    />
                );

            default:
                return (
                    <>
                        <ProgressBarStep
                            current={buyInsuranceStep}
                            step={['Thông tin người được bảo hiểm', 'Chọn nhà bảo hiểm', 'hoàn tất thông tin đơn bảo hiểm', 'Thanh toán']}
                        />
                        {renderStep()}
                    </>
                )
        }
    }

    const renderButton = (status) => {
        switch (status) {
            case '1':
            case configDefault.BANK_TRANSFER_SUCCESS:
                return (
                    <Navbar className='wrap-button'>
                        <Navbar.Collapse className='justify-content-center'>
                            <Nav.Item>
                                <Button variant="outline-primary btn-outline-blue btn-md text-uppercase" onClick={(handleButtonGoBack)}>
                                    {'Quay về trang chủ'}
                                </Button>
                            </Nav.Item>
                            <Nav.Item className='sm-space-horizontal'></Nav.Item>
                            <Nav.Item>
                                <Button variant={"blue btn-md text-uppercase"} className='active'
                                    // disabled
                                    onClick={handleButtonContinue}>
                                    HOÀN TẤT
                                </Button>
                            </Nav.Item>
                        </Navbar.Collapse>
                    </Navbar>
                )
            case configDefault.FAILED:
                return (
                    <Navbar className='wrap-button'>
                        <Navbar.Collapse className='justify-content-center'>
                            <Nav.Item>
                                <Button variant="outline-primary btn-outline-blue btn-md text-uppercase" onClick={handleButtonGoBack}>
                                    {'Quay về trang chủ'}
                                </Button>
                            </Nav.Item>
                            <Nav.Item className='sm-space-horizontal'></Nav.Item>
                            <Nav.Item>
                                <Button variant={"blue btn-md text-uppercase"} className='active'
                                    // disabled
                                    onClick={paymentAgain}>
                                    THANH TOÁN LẠI
                                </Button>
                            </Nav.Item>
                        </Navbar.Collapse>
                    </Navbar>
                )
            default:
                return null;
        }
    }
    return (
        <div className='insurance-content'>
            <Tabs defaultActiveKey="single" id="uncontrolled-tab-example" className='justify-content-center'>
                <Tab eventKey="single" title="Tham gia gói cá nhân" >
                    {
                        (!isStringNullOrEmpty(statusPayment)) ?
                            renderLayoutResponse(statusPayment)
                            :
                            renderLayoutResponse(paymentData.status)

                    }
                    {/* THANH TOÁN THÀNH CÔNG! */}
                    {
                        (!isStringNullOrEmpty(statusPayment)) ?
                            renderButton(statusPayment)
                            :
                            renderButton(buyInsuranceStep)
                    }
                </Tab>
                <Tab eventKey="group" title="Tham gia theo nhóm">
                    tab 2
                </Tab>
            </Tabs>
        </div>
    )
}

export default BuyInsurancePersonalComponent

import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Form, Nav, Navbar, Row, Tab, Tabs, Image, Modal } from 'react-bootstrap'
import { Link, useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom'
import DatePicker from "react-datepicker";
import ProgressBarStep from '../../Common/ProgressBarStep';
import BuyInsurancePersonalStep1Component from './BuyInsurancePersonalStep1Component';
import BuyInsurancePersonalStep2Component from './BuyInsurancePersonalStep2Component';
import BuyInsurancePersonalStep3Component from './BuyInsurancePersonalStep3Component';
import BuyInsurancePersonalStep4Component from './BuyInsurancePersonalStep4Component';
import { isStringNullOrEmpty } from '../../../Common/Helper';
import accessStyle from '../../../Assets';
import { useSelector } from 'react-redux';
import BuyInsuranceResponse from './BuyInsuranceResponse';
const BuyInsurancePersonalComponent = () => {
    const { isShowPaymentSuccess } = useSelector((state) => state.insurancePackagesRedux) || [];

    const { currentStep, holdStep } = useSelector((state) => state.insuranceRedux) || [];

    const params = useParams();
    const navigate = useNavigate();
    const locationRoute = useLocation();
    const paramsSearch = new URLSearchParams(locationRoute.search);
    console.log('params', paramsSearch.get('status'));
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
    const handleButtonGoBack = () => {
        if (buyInsuranceStep <= 1) {
            navigate('/');
        } else {
            if ((standStep <= 4 && standStep > 3) && buyInsuranceStep === 3) {
                setBuyInsuranceStep(3)
                setStandStep(standStep - 1)
            } else {
                setBuyInsuranceStep(buyInsuranceStep - 1)
            }
        }
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

    return (
        <div className='insurance-content'>
            <Tabs defaultActiveKey="single" id="uncontrolled-tab-example" className='justify-content-center'>
                <Tab eventKey="single" title="Mua gói cá nhân" >
                    {
                        (statusPayment === '1') ?
                            <BuyInsuranceResponse
                                statusPayment={statusPayment}
                                transaction={transaction}
                                orderNo={orderNo}
                                downloadFile={orderNo}
                            />
                            :
                            <>
                                <ProgressBarStep
                                    current={buyInsuranceStep}
                                    step={['Thông tin người được bảo hiểm', 'Chọn nhà bảo hiểm', 'hoàn tất thông tin đơn bảo hiểm', 'Thanh toán']}
                                />
                                {renderStep()}
                            </>
                    }
                    {/* THANH TOÁN THÀNH CÔNG! */}
                    {
                        (statusPayment === '1') &&

                        <Navbar className='wrap-button'>
                            <Navbar.Collapse className='justify-content-center'>
                                <Nav.Item>
                                    <Button variant="outline-primary btn-outline-blue btn-md text-uppercase" onClick={handleButtonGoBack}>
                                        {'Quay về trang chủ'}
                                    </Button>
                                </Nav.Item>
                                <Nav.Item className='sm-space-horizontal'></Nav.Item>
                                <Nav.Item>
                                    <Button variant={"grey btn-md text-uppercase"} className='active'
                                        // disabled
                                        onClick={handleButtonContinue}>
                                        HOÀN TẤT
                                    </Button>
                                </Nav.Item>
                            </Navbar.Collapse>
                        </Navbar>
                    }
                </Tab>
                <Tab eventKey="group" title="Mua gói nhóm">
                    tab 2
                </Tab>
            </Tabs>
        </div>
    )
}

export default BuyInsurancePersonalComponent

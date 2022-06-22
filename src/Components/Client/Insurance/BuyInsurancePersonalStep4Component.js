import moment from 'moment';
import React, { useEffect, useMemo, useState } from 'react';
import { Col, Container, Image, Modal, Row, Stack } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import accessStyle from '../../../Assets';
import { checkAge, isStringNullOrEmpty, isViewMobile, resetStore, validate, vnConvert } from '../../../Common/Helper';
import Line from '../../../Common/Line';
import { resetStateInsurance } from '../../../Reducers/Insurance/PackagesRedux';
import { createPayment } from '../../../Reducers/Insurance/PaymentRedux';
import { resetState } from '../../../Reducers/Insurance/StepRedux';
import BriefComponent from './BriefComponent';
import CommonButtonInsurance from './CommonButtonInsurance';
import configDefault from '../../../Config/app';
const paymentMethod = {
    bank_account: 'Bank-account',
    payoo_account: 'Payoo-account',
    QRCode: 'QRCode',
    pay_later: 'pay-later',
    installment: 'Installment',
    cc: 'CC',
    myQR: 'myQR',
}
const BuyInsurancePersonalStep4Component = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { dataAuth = {} } = useSelector((state) => state.AuthRedux) || {};
    const { orderData = {} } = useSelector((state) => state.insurancePackagesRedux) || [];
    const { paymentData = {} } = useSelector((state) => state.PaymentRedux) || [];
    const { dataStep } = useSelector((state) => state.insuranceRedux) || [];
    const { step1, step2, step3 } = dataStep;
    console.log('step2:::', step2, "step3::", step3, paymentData);
    console.log('dataAuth:::', dataAuth);
    // 
    const [paymentPort, setPaymentPort] = useState('')
    const [isShowPopup, setIsShowPopup] = useState(false)
    const [textCopy, setTextCopy] = useState('')

    const handleSelectPaymentPort = (portPayment) => {
        setPaymentPort(portPayment)
    }
    const handleContinue = () => {
        if (paymentPort === paymentMethod.myQR) {
            props.handleButtonGoBack && props.handleButtonGoBack(configDefault.MY_TRANSFER_QR)
        } else {
            let params = {
                // "order_no": "ORDER4" + moment().format('HH:mm:ss'),
                "user": dataAuth.data && dataAuth.data._id,
                "order_no": orderData.data && orderData.data.order_code,
                "order_cash_amount": Math.ceil(step2.paidAmount),
                "order_ship_date": moment().format('DD/MM/YYYY'),
                "order_ship_days": 1,
                "validity_time": moment().add(2, 'days').format('YYYYMMDDhhmmss'),
                "name": step3.name,
                "phone": step3.phone,
                "address": step3.address,
                "email": step3.email,
                "payment_method": paymentPort,
                "sale": {
                    partner: dataAuth.data && dataAuth.data.partner || '',
                    region: dataAuth.data && dataAuth.data.region || '',
                    area: dataAuth.data && dataAuth.data.area || '',
                    employee_unit: dataAuth.data && dataAuth.data.employee_unit || '',
                    employee_code: dataAuth.data && dataAuth.data.employee_code || '',
                    staff_name: dataAuth.data && dataAuth.data.staff_name || '',
                },
            }
            dispatch(createPayment(params))
            console.log('params>>>createPayment', params);
            console.log('params>>>paymentData', paymentData);

            // props.handleButtonContinue && props.handleButtonContinue()
        }
    }

    useMemo(() => {
        if (paymentData.status === false) {
            props.handleButtonGoBack && props.handleButtonGoBack(configDefault.FAILED)
        } else {
            if (!isStringNullOrEmpty(paymentData.data && paymentData.data.payment_url)) {
                // setIsShowPopup(true)
                resetStore();
                dispatch(resetState());
                dispatch(resetStateInsurance())
                navigate('/');
                console.log('paymentData>>>', paymentData);
                window.open(paymentData.data && paymentData.data.payment_url)

            }
        }
    }, [paymentData])

    const handleGoBack = () => {
        props.handleButtonGoBack && props.handleButtonGoBack();
    }
    console.log('data>>>', dataAuth.data && dataAuth.data.area);
    const handleCopyClipBoard = (valueCopy) => {
        console.log('handleCopyClipBoard:::', valueCopy);
        window.navigator.clipboard.writeText(valueCopy)
        setTextCopy(valueCopy)
    }

    const _renderMyQR = () => {
        return (
            <Col md={12} xs={12} className='payment-group'>
                <Row>
                    <Col md={12} xs={12}>
                        <Stack direction='horizontal' className='payment-header position-relative align-items-center' onClick={() => handleSelectPaymentPort(paymentMethod.myQR)}>
                            <Image
                                src={accessStyle.images.partner.logoCircle}
                                srcSet={`
                                                                            ${accessStyle.images.partner.logoCircle2x} 2x, 
                                                                            ${accessStyle.images.partner.logoCircle3x} 3x
                                                                        `}
                                alt="Logo Affina"
                                width={44}
                                height={44}
                            />
                            <div className='payment-title'>
                                <label htmlFor={paymentMethod.myQR}>Chuyển khoản trực tiếp cho Affina</label>
                            </div>
                            <div className='ms-auto'>
                                <div className='wrap-check position-relative' onClick={() => handleSelectPaymentPort(paymentMethod.myQR)}>
                                    <input type="radio" name="radio" id={paymentMethod.myQR} checked={paymentPort === paymentMethod.myQR} onChange={() => handleSelectPaymentPort(paymentMethod.myQR)} />
                                    <span className='check-mark' onClick={() => handleSelectPaymentPort(paymentMethod.myQR)}></span>
                                </div>
                            </div>
                        </Stack>
                    </Col>
                    <Line type='dashed' />
                    <Col md={12} xs={12}>
                        <Stack direction='horizontal' gap={2} className='payment-content position-relative align-items-start'>
                            <div className='qr-payment'>
                                <h5>Quẹt mã QR để thanh toán</h5>
                                <div className='cut-border'>
                                    <div className='content-conner'></div>
                                </div>

                            </div>
                            <div className='wrapper-line'>
                                <div className="vertical-line">
                                    <span className='word'>Hoặc</span>
                                </div>
                            </div>
                            <div className='payment-info'>
                                <h5>Thông tin chuyển khoản</h5>
                                <div className='info-transfer'>
                                    <p>Tên Ngân hàng: <strong>Vietcombank</strong>
                                        <i className='cursor-pointer mdi mdi-content-copy ms-2' onClick={() => handleCopyClipBoard('Vietcombank')}></i>
                                    </p>
                                    <p>Tên tài khoản: <strong>CONG TY TNHH AFFINA VIET NAM</strong>
                                        <i className='cursor-pointer mdi mdi-content-copy ms-2' onClick={() => handleCopyClipBoard('CONG TY TNHH AFFINA VIET NAM')}></i>
                                    </p>
                                    <p>Số tài khoản: <strong>1026967259</strong>
                                        <i className='cursor-pointer mdi mdi-content-copy ms-2' onClick={() => handleCopyClipBoard('1026967259')}></i>
                                    </p>
                                    <p>Chi nhánh: <strong>Bình Tây</strong>
                                        <i className='cursor-pointer mdi mdi-content-copy ms-2' onClick={() => handleCopyClipBoard('Bình Tây')}></i>
                                    </p>
                                    <p>Nội dung chuyển Khoản:: <strong>{vnConvert(step3.name).split(' ').join('')} {step3.phone} {orderData.data && orderData.data.order_code}</strong>
                                        <i className='cursor-pointer mdi mdi-content-copy ms-2' onClick={() => handleCopyClipBoard(vnConvert(step3.name).split(' ').join('') + ' ' + step3.phone + ' ' + (orderData.data && orderData.data.order_code))}></i>
                                    </p>
                                </div>
                            </div>
                        </Stack>
                    </Col>
                </Row>
            </Col>
        )
    }
    const _renderBankAccount = () => {
        return (
            <Col md={12} xs={12} className='payment-group'>
                <Stack direction='horizontal' className='payment-header position-relative' onClick={() => handleSelectPaymentPort(paymentMethod.bank_account)}>
                    <Image
                        src={accessStyle.images.icons.iconCard}
                        srcSet={`
                            ${accessStyle.images.icons.iconCard2x} 2x, 
                            ${accessStyle.images.icons.iconCard3x} 3x
                        `}
                        alt="Logo Affina"
                        width={44}
                        height={'auto'}
                    />
                    <div className='payment-title'>
                        <label htmlFor={paymentMethod.bank_account}>Thanh toán bằng thẻ ATM</label>
                    </div>
                    <div className='ms-auto'>
                        <div className='wrap-check position-relative'>
                            <input type="radio" name="radio" id={paymentMethod.bank_account} checked={paymentPort === paymentMethod.bank_account} onChange={() => handleSelectPaymentPort(paymentMethod.bank_account)} />
                            <span className='check-mark' onClick={() => handleSelectPaymentPort(paymentMethod.bank_account)}></span>
                        </div>
                    </div>
                </Stack>
            </Col>
        )
    }

    const _renderCC = () => {
        return (
            <Col md={12} xs={12} className='payment-group'>
                <Stack direction='horizontal' className='payment-header position-relative' onClick={() => handleSelectPaymentPort(paymentMethod.cc)}>
                    <Image
                        src={accessStyle.images.icons.visaCard}
                        srcSet={`
                            ${accessStyle.images.icons.visaCard2x} 2x, 
                            ${accessStyle.images.icons.visaCard3x} 3x
                        `}
                        alt="Logo Affina"
                        width={44}
                        height={'auto'}
                    />
                    <div className='payment-title'>
                        <label htmlFor={paymentMethod.cc}>Thanh toán bằng thẻ Visa/Master/JCB</label>
                    </div>
                    <div className='ms-auto'>
                        <div className='wrap-check position-relative'>
                            <input type="radio" name="radio" id={paymentMethod.cc} checked={paymentPort === paymentMethod.cc} onChange={() => handleSelectPaymentPort(paymentMethod.cc)} />
                            <span className='check-mark' onClick={() => handleSelectPaymentPort(paymentMethod.cc)}></span>
                        </div>
                    </div>
                </Stack>
            </Col>
        )
    }

    const _renderInstallment = () => {
        return (
            <Col md={12} xs={12} className='payment-group'>
                <Stack direction='horizontal' className='payment-header position-relative' onClick={() => handleSelectPaymentPort(paymentMethod.installment)}>
                    <Image
                        src={accessStyle.images.icons.installment}
                        srcSet={`
                            ${accessStyle.images.icons.installment2x} 2x, 
                            ${accessStyle.images.icons.installment3x} 3x
                        `}
                        alt="Logo Affina"
                        width={44}
                        height={'auto'}
                    />
                    <div className='payment-title'>
                        <label htmlFor={paymentMethod.installment}>Thanh toán bằng hình thức trả góp </label>
                    </div>
                    <div className='ms-auto'>
                        <div className='wrap-check position-relative'>
                            <input type="radio" name="radio" id={paymentMethod.installment} checked={paymentPort === paymentMethod.installment} onChange={() => handleSelectPaymentPort(paymentMethod.installment)} />
                            <span className='check-mark' onClick={() => handleSelectPaymentPort(paymentMethod.installment)}></span>
                        </div>
                    </div>
                </Stack>
            </Col>
        )
    }

    const _renderQR = () => {
        return (
            <Col md={12} xs={12} className='payment-group'>
                <Stack direction='horizontal' className='payment-header position-relative' onClick={() => handleSelectPaymentPort(paymentMethod.QRCode)}>
                    <Image
                        src={accessStyle.images.partner.logoPayoo}
                        // srcSet={`
                        //     ${accessStyle.images.partner.logoPayoo} 2x, 
                        //     ${accessStyle.images.partner.logoPayoo} 3x
                        // `}
                        alt="Logo Payoo"
                        width={44}
                        height={'auto'}
                    />
                    <div className='payment-title'>
                        <label htmlFor={paymentMethod.QRCode}>Thanh toán qua ví <i>(ZaloPay, ShoppePay, SmartPay) </i></label>
                    </div>
                    <div className='ms-auto'>
                        <div className='wrap-check position-relative'>
                            <input type="radio" name="radio" id={paymentMethod.QRCode} checked={paymentPort === paymentMethod.QRCode} onChange={() => handleSelectPaymentPort(paymentMethod.QRCode)} />
                            <span className='check-mark' onClick={() => handleSelectPaymentPort(paymentMethod.QRCode)}></span>
                        </div>
                    </div>
                </Stack>
            </Col>
        )
    }

    return (
        <Container>
            <Container className='insurance-content-step4'>
                <Row>
                    <Col md={9}>
                        <div className='insurance-pay bg-white text-left'>
                            <Container className='xs-hidden'>
                                <h2>Hình thức thanh toán</h2>
                            </Container>
                            <Line type='solid' className='xs-hidden' />
                            <Container>
                                {
                                    console.log('item>>>>', dataAuth.data)
                                }
                                {
                                    (dataAuth.data && !isStringNullOrEmpty(dataAuth.data._id)) ?
                                        dataAuth.data.permission && dataAuth.data.permission.detail.map((item, index) => {
                                            // demo && demo.detail.map((item, index) => {
                                            switch (item) {
                                                case paymentMethod.QRCode:
                                                return _renderQR();
                                                case paymentMethod.bank_account:
                                                    return _renderBankAccount();
                                                case paymentMethod.cc:
                                                    return _renderCC();
                                                case paymentMethod.installment:
                                                    return _renderInstallment();
                                                default:
                                                    return null;
                                            }
                                        })
                                        :
                                        <div>
                                            {_renderMyQR()}
                                            {_renderBankAccount()}
                                            {_renderCC()}
                                            {_renderInstallment()}
                                            {_renderQR()}
                                        </div>
                                }

                                {/* <Col md={12} xs={12} className='payment-group'>
                                    <Stack direction='horizontal' className='payment-header position-relative'>
                                        <Image
                                            src={accessStyle.images.icons.logoMomo}
                                            srcSet={`
                                                ${accessStyle.images.icons.logoMomo2x} 2x, 
                                                ${accessStyle.images.icons.logoMomo3x} 3x
                                            `}
                                            alt="Logo Affina"
                                            width={44}
                                            height={44}
                                        />
                                        <div className='payment-title'>
                                            <label htmlFor={paymentMethod.payoo_account}>Thanh toán bằng ví điện tử</label>
                                        </div>
                                        <div className='ms-auto'>
                                            <div className='wrap-check position-relative'>
                                                <input type="radio" name="radio" id={paymentMethod.payoo_account} checked={paymentPort === paymentMethod.payoo_account} onChange={() => handleSelectPaymentPort(paymentMethod.payoo_account)} />
                                                <span className='check-mark' onClick={() => handleSelectPaymentPort(paymentMethod.payoo_account)}></span>
                                            </div>
                                        </div>
                                    </Stack>
                                </Col> */}
                            </Container>

                        </div>
                    </Col>
                    <Col md={3}>
                        {
                            !isViewMobile() &&
                            <BriefComponent />
                        }
                    </Col>
                </Row>
            </Container>
            <CommonButtonInsurance
                textButtonGoBack='QUAY LẠI'
                textButtonContinue='TIẾP TỤC'
                validate={validate([paymentPort, checkAge(step1.birthday.format("DD/MM/YYYY"))])}
                handleButtonGoBack={handleGoBack}
                handleButtonContinue={handleContinue}
                paidAmount={step2.paidAmount}
                intoMoney={step2.intoMoney}
                isViewStep={true}
            />
            <Modal
                size="lg"
                show={isShowPopup}
                // show={true}
                dialogClassName="modal-90w iframe-payment"
                // onHide={() => setIsShowPopup(false)}
                aria-labelledby="example-custom-modal-styling-title">
                <iframe width="100%" height="100%" className='iframe' src={paymentData.data && paymentData.data.payment_url} title="Affina integrate payment with payoo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                {/* <InstagramEmbed
                    url={paymentData.data.payment_url}
                    clientAccessToken='123|456'
                    maxWidth={320}
                    hideCaption={false}
                    containerTagName='div'
                    protocol=''
                    injectScript
                    onLoading={() => { }}
                    onSuccess={() => { }}
                    onAfterRender={() => { }}
                    onFailure={() => { }}
                /> */}
            </Modal>
        </Container>
    )
}

export default BuyInsurancePersonalStep4Component

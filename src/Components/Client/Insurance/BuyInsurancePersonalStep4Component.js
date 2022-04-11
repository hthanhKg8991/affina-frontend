import moment from 'moment';
import React, { useState } from 'react';
import { Col, Container, Form, Image, Modal, Nav, Row, Stack } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import accessStyle from '../../../Assets';
import { formatPrepaidAmount, isStringNullOrEmpty, validate } from '../../../Common/Helper';
import Line from '../../../Common/Line';
import { createPayment } from '../../../Reducers/Insurance/PackagesRedux';
import CommonButtonInsurance from './CommonButtonInsurance';
import InstagramEmbed from 'react-instagram-embed';
import { useNavigate } from 'react-router-dom';
import { handleStep1, handleStep2, handleStep3, resetState } from '../../../Reducers/Insurance/StepRedux';

const BuyInsurancePersonalStep4Component = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { orderData = {}, paymentData = {} } = useSelector((state) => state.insurancePackagesRedux) || [];
    const { dataStep } = useSelector((state) => state.insuranceRedux) || [];
    const { step1, step2, step3 } = dataStep;
    console.log('step2:::', step2, "step3::", step3, paymentData);
    // 
    const [paymentPort, setPaymentPort] = useState('')
    const [isShowPopup, setIsShowPopup] = useState(false)
    const [textCopy, setTextCopy] = useState('')

    const handleSelectPaymentPort = (portPayment) => {
        setPaymentPort(portPayment)
    }
    const handleContinue = () => {
        dispatch(createPayment({
            // "order_no": "ORDER4" + moment().format('HH:mm:ss'),
            "order_no": orderData.data && orderData.data.order_code,
            "order_cash_amount": step2.price,
            "order_ship_date": moment().format('DD/MM/YYYY'),
            "order_ship_days": 1,
            "validity_time": moment().add(2, 'days').format('YYYYMMDDhhmmss'),
            "name": step3.name,
            "phone": step3.phone,
            "address": step3.address,
            "email": step3.email,
            "payment_method": paymentPort,
        }))
        if (!isStringNullOrEmpty(paymentData.data && paymentData.data.payment_url)) {
            // setIsShowPopup(true)
            dispatch(
                resetState()
            )
            navigate('/')
            window.open(paymentData.data && paymentData.data.payment_url)

        }
        // props.handleButtonContinue && props.handleButtonContinue()
    }

    const handleCopyClipBoard = (valueCopy) => {
        console.log('handleCopyClipBoard:::', valueCopy);
        window.navigator.clipboard.writeText(valueCopy)
        setTextCopy(valueCopy)
    }
    return (
        <Container>
            <Container className='insurance-content-step4'>
                <Row>
                    <Col md={9}>
                        <div className='insurance-pay bg-white text-left'>
                            <Container>
                                <h2>Hình thức thanh toán</h2>
                            </Container>
                            <Line type='solid' />
                            <Container>
                                <div className='payment-group'>
                                    <Stack direction='horizontal' className='payment-header position-relative'>
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
                                            <label htmlFor="transfer">Chuyển khoản trực tiếp cho Affina</label>
                                        </div>
                                        <div className='ms-auto'>
                                            <div className='wrap-check position-relative' onClick={() => handleSelectPaymentPort('transfer')}>
                                                <input type="radio" name="radio" id="transfer" checked={paymentPort === 'transfer'} onChange={() => handleSelectPaymentPort('transfer')} />
                                                <span className='check-mark' onClick={() => handleSelectPaymentPort('transfer')}></span>
                                            </div>
                                        </div>
                                    </Stack>
                                    <Line type='dashed' />
                                    <Stack direction='horizontal' className='payment-content position-relative align-items-start'>
                                        <div className='qr-payment'>
                                            <h5>Quẹt mã QR để thanh toán</h5>
                                            <div className='cut-border'></div>
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
                                                <p>Nội dung chuyển Khoản:: <strong>{step3.name}_{step3.phone}_{orderData.data && orderData.data.order_code} Affina</strong>
                                                    <i className='cursor-pointer mdi mdi-content-copy ms-2' onClick={() => handleCopyClipBoard(step3.name + '_' + step3.phone + '_' + (orderData.data && orderData.data.order_code + ' Affina'))}></i>
                                                </p>
                                            </div>
                                        </div>
                                    </Stack>
                                </div>
                                <div className='payment-group'>
                                    <Stack direction='horizontal' className='payment-header position-relative'>
                                        <Image
                                            src={accessStyle.images.icons.iconCard}
                                            srcSet={`
                                                ${accessStyle.images.icons.iconCard2x} 2x, 
                                                ${accessStyle.images.icons.iconCard3x} 3x
                                            `}
                                            alt="Logo Affina"
                                            width={44}
                                            height={44}
                                        />
                                        <div className='payment-title'>
                                            <label htmlFor="atm">Thanh toán bằng thẻ ATM</label>
                                        </div>
                                        <div className='ms-auto'>
                                            <div className='wrap-check position-relative'>
                                                <input type="radio" name="radio" id="atm" checked={paymentPort === 'atm'} onChange={() => handleSelectPaymentPort('atm')} />
                                                <span className='check-mark' onClick={() => handleSelectPaymentPort('atm')}></span>
                                            </div>
                                        </div>
                                    </Stack>
                                </div>
                                <div className='payment-group'>
                                    <Stack direction='horizontal' className='payment-header position-relative'>
                                        <Image
                                            src={accessStyle.images.icons.visaCard}
                                            srcSet={`
                                                ${accessStyle.images.icons.visaCard2x} 2x, 
                                                ${accessStyle.images.icons.visaCard3x} 3x
                                            `}
                                            alt="Logo Affina"
                                            width={44}
                                            height={44}
                                        />
                                        <div className='payment-title'>
                                            <label htmlFor="visa/master/jcb">Visa/Master/JCB</label>
                                        </div>
                                        <div className='ms-auto'>
                                            <div className='wrap-check position-relative'>
                                                <input type="radio" name="radio" id="visa/master/jcb" checked={paymentPort === 'visa/master/jcb'} onChange={() => handleSelectPaymentPort('visa/master/jcb')} />
                                                <span className='check-mark' onClick={() => handleSelectPaymentPort('visa/master/jcb')}></span>
                                            </div>
                                        </div>
                                    </Stack>
                                </div>
                                <div className='payment-group'>
                                    <Stack direction='horizontal' className='payment-header position-relative'>
                                        <Image
                                            src={accessStyle.images.icons.installment}
                                            srcSet={`
                                                ${accessStyle.images.icons.installment2x} 2x, 
                                                ${accessStyle.images.icons.installment3x} 3x
                                            `}
                                            alt="Logo Affina"
                                            width={44}
                                            height={44}
                                        />
                                        <div className='payment-title'>
                                            <label htmlFor="installment">Thanh toán bằng hình thức trả góp </label>
                                        </div>
                                        <div className='ms-auto'>
                                            <div className='wrap-check position-relative'>
                                                <input type="radio" name="radio" id="installment" checked={paymentPort === 'installment'} onChange={() => handleSelectPaymentPort('installment')} />
                                                <span className='check-mark' onClick={() => handleSelectPaymentPort('installment')}></span>
                                            </div>
                                        </div>
                                    </Stack>
                                </div>
                                <div className='payment-group'>
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
                                            <label htmlFor="momo">Thanh toán bằng ví Momo</label>
                                        </div>
                                        <div className='ms-auto'>
                                            <div className='wrap-check position-relative'>
                                                <input type="radio" name="radio" id="momo" checked={paymentPort === 'momo'} onChange={() => handleSelectPaymentPort('momo')} />
                                                <span className='check-mark' onClick={() => handleSelectPaymentPort('momo')}></span>
                                            </div>
                                        </div>
                                    </Stack>
                                </div>
                            </Container>

                        </div>
                    </Col>
                    <Col md={3}>
                        <div className='insurance-sidebar bg-white sidebar-right-content'>
                            <Form.Label className='justify-content-start'>Tóm tắt đơn bảo hiểm</Form.Label>
                            <label className='unit'> *Đơn vị: VNĐ</label>
                            <Line type='dotted' />
                            <div className='brief-info'>
                                <Nav className='justify-content-between'>
                                    <Nav.Item>Đối tượng bảo hiểm:</Nav.Item>
                                    <Nav.Item>Cá nhân</Nav.Item>
                                </Nav>
                                <Nav className='justify-content-between'>
                                    <Nav.Item>Ngày sinh:</Nav.Item>
                                    <Nav.Item>12/04/1992</Nav.Item>
                                </Nav>
                                <Nav className='justify-content-between'>
                                    <Nav.Item>Nhà bảo hiểm:</Nav.Item>
                                    <Nav.Item>{step2.supplier && step2.supplier.name}</Nav.Item>
                                </Nav>
                                <Nav className='justify-content-between'>
                                    <Nav.Item>Tên gói: </Nav.Item>
                                    <Nav.Item>{step2.packageName}</Nav.Item>
                                </Nav>
                                <Nav className='justify-content-between'>
                                    <Nav.Item>Tổng số tiền được bảo hiểm:</Nav.Item>
                                    <Nav.Item></Nav.Item>
                                </Nav>
                                <Nav className='justify-content-between'>
                                    <Nav.Item>Thời hạn bảo hiểm:</Nav.Item>
                                    <Nav.Item>{step3.timeExpire.value}</Nav.Item>
                                </Nav>
                            </div>
                            <Line type='dotted' />
                            <div className='main-package-fee'>
                                <Nav className='justify-content-between'>
                                    <Nav.Item><strong>Phí gói chính:</strong></Nav.Item>
                                    <Nav.Item>{formatPrepaidAmount(step2.price)}</Nav.Item>
                                </Nav>
                            </div>
                            <Line type='dotted' />
                            <div className='package-additional'>
                                <Nav className='justify-content-between'>
                                    <Nav.Item><strong>Gói bổ sung:</strong></Nav.Item>
                                    <Nav.Item></Nav.Item>
                                </Nav>
                            </div>
                            <Line type='dotted' />
                            <div className='into-money'>
                                <Nav className='justify-content-between'>
                                    <Nav.Item>Thành tiền:</Nav.Item>
                                    <Nav.Item>{formatPrepaidAmount(step2.price)}</Nav.Item>
                                </Nav>
                            </div>
                            <div className='promotion'>
                                <input defaultValue="" placeholder='Nhập mã khuyến mãi' />
                            </div>
                            <Line type='dotted' />
                            <div className='total-money'>
                                <Stack direction='horizontal'>
                                    <label>TỔNG TIỀN: </label>
                                    <label className='ms-auto'>{formatPrepaidAmount(step2.fee)}</label>
                                </Stack>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <CommonButtonInsurance
                textButtonGoBack='QUAY LẠI'
                textButtonContinue='TIẾP TỤC'
                validate={validate([paymentPort])}
                handleButtonGoBack={props.handleButtonGoBack}
                handleButtonContinue={handleContinue}
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

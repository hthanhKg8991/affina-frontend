import moment from 'moment';
import React, { useEffect, useMemo } from 'react';
import { Col, Container, Image, Row, Stack } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import accessStyle from '../../../Assets';
import { formatPrepaidAmount, genderByText, isBillingByText, isEmptyArray, isStringNullOrEmpty, matchRound } from '../../../Common/Helper';
import Line from '../../../Common/Line';
import { createOrder, getOrderDetail } from '../../../Reducers/Insurance/PackagesRedux';
import { handleStep1, handleStep2, handleStep3 } from '../../../Reducers/Insurance/StepRedux';
import CommonButtonInsurance from './CommonButtonInsurance';


const BuyInsurancePersonalStep3PreviewComponent = (props) => {
    const dispatch = useDispatch();

    const locationRoute = useLocation();
    const paramsSearch = new URLSearchParams(locationRoute.search);

    const { orderDataDetail = {} } = useSelector((state) => state.insurancePackagesRedux) || [];
    const { dataAuth = {} } = useSelector((state) => state.AuthRedux) || {};

    // 
    const { dataStep } = useSelector((state) => state.insuranceRedux) || [];
    const { step1, step2, step3 } = dataStep;
    console.log('BuyInsurancePersonalStep3PreviewComponent:', orderDataDetail);
    // const [amountSecondary, setAmountSecondary] = useState(0);
    var amountSecondary = 0;
    var amountMain = 0;

    const handleEditStep = (value) => {
        // dispatch(
        //     handleCurrentStep(object)
        // )
        props.handleButtonGoBack && props.handleButtonGoBack(value)
    }

    const handleGoBackButton = () => {
        props.handleButtonGoBack && props.handleButtonGoBack()
    }

    const handleContinue = () => {
        let params = {
            "user": dataAuth.data && dataAuth.data._id,
            "sale": {
                partner: dataAuth.data && dataAuth.data.partner || '',
                region: dataAuth.data && dataAuth.data.region || '',
                area: dataAuth.data && dataAuth.data.area || '',
                employee_unit: dataAuth.data && dataAuth.data.employee_unit || '',
                employee_code: dataAuth.data && dataAuth.data.employee_code || '',
                staff_name: dataAuth.data && dataAuth.data.staff_name || '',
            },
            "contract_cate": {
                "contract_num": "",
                "group_code": "",
                "partner_code": "",
                "cus_source": ""
            },
            "product_package": {
                "cus_type": "Individual",
                "package_id": step2.packageId,
                "package": step2.packageCode,
                "quantily": "",
                "fee_primary_package": step2.fee,
                "additional": JSON.stringify(step2.additional),
                "fee_additional_package_5": "",
                "fee_additional_package_6": "",
                "fee_additional_package_7": "",
                "fee_additional_package_8": "",
                "total_additional_fee": step2.totalAdditionalFee,
                "total_insurance_fee": step2.intoMoney,
                "total_group_insurance_fee": ""
            },
            "contract_detail": {
                "effective_date": "",
                "end_date": "",
                "duration": moment(step3.startDay, 'dd/mm/yyyy').add(364, 'days').format('DD/MM/YYYY'),// step3.timeExpire && step3.timeExpire.key,// Thời gian hợp đồng
                "create_date": moment(step3.startDay).format('DD/MM/YYYY'), //Ngày bắt đầu bảo hiểm
                "update_date": "",
                "first_date_confirm": ""
            },
            "insured_info": {
                "fullname": step3.name,
                "gender": step1.gender,
                "id_card": step3.identity,
                "phone": step3.phone,
                "email": step3.email,
                "address": step3.address,
                "city": step3.province.name,
                "province": step3.province.name,
                "district": step3.district.name,
                "ward": step3.ward.name,
                "birthday": moment(step1.birthday).format('DD/MM/YYYY'),
                "note": "",
                // Require billing
                "is_billing": step3.isBilling,
                "company_name": step3.companyName,
                "tax_number": step3.taxNumber,
                "company_address": step3.companyAddress,
            },
            "insurance_buyer": {
                "fullname": "",
                "relationship": "",
                "id_card": "",
                "phone": "",
                "email": step3.email,
                "phone_consultant": "",
                "note": ""
            },
            "insurance_fee": {
                "pecent_discount_original": "",
                "price_discount_original": "",
                "pecent_discount_camp1": "",
                "price_discount_camp1": "",
                "id_camp1": "",
                "code_discount_camp2": "",
                "price_discount_camp2": "",
                "id_camp2": "",
                "total_fee_after_discount": ""
            },
            "commission": {
                "commission": "",
                "fee_after_commission": "",
                "fee_after_commission_discount": ""
            },
            "contract_status": "GD đang chờ"
        }
        dispatch(createOrder(params))
        console.log('params>>>createOrder', params);

        props.handleButtonContinue && props.handleButtonContinue();
    }

    useEffect(() => {
        dispatch(
            getOrderDetail(paramsSearch.get('contract_num'))
        )
    }, [dispatch])

    useMemo(() => {
        const condition = orderDataDetail.insured_info || {};
        const conditionBuyer = orderDataDetail.insurance_buyer || {};
        const conditionContractDetail = orderDataDetail.contract_detail || {};
        const conditionPackage = orderDataDetail.product_package || {};
        if (!isStringNullOrEmpty(paramsSearch.get('contract_num'))) {
            dispatch(
                handleStep1({
                    gender: condition.gender,
                    birthday: moment(condition.birthday).format('DD/MM/YYYY'),
                })
            )
            console.log('moment(conditionContractDetail.create_date).format()', moment(conditionContractDetail.create_date).format('DD/MM/YYYY'));
            dispatch(
                handleStep3({
                    name: condition.fullname,
                    identity: condition.id_card,
                    address: condition.address,
                    province: condition.province,
                    district: condition.district,
                    ward: condition.ward,
                    email: conditionBuyer.email,
                    phone: condition.phone,
                    startDay: moment(conditionContractDetail.create_date),
                    timeExpire: moment(conditionContractDetail.duration),
                    companyName: condition.company_name,
                    companyAddress: condition.company_address,
                    taxNumber: condition.tax_number,
                }),
            );
            dispatch(handleStep2({
                // packageName: item.name,
                // packageCode: item.package_code,
                // price: item.price,
                fee: conditionPackage.fee_primary_package,
                // discount: item.discount,
                // supplier: item.supplier,
                additional: conditionPackage.additional,
                // packageMain: item.package_main,
                packageId: conditionPackage.package_id,
            }))
        }
    }, []);

    const isCheckContractNum = (value, isView) => {
        if (!isStringNullOrEmpty(paramsSearch.get('contract_num'))) {
            return orderDataDetail.insured_info && orderDataDetail.insured_info[isView]
        } else {
            return value;
        }

    }
    return (
        <div className='insurance-content-step3-preview'>
            <h5>Kiểm tra lại thông tin </h5>
            <div className='group-info'>
                <div className='header'>
                    <Container>
                        <Container>
                            <Stack direction='horizontal'>
                                <div className='icon-header'>
                                    <Image
                                        src={accessStyle.images.icons.user}
                                        srcSet={`
                                            ${accessStyle.images.icons.user2x} 2x, 
                                            ${accessStyle.images.icons.user3x} 3x
                                        `}
                                        alt="icon user"
                                        width={19}
                                        height={22}
                                    />
                                </div>
                                <div className='title-header'>
                                    <h3>THÔNG TIN NGƯỜI ĐƯỢC BẢO HIỂM</h3>
                                </div>
                                <div className='ms-auto'>
                                    <Image
                                        src={accessStyle.images.icons.edit}
                                        srcSet={`
                                            ${accessStyle.images.icons.edit2x} 2x, 
                                            ${accessStyle.images.icons.edit3x} 3x
                                        `}
                                        className="cursor-pointer"
                                        onClick={() => handleEditStep()}
                                        alt="icon edit"
                                        width={19}
                                        height={22}
                                    />
                                </div>
                            </Stack>
                        </Container>
                    </Container>
                </div>
                <Container className='insurance-info text-left'>
                    <Container>
                        <section className='list-info'>
                            <Row>
                                <Col md={3} xs={6}>
                                    <p className='title-info'>Họ và tên</p>
                                    <strong>{step3.name}</strong>
                                </Col>
                                <Col md={3} xs={6}>
                                    <p className='title-info'>Giới tính</p>
                                    <strong>{genderByText(step1.gender)}</strong>
                                </Col>
                                <Line type="solid" className='xs-visibility mt-2 mb-2' />
                                <Col md={3} xs={6}>
                                    <p className='title-info'>Ngày sinh</p>
                                    <strong>{moment(step1.birthday).format('DD/MM/YYYY')}</strong>
                                </Col>
                                <Col md={3} xs={6}>
                                    <p className='title-info'>Số CMND / CCCD / Passport</p>
                                    <strong>{isCheckContractNum(step3.identity, 'id_card')}</strong>
                                </Col>
                                <Line type="solid" className='xs-visibility mt-2' />
                            </Row>
                            <Line type="solid" className='xs-hidden' />
                            <Row>
                                <Col md={3} xs={12}>
                                    <p className='title-info'>Địa chỉ</p>
                                    <strong>{isCheckContractNum(step3.address, 'address')}</strong>
                                </Col>
                                <Line type="solid" className='xs-visibility mt-2 mb-2' />
                                <Col md={3} xs={12}>
                                    <p className='title-info'>Phường</p>
                                    <strong>{isCheckContractNum(step3.ward.name, 'ward')}</strong>
                                </Col>
                                <Line type="solid" className='xs-visibility mt-2 mb-2' />
                                <Col md={3} xs={12}>
                                    <p>Quận/Huyện</p>
                                    <strong>{isCheckContractNum(step3.district.name, 'district')}</strong>
                                </Col>
                                <Line type="solid" className='xs-visibility mt-2 mb-2' />
                                <Col md={3} xs={12}>
                                    <p className='title-info'>Thành phố</p>
                                    <strong>{isCheckContractNum(step3.province.name, 'province')}</strong>
                                </Col>
                                <Line type="solid" className='xs-visibility mb-2 mb-2' />
                            </Row>
                            <Line type="solid" className='xs-hidden' />
                            <Row>
                                <Col md={3} xs={12}>
                                    <p className='title-info'>Số điện thoại</p>
                                    <strong>{step3.phone}</strong>
                                </Col>
                                <Line type="solid" className='xs-visibility mt-2 mb-2' />
                                <Col md={3} xs={12}>
                                    <p className='title-info'>Email</p>
                                    <strong>{step3.email}</strong>
                                </Col>
                                <Col md={3} xs={6}>
                                </Col>
                                <Col md={3} xs={6}>
                                </Col>
                            </Row>
                            <Line type="solid" />
                            <div className='table-footer'>Yêu cầu xuất hoá đơn đỏ: <strong>{isBillingByText(step3.requireBilling)}</strong></div>
                        </section>
                    </Container>
                </Container>
            </div>
            <div className='group-info'>
                <div className='header'>
                    <Container>
                        <Container>
                            <Stack direction='horizontal'>
                                <div className='icon-header'>
                                    <Image
                                        src={accessStyle.images.icons.security}
                                        srcSet={`
                                            ${accessStyle.images.icons.security2x} 2x, 
                                            ${accessStyle.images.icons.security3x} 3x
                                        `}
                                        alt="Logo Affina"
                                        width={19}
                                        height={22}
                                    />
                                </div>
                                <div className='title-header'>
                                    <h3>THÔNG TIN GÓI BẢO HIỂM</h3>
                                </div>
                                <div className='ms-auto'>
                                    <Image
                                        src={accessStyle.images.icons.edit}
                                        srcSet={`
                                            ${accessStyle.images.icons.edit2x} 2x, 
                                            ${accessStyle.images.icons.edit3x} 3x
                                        `}
                                        onClick={() => handleEditStep(2)}
                                        // onClick={() => props.handleButtonGoBack(2)}
                                        alt="icon edit"
                                        className="cursor-pointer"
                                        width={19}
                                        height={22}
                                    />
                                </div>
                            </Stack>
                        </Container>
                    </Container>
                </div>
                <Container className='insurance-info text-left'>
                    <Container>
                        <section className='list-info'>
                            <Row>
                                <Col md={3} xs={6}>
                                    <p className='title-info'>Nhà bảo hiểm</p>
                                    <strong>{step2.supplier && step2.supplier.name}</strong>
                                </Col>
                                <Col md={3} xs={6}>
                                    <p className='title-info'>Tên gói</p>
                                    <strong>{step2.packageName}</strong>
                                </Col>
                                <Line type="solid" className='xs-visibility mt-2 mb-2' />
                                <Col md={3} xs={12}>
                                    <p className='title-info'>Số tiền được bảo hiểm</p>
                                    <strong>{formatPrepaidAmount(matchRound(step2.intoMoneyAmount))}VNĐ</strong>
                                    {/* <strong>{formatPrepaidAmount(matchRound(step2.price))}VNĐ</strong> */}
                                </Col>
                                <Col className="col"></Col>
                                <Line type="solid" className='xs-visibility mt-2 mb-2' />
                            </Row>
                            <Line type="solid" className='xs-hidden' />
                            <Row>
                                <Col md={3} xs={6}>
                                    <p className='title-info'>Ngày bắt đầu bảo hiểm</p>
                                    <strong>{moment(step3.startDay).format('DD/MM/YYYY')}</strong>
                                </Col>
                                <Col md={3} xs={6}>
                                    <p className='title-info'>Ngày hết hạn bảo hiểm</p>
                                    <strong>{step3.timeExpire.value}</strong>
                                </Col>
                                <Line type="solid" className='xs-visibility mt-2 mb-2' />
                                <Col md={3} xs={6}>
                                </Col>
                                <Col md={3} xs={6}></Col>
                            </Row>
                            <Line type="solid" className='xs-hidden' />
                            <Row>
                                <Col md={6} xs={12}>
                                    <p className='title-info'>Quyền lợi chính</p>
                                    {
                                        (!isEmptyArray(step2.packageMain)) &&
                                        step2.packageMain.map((itemMain, index) => {
                                            return (
                                                <div className='sub-info-insure' key={itemMain._id}>
                                                    <strong className='benefits-title'>{itemMain.name}</strong>
                                                    <p className='benefits-price d-flex justify-content-md-start justify-content-between'>
                                                        <span>Số tiền được bảo hiểm:</span>
                                                        <span>{formatPrepaidAmount(matchRound(itemMain.amount))}VNĐ</span>
                                                    </p>
                                                </div>
                                            )
                                        })
                                    }

                                </Col>
                                <Col md={6} xs={12}>
                                    <p className='title-info'>Quyền lợi bổ sung </p>
                                    {
                                        (!isEmptyArray(step2.additional)) &&
                                        step2.additional.map((itemSecondary, index) => {
                                            // amountSecondary += !isStringNullOrEmpty(itemSecondary.amount) ? parseInt((itemSecondary.amount * itemSecondary.rate) / 100) : 0
                                            amountSecondary += itemSecondary.fee;
                                            return (
                                                <div className='sub-info-insure' key={itemSecondary._id}>
                                                    <strong className='benefits-title'>{index + 1}. {itemSecondary.name}</strong>
                                                    <p className='benefits-price'><span>Số tiền được bảo hiểm: </span>{formatPrepaidAmount(matchRound(itemSecondary.amount))}VNĐ</p>
                                                </div>
                                            )
                                        })
                                    }
                                </Col>
                                <Line type="solid" className='xs-visibility mt-2' />
                            </Row>
                            <Line type="solid" className='xs-hidden' />
                            <Row>
                                <Col md={3} xs={6}>
                                    <p className='title-info'>Phí gói chính</p>
                                    <strong>{formatPrepaidAmount(matchRound(step2.fee))}VNĐ</strong>
                                </Col>
                                <Col md={3} xs={6}>
                                    <p className='title-info'>Tổng phí gói phụ</p>
                                    {/* <strong>{formatPrepaidAmount(matchRound(amountSecondary))}VNĐ</strong> */}
                                    <strong>{formatPrepaidAmount(matchRound(step2.totalAdditionalFee))}VNĐ</strong>
                                </Col>
                                <Line type="solid" className='xs-visibility mt-2 mb-2' />
                                <Col md={3} xs={6}></Col>
                                <Col md={3} xs={12} className="d-flex justify-content-end">
                                    <div className='total'>TỔNG: <strong>{formatPrepaidAmount(matchRound(step2.paidAmount || 0))}VNĐ</strong></div>

                                </Col>
                            </Row>
                            <Line type="solid" className='xs-hidden' />
                        </section>
                    </Container>
                </Container>
            </div>
            <CommonButtonInsurance
                textButtonGoBack='QUAY LẠI'
                textButtonContinue='TIẾP TỤC'
                // validate={validate([name, identity, gender, birthday, startTimeInsure, timeExp, address, province, district, ward])}
                validate={false}
                handleButtonGoBack={handleGoBackButton}
                handleButtonContinue={handleContinue}
            />
        </div>
    )
}

export default BuyInsurancePersonalStep3PreviewComponent

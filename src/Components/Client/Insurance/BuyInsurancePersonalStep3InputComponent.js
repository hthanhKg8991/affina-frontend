import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { Col, Container, FormLabel, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { checkAge, formatIOSToDate, genderByText, isStringNullOrEmpty, isValidateEmail, isValidatePhone, resetStore, validate, checkAgeHadIdentity } from '../../../Common/Helper';
import configDefault from '../../../Config/app';
import District from '../../../Config/districts';
import ProvinceData from '../../../Config/provinces';
import Ward from '../../../Config/wards';
import { createOrder } from '../../../Reducers/Insurance/PackagesRedux';
import { createPaymentResponse } from '../../../Reducers/Insurance/PaymentRedux';
import { handleStep3 } from '../../../Reducers/Insurance/StepRedux';
import CommonComboBox from '../../Common/CommonComboBox';
import CommonInput from '../../Common/CommonInput';
import CommonButtonInsurance from './CommonButtonInsurance';
import DatePicker from "react-datepicker";
import MaskedInput from 'react-input-mask';

const BuyInsurancePersonalStep3InputComponent = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { dataAuth = {} } = useSelector((state) => state.AuthRedux) || {};
    const { orderData = {} } = useSelector((state) => state.insurancePackagesRedux) || [];
    const { paymentData = {} } = useSelector((state) => state.PaymentRedux) || [];
    const { dataStep } = useSelector((state) => state.insuranceRedux) || [];
    const { step1, step2, step3 } = dataStep;
    const { data = {} } = orderData;
    const { order_code } = data;
    // 
    console.log('step1::', step3.startDay);
    const [isBilling, setIsBilling] = useState(step3.requireBilling);
    const [isConfirm, setIsConfirm] = useState(step3.isConfirm);
    const [name, setName] = useState(step3.name);
    const [identity, setIdentity] = useState(step3.identity);
    const [gender, setGender] = useState(step1.gender);
    const [birthday, setBirthday] = useState(formatIOSToDate(step1.birthday));
    const [startTimeInsure, setStartTimeInsure] = useState(formatIOSToDate(step3.startDay));
    const [timeExp, setTimeExp] = useState(step3.timeExpire);
    const [address, setAddress] = useState(step3.address);
    const [province, setProvince] = useState(step3.province);
    const [district, setDistrict] = useState(step3.district);
    const [ward, setWard] = useState(step3.ward);
    const [email, setEmail] = useState(step3.email);
    const [phone, setPhone] = useState(step3.phone);
    const [companyName, setCompanyName] = useState(step3.companyName);
    const [taxNumber, setTaxNumber] = useState(step3.taxNumber);
    const [companyAddress, setCompanyAddress] = useState(step3.companyAddress);
    const [relationshipName, setRelationshipName] = useState(step3.relationshipName);
    const [relationship, setRelationship] = useState(step3.relationship);
    const DistrictData = District.filter(element => element.province_code === province.code);
    const WardData = Ward.filter(element => element.district_code === district.code);

    const resetInputState = () => {
        setIsBilling(false);
        setIsConfirm(false);
        setName('');
        setIdentity('');
        setAddress('');
        setProvince('');
        setDistrict('');
        setWard('');
        setEmail('');
        setPhone('');
        setCompanyName('');
        setTaxNumber('');
        setCompanyAddress('');
        setStartTimeInsure('');
        setTimeExp('');
        setRelationshipName('');
        setRelationship('');
    }
    var datePlusOne = new Date();
    const handleCheckBilling = () => {
        setIsBilling(!isBilling)
    }
    const handleCheckConfirm = () => {
        setIsConfirm(!isConfirm)
    }
    const handleName = (e) => {
        setName(e.target.value);
    }
    const handleIdentity = (e) => {
        setIdentity(e.target.value);
    }
    const handleAddress = (e) => {
        setAddress(e.target.value);
    }
    const handleProvince = (e) => {
        setProvince(e);
        setDistrict('');
        setWard('');
    }
    const handleDistrict = (e) => {
        setDistrict(e);
        setWard('')
    }
    const handleWard = (e) => {
        console.log('handleWard', ward);
        setWard(e);
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handlePhone = (e) => {
        setPhone(e.target.value);
    }
    const handleCompanyName = (e) => {
        setCompanyName(e.target.value);
    }
    const handleTaxNumber = (e) => {
        setTaxNumber(e.target.value);
    }
    const handleCompanyAddress = (e) => {
        setCompanyAddress(e.target.value);
    }
    const handleTimeInsure = (e) => {
        setStartTimeInsure(e);
    }
    const handleTimeExp = (e) => {
        setTimeExp(e);
    }

    const handleRelationshipName = (e) => {
        setRelationshipName(e.target.value)
    }

    const handleRelationship = (e) => {
        setRelationship(e)
    }

    const handleGoBackButton = () => {
        props.handleButtonGoBack && props.handleButtonGoBack()
    }
    const handleValidateButton = () => {
        // resetState();
        if (isBilling === false) {
            if (checkAgeHadIdentity(step1.birthday)) {
                return validate([name, identity, gender, birthday, startTimeInsure, timeExp, address, province, district, ward, email, isValidateEmail(email), phone, isValidatePhone(phone), isConfirm, checkAge(step1.birthday), relationshipName, relationship])
            } else {
                return validate([name, identity, gender, birthday, startTimeInsure, timeExp, address, province, district, ward, email, isValidateEmail(email), phone, isValidatePhone(phone), isConfirm, checkAge(step1.birthday)])
            }
        } else {
            if (checkAgeHadIdentity(step1.birthday)) {
                return validate([name, identity, gender, birthday, startTimeInsure, timeExp, address, province, district, ward, email, isValidateEmail(email), phone, isValidatePhone(phone), isConfirm, checkAge(step1.birthday), relationshipName, relationship])
            } else {
                return validate([name, identity, gender, birthday, startTimeInsure, timeExp, address, province, district, ward, email, isValidateEmail(email), phone, isValidatePhone(phone), isConfirm, companyName, taxNumber, companyAddress, checkAge(step1.birthday)])
            }
        }
    }
    console.log('handleValidateButton', handleValidateButton());

    const handleCreateOrder = () => {
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
                "package_main": JSON.stringify(step2.packageMain),
                "fee_additional_package_5": "",
                "fee_additional_package_6": "",
                "fee_additional_package_7": "",
                "fee_additional_package_8": "",
                "total_additional_fee": step2.totalAdditionalFee,
                "total_insurance_fee": step2.intoMoney,
                "amount_insured": step2.intoMoneyAmount,
                "total_group_insurance_fee": ""
            },
            "contract_detail": {
                "effective_date": "",
                "end_date": '',
                "duration": moment(startTimeInsure, 'dd/mm/yyyy').add(364, 'days').format('DD/MM/YYYY'),// step3.timeExpire && step3.timeExpire.key,// Th???i gian h???p ?????ng
                "create_date": moment(startTimeInsure).format('DD/MM/YYYY'), //Ng??y b???t ?????u b???o hi???m
                "update_date": "",
                "first_date_confirm": ""
            },
            "insured_info": {
                "fullname": name || step3.name,
                "gender": step1.gender,
                "id_card": identity || step3.identity,
                "phone": phone || step3.phone,
                "email": email || step3.email,
                "address": address || step3.address,
                "city": province.name || step3.province.name,
                "province": province.name || step3.province.name,
                "district": district.name || step3.district.name,
                "ward": ward.name || step3.ward.name,
                "birthday": moment(step1.birthday).format('DD/MM/YYYY'),
                "note": "",
                // Require billing
                "is_billing": step3.isBilling,
                "company_name": companyName || step3.companyName,
                "tax_number": taxNumber || step3.taxNumber,
                "company_address": companyAddress || step3.companyAddress,
            },
            "insurance_buyer": {
                // age  < 14
                "fullname": checkAgeHadIdentity(step1.birthday) ? relationshipName || step3.relationshipName : '',
                "relationship": checkAgeHadIdentity(step1.birthday) ? relationship && relationship.key || step3.relationship && step3.relationship.key : '',
                "id_card": identity || step3.identity,
                "phone": phone || step3.phone,
                "email": email || step3.email,
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
            "contract_status": "GD ??ang ch???"
        }
        console.log('createOrder-params>>>', params);
        dispatch(createOrder(params))
        // props.handleButtonContinue && props.handleButtonContinue()
    }

    const handleContinue = () => {
        dispatch(
            handleStep3({
                // Age < 14
                relationshipName: checkAgeHadIdentity(step1.birthday) ? relationshipName : '',
                relationship: checkAgeHadIdentity(step1.birthday) ? relationship : '',
                // 
                name: name,
                identity: identity,
                address: address,
                province: province,
                district: district,
                ward: ward,
                email: email,
                phone: phone,
                startDay: moment(startTimeInsure).toDate(),
                timeExpire: timeExp,
                requireBilling: isBilling,
                companyName: companyName,
                companyAddress: companyAddress,
                taxNumber: taxNumber,
                isConfirm: isConfirm,
            }),
        )
        console.log('dataAuth>>>', dataAuth);
        resetStore()
        if (dataAuth.data && dataAuth.data._id) {

            handleCreateOrder();
            resetInputState();
            // resetStore()
            // dispatch(
            //     resetState()
            // )
        } else {
            props.handleButtonContinue && props.handleButtonContinue()
            resetInputState();
        }
    }
    useEffect(() => {
        console.log('paymentData>>>>', paymentData);
        if (!isStringNullOrEmpty(order_code)) {
            dispatch(createPaymentResponse({
                status: 0,
            }));

        } else {
            dispatch(createPaymentResponse({
                status: configDefault.FAILED,
            }))
        }

        // dispatch(getOrderDetail())
    }, [orderData]);

    return (
        <div className='insurance-content-step3-input'>
            <Container className='text-left'>
                <h5 className='text-center'>Vui l??ng ??i???n th??ng tin </h5>
                <Container>
                    {
                        checkAgeHadIdentity(step1.birthday) &&
                        <Row>
                            <Col md={6} sm={6} xs={12}>
                                <CommonInput
                                    require={true}
                                    label='H??? v?? t??n ng?????i y??u c???u b???o hi???m'
                                    hint='Nh???p h??? v?? t??n ng?????i y??u c???u b???o hi???m'
                                    defaultValue={relationshipName}
                                    value={relationshipName}
                                    onChange={(e) => handleRelationshipName(e)}
                                />
                            </Col>
                            <Col md={6} sm={6} xs={12}>
                                <CommonComboBox
                                    require={true}
                                    data={[
                                        {
                                            key: 'BM',
                                            value: 'B???/M???',
                                        },
                                        {
                                            key: 'BT',
                                            value: 'B???n th??n',
                                        },
                                        {
                                            key: 'CON',
                                            value: 'Con',
                                        },
                                        {
                                            key: 'DN',
                                            value: 'Doanh Nghi???p',
                                        },
                                        {
                                            key: 'VC',
                                            value: 'V???/Ch???ng',
                                        },
                                    ]}
                                    readOnly={true}
                                    viewValue="value"
                                    value={relationship && relationship.value}
                                    defaultValue={relationship && relationship.value}
                                    label='M???i quan h??? v???i ng?????i ???????c b???o hi???m'
                                    hint='Ch???n m???i quan h???'
                                    onChange={(e) => handleRelationship(e)}
                                />
                            </Col>
                        </Row>
                    }
                    <Row>
                        <Col md={6}>
                            <CommonInput
                                require={true}
                                label='H??? v?? t??n ng?????i ???????c b???o hi???m'
                                hint='Nh???p h??? v?? t??n ng?????i ???????c b???o hi???m'
                                defaultValue={name}
                                value={name}
                                onChange={(e) => handleName(e)}
                            />
                            <CommonInput
                                require={true}
                                label='S??? CMND / CCCD / Passport '
                                txtSmall='Nh???p th??ng tin Cha/Me??'
                                hint='Nh???p CMND / CCCD / Passport'
                                defaultValue={identity}
                                value={identity}
                                onChange={(e) => handleIdentity(e)}
                            />
                        </Col>
                        <Col md={6}>
                            <Row>
                                <Col md={6} sm={6} xs={12}>
                                    <CommonInput
                                        require={true}
                                        label='Gi???i t??nh '
                                        hint='Nam/ N???'
                                        defaultValue={gender}
                                        value={genderByText(gender)}
                                        readOnly={true}
                                    />

                                </Col>
                                <Col md={6} sm={6} xs={12}>
                                    <CommonInput
                                        require={true}
                                        label='Ng??y sinh'
                                        hint='Nh???p ng??y/th??ng/n??m'
                                        defaultValue={birthday}
                                        value={moment(birthday).format('DD/MM/YYYY')}
                                        readOnly={true}
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col md={6} sm={6} xs={12}>
                                    <div className="box-input box-input-active">
                                        <FormLabel><small className="text-danger">*</small>Ng??y b???t ?????u b???o hi???m</FormLabel>
                                        <DatePicker className="form-control"
                                            selected={startTimeInsure}
                                            onChange={(date) => handleTimeInsure(date)}
                                            placeholderText="Nh???p ng??y/th??ng/n??m*"
                                            dateFormat="dd/MM/yyyy"
                                            minDate={datePlusOne.setDate(datePlusOne.getDate() + 1)}
                                            customInput={
                                                <MaskedInput mask="99/99/9999" />
                                            }
                                        />
                                    </div>
                                    {/* <CommonInput
                                        inputType='date'
                                        require={true}
                                        label='Ng??y b???t ?????u b???o hi???m'
                                        hint='Nh???p ng??y/th??ng/n??m'
                                        defaultValue={startTimeInsure}
                                        value={startTimeInsure}
                                        minDate={datePlusOne.setDate(datePlusOne.getDate() + 1)}
                                        onChange={(e) => handleTimeInsure(e)}
                                    /> */}

                                </Col>
                                <Col md={6} sm={6} xs={12}>
                                    {/* <CommonComboBox
                                        require={true}
                                        data={[
                                            {
                                                key: '1',
                                                value: '1 n??m',
                                            },
                                            // {
                                            //     key: '2',
                                            //     value: '2 n??m',
                                            // },
                                            // {
                                            //     key: '3',
                                            //     value: '3 n??m',
                                            // },
                                        ]}
                                        readOnly={true}
                                        viewValue="value"
                                        value={timeExp.value}
                                        defaultValue={timeExp.value}
                                        label='Th???i gian hi???u l???c'
                                        hint='Ch???n th???i gian hi???u l???c'
                                        onChange={(e) => handleTimeExp(e)}
                                    /> */}
                                    <CommonInput
                                        require={true}
                                        label='Th????i gian hi????u l????c'
                                        defaultValue="1 n??m"
                                        value="1 n??m"
                                        readOnly={true}
                                    />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <FormLabel>
                            <small className="text-danger">*</small>
                            ?????a ch???
                        </FormLabel>
                        <Col md={6}>
                            <CommonComboBox
                                data={ProvinceData}
                                viewKey="code"
                                viewValue="name"
                                value={province.name}
                                defaultValue={province.name}
                                label=''
                                hint='Ch???n t???nh, Th??nh ph???'
                                onChange={(e) => handleProvince(e)}
                            />

                            <CommonComboBox
                                data={DistrictData}
                                viewKey="code"
                                viewValue="name"
                                value={district.name}
                                defaultValue={district.name}
                                label=''
                                hint='Ch???n qu???n, huy???n '
                                onChange={(e) => handleDistrict(e)}
                            />
                        </Col>
                        <Col md={6}>
                            <CommonComboBox
                                data={WardData}
                                viewKey="code"
                                viewValue="name"
                                value={ward.name}
                                defaultValue={ward.name}
                                label=''
                                hint='Ch???n ph?????ng, x??'
                                onChange={(e) => handleWard(e)}
                            />
                            <CommonInput
                                label=''
                                hint='Nh???p s??? nh??, t??n ???????ng'
                                defaultValue={address}
                                value={address}
                                onChange={(e) => handleAddress(e)}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <CommonInput
                                require={true}
                                type='email '
                                label='Email '
                                hint='Nh???p ?????a ch??? email '
                                defaultValue={email}
                                value={email}
                                error={email && !isValidateEmail(email)}
                                tooltip={'Ch??ng t??i s??? g???i h???p ?????ng b???o hi???m & t??i li???u li??n quan ?????n email n??y'}
                                onChange={(e) => handleEmail(e)}
                            />
                        </Col>
                        <Col md={6}>
                            <CommonInput
                                require={true}
                                label='S??? ??i???n tho???i '
                                hint='Nh???p s??? ??i???n tho???i'
                                defaultValue={phone}
                                value={phone}
                                error={phone && !isValidatePhone(phone)}
                                onChange={(e) => handlePhone(e)}
                            />
                        </Col>
                    </Row>
                </Container>
                <Container className='income-info'>
                    <div className="form-check group-vertical">
                        <input className="form-check-input" type="checkbox" defaultValue="" id="billing" onChange={handleCheckBilling} checked={isBilling} />
                        <label className="form-check-label" htmlFor="billing">
                            Y??u c???u xu???t ho?? ????n ?????
                        </label>
                    </div>
                    {
                        isBilling &&
                        <Row>
                            <Col md={6}>
                                <CommonInput
                                    require={true}
                                    label='T??n c??ng ty'
                                    hint='Nh???p t??n c??ng ty'
                                    defaultValue={companyName}
                                    value={companyName}
                                    onChange={(e) => handleCompanyName(e)}
                                />
                                <CommonInput
                                    require={true}
                                    label='M?? s??? thu???'
                                    hint='Nh???p m?? s??? thu???'
                                    defaultValue={taxNumber}
                                    value={taxNumber}
                                    onChange={(e) => handleTaxNumber(e)}
                                />
                            </Col>
                            <Col md={6}>
                                <CommonInput
                                    require={true}
                                    label='?????a ch??? c??ng ty'
                                    hint='Nh???p ?????a ch??? c??ng ty'
                                    defaultValue={companyAddress}
                                    value={companyAddress}
                                    onChange={(e) => handleCompanyAddress(e)}
                                />
                            </Col>
                        </Row>
                    }
                    <div className="form-check group-vertical check-commit align-items-start">
                        <input className="form-check-input" type="checkbox" defaultValue="" id="term-condition" onChange={handleCheckConfirm} checked={isConfirm} />
                        <label className="form-check-label" htmlFor="term-condition">
                            T??i cam ??oan nh???ng th??ng tin n??u tr??n do t??i t??? khai, t??? nguy???n cung c???p v?? ho??n to??n ????ng s??? th???t. T??i ???? ?????c v?? hi???u c??c quy t???c b???o hi???m, ??i???u kho???n, ??i???u ki???n c???a H???p ?????ng/ Gi???y ch???ng nh???n b???o hi???m v?? ?????ng ?? tham gia b???o hi???m. T??i ?????ng ?? v???i c??c ??i???u kho???n v?? ??i???u ki???n s??? d???ng c???a website Affina. N???u c?? g?? gian d???i, t??i xin ho??n to??n ch???u tr??ch nhi???m.
                        </label>
                    </div>
                </Container>
            </Container>
            <CommonButtonInsurance
                textButtonGoBack='QUAY L???I'
                textButtonContinue='TI???P T???C'
                validate={handleValidateButton()}
                // validate={false}
                handleButtonGoBack={handleGoBackButton}
                handleButtonContinue={handleContinue}
            />
        </div>
    )
}

export default BuyInsurancePersonalStep3InputComponent

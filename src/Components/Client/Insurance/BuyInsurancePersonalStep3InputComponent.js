import moment from 'moment';
import React, { useState } from 'react';
import { Col, Container, FormLabel, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { formatIOSToDate, genderByText, isValidateEmail, isValidatePhone, validate } from '../../../Common/Helper';
import District from '../../../Config/districts';
import ProvinceData from '../../../Config/provinces';
import Ward from '../../../Config/wards';
import { handleStep3 } from '../../../Reducers/Insurance/StepRedux';
import CommonComboBox from '../../Common/CommonComboBox';
import CommonInput from '../../Common/CommonInput';
import CommonButtonInsurance from './CommonButtonInsurance';

const BuyInsurancePersonalStep3InputComponent = (props) => {
    const dispatch = useDispatch();
    // 
    const { dataStep } = useSelector((state) => state.insuranceRedux) || [];
    const { step1, step3 } = dataStep;
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
    const DistrictData = District.filter(element => element.province_code === province.code);
    const WardData = Ward.filter(element => element.district_code === district.code);
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

    const handleGoBackButton = () => {
        props.handleButtonGoBack && props.handleButtonGoBack()
    }
    const handleValidateButton = () => {
        if (isBilling === false) {
            return validate([name, identity, gender, birthday, startTimeInsure, timeExp, address, province, district, ward, email, isValidateEmail(email), phone, isValidatePhone(phone), isConfirm])
        } else {
            return validate([name, identity, gender, birthday, startTimeInsure, timeExp, address, province, district, ward, email, isValidateEmail(email), phone, isValidatePhone(phone), isConfirm, companyName, taxNumber, companyAddress])
        }
    }
    console.log('handleValidateButton', handleValidateButton());
    const handleContinue = () => {
        dispatch(
            handleStep3({
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
        props.handleButtonContinue && props.handleButtonContinue()
    }
    return (
        <div className='insurance-content-step3-input'>
            <Container className='text-left'>
                <h5 className='text-center'>Vui lòng điền thông tin </h5>
                <Container>
                    <Row>
                        <Col md={6}>
                            <CommonInput
                                require={true}
                                label='Họ và tên'
                                hint='Nhập họ và tên'
                                defaultValue={name}
                                value={name}
                                onChange={(e) => handleName(e)}
                            />
                            <CommonInput
                                require={true}
                                label='Số CMND / CCCD / Passport '
                                hint='Nhập CMND / CCCD / Passport'
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
                                        label='Giới tính '
                                        hint='Nam/ Nữ'
                                        defaultValue={gender}
                                        value={genderByText(gender)}
                                        readOnly={true}
                                    />

                                </Col>
                                <Col md={6} sm={6} xs={12}>
                                    <CommonInput
                                        require={true}
                                        label='Ngày sinh'
                                        hint='Nhập ngày/tháng/năm'
                                        defaultValue={birthday}
                                        value={moment(birthday).format('DD/MM/YYYY')}
                                        readOnly={true}
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col md={6} sm={6} xs={12}>
                                    <CommonInput
                                        inputType='date'
                                        require={true}
                                        label='Ngày bắt đầu bảo hiểm'
                                        hint='Nhập ngày/tháng/năm'
                                        defaultValue={startTimeInsure}
                                        value={startTimeInsure}
                                        minDate={new Date()}
                                        onChange={(e) => handleTimeInsure(e)}
                                    />

                                </Col>
                                <Col md={6} sm={6} xs={12}>
                                    <CommonComboBox
                                        require={true}
                                        data={[
                                            {
                                                key: '1',
                                                value: '1 năm',
                                            },
                                            // {
                                            //     key: '2',
                                            //     value: '2 năm',
                                            // },
                                            // {
                                            //     key: '3',
                                            //     value: '3 năm',
                                            // },
                                        ]}
                                        value={timeExp.value}
                                        defaultValue={timeExp.value}
                                        label='Thời gian hiệu lực'
                                        hint='Chọn thời gian hiệu lực'
                                        onChange={(e) => handleTimeExp(e)}
                                    />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <FormLabel>
                            <small className="text-danger">*</small>
                            Địa chỉ
                        </FormLabel>
                        <Col md={6}>
                            <CommonComboBox
                                data={ProvinceData}
                                viewKey="code"
                                viewValue="name"
                                value={province.name}
                                defaultValue={province.name}
                                label=''
                                hint='Chọn tỉnh, Thành phố'
                                onChange={(e) => handleProvince(e)}
                            />

                            <CommonComboBox
                                data={DistrictData}
                                viewKey="code"
                                viewValue="name"
                                value={district.name}
                                defaultValue={district.name}
                                label=''
                                hint='Chọn quận, huyện '
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
                                hint='Chọn phường, xã'
                                onChange={(e) => handleWard(e)}
                            />
                            <CommonInput
                                label=''
                                hint='Nhập số nhà, tên đường'
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
                                hint='Nhập địa chỉ email '
                                defaultValue={email}
                                value={email}
                                error={email && !isValidateEmail(email)}
                                tooltip={'Chúng tôi sẽ gửi hợp đồng bảo hiểm & tài liệu liên quan đến email này'}
                                onChange={(e) => handleEmail(e)}
                            />
                        </Col>
                        <Col md={6}>
                            <CommonInput
                                require={true}
                                label='Số điện thoại '
                                hint='Nhập số điện thoại'
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
                            Yêu cầu xuất hoá đơn đỏ
                        </label>
                    </div>
                    {
                        isBilling &&
                        <Row>
                            <Col md={6}>
                                <CommonInput
                                    require={true}
                                    label='Tên công ty'
                                    hint='Nhập tên công ty'
                                    defaultValue={companyName}
                                    value={companyName}
                                    onChange={(e) => handleCompanyName(e)}
                                />
                                <CommonInput
                                    require={true}
                                    label='Mã số thuế'
                                    hint='Nhập mã số thuế'
                                    defaultValue={taxNumber}
                                    value={taxNumber}
                                    onChange={(e) => handleTaxNumber(e)}
                                />
                            </Col>
                            <Col md={6}>
                                <CommonInput
                                    require={true}
                                    label='Địa chỉ công ty'
                                    hint='Nhập địa chỉ công ty'
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
                            Tôi cam đoan những thông tin nêu trên do tôi tự khai, tự nguyện cung cấp và hoàn toàn đúng sự thật. Tôi đã đọc và hiểu các quy tắc bảo hiểm, điều khoản, điều kiện của Hợp đồng/ Giấy chứng nhận bảo hiểm và đồng ý tham gia bảo hiểm. Tôi đồng ý với các Điều khoản và Điều kiện sử dụng của website Affina. Nếu có gì gian dối, tôi xin hoàn toàn chịu trách nhiệm.
                        </label>
                    </div>
                </Container>
            </Container>
            <CommonButtonInsurance
                textButtonGoBack='QUAY LẠI'
                textButtonContinue='TIẾP TỤC'
                validate={handleValidateButton()}
                // validate={false}
                handleButtonGoBack={handleGoBackButton}
                handleButtonContinue={handleContinue}
            />
        </div>
    )
}

export default BuyInsurancePersonalStep3InputComponent

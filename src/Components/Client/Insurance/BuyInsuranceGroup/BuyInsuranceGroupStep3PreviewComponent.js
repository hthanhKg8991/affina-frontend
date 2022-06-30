import moment from 'moment';
import React, { useEffect, useMemo, useState } from 'react';
import { Col, Container, FormLabel, ListGroup, Row } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import MaskedInput from 'react-input-mask';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { checkAge, formatIOSToDate, genderByText, isStringNullOrEmpty, isValidateEmail, isValidatePhone, validate } from '../../../../Common/Helper';
import District from '../../../../Config/districts';
import ProvinceData from '../../../../Config/provinces';
import Ward from '../../../../Config/wards';
import { handleSelectItem, pushItem } from '../../../../Reducers/Insurance/GroupStepRedux';
import CommonComboBox from '../../../Common/CommonComboBox';
import CommonInput from '../../../Common/CommonInput';
import CommonButtonInsurance from '../CommonButtonInsurance';

const BuyInsuranceGroupStep3PreviewComponent = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { dataStep } = useSelector((state) => state.InsuranceGroup) || [];
    const { groupStep1 } = dataStep;
    const { listPerson = [], personDetail = {} } = groupStep1;
    console.log('personDetail>>>', personDetail);
    // 
    const [state, setState] = useState({});
    const [isConfirm, setIsConfirm] = useState(false);
    const stateProvince = state[personDetail.id + 'Province'] && state[personDetail.id + 'Province'].code || '';
    const stateDistrict = state[personDetail.id + 'District'] && state[personDetail.id + 'District'].code || '';
    const DistrictData = District.filter(element => element.province_code === stateProvince);
    const WardData = Ward.filter(element => element.district_code === stateDistrict);

    var datePlusOne = new Date();
    const handleCheckBilling = (key, value) => {
        let pushKey = key.substring(1, key.length).toLowerCase();
        setState({
            ...state,
            [key]: !value,
        })
        dispatch(
            pushItem({ id: personDetail.id, [pushKey]: !value })
        )
    }
    const handleCheckConfirm = () => {
        setIsConfirm(!isConfirm)
    }

    const handleGoBackButton = () => {
        props.handleButtonGoBack && props.handleButtonGoBack()
    }
    const handleValidateButton = () => {
       const findPersonNotEnoughInfor = listPerson.find((item, index) => {
            console.log('item.address>>', item.province);
            if(item.isbilling){
                if (
                    !isStringNullOrEmpty(item.name)
                    && !isStringNullOrEmpty(item.gender)
                    && !isStringNullOrEmpty(item.identity)
                    && !isStringNullOrEmpty(item.birthday)
                    && !isStringNullOrEmpty(item.phone)
                    && isValidatePhone(item.phone)
                    && !isStringNullOrEmpty(item.email)
                    && isValidateEmail(item.email)
                    // && !isStringNullOrEmpty(item.timeexp)
                    && !isStringNullOrEmpty(item.starttimeinsure)
                    && !isStringNullOrEmpty(item.province)
                    && !isStringNullOrEmpty(item.district)
                    && !isStringNullOrEmpty(item.ward)
                    && !isStringNullOrEmpty(item.address)
                    // is billing
                    && !isStringNullOrEmpty(item.taxnumber)
                    && !isStringNullOrEmpty(item.companyaddress)
                    && !isStringNullOrEmpty(item.companyname)
    
                ) {
                    return false;
                } else {
                    return true;
                }
            }else{
                if (
                    !isStringNullOrEmpty(item.name)
                    && !isStringNullOrEmpty(item.gender)
                    && !isStringNullOrEmpty(item.identity)
                    && !isStringNullOrEmpty(item.birthday)
                    && !isStringNullOrEmpty(item.phone)
                    && isValidatePhone(item.phone)
                    && !isStringNullOrEmpty(item.email)
                    && isValidateEmail(item.email)
                    // && !isStringNullOrEmpty(item.timeexp)
                    && !isStringNullOrEmpty(item.starttimeinsure)
                    && !isStringNullOrEmpty(item.province)
                    && !isStringNullOrEmpty(item.district)
                    && !isStringNullOrEmpty(item.ward)
                    && !isStringNullOrEmpty(item.address)
                ) {
                    return false;
                } else {
                    return true;
                }
            }
       
       });
        if (findPersonNotEnoughInfor === undefined) { return true } else { return false };
    }

    const handleCreateOrder = () => {

    }

    const handleContinue = () => {
        props.handleButtonContinue && props.handleButtonContinue()
    }

    const handleProvince = (key, value) => {
        let pushKey = key.substring(1, key.length).toLowerCase();
        setState({
            ...state,
            [key]: value,
            [personDetail.id + 'District']: '',
            [personDetail.id + 'Ward']: ''
        })
        dispatch(
            pushItem({ id: personDetail.id, [pushKey]: value })
        )
    }

    const handleDistrict = (key, value) => {
        let pushKey = key.substring(1, key.length).toLowerCase();
        setState({
            ...state,
            [key]: value,
            [personDetail.id + 'Ward']: ''
        })
        dispatch(
            pushItem({ id: personDetail.id, [pushKey]: value })
        )
    }

    const onsetStateDropdown = (key, value) => {
        let pushKey = key.substring(1, key.length).toLowerCase();
        setState({
            ...state,
            [key]: value
        });
        dispatch(
            pushItem({ id: personDetail.id, [pushKey]: value })
        )
    }
    const onsetStateInput = (key, e) => {
        let pushKey = key.substring(1, key.length).toLowerCase();
        console.log('pushKey>>>', pushKey);
        setState({
            ...state,
            [key]: e.target.value
        });
        dispatch(
            pushItem({ id: personDetail.id, [pushKey]: e.target.value })
        )
    }

    const onSelectDetail = (item) => {
        setState({
            ...state,
            [personDetail.id + 'Name']: personDetail.name,
            [personDetail.id + 'Identity']: personDetail.identity
        })
        dispatch(
            handleSelectItem(item.id)
        )
    }
    useMemo(() => {
        let initState = {
            [personDetail.id + 'Name']: personDetail.name,
            [personDetail.id + 'Identity']: personDetail.identity,
            [personDetail.id + 'StartTimeInsure']: formatIOSToDate(personDetail.starttimeinsure),
            [personDetail.id + 'TimeExp']: personDetail.timeexp,
            [personDetail.id + 'Province']: personDetail.province,
            [personDetail.id + 'District']: personDetail.district,
            [personDetail.id + 'Ward']: personDetail.ward,
            [personDetail.id + 'Address']: personDetail.address,
            [personDetail.id + 'Email']: personDetail.email,
            [personDetail.id + 'Phone']: personDetail.phone,
            [personDetail.id + 'IsBilling']: personDetail.isbilling,
            [personDetail.id + 'CompanyName']: personDetail.companymame,
            [personDetail.id + 'TaxNumber']: personDetail.taxnumber,
            [personDetail.id + 'CompanyAddress']: personDetail.companyaddress,
        }
        Object.assign(state, initState);
    }, [personDetail])
    console.log('onsetStateInput>>>', handleValidateButton());
    return (
        <div className='insurance-group-step3-input'>
            <Container className='text-left'>
                <h5 className='text-center'>Vui lòng điền thông tin </h5>
                <Container>
                    <Row>
                        <Col sm={12} md={3}>
                            <ListGroup variant="flush">
                                <ListGroup.Item className='title'>Danh sách người được bảo hiểm
                                </ListGroup.Item>
                                {
                                    listPerson.map((item, index) => {
                                        return (
                                            <ListGroup.Item key={index} onClick={() => onSelectDetail(item)}>
                                                {item.name}
                                                {
                                                    (item.id === personDetail.id) &&
                                                    <i className='mdi mdi-check-bold ms-auto is-select'></i>
                                                }
                                            </ListGroup.Item>
                                        )
                                    })
                                }

                                {/* <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                                <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                                <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item> */}
                            </ListGroup>
                        </Col>
                        <Col sm={9} md={9}>
                            <Row>
                                <Col md={6}>
                                    <CommonInput
                                        require={true}
                                        label='Họ và tên người được bảo hiểm'
                                        hint='Nhập họ và tên người được bảo hiểm'
                                        defaultValue={state[personDetail.id + 'Name']}
                                        value={state[personDetail.id + 'Name']}
                                        onChange={(e) => onsetStateInput(personDetail.id + 'Name', e)}
                                        readOnly={true}
                                    />
                                    <CommonInput
                                        require={true}
                                        label='Số CMND / CCCD / Passport '
                                        txtSmall='Nhập CMND/ Mã Định Danh của Cha/Mẹ nếu trẻ chưa có.'
                                        hint='Nhập CMND / CCCD / Passport'
                                        defaultValue={state[personDetail.id + 'Identity']}
                                        value={state[personDetail.id + 'Identity']}
                                        onChange={(e) => onsetStateInput(personDetail.id + 'Identity', e)}
                                        readOnly={true}
                                    />

                                </Col>
                                <Col md={6}>
                                    <Row>
                                        <Col md={6} sm={6} xs={12}>
                                            <CommonInput
                                                require={true}
                                                label='Giới tính '
                                                hint='Nam/ Nữ'
                                                defaultValue={personDetail.gender}
                                                value={genderByText(personDetail.gender)}
                                                readOnly={true}
                                            />

                                        </Col>
                                        <Col md={6} sm={6} xs={12}>
                                            <CommonInput
                                                require={true}
                                                label='Ngày sinh'
                                                hint='Nhập ngày/tháng/năm'
                                                defaultValue={personDetail.birthday}
                                                value={moment(personDetail.birthday).format('DD/MM/YYYY')}
                                                readOnly={true}
                                            />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={6} sm={6} xs={12}>
                                            <div className="box-input box-input-active">
                                                <FormLabel><small className="text-danger">*</small>Ngày bắt đầu bảo hiểm</FormLabel>
                                                <DatePicker className="form-control"
                                                    // selected={startTimeInsure}
                                                    selected={state[personDetail.id + 'StartTimeInsure']}
                                                    // onChange={(date) => handleTimeInsure(date)}
                                                    onChange={(date) => onsetStateDropdown(personDetail.id + 'StartTimeInsure', date)}
                                                    placeholderText="Nhập ngày/tháng/năm sinh*"
                                                    dateFormat="dd/MM/yyyy"
                                                    minDate={datePlusOne.setDate(datePlusOne.getDate() + 1)}
                                                    customInput={
                                                        <MaskedInput mask="99/99/9999" />
                                                    }
                                                />
                                            </div>
                                        </Col>
                                        <Col md={6} sm={6} xs={12}>
                                            <CommonInput
                                                // require={true}
                                                // data={[
                                                //     {
                                                //         key: '1',
                                                //         value: '1 năm',
                                                //     },
                                                //     // {
                                                //     //     key: '2',
                                                //     //     value: '2 năm',
                                                //     // },
                                                //     // {
                                                //     //     key: '3',
                                                //     //     value: '3 năm',
                                                //     // },
                                                // ]}
                                                // readOnly={true}
                                                // viewValue="value"
                                                // // value={timeExp.value}
                                                // // defaultValue={timeExp.value}
                                                // label='Thời gian hiệu lực'
                                                // hint='Chọn thời gian hiệu lực'
                                                // // onChange={(e) => handleTimeExp(e)}
                                                // defaultValue={state[personDetail.id + 'TimeExp'] && state[personDetail.id + 'TimeExp'].value}
                                                // value={state[personDetail.id + 'TimeExp'] && state[personDetail.id + 'TimeExp'].value}
                                                // onChange={(e) => onsetStateDropdown(personDetail.id + 'TimeExp', e)}
                                                require={true}
                                                label='Thời gian hiệu lực'
                                                defaultValue="1 năm"
                                                value="1 năm"
                                                readOnly={true}
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
                                        label=''
                                        hint='Chọn tỉnh, Thành phố'
                                        defaultValue={state[personDetail.id + 'Province'] && state[personDetail.id + 'Province'].name}
                                        value={state[personDetail.id + 'Province'] && state[personDetail.id + 'Province'].name}
                                        onChange={(e) => handleProvince(personDetail.id + 'Province', e)}
                                    />

                                    <CommonComboBox
                                        data={DistrictData}
                                        viewKey="code"
                                        viewValue="name"
                                        label=''
                                        hint='Chọn quận, huyện '
                                        defaultValue={state[personDetail.id + 'District'] && state[personDetail.id + 'District'].name}
                                        value={state[personDetail.id + 'District'] && state[personDetail.id + 'District'].name}
                                        onChange={(e) => handleDistrict(personDetail.id + 'District', e)}
                                    />
                                </Col>
                                <Col md={6}>
                                    <CommonComboBox
                                        data={WardData}
                                        viewKey="code"
                                        viewValue="name"
                                        label=''
                                        hint='Chọn phường, xã'
                                        defaultValue={state[personDetail.id + 'Ward'] && state[personDetail.id + 'Ward'].name}
                                        value={state[personDetail.id + 'Ward'] && state[personDetail.id + 'Ward'].name}
                                        onChange={(e) => onsetStateDropdown(personDetail.id + 'Ward', e)}
                                    />
                                    <CommonInput
                                        label=''
                                        hint='Nhập số nhà, tên đường'
                                        defaultValue={state[personDetail.id + 'Address']}
                                        value={state[personDetail.id + 'Address']}
                                        onChange={(e) => onsetStateInput(personDetail.id + 'Address', e)}
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
                                        error={state[personDetail.id + 'Email'] && !isValidateEmail(state[personDetail.id + 'Email'])}
                                        tooltip={'Chúng tôi sẽ gửi hợp đồng bảo hiểm & tài liệu liên quan đến email này'}
                                        defaultValue={state[personDetail.id + 'Email']}
                                        value={state[personDetail.id + 'Email']}
                                        onChange={(e) => onsetStateInput(personDetail.id + 'Email', e)}
                                    />
                                </Col>
                                <Col md={6}>
                                    <CommonInput
                                        require={true}
                                        label='Số điện thoại '
                                        hint='Nhập số điện thoại'
                                        error={state[personDetail.id + 'Phone'] && !isValidatePhone(state[personDetail.id + 'Phone'])}
                                        defaultValue={state[personDetail.id + 'Phone']}
                                        value={state[personDetail.id + 'Phone']}
                                        onChange={(e) => onsetStateInput(personDetail.id + 'Phone', e)}
                                    />
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                </Container>
                <Container className='income-info'>
                    <div className="form-check group-vertical">
                        {/* <input className="form-check-input" type="checkbox" defaultValue="" id="billing" onChange={handleCheckBilling} checked={isBilling} /> */}
                        <input className="form-check-input" type="checkbox" defaultValue="" id="billing" onChange={() => handleCheckBilling(personDetail.id + 'IsBilling', state[personDetail.id + 'IsBilling'])} checked={state[personDetail.id + 'IsBilling']} />

                        <label className="form-check-label" htmlFor="billing">
                            Yêu cầu xuất hoá đơn đỏ
                        </label>
                    </div>
                    {
                        (state[personDetail.id + 'IsBilling']) &&
                        <Row>
                            <Col md={6}>
                                <CommonInput
                                    require={true}
                                    label='Tên công ty'
                                    hint='Nhập tên công ty'
                                    defaultValue={state[personDetail.id + 'CompanyName'] || personDetail.companyname}
                                    value={state[personDetail.id + 'CompanyName'] || personDetail.companyname}
                                    onChange={(e) => onsetStateInput(personDetail.id + 'CompanyName', e)}
                                />
                                <CommonInput
                                    require={true}
                                    label='Mã số thuế'
                                    hint='Nhập mã số thuế'
                                    defaultValue={state[personDetail.id + 'TaxNumber'] || personDetail.taxnumber}
                                    value={state[personDetail.id + 'TaxNumber'] || personDetail.taxnumber}
                                    onChange={(e) => onsetStateInput(personDetail.id + 'TaxNumber', e)}
                                />
                            </Col>
                            <Col md={6}>
                                <CommonInput
                                    require={true}
                                    label='Địa chỉ công ty'
                                    hint='Nhập địa chỉ công ty'
                                    defaultValue={state[personDetail.id + 'CompanyAddress'] || personDetail.companyaddress}
                                    value={state[personDetail.id + 'CompanyAddress'] || personDetail.companyaddress}
                                    onChange={(e) => onsetStateInput(personDetail.id + 'CompanyAddress', e)}
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
                validate={validate([isConfirm, handleValidateButton()])}
                // validate={false}
                handleButtonGoBack={handleGoBackButton}
                handleButtonContinue={handleContinue}
            />
        </div>
    )
}

export default BuyInsuranceGroupStep3PreviewComponent;

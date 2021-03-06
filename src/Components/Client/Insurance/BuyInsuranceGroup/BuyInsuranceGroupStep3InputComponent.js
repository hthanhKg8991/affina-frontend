import moment from 'moment';
import React, { useEffect, useMemo, useState } from 'react';
import { Col, Container, FormLabel, ListGroup, Row } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import MaskedInput from 'react-input-mask';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { checkAge, formatIOSToDate, genderByText, isStringNullOrEmpty, isValidateEmail, isValidatePhone, validate, checkAgeHadIdentity } from '../../../../Common/Helper';
import District from '../../../../Config/districts';
import ProvinceData from '../../../../Config/provinces';
import Ward from '../../../../Config/wards';
import { handleSelectItem, pushItem } from '../../../../Reducers/Insurance/GroupStepRedux';
import CommonComboBox from '../../../Common/CommonComboBox';
import CommonInput from '../../../Common/CommonInput';
import CommonButtonInsurance from '../CommonButtonInsurance';

const BuyInsuranceGroupStep3InputComponent = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { dataStep } = useSelector((state) => state.insuranceGroup) || [];
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

        const handleValidateInforPerson = (item) => {
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
                    && !isStringNullOrEmpty(item.relationshipname)
                    && !isStringNullOrEmpty(item.relationship)
    
                ) {
                    return false;
                } else {
                    return true;
                }
            } else if (!item.isbilling ) {
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
                    && !isStringNullOrEmpty(item.relationshipname)
                    && !isStringNullOrEmpty(item.relationship)
                ) {
                    return false;
                } else {
                    return true;
                }  
            }  else {}
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
            [personDetail.id + 'RelationshipName']: personDetail.relationshipname,
            [personDetail.id + 'Relationship']: personDetail.relationship,

        }
        Object.assign(state, initState);
    }, [personDetail])
    console.log('onsetStateInput>>>', handleValidateButton());
    return (
        <div className='insurance-group-step3-input'>
            <Container className='text-left'>
                <h5 className='text-center'>Vui l??ng ??i???n th??ng tin </h5>
                <Container>
                    <Row>
                        <Col sm={12} md={3}>
                            <ListGroup variant="flush">
                                <ListGroup.Item className='title'>Danh s??ch ng?????i ???????c b???o hi???m
                                </ListGroup.Item>
                                {
                                    listPerson.map((item, index) => {
                                        return (
                                            <ListGroup.Item style={{fontWeight: (item.id === personDetail.id) ? "Bold": ""}} key={index} onClick={() => onSelectDetail(item)}>
                                                <div style={{color: handleValidateInforPerson(item) ? "red" : ""}}>
                                                {index + 1}. {item.name}
                                                </div>
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
                                        <Col md={6} sm={6} xs={12}>
                                            <CommonInput
                                                require={true}
                                                label='H??? v?? t??n ng?????i y??u c???u b???o hi???m'
                                                hint='Nh???p h??? v?? t??n ng?????i y??u c???u b???o hi???m'
                                                defaultValue={state[personDetail.id + 'RelationshipName']}
                                                value={state[personDetail.id + 'RelationshipName']}
                                                onChange={(e) => onsetStateInput(personDetail.id + 'RelationshipName', e)}
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
                                                value={state[personDetail.id + 'Relationship']}
                                                defaultValue={state[personDetail.id + 'Relationship']}
                                                label='M???i quan h??? v???i ng?????i ???????c b???o hi???m'
                                                hint='Ch???n m???i quan h???'
                                                onChange={(e) => onsetStateDropdown(personDetail.id + 'Relationship', e.value)}
                                            />
                                        </Col>
                                    </Row>
                            <Row>
                                <Col md={6}>
                                    <CommonInput
                                        require={true}
                                        label='H??? v?? t??n ng?????i ???????c b???o hi???m'
                                        hint='Nh???p h??? v?? t??n ng?????i ???????c b???o hi???m'
                                        defaultValue={state[personDetail.id + 'Name']}
                                        value={state[personDetail.id + 'Name']}
                                        onChange={(e) => onsetStateInput(personDetail.id + 'Name', e)}
                                    />
                                    <CommonInput
                                        require={true}
                                        label='S??? CMND / CCCD / Passport '
                                        txtSmall='Nh???p CMND/ M?? ?????nh Danh c???a Cha/M??? n???u tr??? ch??a c??.'
                                        hint='Nh???p CMND / CCCD / Passport'
                                        defaultValue={state[personDetail.id + 'Identity']}
                                        value={state[personDetail.id + 'Identity']}
                                        onChange={(e) => onsetStateInput(personDetail.id + 'Identity', e)}
                                    />

                                </Col>
                                <Col md={6}>
                                    <Row>
                                        <Col md={6} sm={6} xs={12}>
                                            <CommonInput
                                                require={true}
                                                label='Gi???i t??nh '
                                                hint='Nam/ N???'
                                                defaultValue={personDetail.gender}
                                                value={genderByText(personDetail.gender)}
                                                readOnly={true}
                                            />

                                        </Col>
                                        <Col md={6} sm={6} xs={12}>
                                            <CommonInput
                                                require={true}
                                                label='Ng??y sinh'
                                                hint='Nh???p ng??y/th??ng/n??m'
                                                defaultValue={personDetail.birthday}
                                                value={moment(personDetail.birthday).format('DD/MM/YYYY')}
                                                readOnly={true}
                                            />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={6} sm={6} xs={12}>
                                            <div className="box-input box-input-active">
                                                <FormLabel><small className="text-danger">*</small>Ng??y b???t ?????u b???o hi???m</FormLabel>
                                                <DatePicker className="form-control"
                                                    // selected={startTimeInsure}
                                                    selected={state[personDetail.id + 'StartTimeInsure']}
                                                    // onChange={(date) => handleTimeInsure(date)}
                                                    onChange={(date) => onsetStateDropdown(personDetail.id + 'StartTimeInsure', date)}
                                                    placeholderText="Nh???p ng??y/th??ng/n??m sinh*"
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
                                                //         value: '1 n??m',
                                                //     },
                                                //     // {
                                                //     //     key: '2',
                                                //     //     value: '2 n??m',
                                                //     // },
                                                //     // {
                                                //     //     key: '3',
                                                //     //     value: '3 n??m',
                                                //     // },
                                                // ]}
                                                // readOnly={true}
                                                // viewValue="value"
                                                // // value={timeExp.value}
                                                // // defaultValue={timeExp.value}
                                                // label='Th???i gian hi???u l???c'
                                                // hint='Ch???n th???i gian hi???u l???c'
                                                // // onChange={(e) => handleTimeExp(e)}
                                                // defaultValue={state[personDetail.id + 'TimeExp'] && state[personDetail.id + 'TimeExp'].value}
                                                // value={state[personDetail.id + 'TimeExp'] && state[personDetail.id + 'TimeExp'].value}
                                                // onChange={(e) => onsetStateDropdown(personDetail.id + 'TimeExp', e)}
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
                                        label=''
                                        hint='Ch???n t???nh, Th??nh ph???'
                                        defaultValue={state[personDetail.id + 'Province'] && state[personDetail.id + 'Province'].name}
                                        value={state[personDetail.id + 'Province'] && state[personDetail.id + 'Province'].name}
                                        onChange={(e) => handleProvince(personDetail.id + 'Province', e)}
                                    />

                                    <CommonComboBox
                                        data={DistrictData}
                                        viewKey="code"
                                        viewValue="name"
                                        label=''
                                        hint='Ch???n qu???n, huy???n '
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
                                        hint='Ch???n ph?????ng, x??'
                                        defaultValue={state[personDetail.id + 'Ward'] && state[personDetail.id + 'Ward'].name}
                                        value={state[personDetail.id + 'Ward'] && state[personDetail.id + 'Ward'].name}
                                        onChange={(e) => onsetStateDropdown(personDetail.id + 'Ward', e)}
                                    />
                                    <CommonInput
                                        label=''
                                        hint='Nh???p s??? nh??, t??n ???????ng'
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
                                        hint='Nh???p ?????a ch??? email '
                                        error={state[personDetail.id + 'Email'] && !isValidateEmail(state[personDetail.id + 'Email'])}
                                        tooltip={'Ch??ng t??i s??? g???i h???p ?????ng b???o hi???m & t??i li???u li??n quan ?????n email n??y'}
                                        defaultValue={state[personDetail.id + 'Email']}
                                        value={state[personDetail.id + 'Email']}
                                        onChange={(e) => onsetStateInput(personDetail.id + 'Email', e)}
                                    />
                                </Col>
                                <Col md={6}>
                                    <CommonInput
                                        require={true}
                                        label='S??? ??i???n tho???i '
                                        hint='Nh???p s??? ??i???n tho???i'
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
                            Y??u c???u xu???t ho?? ????n ?????
                        </label>
                    </div>
                    {
                        (state[personDetail.id + 'IsBilling']) &&
                        <Row>
                            <Col md={6}>
                                <CommonInput
                                    require={true}
                                    label='T??n c??ng ty'
                                    hint='Nh???p t??n c??ng ty'
                                    defaultValue={state[personDetail.id + 'CompanyName'] || personDetail.companyname}
                                    value={state[personDetail.id + 'CompanyName'] || personDetail.companyname}
                                    onChange={(e) => onsetStateInput(personDetail.id + 'CompanyName', e)}
                                />
                                <CommonInput
                                    require={true}
                                    label='M?? s??? thu???'
                                    hint='Nh???p m?? s??? thu???'
                                    defaultValue={state[personDetail.id + 'TaxNumber'] || personDetail.taxnumber}
                                    value={state[personDetail.id + 'TaxNumber'] || personDetail.taxnumber}
                                    onChange={(e) => onsetStateInput(personDetail.id + 'TaxNumber', e)}
                                />
                            </Col>
                            <Col md={6}>
                                <CommonInput
                                    require={true}
                                    label='?????a ch??? c??ng ty'
                                    hint='Nh???p ?????a ch??? c??ng ty'
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
                            T??i cam ??oan nh???ng th??ng tin n??u tr??n do t??i t??? khai, t??? nguy???n cung c???p v?? ho??n to??n ????ng s??? th???t. T??i ???? ?????c v?? hi???u c??c quy t???c b???o hi???m, ??i???u kho???n, ??i???u ki???n c???a H???p ?????ng/ Gi???y ch???ng nh???n b???o hi???m v?? ?????ng ?? tham gia b???o hi???m. T??i ?????ng ?? v???i c??c ??i???u kho???n v?? ??i???u ki???n s??? d???ng c???a website Affina. N???u c?? g?? gian d???i, t??i xin ho??n to??n ch???u tr??ch nhi???m.
                        </label>
                    </div>
                </Container>
            </Container>
            <CommonButtonInsurance
                textButtonGoBack='QUAY L???I'
                textButtonContinue='TI???P T???C'
                validate={validate([isConfirm, handleValidateButton()])}
                // validate={false}
                handleButtonGoBack={handleGoBackButton}
                handleButtonContinue={handleContinue}
            />
        </div>
    )
}

export default BuyInsuranceGroupStep3InputComponent

import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { Button, Col, Nav, Navbar, Row } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import MaskedInput from 'react-input-mask';
import { useDispatch, useSelector } from 'react-redux';
import { checkAge, formatIOSToDate, isStringNullOrEmpty, validate } from '../../../Common/Helper';
import { resetStateInsurance } from '../../../Reducers/Insurance/PackagesRedux';
import { handleStep1 } from '../../../Reducers/Insurance/StepRedux';
import CommonButtonInsurance from './CommonButtonInsurance';

const BuyInsurancePersonalStep1Component = (props) => {

    const dispatch = useDispatch();
    const { dataStep } = useSelector((state) => state.insuranceRedux) || [];
    const { step1 } = dataStep;
    const [gender, setGender] = useState(step1.gender);
    const [birthday, setBirthday] = useState(formatIOSToDate(step1.birthday));
    const handleChangeGender = (valueGender = 0) => {
        setGender(valueGender)
    }

    const onChangeBirthday = (date) => {
        let value = date.toISOString();
        let resultDate = value ? moment(value).format('DD/MM/YYYY') : date;
        setBirthday(date)
    }

    const handleGoBack = () => {
        props.handleButtonGoBack && props.handleButtonGoBack();
    }

    const handleContinue = () => {
        dispatch(handleStep1({
            gender: gender,
            birthday: birthday,
        }))
        dispatch(resetStateInsurance());
        props.handleButtonContinue && props.handleButtonContinue()
    }

    // useEffect(()=>{
    //     checkAge
    // })
    checkAge(birthday)
    return (
        <div className='insurance-content-step1'>
            <h4>Cho Affina biết chút thông tin về người được bảo hiểm bạn nhé!</h4>
            <div className='describe'>Thông tin Bạn cung cấp sẽ giúp việc chọn gói bảo hiểm được nhanh chóng và phù hợp nhất.</div>
            <Navbar className='choose-gender justify-content-center'>
                <Row className='width-auto'>
                    <Col md={3} className="d-flex justify-content-end align-items-center choose-gender-label">Giới tính:</Col>
                    <Col md={9}>
                        <Navbar.Collapse className='justify-content-center'>
                            <Nav.Item className='width-auto'>
                                <Button className='width-auto' variant={gender === 1 ? 'outline-blue btn-sm outline-blue-active' : 'outline-blue btn-sm '} onClick={() => handleChangeGender(1)}>
                                    Nam
                                </Button>
                            </Nav.Item>
                            <Nav.Item className='line-or'>
                                <span className='sort-line'></span>hoặc <span className='sort-line'></span>
                            </Nav.Item>
                            <Nav.Item className='width-auto'>
                                <Button className='width-auto' variant={gender === 0 ? 'outline-pink btn-sm outline-pink-active' : "outline-pink btn-sm"} onClick={() => handleChangeGender(0)}>
                                    Nữ
                                </Button>
                            </Nav.Item>
                        </Navbar.Collapse>
                    </Col>
                </Row>
            </Navbar>
            <Navbar className='choose-birthday justify-content-center'>
                <Row>
                    <Col md={3} className="d-flex justify-content-end align-items-center choose-birthday-label">Năm sinh:</Col>
                    <Col md={9}>
                        <Navbar.Collapse className='justify-content-center'>
                            <Nav.Item className='width-auto'>
                                <DatePicker className="form-control"
                                    selected={birthday}
                                    onChange={(date) => onChangeBirthday(date)}
                                    placeholderText="Nhập ngày/tháng/năm sinh*"
                                    dateFormat="dd/MM/yyyy"
                                    // minDate={new Date()}
                                    customInput={
                                        <MaskedInput mask="99/99/9999" />
                                    }
                                />
                            </Nav.Item>
                        </Navbar.Collapse>
                    </Col>
                </Row>
            </Navbar>
            <CommonButtonInsurance
                textButtonGoBack='Quay về trang chủ'
                textButtonContinue='TIẾP TỤC'
                validate={validate([gender, birthday, checkAge(birthday)])}
                isErrorAgeing={!isStringNullOrEmpty(birthday) ? !checkAge(birthday) : false}
                handleButtonGoBack={handleGoBack}
                handleButtonContinue={handleContinue}
            />
        </div >
    )
}

export default BuyInsurancePersonalStep1Component

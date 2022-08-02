import { ProgressBar } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import { Col, Row, Button, InputGroup } from 'react-bootstrap'
import DatePicker from "react-datepicker";

import React, { useEffect, useMemo, useState } from 'react';
import moment from 'moment';
import MaskedInput from 'react-input-mask';

import _ from '../../static/component/SaleComponent.css'

// import { checkAge, formatIOSToDate, isStringNullOrEmpty, validate } from '../../../Common/Helper';

function SaleComponent() {
    const [partner, setPartner] = useState("");
    const [subPartner, setSubPartner] = useState("");
    const [region, setRegion] = useState("");
    const [branch, setBranch] = useState("");
    const [nameTeamLead, setNameTeamLead] = useState("");
    const [codeSale, setCodeSale] = useState("");
    const [nameSale, setNameSale] = useState("");
    const [pass, setPass] = useState("");
    const [emailSale, setEmailSale] = useState("");
    const [roleSale, setRoleSale] = useState([]);
    const [roleInsurance, setRoleInsurance] = useState("");

    const onChangeInputPartner = (id) => {
        setPartner(id)
        return;
    }

    const onChangeInputSubPartner = (id) => {
        setSubPartner(id)
        return;
    }

    const onChangeInputRegion = (id) => {
        setRegion(id)
        return;
    }

    const onChangeInputBranch = (id) => {
        setBranch(id)
        return;
    }

    const onChangeInputNameTeamLead = (id) => {
        setNameTeamLead(id)
        return;
    }

    const onChangeInputCodeSale = (code) => {
        setCodeSale(code);
        return;
    }

    const onChangeInputNameSale = (name) => {
        setNameSale(name)
        return;
    }

    const onChangeInputPass = (pass) => {
        setPass(pass)
        return;
    }

    const onChangeInputEmail = (email) => {
        setEmailSale(email)
        return;
    }

    const onChangeInputRoleSale= (data) => {
        if (roleSale.indexOf(data) !== -1)
            setRoleSale(roleSale.filter(item => item !== data));
        else
            setRoleSale([...roleSale, data])
    }

    const onChangeInputRoleInsurance= (data) => {
        setRoleInsurance(data)
        return;
    }

    const add = () => {
        console.log(partner);
        console.log(subPartner);
        console.log(region);
        console.log(branch);
        console.log(nameTeamLead);
        console.log(codeSale);
        console.log(nameSale);
        console.log(pass);
        console.log(emailSale);
        console.log(roleSale);
        console.log(roleInsurance);
    }

    return (
        <div style={{background: '#FFF', borderRadius: '20px', padding: '40px'}}>
            <Row style={{marginTop: '5px', marginBottom: '5px'}}>
                <Col md={2} style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    <b>Partner</b>
                </Col>
                <Col md={4}>
                    <Form.Select aria-label="Default select example"
                    onChange={partner => onChangeInputPartner(partner.target.value)}>
                        <option value="0">Callus</option>
                    </Form.Select>
                </Col>
            </Row>
            <Row style={{marginTop: '5px', marginBottom: '5px'}}>
                <Col md={2} style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                <b>Sub-Partner</b>
                </Col>
                <Col md={4}>
                    <Form.Select aria-label="Default select example"
                    onChange={subPartner => onChangeInputSubPartner(subPartner.target.value)}
                    >
                        <option value="0">TSA</option>
                    </Form.Select>
                </Col>
            </Row>
            <Row style={{marginTop: '5px', marginBottom: '5px'}}>
                <Col md={2} style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    <b>Region</b>
                </Col>
                <Col md={4}>
                    <Form.Select aria-label="Default select example"
                    onChange={region => onChangeInputRegion(region.target.value)}
                    >
                        <option value="0">CL_South</option>
                    </Form.Select>
                </Col>
            </Row>
            <Row style={{marginTop: '5px', marginBottom: '5px'}}>
                <Col md={2} style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    <b>Mã Chi nhánh</b>
                </Col>
                <Col md={4}>
                    <Form.Select aria-label="Default select example"
                    onChange={branch => onChangeInputBranch(branch.target.value)}
                    >
                        <option value="0">CL_HCM1</option>
                    </Form.Select>
                </Col>
            </Row>
            <Row style={{marginTop: '5px', marginBottom: '5px'}}>
                <Col md={2} style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    <b>Teamlead</b>
                </Col>
                <Col md={4}>
                    <Form.Select aria-label="Default select example"
                    onChange={name => onChangeInputNameTeamLead(name.target.value)}
                    >
                        <option value="0">Nguyễn Đỗ Phương Anh</option>
                    </Form.Select>
                </Col>
            </Row>
            <Row style={{marginTop: '5px', marginBottom: '5px'}}>
                <Col md={2} style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    <b>Code Sale</b>
                </Col>
                <Col md={4}>
                <InputGroup className="mb-3">
                    <Form.Control
                    onChange={code => onChangeInputCodeSale(code.target.value)}
                    />
                </InputGroup>
                </Col>
            </Row>
            <Row style={{marginTop: '5px', marginBottom: '5px'}}>
                <Col md={2} style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    <b>Họ và tên nhân viên</b>
                </Col>
                <Col md={4}>
                    <InputGroup className="mb-3">
                        <Form.Control
                        onChange={name => onChangeInputNameSale(name.target.value)}
                        />
                    </InputGroup>
                </Col>
            </Row>
            <Row style={{marginTop: '5px', marginBottom: '5px'}}>
                <Col md={2} style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    <b>Pass</b>
                </Col>
                <Col md={4}>
                    <InputGroup className="mb-3">
                        <Form.Control
                        onChange={pass => onChangeInputPass(pass.target.value)}
                        />
                    </InputGroup>
                </Col>
            </Row>
            <Row style={{marginTop: '5px', marginBottom: '5px'}}>
                <Col md={2} style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    <b>Email sale</b>
                </Col>
                <Col md={4}>
                    <InputGroup className="mb-3">
                        <Form.Control
                        onChange={data => onChangeInputEmail(data.target.value)}
                        />
                    </InputGroup>
                </Col>
            </Row>
            <Row style={{marginTop: '5px', marginBottom: '5px'}}>
                <Col md={2} style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    <b>Role Thanh toán</b>
                </Col>
                <Col md={4}>
                    <Form>
                        <Form.Check
                            inline
                            type="checkbox"
                            id="1"
                            label="Chuyển khoản Affina"
                            onClick={data => onChangeInputRoleSale(data.target.id)}
                        />
                        <Form.Check 
                            type="checkbox"
                            label="Thanh toán qua tài khoản ngân hàng"
                            onClick={data => onChangeInputRoleSale(data.target.id)}
                            id="2"
                        />
                    </Form>
                </Col>
            </Row>
            <Row style={{marginTop: '5px', marginBottom: '5px'}}>
                <Col md={2} style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    <b>Role nhà bảo hiểm</b>
                </Col>
                <Col md={4}>
                    <Form.Select aria-label="Default select example"
                        onChange={role => onChangeInputRoleInsurance(role.target.value)}
                        >
                        <option value="0">PTI</option>
                        <option value="1">BSH</option>
                    </Form.Select>
                </Col>
            </Row>
            <Button className='add'
                style={{color: 'white'}}
                onClick={add}>
                Thêm
            </Button>
            <Button className='import'
                style={{color: 'white'}}
                onClick={add}>
                Import
            </Button>
        </div>
    )
}
export default SaleComponent;
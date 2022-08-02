import { ProgressBar } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import { Col, Row, Button } from 'react-bootstrap'
import DatePicker from "react-datepicker";

import React, { useEffect, useMemo, useState } from 'react';
import moment from 'moment';
import MaskedInput from 'react-input-mask';

// import { checkAge, formatIOSToDate, isStringNullOrEmpty, validate } from '../../../Common/Helper';

function BillComponent() {
    const [paymentDay, setpaymentDay] = useState("");
    const [startDay, setStartDay] = useState("");
    const [endDay, setEndDay] = useState("");
    const [paymentStatus, setPaymentStatus] = useState("0");
    const [contractStatus, setContractStatus] = useState("0");
    const [supplier, setSupplier] = useState("0");
    const [saler, setSaler] = useState("0");

    const onChangePaymentDay = (date) => {
        let value = date.toISOString();
        let resultDate = value ? moment(value).format('DD/MM/YYYY') : date;
        setpaymentDay(date);
    }

    const onChangeStartDay = (date) => {
        let value = date.toISOString();
        let resultDate = value ? moment(value).format('DD/MM/YYYY') : date;
        setStartDay(date);
    }

    const onChangeEndDay = (date) => {
        let value = date.toISOString();
        let resultDate = value ? moment(value).format('DD/MM/YYYY') : date;
        setEndDay(date);
    }

    const filter = () => {
        console.log(paymentDay);
        console.log(startDay);
        console.log(endDay);
        console.log(paymentStatus);
        console.log(contractStatus);
        console.log(supplier);
        console.log(saler);
        return;
    }

    const downLoad = () => {
        let val = {id: '1', a: {a: 1, b: 2}}
        return;
    }

    return (
        <div style={{background: '#FFF', borderRadius: '20px', padding: '40px'}}>
            <Row style={{marginTop: '5px', marginBottom: '5px'}}>
                <Col md={2} style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    <b>Trạng thái thanh toán</b>
                </Col>
                <Col md={4}>
                    <Form.Select aria-label="Default select example"
                    onChange={status => setPaymentStatus(status.target.value)}>
                        <option value="0">Tất cả</option>
                        <option value="1">Đã thanh toán</option>
                        <option value="2">Chưa thanh toán</option>
                        <option value="3">Thanh toán thất bại</option>
                    </Form.Select>
                </Col>
            </Row>
            <Row style={{marginTop: '5px', marginBottom: '5px'}}>
                <Col md={2} style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                <b>Trạng thái hợp đồng</b>
                </Col>
                <Col md={4}>
                    <Form.Select aria-label="Default select example"
                    onChange={status => setContractStatus(status.target.value)}
                    >
                        <option value="0">Tất cả</option>
                        <option value="1">Có hiệu lực</option>
                        <option value="2">Hết hiệu lực</option>
                        <option value="3">Đã hủy</option>
                        <option value="3">Đang tạo</option>
                    </Form.Select>
                </Col>
            </Row>
            <Row style={{marginTop: '5px', marginBottom: '5px'}}>
                <Col md={2} style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    <b>Ngày thanh toán</b>
                </Col>
                <Col md={4}>
                    <DatePicker className="form-control"
                        selected={paymentDay}
                        onChange={(date) => onChangePaymentDay(date)}
                        placeholderText="Nhập ngày/tháng/năm*"
                        dateFormat="dd/MM/yyyy"
                        // minDate={new Date()}
                        customInput={
                            <MaskedInput mask="99/99/9999" />
                        }
                    />
                </Col>
            </Row>
            <Row style={{marginTop: '5px', marginBottom: '5px'}}>
                <Col md={2} style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    <b>Ngày bắt đầu bảo hiểm</b>
                </Col>
                <Col md={4}>
                    <DatePicker className="form-control"
                        selected={startDay}
                        onChange={(date) => onChangeStartDay(date)}
                        placeholderText="Nhập ngày/tháng/năm*"
                        dateFormat="dd/MM/yyyy"
                        // minDate={new Date()}
                        customInput={
                            <MaskedInput mask="99/99/9999" />
                        }
                    />
                </Col>
            </Row>
            <Row style={{marginTop: '5px', marginBottom: '5px'}}>
                <Col md={2} style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    <b>Ngày kết thúc bảo hiểm</b>
                </Col>
                <Col md={4}>
                    <DatePicker className="form-control"
                        selected={endDay}
                        onChange={(date) => onChangeEndDay(date)}
                        placeholderText="Nhập ngày/tháng/năm*"
                        dateFormat="dd/MM/yyyy"
                        // minDate={new Date()}
                        customInput={
                            <MaskedInput mask="99/99/9999" />
                        }
                    />
                </Col>
            </Row>
            <Row style={{marginTop: '5px', marginBottom: '5px'}}>
                <Col md={2} style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    <b>Nhà cung cấp</b>
                </Col>
                <Col md={4}>
                    <Form.Select aria-label="Default select example"
                    onChange={supplier => setSupplier(supplier.target.value)}
                    >
                        <option value="0">Tất cả</option>
                        <option value="1">PIT</option>
                        <option value="2">BSH</option>
                    </Form.Select>
                </Col>
            </Row>
            <Row style={{marginTop: '5px', marginBottom: '5px'}}>
                <Col md={2} style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    <b>Đối tác bán</b>
                </Col>
                <Col md={4}>
                    <Form.Select aria-label="Default select example"
                    onChange={saler => setSaler(saler.target.value)}
                    >
                        <option value="0">Tất cả</option>
                        <option value="1">AFFINA</option>
                    </Form.Select>
                </Col>
            </Row>
            <Button className='filter'
                style={{color: 'white'}}
                onClick={filter}>
                Lọc
            </Button>
            <Button className='download'
                style={{color: 'white'}}
                onClick={downLoad}>
                Tải về
            </Button>
            <p style={{marginTop: '10px'}}>Có 10 kết quả tìm kiếm</p>
        </div>
    )
}
export default BillComponent;
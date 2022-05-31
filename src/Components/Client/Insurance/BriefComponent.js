import moment from 'moment';
import React, { useEffect, useMemo, useState } from 'react'
import { Form, Nav, Stack } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { formatPrepaidAmount, isEmptyArray, matchRound, percentage } from '../../../Common/Helper';
import Line from '../../../Common/Line';
import { handleRemoveAdditional } from '../../../Reducers/Insurance/StepRedux';


const BriefComponent = (props) => {
    const dispatch = useDispatch();
    var amountFeeSecondary = 0;
    var amountTotal = 0;
    let amountFee = 0;

    const { dataStep } = useSelector((state) => state.insuranceRedux) || [];
    const { step1, step2 } = dataStep;
    const { additional = [] } = step2;
    const { selectAdditional = [] } = props;

    additional.forEach((item, index) => {
        amountTotal += parseInt(item.amount);
    })

    const onRemoveAdditional = (id) => {
        dispatch(handleRemoveAdditional(id))
    }
    const renderAdditional = () => {
        let templateAdditional = [];
        if (!isEmptyArray(additional)) {
            additional.forEach((item, index) => {
                // amountFee = (item.amount * item.rate) / 100;
                amountFeeSecondary += item.fee;
                templateAdditional.push(
                    <Stack key={item._id} direction='horizontal' className='align-items-start justify-content-between ms3'>
                        <Nav.Item>{item.name}</Nav.Item>
                        <Nav.Item className='ms-auto'>{formatPrepaidAmount(matchRound(item.fee))}</Nav.Item>
                        <div className='wrap-box-delete' onClick={() => onRemoveAdditional(item._id)}>
                            <i className='mdi mdi-trash-can-outline'></i>
                        </div>
                    </Stack>
                );
            });
        }

        return templateAdditional;
    }

    return (
        <div className='insurance-sidebar bg-white sidebar-right-content my-sticky-top'>
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
                    <Nav.Item>{moment(step1.birthday).format('DD/MM/YYYY')}</Nav.Item>
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
                    <Nav.Item className='ms-auto'>{formatPrepaidAmount(matchRound(step2.price + amountTotal))}</Nav.Item>
                </Nav>
                <Nav className='justify-content-between'>
                    <Nav.Item>Thời hạn bảo hiểm:</Nav.Item>
                    <Nav.Item></Nav.Item>
                </Nav>
            </div>
            <Line type='dotted' />
            <div className='main-package-fee'>
                <Nav className='justify-content-between'>
                    <Nav.Item><strong>Phí gói chính:</strong></Nav.Item>
                    <Nav.Item>{formatPrepaidAmount(matchRound(step2.fee))}</Nav.Item>
                </Nav>
            </div>
            <Line type='dotted' />
            <div className='package-additional'>
                <Nav className='justify-content-between'>
                    <Nav.Item className='topic'><strong>Gói bổ sung:</strong></Nav.Item>

                </Nav>
                <div className='additional-package brief-info'>
                    {
                        renderAdditional()
                    }
                </div>
            </div>
            <Line type='dotted' />
            <div className='into-money'>
                <Nav className='justify-content-between'>
                    <Nav.Item>Thành tiền:</Nav.Item>
                    <Nav.Item>{formatPrepaidAmount(matchRound(step2.fee + amountFeeSecondary))}</Nav.Item>
                </Nav>
            </div>
            <div className='promotion'>
                <input defaultValue="" placeholder='Nhập mã khuyến mãi' />
            </div>
            <Line type='dotted' />
            <div className='total-money my-sticky-top'>
                <Stack direction='horizontal'>
                    <label>TỔNG TIỀN: </label>
                    {/* <label className='ms-auto'>{formatPrepaidAmount((step2.fee + amountFeeSecondary) - (100 - step2.dis) )}</label> */}
                    <label className='ms-auto'>{formatPrepaidAmount(matchRound(percentage((step2.fee + amountFeeSecondary), -step2.discount)))}</label>
                    {/* <label className='ms-auto'>{formatPrepaidAmount( step2.totalAmount )}</label> */}
                    {/* {amountSecondary+ step2.price} */}
                </Stack>
            </div>
        </div>
    )

}


export default BriefComponent

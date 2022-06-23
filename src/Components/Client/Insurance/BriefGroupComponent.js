import moment from 'moment';
import React, { useEffect, useMemo, useState } from 'react'
import { Form, Nav, Stack } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { formatPrepaidAmount, getPackageDetail, getSupplierName, isEmptyArray, matchRound, percentage, tabByText } from '../../../Common/Helper';
import Line from '../../../Common/Line';
import { handleRemoveAdditional } from '../../../Reducers/Insurance/StepRedux';


const BriefComponent = (props) => {
    const dispatch = useDispatch();
    var amountFeeSecondary = 0;
    var amountTotal = 0;
    let amountFee = 0;
    const { isPackage } = useSelector((state) => state.insurancePackagesRedux) || [];

    const { dataStep } = useSelector((state) => state.InsuranceGroup) || [];
    const { groupStep1 } = dataStep;
    const { listPerson = [] } = groupStep1;

    const renderAdditional = () => {
        // let templateAdditional = [];
        // if (!isEmptyArray(additional)) {
        //     additional.forEach((item, index) => {
        //         // amountFee = (item.amount * item.rate) / 100;
        //         amountFeeSecondary += item.fee;
        //         templateAdditional.push(
        //             <Stack key={item._id} direction='horizontal' className='align-items-start justify-content-between ms3'>
        //                 <Nav.Item>{item.name}</Nav.Item>
        //                 <Nav.Item className='ms-auto'>{formatPrepaidAmount(matchRound(item.fee))}</Nav.Item>
        //                 <div className='wrap-box-delete' onClick={() => onRemoveAdditional(item._id)}>
        //                     <i className='mdi mdi-trash-can-outline'></i>
        //                 </div>
        //             </Stack>
        //         );
        //     });
        // }

        // return templateAdditional;
    }
    var dataPackageList = getPackageDetail(listPerson).packageDetail;
    var totalFee = getPackageDetail(listPerson).totalFee;
    console.log('totalFee', totalFee);
    return (
        <div className='insurance-sidebar bg-white sidebar-right-content my-sticky-top'>
            <Form.Label className='justify-content-start d-flex'>Tóm tắt đơn bảo hiểm</Form.Label>
            <Nav className='justify-content-between'>
                <label className='unit'> *Đơn vị: VNĐ</label>
                <label className='unit ms-auto'> Số lượng: {listPerson.length}</label>
            </Nav>
            <Line type='dotted' />
            <div className='brief-info'>
                <Nav className='justify-content-between'>
                    <Nav.Item>Đối tượng bảo hiểm:</Nav.Item>
                    <Nav.Item>{tabByText(isPackage)}</Nav.Item>
                </Nav>

                <Nav className='justify-content-between'>
                    <Nav.Item>Nhà bảo hiểm:</Nav.Item>
                    <Nav.Item>{getSupplierName(listPerson)}</Nav.Item>
                </Nav>
                <Nav className='justify-content-between d-block'>
                    <Nav.Item>Tên gói: </Nav.Item>
                    <Nav.Item>
                        <ul className='nav-package-list'>
                            {
                                dataPackageList.map((item, index) => {
                                    return (
                                        <li>
                                            <i className="mdi mdi-circle-small"></i>
                                            <small>
                                                {item.name}({item.count})
                                            </small>
                                            <small className='ms-auto'>{formatPrepaidAmount(matchRound(item.price))}</small>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </Nav.Item>
                </Nav>
                <Nav className='justify-content-between'>
                    <Nav.Item>Tổng số tiền được bảo hiểm:</Nav.Item>
                    <Nav.Item className='ms-auto'></Nav.Item>
                </Nav>
                <Nav className='justify-content-between'>
                    <Nav.Item>Thời hạn bảo hiểm:</Nav.Item>
                    <Nav.Item>1 năm</Nav.Item>
                </Nav>
            </div>
            <Line type='dotted' />
            <div className='main-package-fee'>
                <Nav className='justify-content-between'>
                    <Nav.Item><strong>Phí gói chính:</strong></Nav.Item>
                    <Nav.Item>{formatPrepaidAmount(totalFee)}</Nav.Item>
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
                    <Nav.Item></Nav.Item>
                </Nav>
            </div>
            <div className='promotion'>
                <input defaultValue="" placeholder='Nhập mã khuyến mãi' />
            </div>
            <Line type='dotted' />
            <div className='total-money my-sticky-top'>
                <Stack direction='horizontal'>
                    <label>TỔNG TIỀN: </label>
                    {/* <label className='ms-auto'>{formatPrepaidAmount(matchRound(percentage((step2.fee + amountFeeSecondary), -step2.discount)))}</label> */}
                    <label className='ms-auto'></label>
                </Stack>
            </div>
        </div>
    )

}


export default BriefComponent

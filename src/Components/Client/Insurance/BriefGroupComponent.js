import moment from 'moment';
import React, { useEffect, useMemo, useState } from 'react'
import { Form, Nav, Stack } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { formatPrepaidAmount, getPackageDetail, getSupplierName, isEmptyArray, matchRound, percentage, tabByText } from '../../../Common/Helper';
import Line from '../../../Common/Line';
import { handleRemoveAdditional } from '../../../Reducers/Insurance/GroupStepRedux';


const BriefGroupComponent = (props) => {
    const dispatch = useDispatch();
    var amountFeeSecondary = 0;
    var amountTotal = 0;
    let amountFee = 0;
    let discount = 0;
    const { isPackage } = useSelector((state) => state.insurancePackagesRedux) || [];
    
    const { dataStep } = useSelector((state) => state.insuranceGroup) || [];
    const { groupStep1, groupStep2 } = dataStep;
    const { listPerson = [] } = groupStep1;
    const { selectAdditional = [] } = props;
    let packageNumberChoose = listPerson.filter((person) => person.package);
    
    const onRemoveAdditional = (personId, additionId) => {
        dispatch(handleRemoveAdditional(personId, additionId));
    }
    
    console.log("listPerson group", listPerson);
    let totalFeeMain = 0;
    if (listPerson.some((person) => person.package !== undefined)) {
        let personGroup = listPerson.filter((person) => person.package !== undefined);
        totalFeeMain = personGroup.reduce((totalFeeMain, person) => (totalFeeMain += person.package.price_fee), 0);

    }
    let total_extra_package = 0;
    listPerson.forEach((person) => {
        person.selectAddition && person.selectAddition.forEach((addition) => {
        total_extra_package += parseInt(addition.amount);
        })
      }
    )

    let total_fee_package = 0;
    listPerson.forEach((person) => {
        person.selectAddition && person.selectAddition.forEach((addition) => {
        total_fee_package += parseInt(addition.fee);
        })
      }
    )
    console.log("totalFeeMain + amountFeeSecondary",totalFeeMain + total_fee_package);
    if (totalFeeMain + total_fee_package >= 20000000 && totalFeeMain + total_fee_package < 30000000) {
        discount = 3
    } else if (totalFeeMain + total_fee_package >= 30000000 && totalFeeMain + total_fee_package < 50000000) {
        discount = 5
    } else if (totalFeeMain + total_fee_package >= 50000000 && totalFeeMain + total_fee_package < 100000000) {
        discount = 7
    } else if (totalFeeMain + total_fee_package >= 100000000) {
        discount = 10
    } else {
        discount = 0;
    };


    const renderAdditional = () => {
        let templateAdditional = [];
        let additional;
        listPerson.forEach((person) => {
            additional = person.selectAddition;
            console.log("additional", additional);
        if (!isEmptyArray(additional)) {
            additional.forEach((item, index) => {
                // amountFee = (item.amount * item.rate) / 100;
                amountFeeSecondary += item.fee;
                console.log("amountFeeSecondary", amountFeeSecondary)
                templateAdditional.push(
                    <Stack key={item._id} direction='horizontal' className='align-items-start justify-content-between ms3'>
                        <Nav.Item>{item.name}</Nav.Item>
                        <Nav.Item className='ms-auto'>{formatPrepaidAmount(matchRound(item.fee))}</Nav.Item>
                        <div className='wrap-box-delete' onClick={() => onRemoveAdditional({ personId: person.id, additionId: item._id })}>
                            <i className='mdi mdi-trash-can-outline'></i>
                        </div>
                    </Stack>
                );
            });
        }
        })
        return templateAdditional;
    }
    var dataPackageList = getPackageDetail(listPerson).packageDetail;
    var totalFee = getPackageDetail(listPerson).totalFee;
    console.log("dataPackageList", dataPackageList);
    return (
        <div className='insurance-sidebar bg-white sidebar-right-content my-sticky-top'>
            <Form.Label className='justify-content-start d-flex'>T??m t???t ????n b???o hi???m</Form.Label>
            <Nav className='justify-content-between'>
                <label className='unit'> *????n v???: VN??</label>
                <label className='unit ms-auto'> S??? l?????ng: {listPerson.length}</label>
            </Nav>
            <Line type='dotted' />
            <div className='brief-info'>
                <Nav className='justify-content-between'>
                    <Nav.Item>?????i t?????ng b???o hi???m:</Nav.Item>
                    <Nav.Item>{tabByText(isPackage)}</Nav.Item>
                </Nav>

                <Nav className='justify-content-between'>
                    <Nav.Item>S???? go??i ??a?? cho??n:</Nav.Item>
                    <Nav.Item>{ packageNumberChoose.length}</Nav.Item>
                </Nav>

                <Nav className='justify-content-between'>
                    <Nav.Item>Nh?? b???o hi???m:</Nav.Item>
                    <Nav.Item>{getSupplierName(listPerson)}</Nav.Item>
                </Nav>
                <Nav className='justify-content-between d-block'>
                    <Nav.Item>T??n g??i: </Nav.Item>
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
                    <Nav.Item>T???ng s??? ti???n ???????c b???o hi???m:</Nav.Item>
                    <Nav.Item className='ms-auto'>{formatPrepaidAmount(totalFee + total_extra_package)}</Nav.Item>
                </Nav>
                <Nav className='justify-content-between'>
                    <Nav.Item>Th???i h???n b???o hi???m:</Nav.Item>
                    <Nav.Item>1 n??m</Nav.Item>
                </Nav>
            </div>
            <Line type='dotted' />
            <div className='main-package-fee'>
                <Nav className='justify-content-between'>
                    <Nav.Item><strong>Ph?? g??i ch??nh:</strong></Nav.Item>
                    <Nav.Item>{formatPrepaidAmount(totalFeeMain)}</Nav.Item>
                </Nav>
            </div>
            <Line type='dotted' />
            <div className='package-additional'>
                <Nav className='justify-content-between'>
                    <Nav.Item className='topic'><strong>G??i b??? sung:</strong></Nav.Item>

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
                    <Nav.Item>Th??nh ti???n:</Nav.Item>
                    <Nav.Item>{formatPrepaidAmount(totalFeeMain+amountFeeSecondary)}</Nav.Item>
                </Nav>
                <Nav className='justify-content-between'>
                    <Nav.Item>Gia??m gia?? {discount} %:</Nav.Item>
                    <Nav.Item>{formatPrepaidAmount((totalFeeMain+amountFeeSecondary) * discount/100)}</Nav.Item>
                </Nav>
                <br/>
                {/* <Nav className='justify-content-between' style={{color: "red"}}>
                    <Nav.Item>Quy?? kha??ch chi?? co??n thi????u {formatPrepaidAmount(20000000)} n????a se?? ????????c gia??m gia?? 10%:</Nav.Item>
                </Nav> */}
            </div>
            <div className='promotion'>
                <input defaultValue="" placeholder='Nh???p m?? khuy???n m??i' />
            </div>
            <Line type='dotted' />
            <div className='total-money my-sticky-top'>
                <Stack direction='horizontal'>
                    <label>T???NG TI???N: </label>
                    {/* <label className='ms-auto'>{formatPrepaidAmount(matchRound(percentage((step2.fee + amountFeeSecondary), -step2.discount)))}</label> */}
                    <label className='ms-auto'>{formatPrepaidAmount(totalFeeMain+amountFeeSecondary - (totalFeeMain+amountFeeSecondary) * discount/100)}</label>
                </Stack>
            </div>
        </div>
    )

}


export default BriefGroupComponent;

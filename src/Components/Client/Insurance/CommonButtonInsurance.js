import PropTypes from "prop-types";

import React, { useEffect, useMemo, useState } from 'react';
import { Button, Nav, Navbar, Stack } from "react-bootstrap";
import { useSelector } from "react-redux";
import ReactTooltip from "react-tooltip";
import { checkAge, formatPrepaidAmount, isStringNullOrEmpty, isViewMobile } from '../../../Common/Helper'
import Line from "../../../Common/Line";

const CommonButtonInsurance = (props) => {
    const { dataStep } = useSelector((state) => state.insuranceRedux) || [];
    const { step1, step2 } = dataStep;
    return (
        <div className='wrap-button'>
            {
                isViewMobile() &&
                (props.isViewStep) &&
                (!isStringNullOrEmpty(step2.packageName)) &&
                <Stack direction="horizontal" className="package-info-mobile">
                    <div>
                        <label>Tên gói: </label>
                        <span>{step2.packageName}</span>
                        <span>({step2.supplier && step2.supplier.name})</span>
                    </div>
                </Stack>
            }
            <Line type="solid" color='e6e6e6' className="xs-visibility" />
            <div className='mobile-sum-amount '>
                <Stack direction="horizontal">
                    {isViewMobile() &&
                        (props.isViewStep) &&
                        (!isStringNullOrEmpty(props.paidAmount)) &&
                        <div className="ms-auto">
                            <label>Tổng tiền: </label>
                            <span> {formatPrepaidAmount(Math.ceil(props.paidAmount))}VNĐ</span>
                        </div>
                    }

                </Stack>
            </div>
            <Navbar >
                <Navbar.Collapse className='justify-content-center'>
                    <Nav.Item>
                        <Button disabled={props.validateGoBack} variant="outline-primary btn-outline-blue btn-md text-uppercase" onClick={props.handleButtonGoBack}>
                            {props.textButtonGoBack}
                        </Button>
                    </Nav.Item>
                    <Nav.Item className='sm-space-horizontal'></Nav.Item>
                    <Nav.Item>
                        <Button variant={props.validate ? "grey btn-md text-uppercase" : "blue btn-md text-uppercase"} className='active'
                            disabled={props.validate}
                            onClick={props.handleButtonContinue}>
                            {props.textButtonContinue}
                        </Button>
                    </Nav.Item>
                </Navbar.Collapse>

            </Navbar>
            {
                props.isErrorAgeing ?
                    <div className="error-ageing">
                        <label data-for="ageing">Số tuổi của người được bảo hiểm không nằm trong quy định <i className="mdi mdi-alert-circle" data-tip='' data-for="ageing"></i></label>
                        <ReactTooltip id="ageing" type="error" backgroundColor="#fff8fd" textColor="#ff52db">
                            Độ tuổi tham gia từ 30 ngày tuổi đến 65 tuổi
                        </ReactTooltip>
                    </div>
                    : ''
            }
        </div>
    )
}

CommonButtonInsurance.propTypes = {
    textButtonGoBack: PropTypes.string,
    textButtonContinue: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    isViewStep: PropTypes.bool,
    isErrorAgeing: PropTypes.bool,
    validateGoBack: PropTypes.bool,
};
CommonButtonInsurance.defaultProps = {
    textButtonGoBack: 'Quay về trang chủ',
    textButtonContinue: 'TIẾP TỤC',
    onChange: () => { },
    validateGoBack: false,
    isViewStep: false,
    isErrorAgeing: false,
};
export default CommonButtonInsurance

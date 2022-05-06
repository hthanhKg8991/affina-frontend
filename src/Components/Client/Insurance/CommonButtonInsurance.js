import PropTypes from "prop-types";

import React from 'react';
import { Button, Nav, Navbar, Stack } from "react-bootstrap";
import { useSelector } from "react-redux";
import { formatPrepaidAmount, isStringNullOrEmpty, isViewMobile } from '../../../Common/Helper'
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
                        <Button variant="outline-primary btn-outline-blue btn-md text-uppercase" onClick={props.handleButtonGoBack}>
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
        </div>
    )
}

CommonButtonInsurance.propTypes = {
    textButtonGoBack: PropTypes.string,
    textButtonContinue: PropTypes.string,
    onChange: PropTypes.func.isRequired
};
CommonButtonInsurance.defaultProps = {
    textButtonGoBack: 'Quay về trang chủ',
    textButtonContinue: 'TIẾP TỤC',
    onChange: () => { },
};
export default CommonButtonInsurance

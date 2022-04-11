import PropTypes from "prop-types";

import React from 'react';
import { Button, Nav, Navbar } from "react-bootstrap";
import { validate } from '../../../Common/Helper'

const CommonButtonInsurance = (props) => {
    return (
        <Navbar className='wrap-button'>
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

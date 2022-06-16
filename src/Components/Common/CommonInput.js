import PropTypes from "prop-types";

import React, { useState } from 'react';
import { Form, FormControl, FormLabel, InputGroup, Stack } from 'react-bootstrap'
import { isStringNullOrEmpty, formatIOSToDate, checkAgeHadIdentity } from "../../Common/Helper";
import ReactTooltip from 'react-tooltip';
import DatePicker from "react-datepicker";
import MaskedInput from 'react-input-mask';
import { useSelector } from "react-redux";

const CommonInput = (props) => {
    const { dataStep } = useSelector((state) => state.insuranceRedux) || [];
    const { step1, step2, step3 } = dataStep;
    const [isEyeOffEye, setIsEyeOffEye] = useState(false);

    const handleEyeOffEye = () => {
        setIsEyeOffEye(!isEyeOffEye)
    }
    const demo = (date)=>{
        console.log('demo>date', date);
    }

    const renderInputType = (inputType) => {
        switch (inputType) {
            case 'date':
                return (
                    <DatePicker className="form-control"
                        // selected={formatIOSToDate(props.value || props.defaultValue)}
                        selected={props.value || props.defaultValue}
                        // onChange={props.onChange}
                        onChange={(e)=>demo(e)}
                        placeholderText={props.hint}
                        dateFormat="dd/MM/yyyy"
                        minDate={props.minDate}
                        customInput={
                            <MaskedInput mask="99/99/9999" />
                        }
                    />
                )
            case 'password':
                return (
                    <div>
                        <InputGroup className="mb-3">

                            <FormControl
                                type={isEyeOffEye ? 'text' : inputType}
                                placeholder={props.hint}
                                value={props.value}
                                // defaultValue={props.defaultValue}
                                onChange={props.onChange}
                                readOnly={props.readOnly}
                                className={(props.error) && 'error'}
                                autoComplete={props.autoComplete}
                                autoComplete="off"
                            />
                            <InputGroup.Text className="eye-off-eye cursor-pointer" onClick={handleEyeOffEye}>
                                {
                                    isEyeOffEye ?
                                        <i className="mdi mdi-eye-outline" ></i>
                                        :
                                        <i className="mdi  mdi-eye-off-outline"></i>
                                }
                            </InputGroup.Text>
                        </InputGroup>


                        <Form.Text className="text-danger">
                            {props.errorMessage}
                        </Form.Text>
                    </div>
                )
            default:
                return (
                    <div>
                        <FormControl
                            type={props.type}
                            placeholder={props.hint}
                            value={props.value}
                            // defaultValue={props.defaultValue}
                            onChange={props.onChange}
                            readOnly={props.readOnly}
                            className={(props.error) && 'error'}
                            autoComplete={props.autoComplete}
                        />

                        <Form.Text className="text-danger">
                            {props.errorMessage}
                        </Form.Text>
                    </div>
                )
        }
    }
    return (
        <div className="box-input box-input-active">
            {
                !isStringNullOrEmpty(props.label) &&
                <FormLabel>
                    {
                        props.require &&
                        <small className="text-danger">*</small>
                    }
                    {props.label}
                    {
                        props.tooltip &&
                        <i className="mdi mdi-alert-circle" data-tip='' data-for="happyFace"></i>
                    }
                    <br />
                    {
                        (checkAgeHadIdentity(step1.birthday) && !isStringNullOrEmpty(props.txtSmall)) &&
                        <small className="text-color-main">
                            {props.txtSmall}
                        </small>
                    }
                </FormLabel>
            }
            <ReactTooltip id="happyFace" type="error" backgroundColor="#fff8fd" textColor="#ff52db">
                {props.tooltip}
            </ReactTooltip>
            {
                (props.readOnly) ?
                    <div className="read-only-text">
                        <span>{props.value}</span>
                    </div>
                    :
                    renderInputType(props.inputType)

            }
        </div>
    )
}

CommonInput.propTypes = {
    require: PropTypes.bool,
    readOnly: PropTypes.bool,
    label: PropTypes.string,
    hint: PropTypes.string,
    value: PropTypes.any,
    inputType: PropTypes.string,
    defaultValue: PropTypes.any,
    onChange: PropTypes.func,
    error: PropTypes.bool,
    errorMessage: PropTypes.string,
    type: PropTypes.string,
    autoComplete: PropTypes.string,
};
CommonInput.defaultProps = {
    label: '',
    hint: '',
    value: '',
    defaultValue: '',
    require: false,
    readOnly: false,
    inputType: 'text',
    type: 'text',
    onChange: () => { },
    error: false,
    errorMessage: '',
    autoComplete: 'off',
};

export default CommonInput

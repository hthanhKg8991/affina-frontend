import React from 'react';
import BuyInsuranceGroupStep3InputComponent from "./BuyInsuranceGroupStep3InputComponent";
import BuyInsuranceGroupStep3PreviewComponent from "./BuyInsuranceGroupStep3PreviewComponent";

const BuyInsuranceGroupStep3Component = (props) => {
    return (
        <div className='insurance-content-step3'>
            {
                (props.step <= 3) ?
                    <BuyInsuranceGroupStep3InputComponent handleButtonGoBack={props.handleButtonGoBack} handleButtonContinue={props.handleButtonContinue} />
                    :
                    <BuyInsuranceGroupStep3PreviewComponent handleButtonGoBack={props.handleButtonGoBack} handleButtonContinue={props.handleButtonContinue} />
            }
        </div>
    )
}

export default BuyInsuranceGroupStep3Component;

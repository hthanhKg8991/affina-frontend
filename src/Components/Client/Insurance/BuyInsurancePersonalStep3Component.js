import React from 'react';
import BuyInsurancePersonalStep3InputComponent from './BuyInsurancePersonalStep3InputComponent';
import BuyInsurancePersonalStep3PreviewComponent from './BuyInsurancePersonalStep3PreviewComponent';

const BuyInsurancePersonalStep3Component = (props) => {
    return (
        <div className='insurance-content-step3'>
            {
                (props.step <= 3) ?
                    <BuyInsurancePersonalStep3InputComponent handleButtonGoBack={props.handleButtonGoBack} handleButtonContinue={props.handleButtonContinue} />
                    :
                    <BuyInsurancePersonalStep3PreviewComponent handleButtonGoBack={props.handleButtonGoBack} handleButtonContinue={props.handleButtonContinue} />
            }
        </div>
    )
}

export default BuyInsurancePersonalStep3Component

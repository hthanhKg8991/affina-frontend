import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import ProgressBarStep from '../../../Common/ProgressBarStep'
import BuyInsuranceGroupStep1Component from './BuyInsuranceGroupStep1Component'
import BuyInsuranceGroupStep2Component from './BuyInsuranceGroupStep2Component';
import BuyInsuranceGroupStep3InputComponent from './BuyInsuranceGroupStep3InputComponent';
import BuyInsuranceGroupStep4Component from './BuyInsuranceGroupStep4Component';

const BuyInsuranceGroupComponent = () => {
    const navigate = useNavigate();
    const [buyStep, setStep] = useState(3);

    const handleButtonGoBack = (step) => {
        if (buyStep <= 1) {
            navigate('/');
        } else {
            setStep(buyStep - 1)
        }
    }

    const handleButtonContinue = () => {
        console.log('buyStep>>>', buyStep);
        if (buyStep < 4) {
            setStep(buyStep + 1)
        } else {
            setStep(1);
            navigate('/');
        }
    }

    const _renderStep = () => {
        switch (buyStep) {
            case 1:
                return <BuyInsuranceGroupStep1Component handleButtonGoBack={handleButtonGoBack} handleButtonContinue={handleButtonContinue} />;
            case 2:
                return <BuyInsuranceGroupStep2Component handleButtonGoBack={handleButtonGoBack} handleButtonContinue={handleButtonContinue} />;
            case 3:
                return <BuyInsuranceGroupStep3InputComponent handleButtonGoBack={handleButtonGoBack} handleButtonContinue={handleButtonContinue} />;
            case 4:
                return <BuyInsuranceGroupStep4Component handleButtonGoBack={handleButtonGoBack} handleButtonContinue={handleButtonContinue} />;
            default:
                return <BuyInsuranceGroupStep1Component handleButtonGoBack={handleButtonGoBack} handleButtonContinue={handleButtonContinue} />;
        }
    }
    return (
        <div>
            <ProgressBarStep
                current={buyStep}
                step={['Thông tin người được bảo hiểm', 'Chọn nhà bảo hiểm', 'hoàn tất thông tin đơn bảo hiểm', 'Thanh toán']}
            />
            {_renderStep()}
        </div>
    )
}

export default BuyInsuranceGroupComponent

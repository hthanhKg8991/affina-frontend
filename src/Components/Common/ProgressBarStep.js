import React from 'react'

const ProgressBarStep = (props) => {
    const { step, current } = props;
    const renderStep = () => {
        let listStep = [];
        let completeActive = '';
        step.forEach((item, index) => {
            completeActive = (current === index + 1) ? 'active' : (current > index + 1) ? 'complete' : 'xs-hidden';
            listStep.push(
                <li key={index} className={completeActive} >
                    {/* <span className='xs-visibility'>Bước {current}.&nbsp;</span>  */}
                    {item}
                </li>
            )
        })
        return listStep;
    }
    return (
        <div className='progress-bar-container'>
            <ul className='progress-bar-step'>
                {renderStep()}
            </ul>
        </div>
    )
}

export default ProgressBarStep

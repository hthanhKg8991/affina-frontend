import React from 'react'
import ProgressBarStep from '../../../Common/ProgressBarStep'
import BuyInsuranceGroupStep1Component from './BuyInsuranceGroupStep1Component'

const BuyInsuranceGroupComponent = () => {
    return (
        <div>
            <ProgressBarStep
                current={1}
                step={['Thông tin người được bảo hiểm', 'Chọn nhà bảo hiểm', 'hoàn tất thông tin đơn bảo hiểm', 'Thanh toán']}
            />
            <BuyInsuranceGroupStep1Component />
        </div>
    )
}

export default BuyInsuranceGroupComponent

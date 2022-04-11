import React from 'react'
import { Container } from 'react-bootstrap'
import BuyInsurancePersonalComponent from '../../Components/Client/Insurance/BuyInsurancePersonalComponent'

const BuyInsuranceContainer = () => {
    return (
        <div className='insurance-container'>
            <Container>
                <BuyInsurancePersonalComponent />
            </Container>
        </div>
    )
}

export default BuyInsuranceContainer

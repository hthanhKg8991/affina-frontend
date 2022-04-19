import React from 'react'
import { Button, Image } from 'react-bootstrap'
import accessStyle from '../../../Assets'

const BuyInsuranceResponse = (props) => {
    switch (props.statusPayment) {
        case 1:
        case '1':
            return (
                <div className='response-data response-success bg-white'>
                    <Image
                        src={accessStyle.images.response.success}
                        srcSet={`
                            ${accessStyle.images.response.success2x} 2x, 
                            ${accessStyle.images.response.success3x} 3x
                        `}
                        alt="Logo Affina"
                        width={'auto'}
                        height={'auto'}
                    />
                    <h5>
                        THANH TOÁN THÀNH CÔNG!
                    </h5>
                    <p>Giao dịch {props.transaction}  đã được thanh toán thành công.</p>
                    <p>Mã số hợp đồng của bạn là {props.orderNo}</p>
                    <Button className='btn-outline-pink '>
                        <Image
                            src={accessStyle.images.icons.download}
                            srcSet={`
                        ${accessStyle.images.icons.download2x} 2x, 
                        ${accessStyle.images.icons.download3x} 3x
                    `}
                            alt="Icons download"
                            width={24}
                            height={24}
                        />
                        <span>Tải ấn chỉ</span>
                    </Button>
                </div>
            )
        case 0:
        case '0':
        default:
            return (
                <div className='response-success bg-white'>
                    <Image
                        src={accessStyle.images.response.fail}
                        srcSet={`
                            ${accessStyle.images.response.fail2x} 2x, 
                            ${accessStyle.images.response.fail3x} 3x
                        `}
                        alt="Logo Affina"
                        width={'auto'}
                        height={'auto'}
                    />
                    <h5>
                        THANH TOÁN Thất bại!
                    </h5>
                    <p>Rất tiếc giao dịch của bạn không thành công!
                        Vui lòng thực hiện lại giao dịch</p>
                </div>
            )
    }

}

export default BuyInsuranceResponse

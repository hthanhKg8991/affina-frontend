import React from 'react'
import { Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import accessStyle from '../../Assets'
import { BUY_NOW } from '../../Routers/RoutePath'

const ModalSuccess = (props) => {
    return (
        <div class="container modal-success">
            <div class="row">
                <Modal
                    size="lg"
                    show={props.isShow}
                    onHide={props.onHidden}
                >
                    <Modal.Header closeButton></Modal.Header>
                    <Modal.Body>
                        <div class="thank-you-pop">
                            <img src={accessStyle.images.response.success} />
                            <h1>ĐÃ nhận thông tin thành công!</h1>
                            <p>Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất. Cảm ơn bạn đã quan tâm và sử dụng dịch vụ của chúng tôi.
                            </p>
                            <Link to={BUY_NOW} className="btn btn-blue text-uppercase">
                                Hoàn tất
                            </Link>
                            {/* <Button variant={props.validate ? "grey btn-md text-uppercase" : "blue btn-md text-uppercase"} className='active'
                                onClick={props.handleButtonContinue}>
                                {props.textButtonContinue}
                            </Button> */}

                        </div>
                    </Modal.Body>
                </Modal>
            </div>
        </div>

    )
}

export default ModalSuccess

import moment from 'moment';
import React, { useEffect, useMemo, useState } from 'react'
import { Alert, Button, Col, Container, Form, Modal, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { isValidateEmail, isValidatePhone, removeAllScript, validate } from '../../Common/Helper';
import { closePopup, createSendRequest } from '../../Reducers/SentRequest/SendRequestRedux';
import CommonInput from '../Common/CommonInput'
import ModalSuccess from '../Common/ModalSuccess';

const SendRequestComponent = () => {
  const dispatch = useDispatch();
  const { isSuccess = false, isLoading } = useSelector((state) => state.sendRequestRedux) || [];

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [note, setNote] = useState('');

  const onChangeName = (e) => {
    setName(e.target.value);
  }

  const onChangePhone = (e) => {
    setPhone(e.target.value);
  }
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  }
  const onChangeNote = (e) => {
    setNote(e.target.value);
  }

  const handleSendRequest = () => {
    let params = {
      name: removeAllScript(name),
      email: removeAllScript(email),
      phone: removeAllScript(phone),
      note: removeAllScript(note),
      create_date: moment().format('YYYY/MM/DD h:mm:ss a'),
      update_date: moment().format('YYYY/MM/DD h:mm:ss a'),
    }
    dispatch(createSendRequest(params))
  }

  const onClosePopup = () => {
    dispatch(closePopup())
    setName('');
    setPhone('');
    setEmail('');
    setNote('');
  }

  return (
    <div className='send-request-content'>
      <Container>
        <Row className='align-items-center'>
          <Col md={6} sm={12} xs={12}>
            <div className='content-brief'>
              <h4>Nhận tư vấn và ưu đãi từ Affina</h4>
              <small>Nhập thông tin để nhận được tư vấn sớm nhất từ Affina</small>
            </div>
          </Col>
          <Col md={6} sm={12} xs={12}>
            <Form autoComplete="off" className='send-request-form' method='POST'>
              <Form.Group className="mb-3" controlId="formBasicName">
                <CommonInput
                  require={true}
                  label='Họ và tên'
                  hint='Nhập họ và tên'
                  defaultValue={name}
                  value={name}
                  onChange={(e) => onChangeName(e)}
                  autoComplete="off"
                  errorMessage=""
                />
              </Form.Group>

              <Form.Group className="mb-3 mt-4" controlId="formBasicPhone">
                <CommonInput
                  require={true}
                  label='Số điện thoại'
                  hint='Nhập số điện thoại'
                  defaultValue={phone}
                  value={phone}
                  onChange={(e) => onChangePhone(e)}
                  autoComplete="off"
                  error={phone && !isValidatePhone(phone)}
                  errorMessage=""
                />
              </Form.Group>
              <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
                <CommonInput
                  require={true}
                  label='Email'
                  hint='Nhập email'
                  defaultValue={email}
                  value={email}
                  onChange={(e) => onChangeEmail(e)}
                  autoComplete="off"
                  error={email && !isValidateEmail(email)}
                  errorMessage=""
                />
              </Form.Group>
              <Form.Group className="mb-3 mt-4" controlId="formBasicNote">
                <CommonInput
                  label='Ghi chú'
                  hint='Nhập ghi chú'
                  defaultValue={note}
                  value={note}
                  onChange={(e) => onChangeNote(e)}
                  autoComplete="off"
                  errorMessage=""
                />
              </Form.Group>
              <div className="gap-2 mt-4 text-center">
                <Button variant={'btn ' + `${!validate([name, phone, email, isValidateEmail(email), isValidatePhone(phone)]) ? 'btn-blue' : 'btn-grey'}`}
                  size="lg" className='text-uppercase'
                  disabled={validate([name, phone, email, isValidateEmail(email), isValidatePhone(phone)])}
                  onClick={handleSendRequest}
                >
                  Gửi
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>

      <ModalSuccess
        isShow={isSuccess}
        onHidden={onClosePopup}
      />
    </div>
  )
}

export default SendRequestComponent

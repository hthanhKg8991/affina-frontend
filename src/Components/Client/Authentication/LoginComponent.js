import React, { useState } from 'react'
import { Button, Col, Container, Form, Row, Stack } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { validate } from '../../../Common/Helper';
import CommonInput from '../../Common/CommonInput'

const LoginComponent = () => {
    const dispatch = useDispatch();
    const [userName, setUserName] = useState();
    const [password, setPassword] = useState();

    const onChangeUserName = (e) => {
        setUserName(e.target.value);
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value);
    }

    return (
        <div className='auth-content main-container'>
            <Container>
                <Row>
                    <Col className='main-content m-auto' md={9}>
                        <Row>
                            <Col md={6} className="m-auto">
                                <h5 className='text-uppercase login-title'>Login</h5>
                                <Form autocomplete="off">
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <CommonInput
                                            label='Tên đăng nhập'
                                            hint='Nhập tên đăng nhập'
                                            defaultValue={userName}
                                            value={userName}
                                            onChange={(e) => onChangeUserName(e)}
                                            autocomplete="off"
                                            errorMessage=""
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
                                        <CommonInput
                                            label='Mật khẩu'
                                            hint='Nhập mật khẩu'
                                            defaultValue={password}
                                            value={password}
                                            onChange={(e) => onChangePassword(e)}
                                            inputType="password"
                                            autocomplete="off"
                                            errorMessage=""
                                        />
                                    </Form.Group>
                                    <Stack direction='horizontal' className="mb-3">
                                        <Form.Group controlId="formBasicCheckbox">
                                            <Form.Check type="checkbox" label="Nhớ mật khẩu" />
                                        </Form.Group>
                                        <div className='ms-auto'>
                                            <Link to="/login">
                                                <Form.Text className='text-primary text-decoration-underline'>Quên mật khẩu</Form.Text>
                                            </Link>
                                        </div>
                                    </Stack>
                                    <div className="d-grid gap-2 mt-5">
                                        <Button variant={'btn ' + `${!validate([userName, password]) ? 'btn-blue' : 'btn-grey'}`} type="submit" size="lg" className='text-uppercase'
                                            disabled={validate([userName, password])}
                                        >
                                            Đăng nhập
                                        </Button>
                                    </div>
                                </Form>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default LoginComponent

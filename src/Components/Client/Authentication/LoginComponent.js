import React, { useMemo, useState } from 'react';
import { Button, Col, Container, Form, Row, Stack } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { isStringNullOrEmpty, removeAllScript, validate } from '../../../Common/Helper';
// import { login } from '../../../Saga/Client/AuthenticationSaga';
import { login } from '../../../Reducers/Auth/AuthenticationRedux';
import { loginResponse } from '../../../Reducers/Auth/AuthRedux';
import { BUY_NOW } from '../../../Routers/RoutePath';
import CommonInput from '../../Common/CommonInput';

const LoginComponent = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { dataError = {}, isLoading } = useSelector((state) => state.AuthenticationRedux) || [];

    const [userName, setUserName] = useState();
    const [password, setPassword] = useState();

    const onChangeUserName = (e) => {
        setUserName(e.target.value);
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleLogin = () => {
        let paramsLogin = {
            username: removeAllScript(userName),
            password: removeAllScript(password)
        }
        dispatch(login(paramsLogin));
    }

    useMemo(() => {
        if(!isStringNullOrEmpty(dataError.access_token)){
            dispatch(loginResponse(dataError))
            navigate(BUY_NOW)
        }
    }, [dataError, dispatch])

    return (
        <div className='auth-content main-container'>
            <Container>
                <Row>
                    <Col className='main-content m-auto' md={9}>
                        <Row>
                            <Col md={6} className="m-auto">
                                <h5 className='text-uppercase login-title'>Đăng nhập</h5>
                                {
                                    (dataError && dataError.error) &&
                                    <Col className='bg-danger view-error'>
                                        <p className='text-white'>{dataError.error}</p>
                                    </Col>
                                }

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
                                        <Button variant={'btn ' + `${!validate([userName, password]) ? 'btn-blue' : 'btn-grey'}`} size="lg" className='text-uppercase'
                                            disabled={validate([userName, password])}
                                            onClick={handleLogin}
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

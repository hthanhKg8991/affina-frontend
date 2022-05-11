import { call, put, takeLatest } from 'redux-saga/effects';
import * as AuthenticationRedux from '../../Reducers/Auth/AuthenticationRedux';
import AuthenticationApi from '../../Services/Apis/AuthenticationApi';

export function* login(action) {
    console.log('action:::', action);

    try {
        const response = yield call(AuthenticationApi.login(action.payload).send);
        console.log('response:::', response);
        yield put(AuthenticationRedux.loginResponse(response));
    } catch (error) {
        yield put(AuthenticationRedux.loginResponse(error));
    }
}


export function* rootAuthentication() {
    yield takeLatest(AuthenticationRedux.login.type, login)
    // yield takeLatest('Authentication/login', login)
}
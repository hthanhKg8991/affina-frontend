import { call, put, takeLatest } from 'redux-saga/effects';
import * as UploadFileRedux from '../../Reducers/Upload/UploadFileRedux';
import UploadFileApi from '../../Services/Apis/UploadFileApi';

export function* importFileExcel(action) {
    console.log('action:::', action);

    try {
        const response = yield call(UploadFileApi.login(action.payload).send);
        console.log('response:::', response);
        yield put(UploadFileRedux.uploadFileResponse(response));
    } catch (error) {
        yield put(UploadFileRedux.uploadFileResponse(error));
    }
}


export function* rootUploadFile() {
    yield takeLatest(UploadFileRedux.uploadFile.type, importFileExcel);
    // yield takeLatest('Authentication/login', login)
}
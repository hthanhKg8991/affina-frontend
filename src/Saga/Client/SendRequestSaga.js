import { call, put } from 'redux-saga/effects';
import SendRequestRedux, { createSendRequestResponse, getAllResponse, getDetailResponse } from '../../Reducers/SentRequest/SendRequestRedux';
import SendRequestApi from '../../Services/Apis/SendRequestApi';

export function* getAll() {
    try {
        const response = yield call(SendRequestApi.getAll().send);
        console.log('response:::', response);
        yield put(getAllResponse(response));
    } catch (error) {
        yield put(getAllResponse(error));
    }
}
export function* getDetail(action) {
    console.log('getDetail:type', action);
    try {
        const response = yield call(SendRequestApi.getDetail(action.payload).send);
        yield put(getDetailResponse(response));
    } catch (error) {
        yield put(getDetailResponse(error));
    }
}
export function* createSendRequest(action) {
    console.log('createSendRequest:type', action);
    try {
        const response = yield call(SendRequestApi.createSendRequest(action.payload).send);
        yield put(createSendRequestResponse(response));
    } catch (error) {
        yield put(createSendRequestResponse(error));
    }
}

// export function* rootSendRequest() {
//     yield takeLatest(SendRequestRedux.getAll.type, getAll),
//         yield takeLatest(SendRequestRedux.getDetail.type, getDetail),
//         yield takeLatest(SendRequestRedux.createSendRequest.type, createSendRequest)
// }
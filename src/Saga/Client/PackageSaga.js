import { call, put } from 'redux-saga/effects';
import PackagesApi from '../../Services/Apis/PackagesApi';
import { createOrderResponse, createPaymentResponse, getAllSuppliersResponse, packagesGetAllResponse, packagesGetBySupplierResponse, packagesGetDetailResponse } from '../../Reducers/Insurance/PackagesRedux';

export function* getAllSuppliers() {
    try {
        const response = yield call(PackagesApi.getAllSuppliers().send);
        console.log('response:::', response);
        yield put(getAllSuppliersResponse(response));
    } catch (error) {
        yield put(getAllSuppliersResponse(error));
    }
}
export function* packageGetAll() {
    try {
        const response = yield call(PackagesApi.getAll().send);
        console.log('response:::', response);
        yield put(packagesGetAllResponse(response));
    } catch (error) {
        yield put(packagesGetAllResponse(error));
    }
}
export function* packageGetBySupplier(action) {
    console.log('packageGetBySupplier:type', action);
    try {
        const response = yield call(PackagesApi.getBySupplier(action.payload).send);
        yield put(packagesGetBySupplierResponse(response));
    } catch (error) {
        yield put(packagesGetBySupplierResponse(error));
    }
}
export function* packageGetDetail(action) {
    console.log('packageGetDetail:type', action);
    try {
        const response = yield call(PackagesApi.getDetail(action.payload).send);
        yield put(packagesGetDetailResponse(response));
    } catch (error) {
        yield put(packagesGetDetailResponse(error));
    }
}
export function* createOrder(action) {
    console.log('createOrder:type', action);
    try {
        const response = yield call(PackagesApi.createOrder(action.payload).send);
        yield put(createOrderResponse(response));
    } catch (error) {
        yield put(createOrderResponse(error));
    }
}
export function* createPayment(action) {
    console.log('createPayment:type', action);
    try {
        const response = yield call(PackagesApi.createPayment(action.payload).send);
        yield put(createPaymentResponse(response));
    } catch (error) {
        yield put(createPaymentResponse(error));
    }
}
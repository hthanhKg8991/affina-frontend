import { call, put } from 'redux-saga/effects';
import PackagesApi from '../../Services/Apis/PackagesApi';
import { createOrderResponse, createPaymentResponse, getAllSuppliersResponse, getOrderResponse, packagesGetAllResponse, packagesGetBySupplierResponse, packagesGetDetailResponse, postPackageBySupplierResponse, productGetByPackageResponse } from '../../Reducers/Insurance/PackagesRedux';

export function* getAllSuppliers() {
    try {
        const response = yield call(PackagesApi.getAllSuppliers().send);
        console.log('getAllSuppliersResponse:::', response);
        yield put(getAllSuppliersResponse(response));
    } catch (error) {
        yield put(getAllSuppliersResponse(error));
    }
}
export function* packageGetAll() {
    try {
        const response = yield call(PackagesApi.getAll().send);
        console.log('packagesGetAllResponse:::', response);
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
export function* postProductGetByPackage(action) {
    console.log('postProductGetByPackage:type', action);
    try {
        const response = yield call(PackagesApi.postProductGetByPackage(action.payload).send);
        yield put(productGetByPackageResponse(response));
    } catch (error) {
        yield put(productGetByPackageResponse(error));
    }
}
export function* postPackageBySupplier(action) {
    console.log('postPackageBySupplier:type', action);
    try {
        const response = yield call(PackagesApi.postPackageBySupplier(action.payload).send);
        yield put(postPackageBySupplierResponse(response));
    } catch (error) {
        yield put(postPackageBySupplierResponse(error));
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
export function* getOrderDetail(action) {
    console.log('getOrderDetail:type', action);
    try {
        const response = yield call(PackagesApi.getOrderDetail(action.payload).send);
        yield put(getOrderResponse(response));
    } catch (error) {
        yield put(getOrderResponse(error));
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
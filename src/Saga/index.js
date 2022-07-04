import { all, takeLatest } from 'redux-saga/effects';
import * as categories from '../Reducers/Categories/CategoriesRedux';
import * as packageRedux from '../Reducers/Insurance/PackagesRedux';
import * as PaymentRedux from '../Reducers/Insurance/PaymentRedux';
// Send request
import * as SendRequestRedux from '../Reducers/SentRequest/SendRequestRedux';
import { categoriesGetAll, categoriesGetDetail, categoriesGetType } from '../Saga/Admin/CategoriesSaga';
import { getOrderDetail, createOrder, createPayment, getAllSuppliers, packageGetAll, packageGetBySupplier, packageGetDetail, postPackageBySupplier, postProductGetByPackage } from '../Saga/Client/PackageSaga';
import { rootAuthentication } from './Client/AuthenticationSaga';
import { createSendRequest, getAll, getDetail } from './Client/SendRequestSaga';
import { rootUploadFile } from './Client/UploadFile';

export default function* rootSaga() {
    yield all([
        // admin
        takeLatest(categories.categoriesGetAll.type, categoriesGetAll),
        takeLatest(categories.categoriesGetType.type, categoriesGetType),
        takeLatest(categories.categoriesGetDetail.type, categoriesGetDetail),
        // Client
        takeLatest(packageRedux.getAllSuppliers.type, getAllSuppliers),
        takeLatest(packageRedux.packagesGetAll.type, packageGetAll),
        takeLatest(packageRedux.packagesGetBySupplier.type, packageGetBySupplier),
        takeLatest(packageRedux.packagesGetDetail.type, packageGetDetail),
        takeLatest(packageRedux.productGetByPackage.type, postProductGetByPackage),
        takeLatest(packageRedux.postPackageBySupplier.type, postPackageBySupplier),
        takeLatest(packageRedux.createOrder.type, createOrder),
        takeLatest(packageRedux.getOrderDetail.type, getOrderDetail),
        takeLatest(PaymentRedux.createPayment.type, createPayment),
        // Send request
        // rootSendRequest
        takeLatest(SendRequestRedux.getAll.type, getAll),
        takeLatest(SendRequestRedux.getDetail.type, getDetail),
        takeLatest(SendRequestRedux.createSendRequest.type, createSendRequest),
        // Authentication
        rootAuthentication(),
        // rootUploadFile
        rootUploadFile(),
    ])
}
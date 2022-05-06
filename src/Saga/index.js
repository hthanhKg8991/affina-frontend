import { all, takeLatest } from 'redux-saga/effects';
import * as categories from '../Reducers/Categories/CategoriesRedux';
import { categoriesGetAll, categoriesGetDetail, categoriesGetType } from '../Saga/Admin/CategoriesSaga';

import * as packageRedux from '../Reducers/Insurance/PackagesRedux';
import { getAllSuppliers, packageGetAll, packageGetBySupplier, packageGetDetail, createOrder, createPayment, postProductGetByPackage, postPackageBySupplier } from '../Saga/Client/PackageSaga';
// Send request
import * as SendRequestRedux from '../Reducers/SentRequest/SendRequestRedux';
import { createSendRequest, getAll, getDetail } from './Client/SendRequestSaga';
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
        takeLatest(packageRedux.createPayment.type, createPayment),
        // Send request
        takeLatest(SendRequestRedux.getAll.type, getAll),
        takeLatest(SendRequestRedux.getDetail.type, getDetail),
        takeLatest(SendRequestRedux.createSendRequest.type, createSendRequest),
    ])
}
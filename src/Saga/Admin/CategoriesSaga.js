import { call, put } from 'redux-saga/effects';
import CategoriesApi from '../../Services/Apis/CategoriesApi';
import { categoriesGetAllResponse, categoriesGetDetailResponse, categoriesGetTypeResponse } from '../../Reducers/Categories/CategoriesRedux';

export function* categoriesGetAll() {
    try {
        const response = yield call(CategoriesApi.getAll().send);
        yield put(categoriesGetAllResponse(response));
    } catch (error) {
        yield put(categoriesGetAllResponse(error));
    }
}
export function* categoriesGetType(action) {
    console.log('categoriesGetType:type', action);
    try {
        const response = yield call(CategoriesApi.getType(action.payload).send);
        yield put(categoriesGetTypeResponse(response));
    } catch (error) {
        yield put(categoriesGetTypeResponse(error));
    }
}
export function* categoriesGetDetail(action) {
    console.log('categoriesGetDetail:type', action);
    try {
        const response = yield call(CategoriesApi.getDetail(action.payload).send);
        yield put(categoriesGetDetailResponse(response));
    } catch (error) {
        yield put(categoriesGetDetailResponse(error));
    }
}
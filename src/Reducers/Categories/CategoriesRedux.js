import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    data: [],
    dataType: [],
    dataDetail: {},
    isLoading: false,
    errors: ''
};

const CategoriesSlice = createSlice({
    name: 'Categories',
    initialState,
    reducers: {
        categoriesGetAll(state) {
            state.isLoading = true;
        },
        categoriesGetAllResponse(state, action) {
            state.data = action.payload;
            state.isLoading = false;
        },
        categoriesGetType(state) {
            state.isLoading = true;
        },
        categoriesGetTypeResponse(state, action) {
            state.dataType = action.payload;
            state.isLoading = false;
        },
        categoriesGetDetail(state) {
            state.isLoading = true;
        },
        categoriesGetDetailResponse(state, action) {
            state.dataDetail = action.payload;
            state.isLoading = false;
        }
    }
});
export const { categoriesGetAll, categoriesGetAllResponse, categoriesGetType, categoriesGetTypeResponse, categoriesGetDetail, categoriesGetDetailResponse } = CategoriesSlice.actions;
export default CategoriesSlice.reducer
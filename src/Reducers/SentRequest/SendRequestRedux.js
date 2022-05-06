import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    data: [],
    dataDetail: {},
    isLoading: false,
    isSuccess: false,
    errors: ''
};

const SendRequestSlice = createSlice({
    name: 'SendRequest',
    initialState,
    reducers: {
        getAll(state) {
            state.isLoading = true;
        },
        getAllResponse(state, action) {
            state.data = action.payload;
            state.isLoading = false;
        },
        getDetail(state) {
            state.isLoading = true;
        },
        getDetailResponse(state, action) {
            state.dataDetail = action.payload;
            state.isLoading = false;
        },
        createSendRequest(state, action) {
            state.isLoading = true;
        },
        createSendRequestResponse(state, action) {
            console.log('action.payload>>>', action.payload);
            state.isLoading = true;
            state.isSuccess = true;
        },
        closePopup(state) {
            state.isSuccess = false;
        }
    }
});
export const { getAll, getAllResponse,
    getDetail, getDetailResponse,
    createSendRequest,
    createSendRequestResponse,
    closePopup
} = SendRequestSlice.actions;
export default SendRequestSlice.reducer
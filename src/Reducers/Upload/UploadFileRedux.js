import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    dataError: {},
    dataDetail: {},
    isLoading: false,
    isSuccess: false,
    errors: ''
};

const UploadFileSlice = createSlice({
    name: 'UploadFile',
    initialState,
    reducers: {
        uploadFile(state) {
            state.isLoading = true;
        },
        uploadFileResponse(state, action) {
            state.dataError = action.payload;
            state.isLoading = false;
        },
    }
});
export const { uploadFile, uploadFileResponse
} = UploadFileSlice.actions;
export default UploadFileSlice.reducer
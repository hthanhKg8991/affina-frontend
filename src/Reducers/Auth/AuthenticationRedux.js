import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    dataError: {},
    dataDetail: {},
    isLoading: false,
    isSuccess: false,
    errors: ''
};

const AuthenticationSlice = createSlice({
    name: 'Authentication',
    initialState,
    reducers: {
        login(state) {
            state.isLoading = true;
        },
        loginResponse(state, action) {
            state.dataError = action.payload;
            state.isLoading = false;
        },
    }
});
export const { login, loginResponse
} = AuthenticationSlice.actions;
export default AuthenticationSlice.reducer
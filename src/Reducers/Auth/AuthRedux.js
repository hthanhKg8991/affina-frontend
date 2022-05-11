import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    dataAuth: {},
};

const AuthSlice = createSlice({
    name: 'Auth',
    initialState,
    reducers: {
        loginResponse(state, action) {
            state.dataAuth = action.payload;
        },
    }
});
export const { login, loginResponse
} = AuthSlice.actions;
export default AuthSlice.reducer
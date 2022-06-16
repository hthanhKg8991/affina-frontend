import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    paymentData: {},
};

const PaymentReduxSlice = createSlice({
    name: 'PaymentReduxAction',
    initialState,
    reducers: {
        createPayment(state, action) {
            state.isLoading = true;
        },
        createPaymentResponse(state, action) {
            console.log('action.payload>>>', action.payload);
            state.paymentData = action.payload;
            state.isShowPaymentSuccess = true;
        },
    }
});
export const { createPayment, createPaymentResponse
} = PaymentReduxSlice.actions;
export default PaymentReduxSlice.reducer
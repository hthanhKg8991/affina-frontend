import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    paymentData: {},
    groupPaymentData: {},
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

        createGroupPayment(state, action) {
            state.isLoading = true;
        },
        createGroupPaymentResponse(state, action) {
            state.groupPaymentData = action.payload;
        },
    }
});
export const { 
    createPayment, createPaymentResponse,
    createGroupPayment, createGroupPaymentResponse
} = PaymentReduxSlice.actions;
export default PaymentReduxSlice.reducer
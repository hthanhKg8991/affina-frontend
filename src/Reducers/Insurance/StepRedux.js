import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    currentStep: 1,
    holdStep: 2,
    dataStep: {
        step1: {
            gender: '',
            birthday: ''
        },
        step2: {
            packageCode: '',
            packageName: '',
            price: '',
            fee: '',
            supplier: {},
        },
        step3: {
            name: '',
            identity: '',
            address: '',
            province: '',
            district: '',
            ward: '',
            email: '',
            phone: '',
            startDay: '',
            timeExpire: '',
            requireBilling: false,
            isConfirm: false,
            companyName: '',
            companyAddress: '',
            taxNumber: '',
        },
    }
};

const InsuranceSlice = createSlice({
    name: 'Insurance',
    initialState,
    reducers: {
        handleStep1(state, action) {
            state.dataStep.step1 = action.payload
        },
        handleStep2(state, action) {
            state.dataStep.step2 = action.payload
        },
        handleStep3(state, action) {
            state.dataStep.step3 = action.payload
        },
        handleCurrentStep(state, action) {
            console.log('handleCurrentStep::', action);
            state.currentStep = action.payload.currentStep
            state.holdStep = action.payload.holdStep
        },
        resetState: () => initialState
    }
});
export const {
    resetState,
    handleStep1, handleStep2, handleStep3,
    handleCurrentStep } = InsuranceSlice.actions;
export default InsuranceSlice.reducer
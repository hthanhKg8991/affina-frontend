import { createSlice } from '@reduxjs/toolkit';
import { percentage } from '../../Common/Helper';
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
            discount: 0,
            price: '',
            fee: '',
            supplier: {},
            additional: [],
            packageMain: [],
            totalAmount: 0,
            intoMoney: 0,
            intoMoneyAmount: 0,
            paidAmount: 0,
            totalAdditionalFee: 0,
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
            timeExpire: {
                key: "1",
                value: "1 năm"
            },
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
            let amount = 0;
            let amountFee = 0;
            state.dataStep.step2 = action.payload;
            state.dataStep.step2.additional.forEach(item => {
                amount += parseInt(item.amount);
                amountFee += item.fee//parseInt(item.amount * item.rate) / 100;
            })
            state.dataStep.step2.intoMoneyAmount = amount + state.dataStep.step2.price;
            state.dataStep.step2.intoMoney = amountFee + state.dataStep.step2.fee;
            state.dataStep.step2.totalAdditionalFee = amountFee;
            state.dataStep.step2.totalAmount = (state.dataStep.step2.intoMoney - state.dataStep.step2.discount);
            state.dataStep.step2.paidAmount = percentage(state.dataStep.step2.intoMoney, - state.dataStep.step2.discount);
        },
        handleStep3(state, action) {
            state.dataStep.step3 = action.payload
        },
        handleSelectAdditional(state, action) {
            // const removeId = state.dataStep.step2.additional.filter(item => item._id === action.payload._id).indexOf(action.payload._id);
            let amount = 0;
            let amountFee = 0;
            const removeId = state.dataStep.step2.additional.findIndex(item => item._id === action.payload._id);
            console.log('removeId::', removeId, action.payload);
            if (removeId >= 0) {
                state.dataStep.step2.additional.splice(removeId, 1);
            } else {
                console.log('handleSelectAdditional::action.payload', action.payload);
                state.dataStep.step2.additional.push(action.payload);
            }
            state.dataStep.step2.additional.forEach(item => {
                amount += parseInt(item.amount);
                amountFee += item.fee//parseInt(item.amount * item.rate) / 100;
            })
            state.dataStep.step2.intoMoneyAmount = amount + state.dataStep.step2.price;
            state.dataStep.step2.intoMoney = amountFee + state.dataStep.step2.fee;
            state.dataStep.step2.totalAdditionalFee = amountFee;
            // state.dataStep.step2.paidAmount = (state.dataStep.step2.intoMoney - (state.dataStep.step2.discount * state.dataStep.step2.intoMoney));
            state.dataStep.step2.paidAmount = percentage(state.dataStep.step2.intoMoney, - state.dataStep.step2.discount);
        },
        handleRemoveAdditional(state, action) {
            const removeId = state.dataStep.step2.additional.findIndex(item => item._id === action.payload);
            state.dataStep.step2.additional.splice(removeId, 1);
        },
        handleCurrentStep(state, action) {
            console.log('handleCurrentStep::', action);
            state.currentStep = action.payload.currentStep
            state.holdStep = action.payload.holdStep
        },
        resetAdditionalState: (state) => {
            state.dataStep.step2.additional = []
        },
        resetState: () => initialState
    }
});
export const {
    resetState,
    handleStep1, handleStep2, handleStep3,
    handleSelectAdditional,
    handleCurrentStep,
    handleRemoveAdditional,
    resetAdditionalState
} = InsuranceSlice.actions;
export default InsuranceSlice.reducer
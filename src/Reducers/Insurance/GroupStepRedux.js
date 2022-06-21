import { createSlice } from '@reduxjs/toolkit';
import moment from 'moment';
import { checkAge, percentage } from '../../Common/Helper';
const initialState = {
    currentStep: 1,
    holdStep: 2,
    dataStep: {
        groupStep1: {
            listPerson: [],
            personDetail: {},
        },
        groupStep2: {
        },
        groupStep3: {
        },
    }
};

const InsuranceSlice = createSlice({
    name: 'InsuranceGroup',
    initialState,
    reducers: {
        handleGroupStep1(state, action) {
            state.dataStep.groupStep1 = action.payload
        },
        resetState: () => initialState,
        handleAddPerson: (state, action) => {
            const { dataStep = {} } = state;
            const { step1 = {}, gender = "", birthday } = dataStep;
            const { listPerson = [] } = step1;
            var verifyItem = {};
            var dataPayload = action.payload;
            console.log("birthday", dataPayload.birthday);
            const ConditionAge = checkAge(dataPayload.birthday);
            if (ConditionAge) {
                dataPayload.isEligible = "Đủ điều kiện";
            } else {
                dataPayload.isEligible = "Không đủ điều kiện";
            }
            state.dataStep.groupStep1.listPerson = [...listPerson, dataPayload];
            console.log("action.payload>>>", action.payload, listPerson);
        },

        handleUpdatePerson: (state, action) => {
            const { dataStep = {} } = state;
            const { step1 = {}, gender = "", birthday } = dataStep;
            const { listPerson = [] } = step1;
            var verifyItem = {};
            var dataPayload = action.payload;
            const ConditionAge = checkAge(dataPayload.birthday);
            if (ConditionAge) {
                dataPayload.isEligible = "Đủ điều kiện";
            } else {
                dataPayload.isEligible = "Không đủ điều kiện";
            }
            state.dataStep.groupStep1.listPerson[dataPayload.index] = dataPayload;
            // state.dataStep.step1.listPerson = [...listPerson, dataPayload];
            console.log("action.payload>>>", action.payload, listPerson);
        },
        handleSelectItem: (state, action) => {
            state.dataStep.groupStep1.personDetail = state.dataStep.groupStep1.listPerson.find(element => element.id === action.payload)
        },

        pushItem: (state, action) => {
            state.dataStep.groupStep1.listPerson.find((item, index) => {
                if (item.id === action.payload.id) {
                    return Object.assign(item, action.payload)
                }
            })
        },
        pushAdditionalItem: (state, action) => {
            // const removeId = state.dataStep.step2.additional.findIndex(item => item._id === action.payload._id);
            const condition = action.payload;
            state.dataStep.groupStep1.listPerson.find((item, index) => {
                if (item.id === condition.buyerId && item.packacge.package_code === condition.packageCode) {
                    Object.assign(item.packacge, { selectAddition: action.payload.item });
                }
            })
        }
    }
});
export const {
    resetState,
    handleGroupStep1,
    handleAddPerson,
    handleUpdatePerson,
    handleSelectItem,
    pushItem,
    pushAdditionalItem,
} = InsuranceSlice.actions;
export default InsuranceSlice.reducer
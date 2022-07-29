import { createSlice } from '@reduxjs/toolkit';
import moment from 'moment';
import { useSelector } from 'react-redux';
import { checkAge, percentage } from '../../Common/Helper';
// const { groupData = [] } = useSelector((state) => state.insurancePackagesRedux) || [];
const initialState = {
    currentStep: 1,
    holdStep: 2,
    dataStep: {
        groupStep1: {
            listPerson: [],
            personDetail: {},
        },
        groupStep2: {
            additional: [],
        },
        groupStep3: {
        },
    }
};

const InsuranceGroupSlice = createSlice({
    name: 'insuranceGroup',
    initialState,
    reducers: {
        handleGroupStep1(state, action) {
            state.dataStep.groupStep1 = action.payload
        },
        resetState: () => initialState,
        handleAddPerson: (state, action) => {
            const { dataStep = {} } = state;
            const { groupStep1 = {} } = dataStep;
            const { listPerson = [] } = groupStep1;
            let dataPayload = action.payload;
            console.log("age", dataPayload.age);
            const ConditionAge = checkAge(dataPayload.age);
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
            const { groupStep1 = {} } = dataStep;
            const { listPerson = [] } = groupStep1;
            let dataPayload = action.payload;
            const ConditionAge = checkAge(dataPayload.age);
            if (ConditionAge) {
                dataPayload.isEligible = "Đủ điều kiện";
            } else {
                dataPayload.isEligible = "Không đủ điều kiện";
            }
            state.dataStep.groupStep1.listPerson[dataPayload.index] = dataPayload;
            console.log("action.payload>>>", action.payload, listPerson);
        },
        handleRemovePersonFromGroup(state, action) {
            const index = action.payload;
            state.dataStep.groupStep1.listPerson.splice(index, 1);
        },
        // pushAdditionalItem: (state, action) => {
        //     // const removeId = state.dataStep.step2.additional.findIndex(item => item._id === action.payload._id);
        //     const condition = action.payload;
        //     var conditionAddition = [];
        //     var conditionSelectAddition = {};
        //     conditionAddition.push(action.payload.item);
        //     state.dataStep.groupStep1.listPerson.find((item, index) => {
        //         if (item.id === condition.buyerId && item.package.package_code === condition.packageCode) {
        //             conditionSelectAddition = item.package && item.package.selectAddition
        //             if(conditionSelectAddition === undefined){
        //                 item.package.selectAddition = [...conditionAddition, ]
        //             }else{
        //                 item.package.selectAddition = [...conditionSelectAddition, ...conditionAddition, ]
        //             }
        //         }
        //     })
        // },
    }
});
export const {
    resetState,
    handleGroupStep1,
    handleAddPerson,
    handleUpdatePerson,
    handleRemovePersonFromGroup,
} = InsuranceGroupSlice.actions;
export default InsuranceGroupSlice.reducer

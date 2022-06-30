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
            additional: [],
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
            const { groupStep1 = {} } = dataStep;
            const { listPerson = [] } = groupStep1;
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
            const { groupStep1 = {} } = dataStep;
            const { listPerson = [] } = groupStep1;
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
        handleRemovePersonFromGroup(state, action) {
            const index = action.payload;
            //   const removeId = state.dataStep.step1.listPerson.findIndex(
            //     (item) => item._id === action.payload
            //   );
            state.dataStep.groupStep1.listPerson.splice(index, 1);
        },
        handleSelectItem: (state, action) => {
            state.dataStep.groupStep1.personDetail = state.dataStep.groupStep1.listPerson.find(element => element.id === action.payload)
        },

        pushItem: (state, action) => {
            let person = state.dataStep.groupStep1.listPerson.find((person) => person.id === action.payload.id);
            // console.log("listperson group1 ", JSON.parse(JSON.stringify(person.package._id)));
            // console.log("listperson group1 ", JSON.parse(JSON.stringify(action.payload.package._id)));
            if (person.package._id === action.payload.package._id) {
            } else {
                person.selectAddition = []
            };
            state.dataStep.groupStep1.listPerson.find((item, index) => {
                if (item.id === action.payload.id) {
                    return Object.assign(item, action.payload)
                }
            })
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
        pushAdditionalItem: (state, action) => {
            const condition = action.payload;
            let conditionAddition = [];
            let selectPerson = state.dataStep.groupStep1.listPerson.find((person) => person.id === condition.buyerId);
            if (selectPerson.selectAddition === undefined) {
                selectPerson.selectAddition = conditionAddition;
                selectPerson.selectAddition.push(condition.item)
            } else {
                if (selectPerson.selectAddition.some((addition) => addition._id === condition.item._id)) {
                    let index = selectPerson.selectAddition.findIndex((addition) => addition._id === condition.item._id);
                    selectPerson.selectAddition.splice(index, 1);
                } else { selectPerson.selectAddition.push(action.payload.item) }
            }
        },
        handleRemoveAdditional(state, action) {
            const data = action.payload;
            const selectPerson = state.dataStep.groupStep1.listPerson.find((person) => person.id === data.personId);
            let removeId = selectPerson.selectAddition.findIndex((addition) => addition._id === data.additionId);
            selectPerson.selectAddition.splice(removeId, 1);
    },
    }
});
export const {
    resetState,
    handleGroupStep1,
    handleAddPerson,
    handleUpdatePerson,
    handleRemovePersonFromGroup,
    handleSelectItem,
    pushItem,
    pushAdditionalItem,
    handleRemoveAdditional
} = InsuranceSlice.actions;
export default InsuranceSlice.reducer
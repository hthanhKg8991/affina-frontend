import { createSlice } from '@reduxjs/toolkit';
import configDefault from '../../Config/app';
const initialState = {
    data: [],
    supplier: [],
    dataBySupplier: [],
    dataAdditional: [],
    countDataSupplier: 0,
    isLoading: false,
    isShowPaymentSuccess: false,
    orderData: {},
    orderDataDetail: {},
    isPackage: configDefault.configTab.single,
    groupData:[],
    orderGroupData: {},
    personDetail: {},

};

const PackagesSlice = createSlice({
    name: 'Insurance',
    initialState,
    reducers: {
        selectPackage(state, action) {
            state.isPackage = action.payload;
        },
        getAllSuppliers(state) {
            state.isLoading = true;
        },
        getAllSuppliersResponse(state, action) {
            state.supplier = action.payload.data;
            state.isLoading = false;
        },
        // 
        packagesGetAll(state) {
            state.isLoading = true;
        },
        packagesGetAllResponse(state, action) {
            console.log('action.payload>>>', action.payload);
            state.data = action.payload;
            action.payload.map(item => {
                item.package_main.map(itemChild => {
                    if (itemChild.is_view === 0) {
                        item.package_main.push(...itemChild.product_details)
                    }
                    return itemChild;
                })
                return item;
            })
            state.isLoading = false;
        },
        // 
        packagesGetBySupplier(state) {
            state.isLoading = true;
        },
        packagesGetBySupplierResponse(state, action) {
            state.dataBySupplier = action.payload;
            state.countDataSupplier = action.payload.length;
            state.isLoading = false;
        },
        // 
        productGetByPackage(state) {
            state.isLoading = true;
        },
        productGetByPackageResponse(state, action) {
            state.dataAdditional = action.payload;
            state.isLoading = false;
        },
        // 
        packagesGetDetail(state) {
            state.isLoading = true;
        },
        packagesGetDetailResponse(state, action) {
            state.dataAdditional = action.payload;
            state.isLoading = false;
        },
        // 
        postPackageBySupplier(state) {
            state.isLoading = true;
        },
        postPackageBySupplierResponse(state, action) {
            state.data = action.payload.data;
            state.isLoading = false;
        },
        // 
        getOrderDetail(state) {
            state.isLoading = true;
        },
        getOrderResponse(state, action) {
            state.orderDataDetail = action.payload;
            state.isLoading = false;
        },
        // 
        createOrder(state) {
            state.isLoading = true;
        },
        createOrderResponse(state, action) {
            state.orderData = action.payload;
            state.isLoading = false;
        },
        //
        resetStateInsurance: () => initialState,

        // 
        createOrdersGroup(state) {
            state.isLoading = true;
        },
        createOrdersGroupResponse(state, action) {
            state.orderGroupData = action.payload;
        },
        //
        postGroupsPackageBySupplier(state) {
            state.isLoading = true;
        },
        postGroupsPackageBySupplierResponse(state, action) {
            state.groupData = action.payload.data;
            state.isLoading = false;
        },

        pushItem: (state, action) => {
            state.groupData.find((item, index) => {
                if (item.id === action.payload.id) {
                    return Object.assign(item, action.payload)
                }
            })
        },
        resetAdditional: (state, action) => {
            let person = state.groupData.find((person) => person.id === action.payload.buyerId);
            person.selectAddition = [];
        },
        handleSelectPerson(state, action) {
            const selectPerson = action.payload;
            state.groupData.forEach((person) => {
                if (person.id === selectPerson.id) {
                    return person.selectPerson = true
                } else {
                    return person.selectPerson = false
                }
            })
        },
        handleSelectItem: (state, action) => {
            state.personDetail = state.groupData.find(element => element.id === action.payload)
        },
        handleClickAccordion(state, action) {
            const selectPerson = action.payload;
            state.groupData.forEach((person) => {
                if (person.id === selectPerson.id) {
                    if (person.Accordion === undefined) { return person.Accordion = true } else {
                        return (person.Accordion = !person.Accordion)
                    }
                } else {
                    // return person.Accordion = false;
                }
            })
        },
        pushAdditionalItem: (state, action) => {
            const condition = action.payload;
            let conditionAddition = [];
            let selectPerson = state.groupData.find((person) => person.id === condition.buyerId);
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
            const selectPerson = state.groupData.find((person) => person.id === data.personId);
            let removeId = selectPerson.selectAddition.findIndex((addition) => addition._id === data.additionId);
            selectPerson.selectAddition.splice(removeId, 1);
        },
        handleAllAccordion(state, action) {
            state.groupData.forEach((person) => { return person.Accordion = false });
        },
    }
});
export const {
    selectPackage,
    getAllSuppliers, getAllSuppliersResponse,
    packagesGetAll, packagesGetAllResponse,
    packagesGetBySupplier, packagesGetBySupplierResponse,
    packagesGetDetail, packagesGetDetailResponse,
    getOrderDetail, getOrderResponse,
    createOrder, createOrderResponse,
    productGetByPackage, productGetByPackageResponse,
    postPackageBySupplier, postPackageBySupplierResponse,
    createOrdersGroup, createOrdersGroupResponse,
    resetStateInsurance, handleSelectItem,
    postGroupsPackageBySupplier, postGroupsPackageBySupplierResponse,
    pushItem, resetAdditional, handleSelectPerson, handleClickAccordion,
    pushAdditionalItem,
    handleAllAccordion, handleRemoveAdditional
} = PackagesSlice.actions;
export default PackagesSlice.reducer
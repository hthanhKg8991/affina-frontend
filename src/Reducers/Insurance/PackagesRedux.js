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
};

const PackagesSlice = createSlice({
    name: 'Insurance',
    initialState,
    reducers: {
        selectPackage(state, action) {
            state.isPackage = action.payload;
        },
        getAllSuppliers(state, action) {
            state.isLoading = true;
        },
        getAllSuppliersResponse(state, action) {
            state.supplier = action.payload.data;
            state.isLoading = false;
        },
        // 
        packagesGetAll(state, action) {
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
            // console.log('itemChild.product_details>>', item); 

            state.isLoading = false;
        },
        // 
        packagesGetBySupplier(state, action) {
            state.isLoading = true;
        },
        packagesGetBySupplierResponse(state, action) {
            state.dataBySupplier = action.payload;
            state.countDataSupplier = action.payload.length;
            state.isLoading = false;
        },
        // 
        productGetByPackage(state, action) {
            state.isLoading = true;
        },
        productGetByPackageResponse(state, action) {
            state.dataAdditional = action.payload;
            state.isLoading = false;
        },
        // 
        packagesGetDetail(state, action) {
            state.isLoading = true;
        },
        packagesGetDetailResponse(state, action) {
            state.dataAdditional = action.payload;
            state.isLoading = false;
        },
        // 
        postPackageBySupplier(state, action) {
            state.isLoading = true;
        },
        postPackageBySupplierResponse(state, action) {
            state.data = action.payload.data;
            state.isLoading = false;
        },
        // 
        getOrderDetail(state, action) {
            state.isLoading = true;
        },
        getOrderResponse(state, action) {
            state.orderDataDetail = action.payload;
            state.isLoading = false;
        },
        // 
        createOrder(state, action) {
            state.isLoading = true;
        },
        createOrderResponse(state, action) {
            state.orderData = action.payload;
            state.isLoading = false;
        },
        //
        resetStateInsurance: () => initialState,

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
    resetStateInsurance,
} = PackagesSlice.actions;
export default PackagesSlice.reducer
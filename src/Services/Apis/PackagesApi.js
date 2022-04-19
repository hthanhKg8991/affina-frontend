import axiosClient from "../ApiClient";

const PackagesApi = {
    getAllSuppliers() {
        const url = 'suppliers/get-all';
        return {
            send: () => axiosClient.get(url)
        }
    },
    getAll() {
        // const url = 'packages/get-all';
        const url = 'packages/get-all-detail';
        // const url = 'packages/get-group-package-by-supplier';
        return {
            // send: () => axiosClient.post(url)
            send: () => axiosClient.get(url)
        }
    },
    getBySupplier(type) {
        console.log('getType::', type);
        const url = 'packages/get-by-supplier/' + type;
        return {
            send: () => axiosClient.get(url)
        }
    },
    getDetail(id) {
        console.log('getDetail::', id);
        const url = 'products/get-by-package/' + id;
        return {
            send: () => axiosClient.get(url)
        }
    },
    postProductGetByPackage(params) {
        console.log('postProductGetByPackage::', params);
        const url = 'products/get-by-package';
        return {
            send: () => axiosClient.post(url, params)
        }
    },
    postPackageBySupplier(params) {
        console.log('postPackageBySupplier::', params);
        const url = 'packages/get-group-package-by-supplier';
        return {
            send: () => axiosClient.post(url, params)
        }
    },
    createOrder(params) {
        console.log('createOrder::', params);
        const url = 'orders/create';
        return {
            send: () => axiosClient.post(url, params)
        }
    },
    createPayment(params) {
        console.log('createPayment::', params);
        const url = 'payments/create-payment';
        return {
            send: () => axiosClient.post(url, params)
        }
    },
}

export default PackagesApi;
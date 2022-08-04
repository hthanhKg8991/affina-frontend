import axiosClient from "../ApiClient";
import GeneralAPI from "./generalApi";

class PackagesApi extends GeneralAPI {
    getAllSuppliers() {
        const url = 'suppliers/get-all';
        return {
            send: () => this.methodGet(url)
        }
    }
    getAll() {
        // const url = 'packages/get-all';
        const url = 'packages/get-all-detail';
        // const url = 'packages/get-group-package-by-supplier';
        return {
            // send: () => axiosClient.post(url)
            send: () => this.methodGet(url)
        }
    }
    getBySupplier(type) {
        console.log('getType::', type);
        const url = 'packages/get-by-supplier/' + type;
        return {
            send: () => this.methodGet(url)
        }
    }
    getDetail(id) {
        console.log('getDetail::', id);
        const url = 'products/get-by-package/' + id;
        return {
            send: () => this.methodGet(url)
        }
    }
    postProductGetByPackage(params) {
        console.log('postProductGetByPackage::', params);
        const url = 'products/get-by-package';
        return {
            send: () => this.methodPost(url, params)
        }
    }
    postPackageBySupplier(params) {
        console.log('postPackageBySupplier::', params);
        const url = 'packages/get-group-package-by-supplier';
        return {
            send: () => this.methodPost(url, params)
        }
    }
    createOrder(params) {
        console.log('createOrder::', params);
        const url = 'orders/create';
        return {
            send: () => this.methodPost(url, params)
        }
    }
    getOrderDetail(params) {
        console.log('getOrderDetail::', params);
        // const url = '/orders/get-detail/' + params;
        const url = 'orders/get-detail-by-code/' + params;
        return {
            send: () => this.methodGet(url)
        }
    }
    createPayment(params) {
        console.log('createPayment::', params);
        const url = 'payments/create-payment';
        return {
            send: () => this.methodPost(url, params)
        }
    }

    createOrdersGroup(params) {
        console.log('createOrdersGroup::', params);
        const url = 'orders/company/create';
        return {
            send: () => this.methodPost(url, params)
        }
    }
    // Groups
    postGroupsPackageBySupplier(params) {
        console.log('postGroupsPackageBySupplier::', params);
        const url = 'packages/company/get-group-package-by-supplier';
        return {
            send: () => axiosClient.post(url, params)
        }
    }
}

const packageInstance = new PackagesApi();
export default packageInstance;

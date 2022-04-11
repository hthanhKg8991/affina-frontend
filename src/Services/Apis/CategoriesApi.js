import axiosClient from "../ApiClient";

const CategoriesApi = {
    getAll() {
        const url = 'categories/get-all';
        return {
            send: () => axiosClient.get(url)
        }
    },
    getType(type) {
        console.log('getType::', type);
        const url = 'categories/get-by-type/' + type;
        return {
            send: () => axiosClient.get(url)
        }
    },
    getDetail(id) {
        console.log('getDetail::', id);
        const url = 'categories/get-detail/' + id;
        return {
            send: () => axiosClient.get(url)
        }
    },
}

export default CategoriesApi;
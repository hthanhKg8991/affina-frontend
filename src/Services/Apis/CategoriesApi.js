import GeneralAPI from "./generalApi";

class CategoriesApi extends GeneralAPI {
    getAll() {
        const url = 'categories/get-all';
        return {
            // send: () => axiosClient.get(url)
            send: () => this.methodGet(url)
        }
    }
    getType(type) {
        console.log('getType::', type);
        const url = 'categories/get-by-type/' + type;
        return {
            send: () =>this.methodGet(url)
        }
    }
    getDetail(id) {
        console.log('getDetail::', id);
        const url = 'categories/get-detail/' + id;
        return {
            send: () => this.methodGet(url)
        }
    }
}
const categoryInstance = new CategoriesApi();
export default categoryInstance;
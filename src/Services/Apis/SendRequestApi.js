import axiosClient from "../ApiClient";

const SendRequestApi = {
    getAll() {
        const url = 'send-request/list';
        return {
            send: () => axiosClient.get(url)
        }
    },
    createSendRequest(params) {
        console.log('createSendRequest::', params);
        const url = 'send-request/create';
        return {
            send: () => axiosClient.post(url, params)
        }
    },
    getDetail(id) {
        console.log('getDetail::', id);
        const url = 'send-request/detail/' + id;
        return {
            send: () => axiosClient.get(url)
        }
    },
}

export default SendRequestApi;
import axiosClient from "../ApiClient";

const UploadFileApi = {
    login(params) {
        const url = 'company/upload';
        return {
            send: () => axiosClient.post(url, params)
        }
    },
}

export default UploadFileApi;
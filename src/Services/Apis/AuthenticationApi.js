import axiosClient from "../ApiClient";

const AuthenticationApi = {
    login(params) {
        const url = 'users/login';
        return {
            send: () => axiosClient.post(url, params)
        }
    },
}

export default AuthenticationApi;
import GeneralAPI from "./generalApi";

class AuthenticationApi extends GeneralAPI {
    login(params) {
        const url = 'users/login';
        return {
            send: () => this.methodPost(url, params)
        }
    }
}
const authenticationInstance = new AuthenticationApi();
export default authenticationInstance;
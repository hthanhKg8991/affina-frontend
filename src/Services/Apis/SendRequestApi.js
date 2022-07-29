import GeneralAPI from "./generalApi";

class SendRequestApi extends GeneralAPI {
    getAll() {
        const url = 'send-request/list';
        let headers = {
            "x-user-token":'ThahNguyen',
        }
        // const url = 'export/checkHashGet?param1=123&param2=456';
        return {
            send: () => this.methodGet(url, headers)
        }
    }
    // getAll() {
    //     // const url = 'send-request/list';
    //     const url = 'export/checkHashPost';
    //     let params = {
    //         "abc": "123",
    //         "name": "ThanhNguyen",
    //         "email": "hthanh@gmail.com",
    //     }
    //     return {
    //         send: () => this.methodPost(url, params)
    //     }
    // }
    createSendRequest(params) {
        console.log('createSendRequest::', params);
        const url = 'send-request/create';
        return {
            send: () => this.methodGet(url, params)
        }
    }
    getDetail(id) {
        console.log('getDetail::', id);
        const url = 'send-request/detail/' + id;
        return {
            send: () => this.methodGet(url)
        }
    }
}

const sendRequestInstance = new SendRequestApi();
export default sendRequestInstance;
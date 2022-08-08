import storage from "redux-persist/lib/storage";
import CryptoJS from "crypto-js";
import axiosClient from "../ApiClient";
import cryptoJS from "crypto-js";
import configDefault from "../../Config/app";
import { isStringNullOrEmpty } from "../../Common/Helper";
const SECRET_KEY = "AffinaInsuranceAPP202205";
var secretKey = "Affina@123#-^+=";
const timeStamp = new Date().getTime();
export default class GeneralAPI {
    getTokenLogin = async () => {
        let authLogin = await storage.getItem('persist:root');
        let dataEncrypt = JSON.parse(authLogin).AuthRedux;
        console.log('dataEncrypt', dataEncrypt);
        if (!dataEncrypt) return dataEncrypt;
        const bytes = CryptoJS.AES.decrypt(JSON.parse(dataEncrypt), secretKey);
        const decrypted = bytes.toString(CryptoJS.enc.Utf8);
        let accessToken = JSON.parse(decrypted).dataAuth.access_token;
        return accessToken;
    }
    async isChecksumData(body) {
        let tokenLogin = await this.getTokenLogin();
        let dataQueryString = timeStamp + '.' + body;
        console.log('dataQueryString>>>', dataQueryString);
        return {
            "mt-token": cryptoJS.HmacSHA256(dataQueryString, SECRET_KEY).toString(cryptoJS.enc.Hex),
            "timestamp": timeStamp,
            "x-user-token": !isStringNullOrEmpty(tokenLogin) ? tokenLogin : "",
        };
    }
    async methodGet(path = '', header = null) {
        let isCheckSum = configDefault.API_URL_API + '/' + path;
        return axiosClient.get(path, {
            headers: await this.isChecksumData(isCheckSum),
        })
    }
    async methodPost(path = '', params = {}, headers = null) {
        return axiosClient.post(path, params, { headers: await this.isChecksumData(JSON.stringify(params)) })
    }
}
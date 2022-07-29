import moment from 'moment';
import axios from 'axios';
import configDefault from '../Config/app';
// const timeStamp = moment().valueOf();
const timeStamp = new Date().getTime();
const axiosClient = axios.create({
    baseURL: configDefault.API_URL_API,
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
        'Access-Control-Allow-Headers': 'X-Requested-With,content-type',
        'Access-Control-Allow-Credentials': true,
    },
});

// Add a request interceptor
axiosClient.interceptors.request.use(function (config) {
    console.log('axiosClient::request:::', config);
    return config;
}, function (error) {
    console.log('axiosClient::error:::', error);
    return Promise.reject(error);
});

// Add a response interceptor
axiosClient.interceptors.response.use(function (response) {
    return response.data;
}, function (error) {
    return Promise.reject(error);
});

export default axiosClient;
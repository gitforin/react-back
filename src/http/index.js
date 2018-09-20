import Axios from 'axios';
import Config from './config';
// var baseUrl='http://119.84.39.35:8890';
// var axios = Axios.create({　
//     baseURL: baseUrl,
//     timeout: '15000',  //请求超时时间
// })
var axios = Axios.create(Config)
axios.interceptors.request.use(function(config) {
    //在发送请求之前做某事
    return config;
}, function(error) {
    //请求错误时做些事
    return Promise.reject(error);
});

//添加响应拦截器
axios.interceptors.response.use(function(response) {
    console.log('response',response);
    return response.data;
}, function(error) {
    //请求错误时做些事
    return Promise.reject(error);
})

export default axios
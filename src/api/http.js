import { apiGet, apiPost } from "./api";

//获取验证码
export function getCode() {
    return get('index.php/index/index/getcode')
}
//登录
export function postLogin(data) {
    return post('index.php/index/index/login', data)
}
//注册
export function postRegister(data) {
    return post('index.php/index/index/register', data)
}
//侧数量
export function postNumber() {
    return post('index.php/index/admin/getNolist')
}
//进度条
export function postProgress() {
    return post('index.php/index/admin/getNum')
}//待办事项
export function postHandled() {
    return post('index.php/index/admin/getTolist')
}//echart
export function postEhart() {
    return post('index.php/index/index/getDatas')
}

//post方法
function post(url, data) {
    return new Promise((resolve, reject) => {
        apiPost(url, data).then(value => {
            if (value.code == 0) {
                resolve(value)
            } else {
                reject(value)
            }
        }, reason => {
            reject(reason)
        })
    })
}
//get方法
function get(url) {
    return new Promise((resolve, reject) => {
        apiGet(url).then(value => {
            if (value.code == 0) {
                resolve(value)
            } else {
                reject(value)
            }
        }, reason => {
            reject(reason)
        })
    })
}
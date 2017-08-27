import {
    Alert
} from 'react-native';

/**
 * option.method  || 'POST'
 * option.type || 'application/json'
 * option.headers ( you can set request headers by this schema)
 * option.data ( you can set data by this schema )
 * option.url (you can set url api by this schema )
 */
var fetchHander = (option, cb) => {

    headers = option.headers || {
        'Accept': option.type || 'application/json',
        'Content-Type': option.type || 'application/json',
        "Access-Control-Allow-Methods": "PUT,POST,GET,DELETE,OPTIONS",
        "Response-Content-Type": 'application/json'
    };

    //add user header
    if (option.wxUser) {
        headers.channel = 'app';
        headers.token = option.wxUser
    }

    //add callback
    if (cb) {
        headers.callback = cb
    }

    return fetch(option.url, {
        method: option.method || 'POST',
        headers: headers,
        credentials: 'same-origin',
        body: option.method === 'GET' ? undefined : (option.data ? option.data : {})
    })
        .then((response) => response.json())
        .then((data) => {
            if (this.headers.callback) {
                this.headers.callback(data)
            }
            else
                return data;
// debugger;
//             return new Promise(function (resolve, reject) {
//                 debugger;
//                 if (data) {
//                     resolve(data)
//                 }
//                 else
//                     reject(data)
//                 // return fetchHander(option, cb)
//                 // setTimeout(function() {
//                 //     console.log('执行任务1');
//                 //     resolve('执行任务1成功');
//                 // }, 2000);
//             });
        })
        .catch((e) => {
            Alert.alert(
                '接口异常',
                '错误信息:' + e,
                { cancelable: true }
            )
        })


}
module.exports.fetchHander = fetchHander;

/**
 * dispatch , action loader
 * getState , state  loader 
 * option.method  || 'POST'
 * option.type || 'application/json'
 * option.headers ( you can set request headers by this schema)
 * option.data ( you can set data by this schema )
 * option.url (you can set url api by this schema )
 */
var fetchHanderAction = (dispatch, getState) => (option, cb) => {
   
    return (dispatch, getState) => {

        getState().userStore.isLoggedIn && (option.wxUser = getState().userStore.user.token)

        return fetchHander(option, cb)
    }

}
module.exports.fetchHanderAction = fetchHanderAction;

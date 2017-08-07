/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 19);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const path = __webpack_require__(9);
const redis_1 = __webpack_require__(11);
class Config {
    constructor() {
        this.fs = __webpack_require__(15);
        this.env = "production" || 'development';
        this.configName = "localConfig";
        this.init = () => __awaiter(this, void 0, void 0, function* () {
            let data = yield this.getRedisData();
            // if(!data){
            data = JSON.parse(this.fs.readFileSync(path.resolve(__dirname, './localConfig.' + this.env + '.json')).toString());
            redis_1.default.set(this.configName, JSON.stringify(data));
            // }
            this.initConfig(data);
            console.log("config 数据初始化成功", data);
            this.IntervalUpdate(1000 * 10);
        });
        this.initConfig = (redisConfig) => {
            this.config = redisConfig;
            this.error = redisConfig.error;
            this.routes = redisConfig.routes;
            this.ignoreUrls = redisConfig.ignoreUrls;
            this.redis = redisConfig.redis;
            this.cookie = redisConfig.cookie;
            this.SSO = redisConfig.SSO;
            this.weixins = redisConfig.weixins;
            this.gateway = redisConfig.gateway;
        };
        this.getRedisData = () => __awaiter(this, void 0, void 0, function* () {
            let data = yield redis_1.default.get(this.configName);
            let result;
            if (data) {
                result = JSON.parse(data);
            }
            return result;
        });
        this.update = () => __awaiter(this, void 0, void 0, function* () {
            let result = yield this.getRedisData();
            return result;
        });
        this.IntervalUpdate = (times) => {
            setInterval(() => __awaiter(this, void 0, void 0, function* () {
                let data = yield this.update();
                this.initConfig(data);
                console.log("redis 配置文件已更新");
            }), times);
        };
        /**
         * 添加修改数据
         * @param routerName
         * @param routerData
         */
        this.setRouterData = (routerName, routerData) => __awaiter(this, void 0, void 0, function* () {
            let result = yield this.getRedisData();
            if (result) {
                result.routes[routerName] = routerData;
                redis_1.default.set(this.configName, result);
                this.initConfig(result);
            }
        });
    }
}
let c = new Config();
exports.default = c;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// import LocalConfig from './../../config'
// const config:LocalConfig = require("./../../config/index");
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __webpack_require__(0);
const Error = config_1.default.error;
class Result {
    constructor() {
        this.resultCode = 0;
        this.resultMessage = "success";
        this.result = {};
        this.getValue = this.getValue.bind(this);
    }
    success(result) {
        this.resultCode = 0;
        this.resultMessage = "success";
        this.result = result;
        return this.getValue();
    }
    error(code, errorMsg) {
        this.resultCode = code;
        this.resultMessage = Error[code] || errorMsg;
        return this.getValue();
        //this.result = {};
        //console.log(code,'ddddd');
    }
    getValue() {
        let resultCode = this.resultCode;
        let resultMessage = this.resultMessage;
        let result = this.result;
        //console.log( resultCode, resultMessage, result)
        return { code: resultCode, message: resultMessage, result };
    }
}
exports.default = Result;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = __webpack_require__(3);
//import {FormData} from 'whatwg-fetch'
__webpack_require__(26);
var FormData = __webpack_require__(27);
const logger_1 = __webpack_require__(8);
class Fetch {
    constructor(domain, timeout = 5000) {
        this.headers = {
            'charset': 'utf-8',
            'client_version': "1.0",
            'channel': 'node'
        };
        this.domain = domain;
        this.timeout = timeout;
    }
    setDomain(domain) {
        this.domain = domain;
    }
    setTimeout(timeout) {
        this.timeout = timeout;
    }
    //设置头部信息
    setHeaders(headers = { 'client_version': "1.0", 'channel': 'node' }) {
        this.headers = Object.assign({
            'charset': 'utf-8',
            'client_version': "1.0",
            'channel': 'node'
        }, headers);
    }
    //设置版本号
    setVersion(version) {
        this.headers['client_version'] = version;
    }
    getData(url, param = {}, type = "GET", headers, repType = "json", timeout) {
        type = type.toLocaleUpperCase();
        if (type === "GET" && lodash_1.size(param) > 0) {
            url += "?" + toExcString(param);
        }
        headers = getHeadersByRepType(repType, Object.assign({}, this.headers, headers));
        // console.log(headers); Content-Type application/x-www-form-urlencoded
        let body = getDataByRepType(repType, param);
        // headers = Object.assign({},{
        //     "Content-Type":"application/x-www-form-urlencoded"
        // })
        return timeoutPromise(timeout || this.timeout, fetch(this.domain + url, {
            method: type,
            headers: headers,
            //credentials: 'same-origin',
            body: (type === "GET"
                ? undefined
                : body)
        }).then((res) => {
            console.log("fetxhUrl:" + url);
            return res.json();
        }).catch((e) => {
            logger_1.default.error("fetch", JSON.stringify({
                url: this.domain + url,
                method: type,
                headers: headers,
                body: (type === "GET"
                    ? undefined
                    : body)
            }), e);
            // console.log(e);
        }));
    }
}
const Headers = __webpack_require__(28);
const getHeadersByRepType = function (repType, headers) {
    return Object.assign({}, headers, Headers[repType]);
};
//根据请求类型，获取请求数据
const getDataByRepType = function (repType, param) {
    let body;
    switch (repType) {
        case "json":
            body = JSON.stringify(param);
            break;
        case "form-data":
            body = new FormData();
            for (let key in param) {
                body.append(key, param[key]);
            }
            break;
        default:
            body = param;
            break;
    }
    return body;
};
const timeoutPromise = function (ms, promise) {
    return new Promise((resolve, reject) => {
        const timeoutId = setTimeout(() => {
            reject(new Error("promise timeout"));
        }, ms);
        promise.then((res) => {
            clearTimeout(timeoutId);
            resolve(res);
        }, (err) => {
            clearTimeout(timeoutId);
            reject(err);
        });
    });
};
const toExcString = function (array, type = {
        ":": "=",
        ",": "&"
    }) {
    let result = "";
    for (var temp in array) {
        result += temp + '=' + encodeURI(array[temp]) + "&";
    }
    return result.substring(-1, result.length - 1);
};
exports.default = Fetch;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("koa-router");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const redis_1 = __webpack_require__(11);
const token_1 = __webpack_require__(6);
const result_1 = __webpack_require__(1);
const moment = __webpack_require__(7);
const config_1 = __webpack_require__(0);
const logger_1 = __webpack_require__(8);
const result = new result_1.default();
const config = config_1.default;
const format = "YYYY-MM-DD hh:mm:ss:SSS";
const tokenHelp = new token_1.default();
const env = "production" || 'development';
const SSO = config.SSO;
class VerifyUser {
    constructor(sso = SSO) {
        this.verify = this.verify.bind(this);
        this.setCookie = this.setCookie.bind(this);
        this.saveTokenInfo = this.saveTokenInfo.bind(this);
        this.SSO = sso;
    }
    setCookie(ctx, key, token, dataKey) {
        return __awaiter(this, void 0, void 0, function* () {
            ctx.cookies.set(key, (this.SSO === true ? (dataKey) : token), config.cookie); //LocalConfig.cookie  {"signed":true}  config.cookie
        });
    }
    //存入 redis token userId now
    //    saveData(token:string,userId:string){
    //                 let data = {
    //                     token,
    //                     userId,
    //                     date:moment().format(format)
    //                 }
    //                 console.log("保存token",JSON.stringify(data));
    //                 let key = config.redis.tokenKey+":"+(this.SSO===true?userId:token);
    //                  redis.set(key,JSON.stringify(data));
    //                 redis.expire(key,config.redis.expiration);
    //                 //redis.set(config.redis.tokenKey+":"+userId,JSON.stringify(data));
    //     }
    saveTokenInfo(tokenKey, token, tokenInfo, dataKey) {
        let data = Object.assign({}, tokenInfo, {
            token,
            date: moment().format(format)
        });
        // console.log("保存token",JSON.stringify(data));
        let key = tokenKey + ":" + (this.SSO === true ? dataKey : token);
        redis_1.default.set(key, JSON.stringify(data));
        // .exex(function(err){
        //     logger.error("登录信息保存到redis,","",JSON.stringify(err))
        // });
        redis_1.default.expire(key, config.redis.expiration);
    }
    //从redis获取数据
    getTokenInfo(key) {
        // console.log("查询"+config.redis.tokenKey+":"+key)
        // return redis.get(config.redis.tokenKey+":"+key);
        return redis_1.default.get(key);
    }
    _verifyToken(token) {
        return __awaiter(this, void 0, void 0, function* () {
            // return new Promise((rev,reb)=>{
            //         if(!token){
            //             reb();
            //         }
            //         this.getTokenInfo(token).then(result=>{
            //                 if(result){
            //                     rev(JSON.parse(result))
            //                 }else{
            //                     reb()
            //                 }
            //         })
            // })
            let result = yield this.getTokenInfo(token);
            return (result && JSON.parse(result)) || result;
        });
    }
    //根据key  获取用户信息
    getTokenInfoByKey(key, ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            let info = yield this.getTokenInfo(this.getTokenKey(ctx) + ":" + key);
            //    console.log("用户信息Wie",info);
            return JSON.parse(info) || false;
        });
    }
    getTokenKey(ctx) {
        let key = ctx.originalUrl.split("/")[2];
        let tokenKey = (config.routes[key] && config.routes[key]["tokenKey"]) || config.routes["qbii"]["tokenKey"];
        return tokenKey;
    }
    getToken(ctx) {
        let token = ctx.cookies.get("token") || ("production" === "development" && ctx.request.headers.token);
        if (!token) {
            return undefined;
        }
        return this.getTokenKey(ctx) + ":" + token;
    }
    verifyToken(ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            let token = this.getToken(ctx);
            let info = yield this._verifyToken(token);
            if (info) {
                return true;
            }
            else {
                return false;
            }
        });
    }
    checkIgnoreUrl(url) {
        let result = false;
        let IgnoreUrls = config.ignoreUrls;
        for (let key in IgnoreUrls) {
            let index = key.indexOf("/:");
            if (index >= 0) {
                if (key.substring(0, index) === url.substring(0, index)) {
                    result = IgnoreUrls[key];
                    break;
                }
            }
            else {
                if (key === url) {
                    result = IgnoreUrls[key];
                    break;
                }
            }
        }
        return result;
    }
    verify(ctx, next) {
        return __awaiter(this, void 0, void 0, function* () {
            //查看url是否在 过滤名单里面  .split(",")[1]
            //let token = ctx.cookies.get("token");
            let { url } = ctx;
            url = url.split("?")[0];
            // let urlInfo = config.gateway.routes[url] || undefined;
            // if(urlInfo&&urlInfo.isLogin===false){
            //     return next();
            // }
            // if(IgnoreUrls[url]){
            if (this.checkIgnoreUrl(url)) {
                return next();
            }
            let token = this.getToken(ctx);
            if (token) {
                let info = yield this._verifyToken(token);
                if (info) {
                    ctx.state.userInfo = info;
                    return next();
                }
                else {
                    result.error(200, "登录过期");
                    ctx.body = result.getValue();
                    logger_1.default.error("匹配失败", "", {
                        cookie: ctx.cookies.get("token")
                    });
                    return;
                }
            }
            else {
                result.error(200, "未登陆");
                logger_1.default.error("未登录信息", "", {
                    cookie: ctx.cookies.get("token")
                });
                ctx.body = result.getValue();
                return;
            }
        });
    }
}
exports.default = VerifyUser;
/**
 * switch (token) {
            case undefined:
                result.error(200,"未登陆");
                ctx.body = result.getValue();
                return;
            case "1":
                result.error(200,"未登陆");
                ctx.body = result.getValue();
                return;


        }
 */ 


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//const crypto = require('crypto');
Object.defineProperty(exports, "__esModule", { value: true });
const crypto = __webpack_require__(12);
const moment = __webpack_require__(7);
const message = "啊哈你说这个是啥，其实就是Hmac的message，干啥用的？防止你硬解的。";
// const decipher = crypto.createDecipher("md5", message);
// let decrypted = '';
// decipher.on('readable', () => {
//     const data = decipher.read();
//     if (data) 
//         decrypted += data.toString('utf8');
//     }
// );
// decipher.on('end', () => {
//     console.log(decrypted);
//     // Prints: some clear text data
// });
class Token {
    constructor() { }
    //+moment().format("YYYY-MM-DD hh:mm:ss:SSS")
    build(userId) {
        let hash = crypto
            .createHmac('md5', message)
            .update(userId + moment().format("YYYY-MM-DD hh:mm:ss:SSS"))
            .digest('hex');
        //都这样加密了， 你还能破解 我也是啥办法没有了
        //console.log("加密userId" + userId + ",加密后:" + hash + "长度为:" + hash.toString().length);
        return hash;
    }
    decipher(token) {
        // decipher.write(token, 'hex');
        // var a = decipher.end();
        // console.log(a)
        //crypto crypto. md
    }
}
//  let hash = crypto
//             .createHmac('des-ede3', "21312312" + moment().format("YYYY-MM-DD hh:mm:ss:SSS"))
//             .update(message)
//             .digest('hex');
// console.log("",+hash);
//                 var decipher = crypto.createDecipheriv("des-ede3", message, '');
//                let rawdata = decipher.update(hash,"hex","utf8");
//                console.log(rawdata);
// rawdata += decipher.final(digest);
exports.default = Token;


/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const winston = __webpack_require__(16);
const path = __webpack_require__(9);
__webpack_require__(17);
if (!process.getuid) {
    process.getuid = () => {
        return 0;
    };
}
var log = new (winston.Logger)({
    transports: [
        new (winston.transports.Console)(),
        new winston.transports.DailyRotateFile({
            filename: path.resolve(process.cwd(), './log/normal'),
            datePattern: '_yyyy-MM-ddTHH.log'
        })
    ]
});
const logger = function () {
    return log;
};
var Logger = {
    error: function (param1, param2, param3) {
        param3 = Object.assign({}, param3, {
            pid: process.pid, uid: process.getuid(),
        });
        return log.error(param1, param2, param3);
    },
    info: function (param1, param2, param3) {
        console.log(process);
        param3 = Object.assign({}, param3, {
            pid: process.pid, uid: process.getuid(),
        });
        return log.info(param1, param2, param3);
    },
    warn: function (param1, param2, param3) {
        param3 = Object.assign({}, param3, {
            pid: process.pid, uid: process.getuid(),
        });
        return log.warn(param1, param2, param3);
    }
};
exports.default = Logger;
// module.exports = logger; 


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
///
const redisData_1 = __webpack_require__(29);
// let config:Hee;
let redis = new redisData_1.default("configInfo");
class Config {
    constructor() {
    }
    // private redis;
    getData() {
        return __awaiter(this, void 0, void 0, function* () {
            let data = yield redis.getDataAsync();
            return data;
        });
    }
    //Promise<weixinInfot>
    getWeiXinInfo(key) {
        return __awaiter(this, void 0, void 0, function* () {
            let data = yield this.getData();
            return data.weixins[key] || {};
        });
    }
    saveWeiXinInfo(key, info) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = (yield this.getData()) || { weixins: {} };
            let temp = (result.weixins && result.weixins[key] && result.weixins) || { [key]: {} };
            for (let keys in info) {
                temp[key][keys] = info[keys];
            }
            let weixins = Object.assign({}, result.weixins, temp);
            result.weixins = weixins;
            return redis.saveData(result);
        });
    }
}
exports.default = Config;
// type Configt = {
//     "weixins":weixinst
// }
// type weixinst = {
//     "item":weixinInfot,
// }
// type weixinInfot = {
//     "appid":string,
//     "secret":string,
//     "token":string,
//     "tickteJs":string,
//     "timing":{
//         "getToken":{
//             "time":string
//         },
//         "tickerJsGet":{
//             "time":string
//         }
//     }
// }
// module.exports =  


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Redis = __webpack_require__(20);
let redisConfig = __webpack_require__(14);
let redis = new Redis(redisConfig.redis);
//let redis = new Redis.Cluster(redisConfig.redis.sentinels,redisConfig.redis.options);
// class Redis {
//     constructor(){
//     }
// }
// redis.mset({ k1: 'v1', k2: 'v2' });
// redis.get('k1', function (err, result) {
//   // result === 'v1';
//   console.log("1:"+result);
// });
// // redis.mset(new Map([['k3', 'v3'], ['k4', 'v4']]));
// // redis.get('k3', function (err, result) {
// //   // result === 'v3';
// //   console.log("2:"+result);
// // });
// redis.set('foo', 'bar');
// redis.expire('foo',10);
// redis.get('foo', function (err, result) {
//   console.log(result);
// });
//var redis = new Redis();
// var pub = new Redis(redisConfig.redis);
// redis.subscribe('news', 'music', function (err, count) {
//   // Now we are subscribed to both the 'news' and 'music' channels.
//   // `count` represents the number of channels we are currently subscribed to.
//   pub.publish('news', 'Hello world!');
//   pub.publish('music', 'Hello again!');
// });
// redis.on('message', function (channel, message) {
//   // Receive message Hello world! from channel news
//   // Receive message Hello again! from channel music
//   console.log('Receive message %s from channel %s', message, channel);
// });
// // There's also an event called 'messageBuffer', which is the same as 'message' except
// // it returns buffers instead of strings.
// redis.on('messageBuffer', function (channel, message) {
//   // Both `channel` and `message` are buffers.
//   console.log(channel,message);
// });
// console.log("........");
exports.default = redis;


/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __webpack_require__(0);
const config_2 = __webpack_require__(10);
const all_1 = __webpack_require__(30);
const WeixinConfigs = config_1.default.weixins;
let configHelp = new config_2.default();
class Weixin {
    constructor(key) {
        // this.config = WeixinConfigs[key]; 
        // console.log("llllll",WeixinConfigs,key)
        this.key = key;
    }
    getParams(params, others) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = {};
            let { key } = this;
            let weixinInfo = yield configHelp.getWeiXinInfo(key);
            params.map((value) => {
                result[value] = weixinInfo[value];
            });
            return Object.assign({}, result, others);
        });
    }
    infoGet() {
        return __awaiter(this, void 0, void 0, function* () {
            let { key } = this;
            return yield configHelp.getWeiXinInfo(key);
        });
    }
    userTokenGet(code) {
        return __awaiter(this, void 0, void 0, function* () {
            return all_1.all("/api/weixin/user/token", yield this.getParams(["appid", "secret"], { code, grant_type: "authorization_code" }));
        });
    }
    userTokenRefresh(refresh_token) {
        return __awaiter(this, void 0, void 0, function* () {
            return all_1.all("/api/weixin/user/tokenRefresh", yield this.getParams(["appid"], { refresh_token, grant_type: "refresh_token" }));
        });
    }
    userInfoGet(openid, access_token) {
        return __awaiter(this, void 0, void 0, function* () {
            return all_1.all("/api/weixin/user/info", yield this.getParams([], { openid, access_token, lang: "zh_CN" }));
        });
    }
    userInfoGetByGuanZhu(openid) {
        return __awaiter(this, void 0, void 0, function* () {
            return all_1.all("/api/weixin/user/info/guanzhu", yield this.getParams(["access_token"], { openid, lang: "zh_CN" }));
        });
    }
    configTokenGet() {
        return __awaiter(this, void 0, void 0, function* () {
            return all_1.all("/api/weixin/config/token", yield this.getParams(["appid", "secret"], { grant_type: "client_credential" }));
        });
    }
    ticketJsGet() {
        return __awaiter(this, void 0, void 0, function* () {
            return all_1.all("/api/weixin/config/jsTicket", yield this.getParams(["access_token"], { type: "jsapi" }));
        });
    }
    menuGet(access_token) {
        return __awaiter(this, void 0, void 0, function* () {
            return all_1.all("/api/weixin/menu/get", yield this.getParams([], { access_token }));
        });
    }
    verify(access_token) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield this.menuGet(access_token);
            return result.errcode == undefined ? true : false;
        });
    }
}
exports.default = Weixin;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const path = __webpack_require__(9);
const fs = __webpack_require__(15);
const env = "production" || 'development';
// console.log(__dirname);
// console.log(path.resolve(__dirname));
// console.log(__filename);
// console.log(process.cwd());
// console.log(path.resolve('./'));
// console.log(path.resolve(__dirname, './config.json'));
// console.log(path.dirname(__filename) + '/config.json')
const sysConfig = JSON.parse(fs.readFileSync(path.resolve(__dirname, './sysConfig.' + env + '.json')).toString());
module.exports = sysConfig;
// export default sysConfig; 


/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("winston");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("winston-daily-rotate-file");

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const result_1 = __webpack_require__(1);
const fetch_1 = __webpack_require__(2);
const interface_1 = __webpack_require__(13);
const verifyUser_1 = __webpack_require__(5);
const token_1 = __webpack_require__(6);
const config_1 = __webpack_require__(10);
const config_2 = __webpack_require__(0);
const logger_1 = __webpack_require__(8);
const config = config_2.default.routes.item;
const fetch = new fetch_1.default(config.domain, config.timeout);
fetch.setDomain(config.domain);
fetch.setTimeout(config.timeout);
const tokenHelp = new token_1.default();
const verifyUser = new verifyUser_1.default(true);
let weixin = new interface_1.default("item");
/**
 * 微信用户登录
 * @param ctx
 * @param next
 */
exports.loginx = function (ctx, next) {
    return __awaiter(this, void 0, void 0, function* () {
        ctx.cookies.set('name', 'tobi', { signed: true });
        ctx.body = {};
        return;
    });
};
exports.login = function (ctx, next) {
    return __awaiter(this, void 0, void 0, function* () {
        let result = new result_1.default();
        let { code } = ctx.query;
        // console.info()
        let isLogin = yield verifyUser.verifyToken(ctx);
        if (isLogin) {
            ctx.body = result.success({});
            return;
        }
        let re = yield weixin.userTokenGet(code);
        // ctx.body = re;
        if (re && re.errcode == undefined) {
            //access_token  refresh_token  openid
            let userInfo = {};
            let resultRefresh = yield weixin.userTokenRefresh(re.refresh_token);
            //resultRefresh.openid
            let reUserInfo = yield verifyUser.getTokenInfoByKey(resultRefresh.openid, ctx);
            if (reUserInfo) {
                verifyUser.setCookie(ctx, "token", reUserInfo.token, reUserInfo.openid);
                // verifyUser.setCookie(ctx, "token", reUserInfo.token, reUserInfo.userId);
                ctx.body = result.success({});
                return;
            }
            // let guanzhuUserInfo: any = await weixin.userInfoGetByGuanZhu(resultRefresh.openid);
            let shouquanUserInfo = yield weixin.userInfoGet(resultRefresh.openid, resultRefresh.access_token);
            // userInfo = guanzhuUserInfo;
            // if(guanzhuUserInfo.errcode==undefined&&guanzhuUserInfo.subscribe===0){
            //     //没有关注
            //     userInfo = shouquanUserInfo;
            //     if(shouquanUserInfo.errcode&&shouquanUserInfo.errcode===48001){
            //         //没有授权
            //         ctx.body = result.error(201,"此用户未关注,也没有授权，需要跳转到授权界面");
            //         return;
            //     }
            // };
            userInfo = shouquanUserInfo;
            let jgUserInfo = yield exports.sendUserInfo(resultRefresh.openid, resultRefresh.access_token, userInfo);
            // console.log(jgUserInfo, "\n",guanzhuUserInfo);userInfo.openid
            // let jgUserInfo ="xxxxxxxxx";
            if (jgUserInfo && resultRefresh.openid) {
                // if (userInfo.openid && resultRefresh.openid) {
                //    verifyUser.
                let { userId } = { userId: jgUserInfo };
                let token = tokenHelp.build(userId);
                // verifyUser.saveData(token,userId);
                verifyUser.saveTokenInfo(verifyUser.getTokenKey(ctx), token, Object.assign({ openid: resultRefresh.openid, access_token: resultRefresh.access_token }, { userId }), resultRefresh.openid);
                yield verifyUser.setCookie(ctx, "token", token, resultRefresh.openid);
                ctx.body = result.success({});
            }
            else {
                logger_1.default.error("用户登录失败", "", {
                    resultRefresh: resultRefresh,
                    userInfo: jgUserInfo
                });
                result.success(userInfo);
                ctx.body = result.error(1, "获取用户信息失败");
            }
            // console.log("resultRefresh", resultRefresh)
            // console.log("userInfo", userInfo)
        }
        else {
            logger_1.default.error("根据code获取微信用户token失败", "", { re });
            ctx.body = result.error(1, "获取用户信息失败");
        }
    });
};
exports.sendUserInfo = (openid, access_token, userInfo) => __awaiter(this, void 0, void 0, function* () {
    // let result:Result = new Result();
    ///user/getUserId?openid=ofrn10wNPOGlmHgv3G0ivs9i_KVM
    // let result: any = await fetch.getData("/user/getUserId", { openid, access_token }, "GET");
    //let result: any = await fetch.getData("/user/getUserId", { openid }, "GET");
    let result = yield fetch.getData("/user/postWxUser", userInfo, "POST");
    if (result && result.responseCode === 1000) {
        return result.data;
    }
    else {
        return false;
    }
    //{responseCode:0,"data":1234567}
});
exports.getWXInfo = function (ctx, next) {
    return __awaiter(this, void 0, void 0, function* () {
        let info = yield weixin.infoGet();
        let result = new result_1.default();
        ctx.body = result.success({
            appid: info.appid
        });
    });
};
/**
 * 获取用户详情
 * @param ctx
 * @param next
 */
// export const getUserInfo = async (ctx, next) => {
//     let result = new Result();
//     let { openid, access_token } = ctx.state.userInfo;
//     let info = await sendUserInfo(openid, access_token);
//     if (info) {
//         ctx.body = result.success(info);
//         return;
//     }
//     ctx.body = result.error(1, "呵呵 ");
// }
exports.getWeiXinInfo = () => __awaiter(this, void 0, void 0, function* () {
    let data = yield fetch.getData("/config/wxConfig", {}, "GET");
    if (data && data.responseCode === 1000) {
        let configHelp = new config_1.default();
        configHelp.saveWeiXinInfo("item", {
            appid: data.data.appID,
            secret: data.data.appSecret,
            access_token: data.data.accessToken,
            jsapi_ticket: data.data.jsapiTicket,
        });
        return true;
    }
    else {
        console.log("获取 有好物的微信配置异常...", data);
    }
    return false;
});
exports.checkLogin = function (ctx, next) {
    let result = new result_1.default();
    ctx.body = result.success({});
};
// export  


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __webpack_require__(0);
config_1.default.init().then(() => {
    let koa2Server = __webpack_require__(21);
    console.log("初始化App");
    koa2Server();
});


/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("ioredis");

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = __webpack_require__(3);
const koa = __webpack_require__(22);
const body = __webpack_require__(23);
const result_1 = __webpack_require__(1);
const verifyUser_1 = __webpack_require__(5);
const request_1 = __webpack_require__(24);
const logger_1 = __webpack_require__(8);
//import aa from "./library/help/mysql";
const auxiliary_1 = __webpack_require__(25);
const gateway_1 = __webpack_require__(31);
const config = __webpack_require__(14);
const routers = __webpack_require__(32);
const convert = __webpack_require__(51);
const env = "production" || 'development';
// import * as KeyGrip from "keygrip";
//aa; import * as onError    from 'koa-onerror'npm console.log(RequestLogger)
let koa2Server = () => {
    let result = new result_1.default();
    let verifyUser = new verifyUser_1.default();
    let app = new koa();
    // app.keys = ['im a newer secret', 'i like turtle'];
    app.keys = ['im a newer secret', '你说是啥 就是啥，呵呵哒'];
    // app.keys = new KeyGrip(['im a newer secret', 'i like turtle'], 'sha256');
    app.use(request_1.default()); //日志
    app.use(gateway_1.default()); //api网管拦截
    app.use(convert(body({
        onerror: function (err, ctx) {
            ctx.throw('body parse error', 422);
        }
        // querystring: require('qs')
    }))); //表单什么数据转换
    // 异常处理
    app.context.onerror = function (err) {
        if (err == null) {
            return;
        }
        result.error(500, "");
        this
            .res
            .end(JSON.stringify(result.getValue()));
    };
    /*处理  404   500  页面 */
    app.use((ctx, next) => {
        return next().then(() => {
            if (ctx.status !== 200) {
                result.error(ctx.status, "");
                ctx.body = result.getValue();
                logger_1.default.error("normal", "", ctx.status);
            }
            else {
                return;
            }
        }).catch(error => {
            console.error(error);
            result.error(1000, "超时");
            ctx.body = result.getValue();
            logger_1.default.error("error", "", error);
        });
    });
    app.on('error', err => logger_1.default.error('server error', err));
    //用户校验
    app.use(verifyUser.verify);
    lodash_1.each(routers, function (router, index) {
        app.use(router.routes());
        app.use(router.allowedMethods());
    });
    console.log(config.localServer.port);
    app.listen(config.localServer.port);
    auxiliary_1.default();
};
module.exports = koa2Server;


/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("koa");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("koa-bodyparser");

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const winston = __webpack_require__(16);
const path = __webpack_require__(9);
__webpack_require__(17);
// winston.configure({     transports: [
// new(winston.transports.Console)(),
// new(winston.transports.File)({filename: 'app.log'})     ] });
var log = new (winston.Logger)({
    transports: [
        // new winston.transports.DailyRotateFile({filename: 'request', datePattern: '_yyyy-MM-ddTHH.log'})
        // new(winston.transports.File)({filename: 'request.log'})
        new winston.transports.DailyRotateFile({
            filename: path.resolve(process.cwd(), './log/request'),
            datePattern: '_yyyy-MM-ddTHH.log'
        })
    ]
});
// winston.add(winston.transports.File, {filename: 'app.log'});
// winston.remove(winston.transports.Console); winston.log('info', 'Hello
// distributed log files!'); winston.log('info', 'Test Log Message', { anything:
// 'This is metadata' }); function logs(){     new Promise(()=>{     }) }
const logger = function () {
    // log.info('info', 'Hello distributed log files!'); console.log("this",this)
    return function (ctx, next) {
        return __awaiter(this, void 0, void 0, function* () {
            // //console.log(ctx.request);
            let { request } = ctx;
            let userId = "";
            let _startTime = Date.now();
            // return next();
            try {
                yield next();
                userId = (ctx.state.useInfo && ctx.state.useInfo.userId) || "";
            }
            catch (error) {
                ctx.status = 500;
                log.error(error.name, "...", {
                    "pid": process.pid,
                    "uid": process.getuid(),
                    userId,
                    error: Object.assign({}, error),
                    time: Date.now() - _startTime + "ms"
                });
                ctx.throw(error.Message, 500);
                console.error(error);
            }
            finally {
                log[getLogLevel(ctx.status)]("request", "....", {
                    "pid": process.pid,
                    "uid": process.getuid(),
                    userId,
                    "req": {
                        "header": ctx.request.header,
                        "ip": request.ip,
                        "body": request.body,
                        "originalUrl": request.originalUrl,
                        "method": request.method
                    },
                    time: Date.now() - _startTime + "ms",
                    "res": {
                        "body": ctx.response.body
                    }
                });
            }
            // log[getLogLevel(ctx.status)]("request","....",{"header":ctx.request.header,"i
            // p":request.ip,"body":request.body,"originalUrl":request.originalUrl,"pid":proc
            // ess.pid,"uid":process.getuid()}); let info = {
            // "request":{"header":ctx.request.header,"ip":request.ip,"body":request.body,"or
            // iginalUrl":request.originalUrl,"pid":process.pid,"uid":process.getuid()},
            // "rev":{"status":ctx.status} }; console.log(JSON.stringify(info))
        });
    };
};
const getLogLevel = (statusCode = 200, defaultLevel = 'info') => {
    switch (parseInt((statusCode / 100).toString(), 10)) {
        case 5:
            return 'error';
        case 4:
            return 'warn';
        default:
            return defaultLevel;
    }
};
exports.default = logger;
// module.exports = logger; 


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Item = __webpack_require__(18);
// let timing = new Timing();
function default_1() {
    Item.getWeiXinInfo();
    return "";
}
exports.default = default_1;


/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-form-data");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = {
    "json": {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    "form-data": {
        'Accept': 'application/json',
    }
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const redis_1 = __webpack_require__(11);
class RedisData {
    constructor(key) {
        this.key = key;
        this.init();
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            this.data = JSON.stringify(yield this.dataGetFromRedis());
            return this.data;
        });
    }
    dataGetFromRedis() {
        return __awaiter(this, void 0, void 0, function* () {
            // this.data =  await redis.get(this.key);
            return yield redis_1.default.get(this.key);
        });
    }
    getData() {
        return this.data;
    }
    saveData(data) {
        return __awaiter(this, void 0, void 0, function* () {
            let _this = this;
            return redis_1.default.set(this.key, JSON.stringify(data)).then((err, data) => {
                console.log("xxxx", err, data);
                return _this.init();
            });
            // redis.expire(key,config.redis.expiration);
        });
    }
    getDataAsync() {
        return __awaiter(this, void 0, void 0, function* () {
            // let result = redis.get(this.key).then((err,reuslt)=>{
            //     console.log("-------")
            //     console.info(err)
            //     console.info(reuslt)
            // })
            let result = JSON.parse(yield redis_1.default.get(this.key));
            return result;
        });
    }
}
exports.default = RedisData;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const fetch_1 = __webpack_require__(2);
const config_1 = __webpack_require__(0);
const config = config_1.default.routes.weixin;
const WeixinConfig = config_1.default.weixins;
const fetch = new fetch_1.default(config.domain, config.timeout);
fetch.setDomain(config.domain);
fetch.setTimeout(config.timeout);
//const result:Result = new Result();
exports.all = function (url, param) {
    return __awaiter(this, void 0, void 0, function* () {
        // let result:Result = new Result();
        url = url.replace(config.prefix, "");
        let urlConfig = config.routes[url];
        let urlFetch = urlConfig["url"];
        let result = yield fetch.getData(urlFetch, param, urlConfig.method).catch((err) => {
            return { "errcode": 111111, "errmsg": "自定义错误，访问失败!" + JSON.stringify(err) };
        });
        console.log("访问微信结果为", result);
        return result;
    });
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const result_1 = __webpack_require__(1);
let result = new result_1.default();
const getToken = function (ctx) {
    return ctx
        .cookies
        .get("token") || ("production" === "development" && ctx.request.headers.token);
};
const GateWay = function (ctx, next) {
    return __awaiter(this, void 0, void 0, function* () {
        // tianxia  diyi;
        // let {url} = ctx;
        // url = url.split("?")[0];
        // let info = config.gateway.routes[url] || undefined;
        // //强制拦截  禁止接口
        // if (info && info.isGreatWall === true) {
        //     ctx.body = result.error(101);
        //     return
        // }
        // //强制拦截 no token链接
        // if ((info === undefined || info.isLogin !== false) && getToken(ctx) == undefined) {
        //     ctx.body = result.error(200);
        //     return
        // }
        yield next();
    });
};
function default_1() {
    return GateWay;
}
exports.default = default_1;
;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
let routers_qbii = __webpack_require__(33);
let routers_good = __webpack_require__(36);
let routers_sys = __webpack_require__(38);
let routers_item = __webpack_require__(41);
let routers_item_uc = __webpack_require__(43);
let routers_weixin = __webpack_require__(46);
let routes = [
    routers_qbii,
    routers_good,
    routers_sys,
    routers_item,
    routers_item_uc,
    routers_weixin
];
module.exports = routes;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Router = __webpack_require__(4);
const config_1 = __webpack_require__(0);
const config = config_1.default.routes.qbii;
console.log(config);
const router = new Router();
router.prefix(config.prefix);
const user_1 = __webpack_require__(34);
const all_1 = __webpack_require__(35);
//router.get("/user/userId",login);
router.post("/news/isFinishNews", user_1.isFinishNews);
// console.log("xxxx",getUserLevel);
// router.post("/v1/user/getUserLevel",getUserLevel);
const routes = config.routes;
for (var key in routes) {
    router.all(key, all_1.all);
}
//router.all(new RegExp('^'+config.prefix.replace(/\//g,"\\/")+'(?:\/|$)'),all); 
module.exports = router;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const result_1 = __webpack_require__(1);
const fetch_1 = __webpack_require__(2);
const config_1 = __webpack_require__(0);
const config = config_1.default.routes.qbii;
const fetch = new fetch_1.default(config.domain, config.timeout);
fetch.setDomain(config.domain);
fetch.setTimeout(config.timeout);
exports.login = function (ctx, next) {
    //console.log("userId:",ctx.state.userInfo.userId);
    let result = new result_1.default();
    let { userId } = ctx.state.userInfo;
    return fetch.getData("/api/user/" + userId + "/userId", {}, "GET").then((data) => {
        result.success(data);
        ctx.body = result.getValue();
    });
};
exports.news = function (ctx, next) {
    let result = new result_1.default();
    console.log("userId:", ctx.state.userInfo.userId);
    return fetch.getData("/api/news/getNewsList.html", {}, "GET").then((data) => {
        result.success(data);
        ctx.body = result.getValue();
    });
};
exports.isFinishNews = function (ctx, next) {
    let result = new result_1.default();
    console.log("userId:", ctx.state.userInfo.userId);
    return fetch.getData("/api/news/isFinishNews.html", {}, "POST").then((data) => {
        result.success(data);
        ctx.body = result.getValue();
    });
};
// export const getUserLevel = function(ctx,next){
// 	//console.log("userId:",ctx.state.userInfo.userId);
// 	let result:Result = new Result();
// 	let {userId} = ctx.request.body;
// 	//console.log(param);
// 	//"url": "/api/user/${userId}/level",
// 	return fetch.getData("/api/user/"+userId+"/level",{},"GET").then((data:any)=>{
// 		if(data.returnCode===0){
// 			result.success(data.data);
// 			ctx.body=result.getValue();
// 		}else{
// 			ctx.body = result.error(data.returnCode,data.message);
// 		}
// 	})
// }; 


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const result_1 = __webpack_require__(1);
const fetch_1 = __webpack_require__(2);
const lodash_1 = __webpack_require__(3);
const config_1 = __webpack_require__(0);
const config = config_1.default.routes.qbii;
const fetch = new fetch_1.default(config.domain, config.timeout);
fetch.setDomain(config.domain);
fetch.setTimeout(config.timeout);
//const result:Result = new Result();
exports.all = function (ctx, next) {
    let result = new result_1.default();
    let { method, header } = ctx.request;
    let url = ctx._matchedRoute;
    // let {userId} = ctx;
    let { userId } = ctx.state.userInfo || { userId: "" };
    let param = (method === "GET" ? (ctx.request.query) : (ctx.request.body || ctx.request.fields)) || {};
    let params = ctx.params || {};
    url = url.replace(config.prefix, "");
    let urlFetch = config.routes[url]["url"];
    var compiled = lodash_1.template(urlFetch);
    urlFetch = compiled(Object.assign({}, { userId }, param, params));
    // console.log("urlFetch:"+urlFetch)
    console.log("url:" + urlFetch);
    console.dir(param);
    if (urlFetch) {
        return fetch.getData(urlFetch, param, method).then((data) => {
            if (data && data.returnCode === 0) {
                result.success(data.data);
                ctx.body = result.getValue();
            }
            else if (!data) {
                result.error(500);
                ctx.body = result.getValue();
            }
            else {
                result.error(data.returnCode, data.message);
                ctx.body = result.getValue();
            }
        }).catch((error) => {
            console.log(error);
        });
    }
    else {
        result.error(404);
        ctx.body = result.getValue();
    }
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Router = __webpack_require__(4);
const config_1 = __webpack_require__(0);
const config = config_1.default.routes.good;
const router = new Router();
router.prefix(config.prefix);
const user_1 = __webpack_require__(37);
router.all("/user/userId", user_1.login);
module.exports = router;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const result_1 = __webpack_require__(1);
const fetch_1 = __webpack_require__(2);
const token_1 = __webpack_require__(6);
const verifyUser_1 = __webpack_require__(5);
const config_1 = __webpack_require__(0);
const moment = __webpack_require__(7);
const tokenHelp = new token_1.default();
const verifyUser = new verifyUser_1.default();
const config = config_1.default.routes.good;
const SSO = config_1.default.SSO;
const fetch = new fetch_1.default(config.domain, config.timeout);
fetch.setDomain(config.domain);
fetch.setTimeout(config.timeout);
exports.login = function (ctx, next) {
    let result = new result_1.default();
    console.log("userId:", ctx.state.userInfo.userId);
    return fetch.getData("/api/news/getNewsList.html", {}, "GET").then((data) => {
        result.success(data);
        ctx.body = result.getValue();
    });
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Router = __webpack_require__(4);
const config_1 = __webpack_require__(0);
const config = config_1.default.routes.sys;
const router = new Router();
router.prefix(config.prefix);
const login_1 = __webpack_require__(39);
router.all("/account4Client/login", login_1.login);
const qbiiExc_1 = __webpack_require__(40);
//特意为qbii客户端修改的
router.post("/news/isFinishNews.html", qbiiExc_1.isFinishNews);
module.exports = router;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const result_1 = __webpack_require__(1);
const fetch_1 = __webpack_require__(2);
const token_1 = __webpack_require__(6);
const verifyUser_1 = __webpack_require__(5);
const config_1 = __webpack_require__(0);
const moment = __webpack_require__(7);
const tokenHelp = new token_1.default();
const verifyUser = new verifyUser_1.default();
const config = config_1.default.routes.sys;
const SSO = config_1.default.SSO;
const fetch = new fetch_1.default(config.domain, config.timeout);
fetch.setDomain(config.domain);
fetch.setTimeout(config.timeout);
exports.login = function (ctx, next) {
    return __awaiter(this, void 0, void 0, function* () {
        let result = new result_1.default();
        // let token = verifyUser.getToken(ctx);
        let isLogin = yield verifyUser.verifyToken(ctx);
        if (isLogin) {
            ctx.body = {
                "responseCode": 1000
            };
            return;
        }
        return smallLogin(ctx, next);
        // return verifyUser.verifyToken(token).then((info)=>{
        // 	if(SSO===true){
        // 		ctx.body={
        // 			"responseCode": 1000
        // 		}
        // 	}else{
        // 		return smallLogin(ctx,next);
        // 	}
        // }).catch(()=>{
        // 	return smallLogin(ctx,next);
        // })
    });
};
const smallLogin = function (ctx, next) {
    let searchParam = ctx.request.body;
    console.log("?", searchParam);
    let result = new result_1.default();
    if (!searchParam.st) {
        result.error(404);
        ctx.body = result.getValue();
        return;
    }
    return fetch.getData("/api/account4Client/login", searchParam, "POST", {}, "form-data").then((data) => {
        if (data.responseCode === 1000) {
            let userId = data.data.userId;
            let token = tokenHelp.build(data.data.userId);
            // verifyUser.saveData(token,userId);
            verifyUser.saveTokenInfo(verifyUser.getTokenKey(ctx), token, { userId }, userId);
            verifyUser.setCookie(ctx, "token", token, userId);
            ctx.body = data;
        }
        else {
            ctx.body = data;
        }
        //result.success({});
    });
};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const result_1 = __webpack_require__(1);
const fetch_1 = __webpack_require__(2);
const config_1 = __webpack_require__(0);
const config = config_1.default.routes.qbii;
const fetch = new fetch_1.default(config.domain, config.timeout);
fetch.setDomain(config.domain);
fetch.setTimeout(config.timeout);
exports.isFinishNews = function (ctx, next) {
    let result = new result_1.default();
    console.log("userId:", ctx.state.userInfo.userId);
    return fetch.getData("/api/news/isFinishNews.html", {}, "POST").then((data) => {
        //result.success(data);
        //ctx.body=result.getValue();
        ctx.body = data;
    });
};
// mqbii.com/api/news/isFinishNews.html
// mqbii.com/api/news/isFinishNews.html
//   mqbii.com/api/qbii/news/isFinishNews    


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Router = __webpack_require__(4);
const config_1 = __webpack_require__(0);
const config = config_1.default.routes.item;
const router = new Router();
//  ctx._matc
// router.use((ctx,next)=>{
//     console.error("-----------------")
//     return next();
// });
router.prefix(config.prefix);
const User = __webpack_require__(18);
const all_1 = __webpack_require__(42);
router.get("/user/checkLogin", User.checkLogin);
const routes = config.routes;
for (var key in routes) {
    router.all(key, all_1.all);
}
router.get("/user/login", User.login);
router.get("/weixin/info", User.getWXInfo);
// router.get("/user/info",User.getUserInfo);
module.exports = router;


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const result_1 = __webpack_require__(1);
const fetch_1 = __webpack_require__(2);
const config_1 = __webpack_require__(0);
const lodash_1 = __webpack_require__(3);
const config = config_1.default.routes.item;
const fetch = new fetch_1.default(config.domain, config.timeout);
fetch.setDomain(config.domain);
fetch.setTimeout(config.timeout);
//const result:Result = new Result();
exports.all = function (ctx, next) {
    let result = new result_1.default();
    let { method, header } = ctx.request;
    let url = ctx._matchedRoute;
    let { userId } = ctx.state.userInfo || { userId: "" };
    let param = (method === "GET" ? (ctx.request.query) : (ctx.request.body || ctx.request.fields)) || {};
    let params = ctx.params || {};
    url = url.replace(config.prefix, "");
    let urlFetch = config.routes[url]["url"];
    var compiled = lodash_1.template(urlFetch);
    urlFetch = compiled(Object.assign({}, { userId }, param, params));
    // console.log("urlFetch:"+urlFetch)
    console.log("url:" + urlFetch);
    if (urlFetch) {
        return fetch.getData(urlFetch, param, method).then((data) => {
            if (data && data.responseCode === 1000) {
                result.success(data.data);
                ctx.body = result.getValue();
            }
            else if (!data) {
                result.error(500);
                ctx.body = result.getValue();
            }
            else {
                result.error(data.responseCode, data.message);
                ctx.body = result.getValue();
            }
        }).catch((error) => {
            console.log(error);
        });
    }
    else {
        result.error(404);
        ctx.body = result.getValue();
    }
};


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Router = __webpack_require__(4);
const config_1 = __webpack_require__(0);
const config = config_1.default.routes.itemUC;
const router = new Router();
router.prefix(config.prefix);
const User = __webpack_require__(44);
const all_1 = __webpack_require__(45);
router.get("/user/checkLogin", User.checkLogin);
const routes = config.routes;
for (var key in routes) {
    router.all(key, all_1.all);
}
router.get("/user/login", User.login);
router.get("/weixin/info", User.getWXInfo);
// router.get("/user/info",User.getUserInfo);
module.exports = router;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const result_1 = __webpack_require__(1);
const fetch_1 = __webpack_require__(2);
const interface_1 = __webpack_require__(13);
const verifyUser_1 = __webpack_require__(5);
const token_1 = __webpack_require__(6);
const config_1 = __webpack_require__(10);
const config_2 = __webpack_require__(0);
const logger_1 = __webpack_require__(8);
const config = config_2.default.routes.itemUC;
const fetch = new fetch_1.default(config.domain, config.timeout);
fetch.setDomain(config.domain);
fetch.setTimeout(config.timeout);
const tokenHelp = new token_1.default();
const verifyUser = new verifyUser_1.default(true);
let weixin = new interface_1.default("item");
/**
 * 微信用户登录
 * @param ctx
 * @param next
 */
exports.loginx = function (ctx, next) {
    return __awaiter(this, void 0, void 0, function* () {
        ctx.cookies.set('name', 'tobi', { signed: true });
        ctx.body = {};
        return;
    });
};
exports.login = function (ctx, next) {
    return __awaiter(this, void 0, void 0, function* () {
        let result = new result_1.default();
        let { code } = ctx.query;
        // console.info()
        let isLogin = yield verifyUser.verifyToken(ctx);
        if (isLogin) {
            ctx.body = result.success({});
            return;
        }
        let re = yield weixin.userTokenGet(code);
        // ctx.body = re;
        if (re && re.errcode == undefined) {
            //access_token  refresh_token  openid
            let userInfo = {};
            let resultRefresh = yield weixin.userTokenRefresh(re.refresh_token);
            //resultRefresh.openid
            let reUserInfo = yield verifyUser.getTokenInfoByKey(resultRefresh.openid, ctx);
            if (reUserInfo) {
                verifyUser.setCookie(ctx, "token", reUserInfo.token, reUserInfo.openid);
                // verifyUser.setCookie(ctx, "token", reUserInfo.token, reUserInfo.userId);
                ctx.body = result.success({});
                return;
            }
            // let guanzhuUserInfo: any = await weixin.userInfoGetByGuanZhu(resultRefresh.openid);
            let shouquanUserInfo = yield weixin.userInfoGet(resultRefresh.openid, resultRefresh.access_token);
            // userInfo = guanzhuUserInfo;
            // if(guanzhuUserInfo.errcode==undefined&&guanzhuUserInfo.subscribe===0){
            //     //没有关注
            //     userInfo = shouquanUserInfo;
            //     if(shouquanUserInfo.errcode&&shouquanUserInfo.errcode===48001){
            //         //没有授权
            //         ctx.body = result.error(201,"此用户未关注,也没有授权，需要跳转到授权界面");
            //         return;
            //     }
            // };
            userInfo = shouquanUserInfo;
            let jgUserInfo = yield exports.sendUserInfo(resultRefresh.openid, resultRefresh.access_token, userInfo);
            // console.log(jgUserInfo, "\n",guanzhuUserInfo);userInfo.openid
            // let jgUserInfo ="xxxxxxxxx";
            if (jgUserInfo && resultRefresh.openid) {
                // if (userInfo.openid && resultRefresh.openid) {
                //    verifyUser.
                let { userId } = { userId: jgUserInfo };
                let token = tokenHelp.build(userId);
                // verifyUser.saveData(token,userId);
                verifyUser.saveTokenInfo(verifyUser.getTokenKey(ctx), token, Object.assign({ openid: resultRefresh.openid, access_token: resultRefresh.access_token }, { userId }), resultRefresh.openid);
                yield verifyUser.setCookie(ctx, "token", token, resultRefresh.openid);
                ctx.body = result.success({});
            }
            else {
                logger_1.default.error("用户登录失败", "", {
                    resultRefresh: resultRefresh,
                    userInfo: jgUserInfo
                });
                result.success(userInfo);
                ctx.body = result.error(1, "获取用户信息失败");
            }
            // console.log("resultRefresh", resultRefresh)
            // console.log("userInfo", userInfo)
        }
        else {
            logger_1.default.error("根据code获取微信用户token失败", "", { re });
            ctx.body = result.error(1, "获取用户信息失败");
        }
    });
};
exports.sendUserInfo = (openid, access_token, userInfo) => __awaiter(this, void 0, void 0, function* () {
    // let result:Result = new Result();
    ///user/getUserId?openid=ofrn10wNPOGlmHgv3G0ivs9i_KVM
    // let result: any = await fetch.getData("/user/getUserId", { openid, access_token }, "GET");
    //let result: any = await fetch.getData("/user/getUserId", { openid }, "GET");
    let result = yield fetch.getData("/user/postWxUser", userInfo, "POST");
    if (result && result.responseCode === 1000) {
        return result.data;
    }
    else {
        return false;
    }
    //{responseCode:0,"data":1234567}
});
exports.getWXInfo = function (ctx, next) {
    return __awaiter(this, void 0, void 0, function* () {
        let info = yield weixin.infoGet();
        let result = new result_1.default();
        ctx.body = result.success({
            appid: info.appid
        });
    });
};
/**
 * 获取用户详情
 * @param ctx
 * @param next
 */
// export const getUserInfo = async (ctx, next) => {
//     let result = new Result();
//     let { openid, access_token } = ctx.state.userInfo;
//     let info = await sendUserInfo(openid, access_token);
//     if (info) {
//         ctx.body = result.success(info);
//         return;
//     }
//     ctx.body = result.error(1, "呵呵 ");
// }
exports.getWeiXinInfo = () => __awaiter(this, void 0, void 0, function* () {
    let data = yield fetch.getData("/config/wxConfig", {}, "GET");
    if (data && data.responseCode === 1000) {
        let configHelp = new config_1.default();
        configHelp.saveWeiXinInfo("item", {
            appid: data.data.appID,
            secret: data.data.appSecret,
            access_token: data.data.accessToken,
            jsapi_ticket: data.data.jsapiTicket,
        });
        return true;
    }
    else {
        console.log("获取 有好物的微信配置异常...", data);
    }
    return false;
});
exports.checkLogin = function (ctx, next) {
    let result = new result_1.default();
    ctx.body = result.success({});
};
// export  


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const result_1 = __webpack_require__(1);
const fetch_1 = __webpack_require__(2);
const config_1 = __webpack_require__(0);
const lodash_1 = __webpack_require__(3);
const config = config_1.default.routes.itemUC;
const fetch = new fetch_1.default(config.domain, config.timeout);
fetch.setDomain(config.domain);
fetch.setTimeout(config.timeout);
//const result:Result = new Result();
exports.all = function (ctx, next) {
    let result = new result_1.default();
    let { method, header } = ctx.request;
    let url = ctx._matchedRoute;
    let { userId } = ctx.state.userInfo || { userId: "" };
    let param = (method === "GET" ? (ctx.request.query) : (ctx.request.body || ctx.request.fields)) || {};
    let params = ctx.params || {};
    url = url.replace(config.prefix, "");
    let urlFetch = config.routes[url]["url"];
    var compiled = lodash_1.template(urlFetch);
    urlFetch = compiled(Object.assign({}, { userId }, param, params));
    // console.log("urlFetch:"+urlFetch)
    console.log("url:" + urlFetch);
    if (urlFetch) {
        return fetch.getData(urlFetch, param, method).then((data) => {
            if (data && data.responseCode === 1000) {
                result.success(data.data);
                ctx.body = result.getValue();
            }
            else if (!data) {
                result.error(10010, "后台无返回值！！！");
                ctx.body = result.getValue();
            }
            else {
                result.error(data.responseCode, data.message);
                ctx.body = result.getValue();
            }
        }).catch((error) => {
            console.log(error);
        });
    }
    else {
        result.error(404);
        ctx.body = result.getValue();
    }
};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Router = __webpack_require__(4);
const config_1 = __webpack_require__(0);
const config = config_1.default.routes.weixin;
const router = new Router();
router.prefix(config.prefix);
const external = __webpack_require__(47);
router.post("/info/:channel", external.setConfig);
router.get("/js/info/:channel", external.getJsInfo);
// router.get("/info/appid",)
// import {login} from "./user";
// import {all} from "./all";
// const routes = config.routes;
// for(var key in routes){
//     router.all(key, all);
// }
// router.get("/user/login",login);
module.exports = router;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const sign_1 = __webpack_require__(48);
const config_1 = __webpack_require__(10);
const result_1 = __webpack_require__(1);
const verifyEntity_1 = __webpack_require__(49);
const secret_1 = __webpack_require__(50);
const interface_1 = __webpack_require__(13);
const _ = __webpack_require__(3);
let configHelp = new config_1.default();
let secret = new secret_1.default();
/**
 * 生成微信配置信息
 */
const buildConfig = (key, info = { appid: "", secre: "", access_token: "", jsTicket: "" }) => {
    configHelp.saveWeiXinInfo(key, info);
};
/**
 * jsticker加密
 */
exports.buildJsTicket = (key, url) => __awaiter(this, void 0, void 0, function* () {
    // return 
});
const key = "天下第一!!!!";
const encrypt = function (param) {
    let newParams = Object.assign({}, param);
    delete newParams.secret_node;
    let content = JSON.stringify(newParams);
    let encryptcontent = secret.encryptMd5Normal(content, key);
    return encryptcontent === param.secret_node ? true : false;
};
exports.setConfig = (ctx, next) => __awaiter(this, void 0, void 0, function* () {
    // 
    let result = new result_1.default();
    let param = ctx.request.body;
    let params = ctx.params;
    let verify = verifyEntity_1.default(param, {
        access_token: "", appid: "", jsapi_ticket: "", secret: "", time: "", secret_node: ""
    });
    let weixin = new interface_1.default(params.channel);
    let userInfo = yield weixin.ticketJsGet();
    console.log(userInfo);
    if (_.isObject(verify) && params.channel) {
        //加密计算
        let enReuslt = encrypt(verify);
        if (enReuslt !== true) {
            ctx.body = result.error(1, "呵呵，你加密错了！");
            return false;
        }
        let weixin = new interface_1.default(params.channel);
        let isRight = yield weixin.verify(verify["access_token"]);
        if (isRight) {
            let weixinInfo = (yield configHelp.getWeiXinInfo(params.channel)) || {};
            configHelp.saveWeiXinInfo(params.channel, Object.assign(weixinInfo, verify));
            ctx.body = result.success({});
        }
        else {
            ctx.body = result.error(1, "呵呵！你配置错了");
        }
    }
    else {
        ctx.body = result.error(1, verify.toString());
    }
});
exports.getJsInfo = (ctx, next) => __awaiter(this, void 0, void 0, function* () {
    let result = new result_1.default();
    let param = ctx.query;
    let params = ctx.params;
    let verify = verifyEntity_1.default(param, {
        url: ""
    });
    if (_.isObject(verify) && params.channel) {
        let url = verify.url.substr(0, verify.url.indexOf("#"));
        let weixinInfo = yield configHelp.getWeiXinInfo(params.channel);
        let temp = sign_1.default(weixinInfo.jsapi_ticket, param.url);
        console.info(temp);
        ctx.body = result.success(Object.assign(temp, {
            appid: weixinInfo.appid
        }));
    }
    else {
        ctx.body = result.error(1, verify.toString());
    }
    //jsapi_ticket, url
});
// export const getInfo = async(ctx,next)=>{
//     let result:Result = new Result();
//     let param = ctx.query;
//     let params = ctx.params;
//     let verify:any = verifyEntity(param,{
//         url:""
//     });
//     if(_.isObject(verify)&&params.channel){
//         let url = verify.url.substr(0,verify.url.indexOf("#"))
//         let weixinInfo:any  = await configHelp.getWeiXinInfo(params.channel);
//         let temp = Sign(weixinInfo.jsapi_ticket,param.url);
//         console.info(temp)
//         ctx.body = result.success(Object.assign(temp,{
//             appid:weixinInfo.appid
//         }))
//     }else{
//         ctx.body = result.error(1,verify.toString());
//     }
//     //jsapi_ticket, url
// } 


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const crypto = __webpack_require__(12);
var createNonceStr = function () {
    return Math.random().toString(36).substr(2, 15);
};
var createTimestamp = function () {
    return parseInt((new Date().getTime() / 1000).toString()) + '';
};
var raw = function (args) {
    var keys = Object.keys(args);
    keys = keys.sort();
    var newArgs = {};
    keys.forEach(function (key) {
        newArgs[key.toLowerCase()] = args[key];
    });
    var string = '';
    for (var k in newArgs) {
        string += '&' + k + '=' + newArgs[k];
    }
    string = string.substr(1);
    return string;
};
/**
* @synopsis 签名算法
*
* @param jsapi_ticket 用于签名的 jsapi_ticket
* @param url 用于签名的 url ，注意必须动态获取，不能 hardcode
*
* @returns
*/
var sign = function (jsapi_ticket, url) {
    var ret = {
        jsapi_ticket: jsapi_ticket,
        nonceStr: createNonceStr(),
        timestamp: createTimestamp(),
        url: url
    };
    var string = raw(ret);
    var sha1 = crypto.createHash('sha1');
    sha1.update(string);
    //  sha1.digest('hex');
    ret.signature = sha1.digest('hex');
    //   var  jsSHA = require('jssha');
    //  var   shaObj = new jsSHA(string, 'TEXT');
    // ret.signature = shaObj.getHash('SHA-1', 'HEX');
    return ret;
};
exports.default = sign;


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function default_1(ins, bases) {
    let errors = [];
    let newObj = {};
    let result = true;
    for (let key in bases) {
        if (ins[key] == undefined) {
            errors.push(key);
            result = false;
        }
        else {
            newObj[key] = ins[key];
        }
    }
    return result ? newObj : errors.join(" 不能为空 ,") + " 不能为空";
}
exports.default = default_1;


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const crypto = __webpack_require__(12);
const moment = __webpack_require__(7);
const key = "密码加密啦，呵呵哒，ll|~";
class Secret {
    constructor() {
    }
    encrypt(password, hasTime = false) {
        let content = password + (hasTime === true ? moment().format("YYYY-MM-DD hh:mm:ss:SSS") : "");
        let hash = crypto
            .createHmac('md5', key)
            .update(content)
            .digest('hex');
        return hash;
    }
    encryptMd5Normal(content, key) {
        console.log("加密内容:" + content);
        console.log("加密key:" + key);
        let hash = crypto
            .createHmac('md5', key)
            .update(content, "utf8")
            .digest('hex');
        // console.dir(hash)
        console.log("加密成啥样:" + hash);
        return hash;
    }
}
exports.default = Secret;


/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = require("koa-convert");

/***/ })
/******/ ]);
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = require("lodash");
//import {FormData} from 'whatwg-fetch'
require("isomorphic-fetch");
var FormData = require('isomorphic-form-data');
var Fetch = (function () {
    function Fetch(domain, timeout) {
        if (timeout === void 0) { timeout = 5000; }
        this.headers = {
            'charset': 'utf-8',
            'client_version': "1.0",
            'channel': 'node'
        };
        this.domain = domain;
        this.timeout = timeout;
    }
    Fetch.prototype.setDomain = function (domain) {
        this.domain = domain;
    };
    Fetch.prototype.setTimeout = function (timeout) {
        this.timeout = timeout;
    };
    //设置头部信息
    Fetch.prototype.setHeaders = function (headers) {
        if (headers === void 0) { headers = { 'client_version': "1.0", 'channel': 'node' }; }
        this.headers = Object.assign({
            'charset': 'utf-8',
            'client_version': "1.0",
            'channel': 'node'
        }, headers);
    };
    //设置版本号
    Fetch.prototype.setVersion = function (version) {
        this.headers['client_version'] = version;
    };
    Fetch.prototype.getData = function (url, param, type, headers, repType, timeout) {
        if (param === void 0) { param = {}; }
        if (type === void 0) { type = "GET"; }
        if (repType === void 0) { repType = "json"; }
        type = type.toLocaleUpperCase();
        if (type === "GET" && lodash_1.size(param) > 0) {
            url += "?" + toExcString(param);
        }
        headers = getHeadersByRepType(repType, Object.assign({}, this.headers, headers));
        // console.log(headers);
        var body = getDataByRepType(repType, param);
        return timeoutPromise(timeout || this.timeout, fetch(this.domain + url, {
            method: type,
            headers: headers,
            //credentials: 'same-origin',
            body: (type === "GET"
                ? undefined
                : body)
        }).then(function (res) {
            return res.json();
        }).catch(function (e) {
            console.log(e);
        }));
    };
    return Fetch;
}());
var Headers = require("./headers");
var getHeadersByRepType = function (repType, headers) {
    return Object.assign({}, headers, Headers[repType]);
};
//根据请求类型，获取请求数据
var getDataByRepType = function (repType, param) {
    var body;
    switch (repType) {
        case "json":
            body = JSON.stringify(param);
            break;
        case "form-data":
            body = new FormData();
            for (var key in param) {
                body.append(key, param[key]);
            }
            break;
        default:
            body = param;
            break;
    }
    return body;
};
var timeoutPromise = function (ms, promise) {
    return new Promise(function (resolve, reject) {
        var timeoutId = setTimeout(function () {
            reject(new Error("promise timeout"));
        }, ms);
        promise.then(function (res) {
            clearTimeout(timeoutId);
            resolve(res);
        }, function (err) {
            clearTimeout(timeoutId);
            reject(err);
        });
    });
};
var toExcString = function (array, type) {
    if (type === void 0) { type = {
        ":": "=",
        ",": "&"
    }; }
    var result = "";
    for (var temp in array) {
        result += temp + '=' + encodeURI(array[temp]) + "&";
    }
    return result.substring(-1, result.length - 1);
};
exports.default = Fetch;

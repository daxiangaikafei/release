"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var redis_1 = require("./help/redis");
var token_1 = require("./help/token");
var result_1 = require("./help/result");
var moment = require("moment");
var result = new result_1.default();
var config = require("./../config/index");
var IgnoreUrls = config.ignoreUrls;
var format = "YYYY-MM-DD hh:mm:ss:SSS";
var tokenHelp = new token_1.default();
var env = process.env.NODE_ENV || 'development';
var SSO = config.SSO;
var VerifyUser = (function () {
    function VerifyUser() {
        this.verify = this.verify.bind(this);
    }
    VerifyUser.prototype.setCookie = function (ctx, key, token, userId) {
        ctx.cookies.set(key, (SSO === true ? (token + userId) : token), config.cookie); //LocalConfig.cookie  {"signed":true}  config.cookie
    };
    VerifyUser.prototype.getCookie = function (ctx) {
    };
    //存入 redis token userId now
    VerifyUser.prototype.saveData = function (token, userId) {
        var data = {
            token: token,
            userId: userId,
            date: moment().format(format)
        };
        console.log("保存token", JSON.stringify(data));
        var key = config.redis.tokenKey + ":" + (SSO === true ? userId : token);
        redis_1.default.set(key, JSON.stringify(data));
        redis_1.default.expire(key, config.redis.expiration);
        //redis.set(config.redis.tokenKey+":"+userId,JSON.stringify(data));
    };
    VerifyUser.prototype.getData = function (key) {
        console.log("查询" + config.redis.tokenKey + ":" + key);
        return redis_1.default.get(config.redis.tokenKey + ":" + key);
    };
    //判断是否有大登录的ST  是够有token  和token是否失效
    VerifyUser.prototype.verifyToken = function (token) {
        var _this = this;
        return new Promise(function (rev, reb) {
            if (!token) {
                reb();
            }
            _this.getData(token).then(function (result) {
                if (result) {
                    rev(JSON.parse(result));
                }
                else {
                    reb();
                }
                //return JSON.parse(result);
            });
        });
        // if(!token){
        //     return new Promise((rev,reb)=>{
        //         reb();
        //     })
        // }
        //let params = token.split(",");
        // return this.getData(params[1]).then(result=>{
        //         return JSON.parse(result);
        // })
        // return this.getData(token).then(result=>{
        //         return JSON.parse(result);
        // })
    };
    VerifyUser.prototype.next = function (next) {
        return next.then(function () {
        });
    };
    VerifyUser.prototype.getToken = function (ctx) {
        var token = ctx.cookies.get("token");
        if (!token && process.env.NODE_ENV === "development") {
            return ctx.request.headers.token || undefined;
        }
        return token;
    };
    VerifyUser.prototype.verify = function (ctx, next) {
        //查看url是否在 过滤名单里面  .split(",")[1]
        //let token = ctx.cookies.get("token");
        var token = this.getToken(ctx);
        var url = ctx.url;
        //console.log("url:"+ctx.request);
        url = url.split("?")[0];
        if (IgnoreUrls[url]) {
            return next();
        }
        if (token) {
            //console.log("token",token);
            return this.verifyToken(token).then(function (info) {
                //console.log("info"+":"+info);
                ctx.userId = info.userId;
                return next();
            }).catch(function () {
                result.error(200, "登录过期");
                ctx.body = result.getValue();
                return;
            });
        }
        else {
            result.error(200, "未登陆");
            ctx.body = result.getValue();
            return;
        }
    };
    return VerifyUser;
}());
exports.default = VerifyUser;

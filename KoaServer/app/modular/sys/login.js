"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var result_1 = require("./../../library/help/result");
var fetch_1 = require("./../../library/help/fetch");
var token_1 = require("./../../library/help/token");
var verifyUser_1 = require("./../../library/verifyUser");
var moment = require("moment");
var tokenHelp = new token_1.default();
var verifyUser = new verifyUser_1.default();
var LocalConfig = require("./../../config/index");
var config = LocalConfig.routes.sys;
var SSO = LocalConfig.SSO;
var fetch = new fetch_1.default(config.domain, config.timeout);
fetch.setDomain(config.domain);
fetch.setTimeout(config.timeout);
var result = new result_1.default();
exports.login = function (ctx, next) {
    var token = verifyUser.getToken(ctx);
    return verifyUser.verifyToken(token).then(function (info) {
        if (SSO === true) {
            ctx.body = {
                "responseCode": 1000
            };
        }
        else {
            return smallLogin(ctx, next);
        }
    }).catch(function () {
        return smallLogin(ctx, next);
    });
};
var smallLogin = function (ctx, next) {
    var searchParam = ctx.request.body;
    console.log("?", searchParam);
    return fetch.getData("/api/account4Client/login", searchParam, "POST", {}, "form-data").then(function (data) {
        if (data.responseCode === 1000) {
            var userId = data.data.userId;
            var token = tokenHelp.build(data.data.userId);
            verifyUser.saveData(token, userId);
            verifyUser.setCookie(ctx, "token", token, userId);
            ctx.body = data;
        }
        else {
            ctx.body = data;
        }
        //result.success({});
    });
};

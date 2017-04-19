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
var config = LocalConfig.routes.good;
var SSO = LocalConfig.SSO;
var fetch = new fetch_1.default(config.domain, config.timeout);
fetch.setDomain(config.domain);
fetch.setTimeout(config.timeout);
exports.login = function (ctx, next) {
    var result = new result_1.default();
    console.log("userId:", ctx.userId);
    return fetch.getData("/api/news/getNewsList.html", {}, "GET").then(function (data) {
        result.success(data);
        ctx.body = result.getValue();
    });
};

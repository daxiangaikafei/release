"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var result_1 = require("./../../library/help/result");
var fetch_1 = require("./../../library/help/fetch");
var LocalConfig = require("./../../config/index");
var config = LocalConfig.routes.qbii;
var fetch = new fetch_1.default(config.domain, config.timeout);
fetch.setDomain(config.domain);
fetch.setTimeout(config.timeout);
exports.login = function (ctx, next) {
    //console.log("userId:",ctx.userId);
    var result = new result_1.default();
    var userId = ctx.userId;
    return fetch.getData("/api/user/" + userId + "/userId", {}, "GET").then(function (data) {
        result.success(data);
        ctx.body = result.getValue();
    });
};
exports.news = function (ctx, next) {
    var result = new result_1.default();
    console.log("userId:", ctx.userId);
    return fetch.getData("/api/news/getNewsList.html", {}, "GET").then(function (data) {
        result.success(data);
        ctx.body = result.getValue();
    });
};

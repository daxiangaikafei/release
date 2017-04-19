"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var result_1 = require("./../../library/help/result");
var fetch_1 = require("./../../library/help/fetch");
var lodash_1 = require("lodash");
var LocalConfig = require("./../../config/index");
var config = LocalConfig.routes.qbii;
var fetch = new fetch_1.default(config.domain, config.timeout);
fetch.setDomain(config.domain);
fetch.setTimeout(config.timeout);
//const result:Result = new Result();
exports.all = function (ctx, next) {
    var result = new result_1.default();
    var _a = ctx.request, method = _a.method, header = _a.header;
    var url = ctx._matchedRoute;
    var userId = ctx.userId;
    var param = (method === "GET" ? (ctx.request.query) : (ctx.request.body || ctx.request.fields)) || {};
    var params = ctx.params || {};
    url = url.replace(config.prefix, "");
    var urlFetch = config.routes[url]["url"];
    var compiled = lodash_1.template(urlFetch);
    urlFetch = compiled(Object.assign({}, { userId: userId }, param, params));
    // console.log("urlFetch:"+urlFetch)
    console.log("url:" + urlFetch);
    console.dir(param);
    if (urlFetch) {
        return fetch.getData(urlFetch, param, method).then(function (data) {
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
        });
    }
    else {
        result.error(404);
        ctx.body = result.getValue();
    }
};

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = require("lodash");
var koa = require("koa");
var logger = require("koa-logger");
var body = require("koa-better-body");
var result_1 = require("./library/help/result");
var verifyUser_1 = require("./library/verifyUser");
//import * as onError    from 'koa-onerror'
var env = process.env.NODE_ENV || 'development';
var config = require("./../config/index");
var routers = require("./routes/index");
var result = new result_1.default();
var verifyUser = new verifyUser_1.default();
var app = new koa();
app.keys = ['im a newer secret', '你说是啥 就是啥，呵呵哒'];
app.use(logger()); //日志
var convert = require('koa-convert');
app.use(convert(body({
    querystring: require('qs')
}))); //表单什么数据转换 
// app.use(new CSRF({
//   invalidSessionSecretMessage: 'Invalid session secret',
//   invalidSessionSecretStatusCode: 403,
//   invalidTokenMessage: 'Invalid CSRF token',
//   invalidTokenStatusCode: 403,
//   excludedMethods: [ 'GET', 'HEAD', 'OPTIONS' ],
//   disableQuery: false
// })); //csrf公鸡
// winston.configure({
//     transports: [
//          new (winston.transports.Console)(),
//       new (winston.transports.File)({ filename: 'somefile.log' })
//     ]
//   });
// winston.add(winston.transports.File, { filename: 'somefile.log' });
//winston.remove(winston.transports.Console);
// winston.log('info', 'Hello distributed log files!');
//  winston.log('info', 'Test Log Message', { anything: 'This is metadata' });
//异常处理
app.context.onerror = function (err) {
    if (err == null) {
        return;
    }
    if (env === "development") {
        console.log(err);
    }
    result.error(500, "");
    this.res.end(JSON.stringify(result.getValue()));
    return;
};
app.use(verifyUser.verify);
/*处理  404   500  页面 */
app.use(function (ctx, next) {
    return next().then(function () {
        if (ctx.status !== 200) {
            result.error(ctx.status, "");
            ctx.body = result.getValue();
        }
        else {
            return;
        }
        //if (404 != ctx.status&& 500 != ctx.status) return; 
        // result.error(ctx.status,"");
        // ctx.body=result.getValue();
    }).catch(function (error) {
        console.error(error);
        result.error(1000, "超时");
        ctx.body = result.getValue();
    });
});
lodash_1.each(routers, function (router, index) {
    app.use(router.routes());
    app.use(router.allowedMethods());
});
app.listen(config.localServer.port);

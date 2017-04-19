"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Router = require("koa-router");
var LocalConfig = require("./../../config/index");
var config = LocalConfig.routes.qbii;
var router = new Router();
router.prefix(config.prefix);
var user_1 = require("./user");
var all_1 = require("./all");
router.get("/user/userId", user_1.login);
var routes = config.routes;
for (var key in routes) {
    router.all(key, all_1.all);
}
//router.all(new RegExp('^'+config.prefix.replace(/\//g,"\\/")+'(?:\/|$)'),all); 
module.exports = router;

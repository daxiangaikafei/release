"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var help = require("./../../help/index");
var result;
var config = help.envChange({
    "development": function () {
        result = require("./env/development");
        return result;
    },
    "production": function () {
        result = require("./env/development");
        return result;
    },
    "release": function () {
        result = require("./env/development");
        return result;
    }
});
module.exports = config;

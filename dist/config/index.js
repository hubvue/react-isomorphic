"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _path = require("path");

const config = {
  logDir: (0, _path.join)(__dirname, '..', `logs/log.log`),
  baseUrl: "http://jsonplaceholder.typicode.com",
  port: 8080,
  href: "127.0.0.1"
};
var _default = config;
exports.default = _default;
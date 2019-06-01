"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _SafeRequest = _interopRequireDefault(require("../utils/SafeRequest"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const safeRequest = new _SafeRequest.default();

class News {
  constructor() {}

  getData() {
    return safeRequest.fetch({
      url: "/posts",
      method: "GET"
    });
  }

}

var _default = News;
exports.default = _default;
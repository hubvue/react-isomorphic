"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _News = _interopRequireDefault(require("../models/News"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class NewsController {
  constructor() {
    this.news = new _News.default();
  }

  actionIndex() {
    return async ctx => {
      let data = await this.news.getData();
      ctx.body = data;
    };
  }

}

var _default = NewsController;
exports.default = _default;
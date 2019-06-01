"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _koaSimpleRouter = _interopRequireDefault(require("koa-simple-router"));

var _SSRController = _interopRequireDefault(require("../controllers/SSRController"));

var _NewsController = _interopRequireDefault(require("../controllers/NewsController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ssrController = new _SSRController.default();
const newsConroller = new _NewsController.default();

var _default = app => {
  app.use((0, _koaSimpleRouter.default)(_ => {
    _.get('/api/news', newsConroller.actionIndex()); //同构路由


    _.get("/", ssrController.render());

    _.get("/news", ssrController.render());
  }));
};

exports.default = _default;
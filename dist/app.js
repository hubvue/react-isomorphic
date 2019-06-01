"use strict";

var _koa = _interopRequireDefault(require("koa"));

var _koaStatic = _interopRequireDefault(require("koa-static"));

var _index = _interopRequireDefault(require("./routes/index"));

var _ErrorHandle = _interopRequireDefault(require("./middlewares/ErrorHandle"));

var _LogHandle = _interopRequireDefault(require("./middlewares/LogHandle"));

var _config = _interopRequireDefault(require("./config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const logHandle = (0, _LogHandle.default)();
const app = new _koa.default();
app.use((0, _koaStatic.default)('assets'));
(0, _index.default)(app);

_ErrorHandle.default.error(app, logHandle);

app.listen(_config.default.port, () => {
  console.log("server is running...");
});
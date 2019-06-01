"use strict";

var _log4js = _interopRequireDefault(require("log4js"));

var _config = _interopRequireDefault(require("../config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = () => {
  _log4js.default.configure({
    appenders: {
      cheese: {
        type: "file",
        filename: _config.default.logDir
      }
    },
    categories: {
      default: {
        appenders: ['cheese'],
        level: 'error'
      }
    }
  });

  return _log4js.default.getLogger('cheesse');
};
import log4js from "log4js";
import config from "../config";

module.exports = () =>{
    log4js.configure({
        appenders: {
            cheese: {
                type: "file",
                filename: config.logDir,
            }
        },
        categories: {
            default : {
                appenders: ['cheese'],
                level: 'error',
            }
        }
    });
    return log4js.getLogger('cheesse');
}
import Koa from "koa";
import staticFile from "koa-static";
import route from "./routes/index";
import ErrorHandle from "./middlewares/ErrorHandle";
import LogHandle from "./middlewares/LogHandle";
import config from "./config";
const logHandle = LogHandle();
const app = new Koa();

app.use(staticFile('assets'));
route(app);

ErrorHandle.error(app,logHandle);

app.listen(config.port,()=> {
    console.log("server is running...");
})


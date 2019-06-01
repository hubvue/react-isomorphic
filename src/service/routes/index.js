import route from "koa-simple-router";

import SSRController from "../controllers/SSRController";
import NewsConroller from "../controllers/NewsController";

const ssrController = new SSRController();
const newsConroller = new NewsConroller();
export default (app) => {
    app.use(route(_ => {
        _.get('/api/news', newsConroller.actionIndex());

        //同构路由
        _.get("/", ssrController.render());
        _.get("/news",ssrController.render())
    }))
}
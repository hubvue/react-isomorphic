import News from "../models/News";
class NewsController {
    constructor(){
        this.news = new News();
    }

    actionIndex(){
        return async ctx => {
            let data = await this.news.getData();
            ctx.body = data;
        }
    }
}

export default NewsController;
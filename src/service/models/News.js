import SafeRequest from "../utils/SafeRequest";
const safeRequest  =  new SafeRequest();
class News {
    constructor(){}

    getData(){
        return safeRequest.fetch({
            url:"/posts",
            method:"GET"
        })
    }
}

export default News;

//type
export const FETCH_NEWS_REQUEST = "FETCH_NEWS_REQUEST";
export const FETCH_NEWS_SUCCESS = "FETCH_NEWS_SUCCESS";
export const FETCH_NEWS_FAILURE = "FETCH_NEWS_FAILURE";

//action工厂
const actionFactory = (type) => (data) => ({
    type,
    data
});


export const receivedNews = actionFactory(FETCH_NEWS_SUCCESS);
export const newsError = actionFactory(FETCH_NEWS_FAILURE); 

export const fetchNews = () => (dispatch,getState) => {
    return fetch("http://127.0.0.1:8080/api/news")
                    .then(res => res.json())
                    .then(news => dispatch(receivedNews(news)))
                    .catch(err => dispatch(newsError(err)))
}
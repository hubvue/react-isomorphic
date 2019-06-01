import Home from "../components/Home";
import NewsList from "../containers/NewsList";
const routes = [
    {
        path: "/",
        component: Home,
        exact: true
    }, {
        path: "/news",
        component: NewsList,
    }
]

export default routes;
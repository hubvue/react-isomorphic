import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter, matchPath } from "react-router-dom";
import { Provider } from "react-redux";
import "isomorphic-fetch";
import fs from "fs";
import cheerio from "cheerio";
import App from "./web/App";
import routes from "./web/routes";
import serialize from "serialize-javascript";
import configurStore from "./web/store";

class SSRController {
    constructor() {
        this.renderToString = renderToString;
        this.routes = routes;
        this.serialize = serialize;
        this.store = configurStore();
        this.template = fs.readFileSync("assets/index.html");
        fs.unlinkSync("assets/index.html");
    }
    /**
     *获取Store
     *
     * @param {*} url
     * @returns
     * @memberof SSRController
     */
    getStore(url) {
        const promises = this.routes.reduce((acc, route) => {
            if (matchPath(url, route) && route.component && route.component.initialAction) {
                acc.push(Promise.resolve(this.store.dispatch(route.component.initialAction())));
            }
            return acc;
        }, [])
        return promises;
    }
    /**
     *使用renderToStirng方法在服务端渲染组件
     *
     * @param {*} url
     * @returns
     * @memberof SSRController
     */
    async getRenderToString(url) {
        await Promise.all(this.getStore(url));
        const context = {};
        const markHTML = this.renderToString(
            <Provider store={this.store}>
                <StaticRouter location={url} context={context}>
                    <App />
                </StaticRouter>
            </Provider>
        );
        return markHTML
    }
    /**
     *通过http请求返回html
     *
     * @returns
     * @memberof SSRController
     */
    render() {
        return async ctx => {
            const markHTML = await this.getRenderToString(ctx.url);
            const $ = cheerio.load(this.template);
            $("#react-root").html(markHTML);
            ctx.body = $.html();
        }
    }
}

export default SSRController;
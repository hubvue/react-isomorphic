import {join} from "path"
const config = {
    logDir : join(__dirname,'..',`logs/log.log`),
    baseUrl: "http://jsonplaceholder.typicode.com",
    port: 8080,
    href:"127.0.0.1",
}

export default config;
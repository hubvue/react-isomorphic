const { resolve } = require("path");
const merge = require("webpack-merge");
const {mode} = require("yargs-parser")(process.argv.splice(2));
const enviromConfig = require(`./webpack.${mode}.js`);
const config  = {
    entry: "./src/browser-entry.js",
    output: {
        path: resolve("dist/assets"),
        filename: "scripts/[name].js",
        publicPath: "/"
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
}

module.exports = merge([
    config,
    enviromConfig
])
const { resolve } = require("path");
const merge = require("webpack-merge")
const parts = require("./webpack.parts");

const nodeExternals = require("webpack-node-externals");
const config = {
    entry: "./src/server-entry.js",
    output: {
        path: resolve("dist"),
        filename: "controllers/SSRController.js",
        libraryTarget: "commonjs2",
    },
    target: "node",
    externals: [nodeExternals()],
    resolve: {
        extensions: ['.js', '.jsx']
    },
}
module.exports = merge([
    config,
    parts.loadJS({
        exclude: /(node_modules)/,
        options: {
            presets: ["@babel/preset-react"]
        }
    }),
    parts.loadImg({
        reg: /\.(svg|gif|jpe?g|png|css)$/,
        isWriteFile: false,
        publicPath: (url) => url.replace("assets", ""),
        name: "assets/images/[name].[ext]",
    })
])
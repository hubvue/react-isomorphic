const { resolve } = require("path");
const nodeExternals = require("webpack-node-externals");
module.exports = {
    entry: "./src/server-entry.js",
    output: {
        path: resolve("dist"),
        filename: "controllers/SSRController.js",
        libraryTarget: "commonjs2",
    },
    target: "node",
    externals: [nodeExternals()],
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-react']
                }
            },
            exclude: /(node_modules)/
        }, {
            test: /\.(svg|gif|jpe?g|png|css)$/,
            loader: "file-loader",
            options: {
                name: "assets/images/[name].[ext]",
                publicPath: (url) => url.replace("assets", ""),
                emitFile: false
            }
        }]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
}
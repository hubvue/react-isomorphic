/**
 * 加载js
 */
exports.loadJS = ({ exclude, include, options } = {}) => ({
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            use: {
                loader: "babel-loader",
                options,
            },
            exclude,
            include,
        }]
    }
})

/**
 * 开发环境加载css
 */
exports.loadCSS = ({ reg = /\.css$/, exclude, include, uses = [] } = {}) => ({
    module: {
        rules: [{
            test: reg,
            use: [{
                loader: "style-loader"
            }, {
                loader: "css-loader"
            }].concat(uses),
            exclude,
            include,
        }],

    }
})

/**
 * 生产环境加载CSS
 */
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
exports.minExtractCSS = ({ reg = /\.css$/, exclude, include, uses = [] } = {}) => ({
    module: {
        rules: [{
            test: reg,
            use: [{
                loader: MiniCssExtractPlugin.loader,
            }, {
                loader: "css-loader",
            }].concat(uses),
            exclude,
            include
        }]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "styles/[name]-[chunkhash:5].css",
            chunkFilename: "styles/[id]-[chunkhash:5].css"
        })
    ]
});

/**
 * 加载图片
 */
exports.loadImg = ({ reg = /\.(svg|gif|jpe?g|png)/, name = "images/[name].[ext]", isWriteFile = true, publicPath } = {}) => ({
    module: {
        rules: [{
            test: reg,
            loader: "file-loader",
            options: {
                name,
                publicPath,
                emitFile: isWriteFile,
            },
        }]
    }
})

/**
 * htmlWebpackPlugin插件
 */
const HtmlWebpackPlugin = require("html-webpack-plugin");
exports.htmlPlugin = (options = {}) => ({
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            ...options,
        })
    ]
})

/**
 * 
 * devServer的基础配置
 */
const webpack = require("webpack")
exports.devServe = ({ port = 8080, host = "127.0.0.1", options = {} } = {}) => ({
    devServer: {
        port,
        host,
        hot: true,
        open: true,
        options,
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
})

/**
 * CleanWebpackPlugin插件的配置
 */
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
exports.cleanPlugin = ({ cleanOnceBeforeBuildPatterns = ['**/*'] } = {}) => ({
    plugins: [
        new CleanWebpackPlugin({ cleanOnceBeforeBuildPatterns })
    ]
})
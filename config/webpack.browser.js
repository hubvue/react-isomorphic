const { resolve } = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
    entry: "./src/browser-entry.js",
    output: {
        path: resolve("dist/assets"),
        filename: "scripts/[name].js",
        publicPath: "/"
    },
    optimization:{
        runtimeChunk: {
            name: "runtime"
        },
        splitChunks: {
            cacheGroups: {
                common: {
                    minChunks: 1,
                    name: "commons",
                    chunks: "all",
                    priority:5,
                    reuseExistingChunk: true,
                    enforce:true
                },
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    chunks: 'initial',
                    enforce: true,
                    priority: 10,
                    name: 'vendor'
                }
            }
        }
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ["@babel/preset-env","@babel/preset-react"]
                }
            },
            exclude: /(node_modules)/
        }, {
            test: /\.css$/,
            use: [{
                loader: MiniCssExtractPlugin.loader,
            }, {
                loader: "css-loader"
            }]
        }, {
            test: /\.(svg|gif|jpe?g|png)$/,
            loader: "file-loader",
            options: {
                name: "images/[name].[ext]",
            }
        }]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer: {
        hot:true,
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "styles/[name].css",
            chunkFilename: "styles/[id].css"
        }),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template:"./src/index.html",
            filename: "index.html",
        }),
        new CleanWebpackPlugin()
    ]
}
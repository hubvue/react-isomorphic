const merge = require("webpack-merge");
const parts = require("./webpack.parts");
const config = {
    optimization: {
        runtimeChunk: {
            name: "runtime"
        },
        splitChunks: {
            cacheGroups: {
                common: {
                    minChunks: 2,
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
    }
}

module.exports = merge([
    config,
    parts.loadJS({
        exclude: /(node_modules)/,
        options: {
            presets: ["@babel/preset-env","@babel/preset-react"]
        }
    }),
    parts.minExtractCSS({
        uses: [{
            loader: "postcss-loader"
        }],
    }),
    parts.loadImg(),
    parts.htmlPlugin({
        template: "./src/index.html"
    }),
    parts.cleanPlugin(),
])

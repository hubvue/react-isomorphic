const merge = require("webpack-merge");
const parts = require("./webpack.parts");

const config = {

}

module.exports = merge([
    config,
    parts.loadJS({
        exclude: /(node_modules)/,
        options: {
            presets: ["@babel/preset-env","@babel/preset-react"]
        }
    }),
    parts.loadImg(),
    parts.htmlPlugin({
        template: "./src/index.html"
    }),
    parts.cleanPlugin(),
    parts.loadCSS({
        uses: [{
            loader: "postcss-loader"
        }]
    }),
    parts.devServe(),
])
const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin')
//项目根目录
var projectDir = path.join(__dirname, '..');

module.exports = {
  entry: path.resolve(__dirname, "../src/main.js"),
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "index.js"
  },
  resolve: {
    extensions: [".js", ".vue"],
    alias: {
      "@": path.join(projectDir, "src"),
      vue$: "vue/dist/vue.esm.js"
    }
  },
  module: {
    rules: [
      {
        test: /\.pug$/,
        loader: "pug-html-loader"
      },
      {
        test: /\.less$/,
        loader: ["style-loader", "css-loader", "less-loader"]
      },
      {
        test: /\.sass$/,
        loaders: ["style-loader", "css-loader", {
          loader: "sass-loader",
          options: {
            indentedSyntax: true
          }
        }]
      },
      {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env"],
          plugins: [
            "@babel/plugin-transform-runtime",
          ]
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../src/index.html"),
      filename: "index.html"
    }),
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(),
  ],
};

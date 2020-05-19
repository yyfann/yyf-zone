const path = require("path");
const webpackMerge = require('webpack-merge')


process.env.NODE_ENV = 'dev'

const commonConfig = require('./webpack.common.config')

const devConfig = {
  mode: "development",
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    port: 8001,
    // open: true,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          {
            loader: "vue-loader",
            options: {
              exposeFilename: true,
            }
          },
        ]
      },
    ]
  },

};

module.exports = webpackMerge(commonConfig, devConfig)

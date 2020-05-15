const path = require("path");
const webpackMerge = require('webpack-merge')

const commonConfig = require('./webpack.common.config')

const devConfig = {
  mode: "production",
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          {
            loader: "vue-loader",
          },
        ]
      },
    ]
  },

};

module.exports = webpackMerge(commonConfig, devConfig)

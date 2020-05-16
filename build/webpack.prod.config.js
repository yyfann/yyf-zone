const path = require("path");
const webpackMerge = require('webpack-merge')
const commonConfig = require('./webpack.common.config')

const CompressionWebpackPlugin = require('compression-webpack-plugin')

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
  plugins: [
    new CompressionWebpackPlugin({
      filename: '[path].gz[query]',
      algorithm: 'gzip',
      test: new RegExp('\\.(js|css|html)$'),
      // 只处理大于xx字节 的文件，默认：0
      threshold: 10,
      // 示例：一个1024b大小的文件，压缩后大小为768b，minRatio : 0.75
      minRatio: 0.8, // 默认: 0.8
      // 是否删除源文件，默认: false
      deleteOriginalAssets: false
    })
  ],

};

module.exports = webpackMerge(commonConfig, devConfig)

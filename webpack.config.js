var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  node: {
    net: 'empty',
    tls: 'empty',
    dns: 'empty'
  },
  // resolveLoader: {
  //   root: path.join(__dirname, 'node_modules'),
  // },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.css$/,
        loader: 'css'
      },
      // { test: /\.(css|scss)$/,
      //   include: /node_modules/,
      //   loader: ExtractTextPlugin.extract(['css', 'sass']) },
      // { test: /\.(css|scss)$/,
      //   exclude: [/node_modules/, /\.useable\.css$/],
      //   loaders: ['style/url', ExtractTextPlugin.extract(['file?name=[name].css', 'sass'])] },
      // { test: /\.useable\.(css|scss)$/,
      //   exclude: /node_modules/,
      //   loaders: ['style/url/useable', ExtractTextPlugin.extract(['file?name=[name].css', 'sass'])] },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file',
        query: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  resolve: {
    alias: {
      'zepto': path.join(__dirname, './node_modules/webpack-zepto/index.js'),
      'lodash': path.join(__dirname, './node_modules/lodash/lodash.js')
    }
  },
  plugins: [
    // new ExtractTextPlugin("[name].css")
    new webpack.ProvidePlugin({ // ProvidePlugin的作用是提供全局变量给每个模块,这样就不需要通过require引入了
      $: 'zepto',
      Zepto: 'zepto',
      'window.Zepto': 'zepto',
      _: 'lodash',
      lodash: 'lodash'
    })
  ],
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ])
}

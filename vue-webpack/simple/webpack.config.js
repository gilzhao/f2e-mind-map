const webpack = require('webpack')
const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, './dist/'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  module: {
    rules: [{
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ],
      },
      {
        test: /\.less$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'less-loader'
        ],
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [path.resolve(__dirname, './src')]
      },
      {
        test: /\.(png|jpg|svg|git)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}

console.log(process.env.NODE_ENV)

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
} else {
  module.exports.devtool = '#eval-source-map'
  module.exports.devServer = {
    historyApiFallback: true,
    hot: true,
    noInfo: false,
    overlay: true
  }
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.HotModuleReplacementPlugin()
  ])
}

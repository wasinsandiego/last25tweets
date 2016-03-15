var path = require('path');
// var HtmlwebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

const PATHS = {
    frontend: path.join(__dirname, 'frontend'),
    public: path.join(__dirname, 'public')
};

const TARGET = process.env.npm_lifecycle_event;
process.env.BABEL_ENV = TARGET

module.exports = {
  entry: {
    'main.js': path.join(__dirname, 'frontend/js/main.js')
  },
  output: {
    path: PATHS.public,
    filename: 'bundle.js',
    // publicPath: 'http://localhost:8080/'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: ['style', 'css'],
        include: PATHS.app
      }
      // ,{
      //   test: /\.jsx?$/,
      //   loader: 'babel',
      //   include: PATHS.app,
      //   query: {
      //     presets: ['react', 'es2015']
      //   }
      // }
    ]
  },
  devServer: {
      contentBase: PATHS.public,
      hot: true,
      inline: true,
      progress: true,
      historyApiFallback: true,
      stats: 'errors-only',
      port: 8080,
      host: '127.0.0.1'
  },
  proxy: {
    "*": "http://localhost:8080"
  },
  plugins: [
      new webpack.HotModuleReplacementPlugin()
      // ,new HtmlwebpackPlugin({
      //     title: 'My app'
      // })
  ]
};
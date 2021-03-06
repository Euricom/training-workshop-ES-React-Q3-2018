/* eslint-disable */
const path = require('path');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'bundle'),
    publicPath: '/bundle/',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      },
    ],
  },
  plugins: [
    // show friendly build errors
    new FriendlyErrorsWebpackPlugin(),
  ],
  resolve: {
    // allow import of js and jsx files
    extensions: ['.js', '.jsx'],
  },
  // limit verbose logging
  stats: {
    assets: true,
    modules: false,
    children: false,
  },
  devServer: {
    quiet: true,
    historyApiFallback: true,
    noInfo: false,
    contentBase: 'src',
  },
};

const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
dotenv.load();
const APP_DIR = path.resolve(__dirname, 'app/index.js');
const devMode = process.env.NODE_ENV !== 'production';
const config = {
  entry: { main: APP_DIR },
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    filename: '[name].[chunkhash].js',
  },
  resolve: {
    extensions: ['.web.js', '.js', '.json', '.web.jsx', '.jsx', '.css'],
  },
  devServer: {
    port: process.env.PORT || 8008,
    historyApiFallback: true,
    contentBase: path.join(__dirname, 'build'),
  },
  module: {
    strictExportPresence: true,
    rules: [
      // Disable require.ensure as it's not a standard language feature.
      // uncomment this to add Eslint functionalities
      { parser: { requireEnsure: false } },
      
      {
        test: /\.(js|jsx)$/,
        enforce: 'pre',
        use: [
          {
            options: {
              formatter: 'react-dev-utils/eslintFormatter',
              eslintPath: 'eslint',

            },
            loader: 'eslint-loader',
          },
        ],
        include: path.join(__dirname, 'app'),
      },
      {
      // `mjs` support is still in its infancy in the ecosystem, so we don't
      // support it.
      // Modules who define their `browser` or `module` key as `mjs` force
      // the use of this extension, so we need to tell webpack to fall back
      // to auto mode (ES Module interop, allows ESM to import CommonJS).
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto',
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test:  /\.(woff|woff2)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(gif|png|jpe?g|svg|ttf|eot|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true, // webpack@1.x
              disable: true, // webpack@2.x and newer
            },
          },
        ],
      },
      {
        test: /\.mp4$/,
        use: 'file-loader?name=[name].[ext]'
 },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'app', 'index.html'),
    }),
    new MiniCssExtractPlugin({
      filename: devMode ? '[name].css' : '[name].[hash].css',
      chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
    }),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || "development")
}),
  ],
};
module.exports = config;

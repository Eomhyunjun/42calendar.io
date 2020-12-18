/**
 * @date 2017-03-16 09:47:59
 * @author Seok Kyun. Choi. 최석균 (Syaku)
 * @site http://syaku.tistory.com
 */
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const pkg = require('./package.json');

const base = (args) => {
  const config = Object.assign(pkg.config, args);
  const {
    entry, publicPath, output, src, filename,
  } = config;

  return {
    entry,
    output: {
      path: path.join(__dirname, output),
      publicPath,
      filename: `${filename}.js`,
    },

    plugins: [
      new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV) }),
      new ExtractTextPlugin({
        filename: `${filename}.css`,
      }),
    ],
    module: {
      rules: [
        {
          test: /\.js$/,
          enforce: 'pre',
          loader: 'eslint-loader',
          include: path.join(__dirname, src),
        },
        {
          test: /\.css$/,
          exclude: /\.module\.css$/,
          loader: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              {
                loader: 'css-loader',
                options: {
                  minimize: process.env.NODE_ENV === 'production',
                  sourceMap: process.env.NODE_ENV === 'production',
                  importLoaders: 1,
                },
              },
            ],
          }),
        },
        {
          test: /\.module\.css$/,
          include: path.join(__dirname, src),
          loader: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              {
                loader: 'css-loader',
                options: {
                  minimize: process.env.NODE_ENV === 'production',
                  sourceMap: process.env.NODE_ENV === 'production',
                  camelCase: true,
                  modules: true,
                  localIdentName: '[path][name]__[local]--[hash:base64:5]',
                },
              },
            ],
          }),
        },
        {
          test: /\.(eot|svg|ttf|woff|woff2)$/,
          use: `file-loader?name=[name]-[hash].[ext]&publicPath=${publicPath}&outputPath=fonts/`,
        },
        {
          test: /\.(png)$/i,
          use: {
            loader: 'url-loader',
            options: {
              limit: 10000,
            },
          },
        },
        {
          test: /\.js$/,
          include: path.join(__dirname, 'src'),
          use: ['babel-loader'],
        },
      ],
    },

    resolve: {
      alias: {
        _src: path.resolve(__dirname, `${src}`),
        _resources: path.resolve(__dirname, `${src}/resources`),
        _commons: path.resolve(__dirname, `${src}/commons`),
        _contatiners: path.resolve(__dirname, `${src}/contatiners`),
        _components: path.resolve(__dirname, `${src}/components`),
      },
    },
  };
};

module.exports = base;

const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    main: './src/index.jsx',
    verdor: [
      'react-dom', 'redux', 'react-redux', 'redux-thunk',
    ],
  },
  output: {
    path: path.resolve(__dirname, './public'),
    filename: '[name].js',
    publicPath: '/public/',
    sourceMapFilename: '[name].map',
  },
  devtool: process.env.NODE_ENV !== 'production' ? '#source-map' : false,
  module: {
    loaders: [
      { test: /\.(jsx|js)$/, exclude: /node_modules/, loader: 'babel-loader', query: { presets: ['es2015', 'react'] } },
      { test: /\.scss$/, exclude: /node_modules\/(?!ess-*)/, loaders: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'] },
      { test: /\.(png|gif)$/, exclude: /node_modules\/(?!ess-*)/, loader: 'url-loader?mimetype=image/png' },
      { test: /\.json$/, loader: 'json-loader' }
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'verdor',
    }),
  ],
};

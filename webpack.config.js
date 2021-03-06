const path = require('path');
const { env } = require('process');

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-proposal-class-properties'],
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.(jpg|jpeg|png|ttf|svg)$/,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                quality: 10,
              },
            },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  mode: 'development',
  devServer: {
    hot: true,
    publicPath: '/build',
    historyApiFallback: true,
    contentBase: path.join(__dirname, 'client'),
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};

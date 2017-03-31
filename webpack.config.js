const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: './index.js',
  output: {
    path: './static',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: [
            {
              loader: 'css-loader',
              query: {
                modules: true,
                sourceMap: true,
                localIdentName: '[name]__[local]___[hash:base64:5]',
              },
            },
          ],
        }),
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: [/node_modules/],
      },
    ]
  },
  devtool: 'source-map',
  plugins: [
    new ExtractTextPlugin({ filename: 'style.css', disable: false, allChunks: true }),
  ]
}

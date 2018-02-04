const path = require('path');

module.exports = {
  devServer: {
    contentBase: './dist'
  },
  entry: ['babel-polyfill', './src/index.js'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist')
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|dist)/,
        loader: 'babel-loader',
        query: {
          presets: ['env', 'react', 'stage-0']
        }
      },
      {
        test: /style\.js$/i,
        exclude: /(node_modules|dist)/,
        loader: 'stylelint-custom-processor-loader'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(jpg|jpeg|gif|png)$/,
        loader: 'file-loader'
      }
    ]
  }
};

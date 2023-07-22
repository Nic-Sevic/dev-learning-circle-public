//defines where to bundle files
const path= require('path');

// tells webpack to inject as a script tag in html file
const HtmlWebpackPlugin = require('html-webpack-plugin');

// second part defining where to bundle files
module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'src', 'index.js'),
  output: {
    path:path.resolve(__dirname, 'dist'),
  },
// tells webpack to transpile JS files with babel before bundling
  module: {
    rules: [
      {
        test: /\.?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
    ]
  },
// inject script tag to public/index.html, moves to dist folder
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html'),
    }),
  ],
}

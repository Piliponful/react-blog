const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const DashboadrPlugin = require('webpack-dashboard/plugin')

const srcDir = resolve(__dirname, 'src')

module.exports = {
  entry: `${srcDir}/index.js`,
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      enforce: 'pre',
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'standard-loader'
    },
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    },
    {
      test: /\.css$/,
      use: ['style-loader', {
        loader: 'css-loader',
        options: {
          modules: true,
          camelCase: true,
          localIdentName: '[name]__[local]__[hash:base64:6]'
        }
      }]
    }]
  },
  plugins: [new HtmlWebpackPlugin({
    'template': `${srcDir}/index.html`
  }), new DashboadrPlugin()],
  devServer: {
    historyApiFallback: true
  }
}

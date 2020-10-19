/**
 * For more information about Webpack development configuration,
 * see: https://webpack.js.org/guides/development/
 */
const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/app.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'dist'
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  devServer: {
    // For devServer configuration, see https://webpack.js.org/configuration/dev-server/
    contentBase: [path.join(__dirname), path.join(__dirname, 'dist')],
    publicPath: '/dist/',
    compress: true,
    open: true,
    watchContentBase: true,
    liveReload: true,
    port: 9000
  }
}

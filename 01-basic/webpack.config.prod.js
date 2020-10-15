/**
 * Webpack configuration for production build. This config file is passed to webpack
 * using the following script that can be found in package.json.
 *
 * "scripts": {
 *   ...
 *   "build:prod": "webpack --config webpack.config.prod.js",
 *   ..
 * }
 *
 * To build and create a minified bundle that is ready for production with the above script,
 * run: npm run build:prod
 */
const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/app.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
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
  plugins: [
    new CleanWebpackPlugin() // Delete all contents from 'dist' before starting build
  ]
}

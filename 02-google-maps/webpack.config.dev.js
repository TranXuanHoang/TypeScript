const path = require('path');

module.exports = {
  mode: 'development',

  // webpack-dev-server will monitor the code dependency
  // of these entry points, and re-create the bundle
  // when changes are detected. In this example, the main
  // javascript is main.js, and it points to
  // other code dependencies
  entry: {
    app: ['./src/app.ts']
  },

  // This specifies where javascript bundle is created when
  // webpack CLI is run. However, webpack-dev-server is only
  // concerned with the 'filename' parameter.
  // webpack-dev-server generates the bundle with the 'filename' in
  // memory. It never creates an actual file in the 'path' specified
  // unlike the webpack CLI.
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'dist'
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

  devtool: 'inline-source-map',

  // webpack-dev-server configuration
  devServer: {
    // The local filesystem directory where static html files should be placed.
    // Put your main static html page containing the <script> tag
    // here to enjoy 'live-reloading'
    // E.g., if 'contentBase' is './views', you can
    // put 'index.html' in './views/main/index.html', and
    // it will be available at the url:
    //   https://localhost:9000/main/index.html
    contentBase: ['./', './dist'],

    // This is where webpack-dev-server serves your bundle
    // which is created in memory.
    // To use the in-memory bundle,
    // your <script> 'src' should point to the bundle
    // prefixed with the 'publicPath', e.g.:
    //   publicPath: '/assets/'
    //   <script src='http://localhost:9000/assets/bundle.js' defer></script>
    publicPath: '/dist/',

    // 'Live-reloading' happens when you make changes to code
    // dependency pointed to by 'entry' parameter explained earlier.
    // To make live-reloading happen even when changes are made
    // to the static html pages in 'contentBase', add
    // 'watchContentBase'
    watchContentBase: true,

    open: true,
    compress: true,
    port: 9000
  },
};

/**
 * Note: when webpack-dev-server doesn't automatically reload app,
 * see the following references:
 *
 * [1] Webpack dev server is not serving the latest compiled code
 * https://github.com/webpack/webpack-dev-server/issues/875
 *
 * [2] Why webpack-dev-server Live-Reload Is Not Working
 * https://medium.com/code-oil/burning-questions-with-answers-to-why-webpack-dev-server-live-reload-does-not-work-6d6390277920
 */

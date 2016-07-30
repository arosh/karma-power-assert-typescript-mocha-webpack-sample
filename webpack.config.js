module.exports = {
  entry: {
    app: __dirname + '/src/browser/app.ts',
  },
  output: {
    path: __dirname + '/dist',
    filename: "[name].bundle.js",
  },
  resolve: {
    extensions: ['', '.ts', '.js'],
  },
  devtool: "inline-source-map",
  module: {
    preLoaders: [
      // https://github.com/Microsoft/TypeScript-Handbook/blob/master/pages/tutorials/React%20%26%20Webpack.md
      { test: /\.js$/, loader: "source-map-loader" }
    ],
    loaders: [
      { test: /\.ts$/, loader: 'ts-loader' },
      { test: /\.json$/, loader: 'json-loader' },
    ],
    postLoaders: [
      { test: /_test\.ts$/, loader: 'webpack-espower-loader' },
    ],
  },
};

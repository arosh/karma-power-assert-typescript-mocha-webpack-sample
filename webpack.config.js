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
  module: {
    loaders: [
      { test: /\.ts$/, loader: 'ts-loader' },
      { test: /\.json$/, loader: 'json-loader' },
    ],
    postLoaders: [
      { test: /_test\.ts$/, loader: 'webpack-espower-loader' },
    ],
  },
};

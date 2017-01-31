const path = require('path')

module.exports = {
  entry: [
    path.join(__dirname, `src`, `index`),
  ],
  output: {
    path: path.join(__dirname, "dist"),
    filename: 'index.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loaders: [ 'babel-loader' ] },
    ],
  },
}

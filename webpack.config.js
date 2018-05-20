module.exports = {
  entry: {
    objective_canvas: './src/index.js'
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/dist',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclued: /node_modules/
      }
    ]
  }
}

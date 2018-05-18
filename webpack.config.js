const MINIFY = process.env.MODE_MINIFY === '1';

module.exports = {
  context: __dirname + '/src',
  entry: {
    canvas_wrapper: './index.js'
  },
  output: {
    filename: MINIFY ? '[name].min.js' : '[name].js',
    path: __dirname + '/dist',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      }
    ]
  }
}

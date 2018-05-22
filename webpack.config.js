module.exports = (env, argv) => {
  return {
    entry: {
      objective_canvas: './src/index.js'
    },
    output: {
      filename: argv.mode === 'production' ? '[name].min.js' :'[name].js',
      path: __dirname + '/dist',
      library: "obc",
      libraryTarget: "umd"
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          use: 'babel-loader',
          exclude: /node_modules/
        }
      ]
    }
  }
}

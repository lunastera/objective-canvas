const HtmlWebpackPlugin = require('html-webpack-plugin')

const libraryConfig = (env, argv) => {
  return {
    name: 'lib',
    entry: {
      objective_canvas: './src/index.js'
    },
    output: {
      filename: argv.mode === 'production' ? '[name].min.js' : '[name].js',
      path: __dirname + '/dist',
      library: 'obc',
      libraryTarget: 'umd'
    },
    devServer: {
      contentBase: 'test',
      publicPath: '/',
      port: 3000
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

const appConfig = {
  name: 'app',
  entry: {
    canvas: './test/canvas.1.js'
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/dist'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.html$/,
        use: 'html-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './test/canvas03.html'
    })
  ]
}

module.exports = (env, argv) => {
  return [libraryConfig(env, argv), appConfig]
}

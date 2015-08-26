module.exports = {
  entry: {
    app: "./src/js/entry.js"
  },
  output: {
    path: './public/js',
    filename: "[name].js"
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader"
      }
    ],
    loaders: [
      {
        test: /\.css$/,
        loader: "style!css"
      },
      {
         test: /\.jsx?$/,
         exclude: /(node_modules|bower_components)/,
         loader: 'babel'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.css']
  },
  eslint: {
    configFile: './.eslintrc'
  }
};

var webpack = require('webpack'),
    definePlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'true')),
  __PRERELEASE__: JSON.stringify(JSON.parse(process.env.BUILD_PRERELEASE || 'false')),
  __FOO__: true,
  __BAR__: function() {},
  VERSION: JSON.stringify("5fa3b9"),
  //BERSION: "5fa3b9",
  BERSION: JSON.stringify("Hello"),
  //BERSION: "Hello",
  TWO: "1+1",
  "typeof window": JSON.stringify("object")
});

module.exports = {
  entry: {
    app: "./src/js/entry.js"
  },
  output: {
    path: './public/js',
    // publicPath は webpack-dev-server で自動コンパイルするために必要（URLにおけるJSファイルへのパスを書く）
    publicPath: '/js/',
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
  },
  plugins: [
    definePlugin
  ]
};

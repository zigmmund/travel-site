module.exports = {
  entry: "./app/assets/scripts/app.js",
  output: {
    path: "/Users/zigmmund/Desktop/sites/travel-site/app/temp/scripts",
    filename: "app.js"
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        },
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  }
}

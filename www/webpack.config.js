const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "index.js",
    clean: true,
  },
  devServer: {
    static: './public',
    hot: true,
  }
  // mode: "production",
  // module: {
  //   rules: [
  //     {
  //       test: /\.css$/,
  //     },
  //     {
  //       use: [
  //         {
  //         "css-loader": "css-loader",
  //         "style-loader": "style-loader
  //       }
  //     ],
  //     }
      // {
      //   test: /\.tsx?$/,
      //   use: 'ts-loader',
      //   exclude: /node_modules/,
      // },
  //   ],
  // },
  // resolve: {
  //   extensions: ['.tsx', '.ts', '.js', '.json'],
  // },
  plugins: [
    // new CleanWebpackPlugin('public')
    new CopyWebpackPlugin({
      patterns: [
        { from: "./index.html", to: "./"},
        { from: "./style.css", to: "./"}
      ]
    })
  ]
}
const path = require("path")
const HtmlWebPackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const { VueLoaderPlugin } = require("vue-loader")

module.exports = {
  mode: process.env.ENVIRONMENT === "production" ? "production" : "development",
  entry: "/src/app/main/index.ts",
  output: {
    publicPath: "/dist",
    path: path.join(__dirname, "dist/js"),
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".js", ".ts", ".vue", ".sass"],
    alias: {
      "@": path.join(__dirname, "src"),
      "Vue": "vue/dist/vue.esm-bundler.js"
    }
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "ts-loader",
        options: { allowTsInNodeModules: true, appendTsSuffixTo: [/\.vue$/] },
        exclude: /node_modules|vue\/src/
      },
      {
        test: /\.s(c|a)ss$/,
        use: [
          "vue-style-loader", "css-loader",
          {
            loader: "sass-loader",
            options: { sassOptions: { indentedSyntax: true } }
          }
        ]
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: { loaders: { ts: "ts-loader" } }
      }
    ]
  },
  devServer: {
    contentBase: "./dist",
    writeToDisk: true,
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./dist/index.html"
    }),
    new CleanWebpackPlugin(),
    new VueLoaderPlugin()
  ]
}

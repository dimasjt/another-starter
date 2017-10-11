const express = require("express")
const webpack = require("webpack")
const webpackMiddleware = require("webpack-dev-middleware")
const path = require("path")

const webpackConfig = require("./webpack.config")

const compiler = webpack(webpackConfig)
const app = express()

app.use(webpackMiddleware(compiler))

app.use(express.static(path.resolve("/", "public")))

app.use("*", function(req, res, next) {
  const filename = path.join(compiler.outputPath, "index.html")
  compiler.outputFileSystem.readFile(filename, function(err, result) {
    if (err) {
      return next(err)
    }

    res.set("Content-Type", "text/html")
    res.send(result)
    res.end()
  })
})

app.listen(3000, function() {
  console.log("Server running localhost:3000")
})

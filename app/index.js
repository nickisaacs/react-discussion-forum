var express = require("express");
var app = express();
var template = require("./src/template");
var path = require("path");

var webpack = require("webpack");
var { createRenderer } = require("fela");
var { renderToMarkup } = require("fela-dom");

//SSR function import
var ssr = require("./views/ssr");

// enable hot reload for dev
if (process.env.NODE_ENV === "development") {
  var chokidar = require("chokidar");
  var watcher = chokidar.watch(path.join(__dirname, "views"));
  watcher.on("ready", function() {
    watcher.on("change", function() {
      console.log("App has changed, reloading components");
      Object.keys(require.cache).forEach(function(id) {
        if (id.match(/views/g)) {
          delete require.cache[id];
        }
      });
      ssr = require("./views/ssr");
    });
  });
  var webpackConfig = require("./webpack.config.dev");
  var compiler = webpack(webpackConfig);

  app.use(
    require("webpack-dev-middleware")(compiler, {
      noInfo: true,
      publicPath: webpackConfig.output.publicPath
    })
  );

  app.use(require("webpack-hot-middleware")(compiler));
} else {
  // Serving static files
  app.use("/dist", express.static(path.join(__dirname, "dist")));
}

var port = process.env.PORT || 3000;
// start the server
app.listen(port, () => console.log(`App listening on port ${port}!`));

// server rendered home page
app.get("/", (req, res) => {
  const renderer = createRenderer();
  const { content } = ssr(renderer);
  const styleMarkup = renderToMarkup(renderer);
  const response = template("Server Rendered Page", content, styleMarkup);
  res.send(response);
});

const express = require('express'),
    app = express(),
    template = require('./src/template'),
    path = require('path');

var webpack = require('webpack');



// enable hot reload for dev
if (process.env.NODE_ENV === 'development') {

    var webpackConfig = require('./webpack.config.dev');
    var compiler = webpack(webpackConfig);

    app.use(require("webpack-dev-middleware")(compiler, {
        noInfo: true,
        publicPath: webpackConfig.output.publicPath
    }));

    app.use(require("webpack-hot-middleware")(compiler));
} else {

    // Serving static files
    app.use('/dist', express.static(path.join(__dirname, 'dist')));
}

var port = process.env.PORT || 3000;
// start the server
app.listen(port, () => console.log(`App listening on port ${port}!`));

//SSR function import
const ssr = require('./views/server');

// server rendered home page
app.get('/', (req, res) => {
    const { content } = ssr()
    const response = template("Server Rendered Page", content)
    res.setHeader('Cache-Control', 'assets, max-age=604800')
    res.send(response);
});
const path = require('path')
const webpack = require('webpack')

module.exports = {
    mode: 'development',
    entry: [
        'webpack-hot-middleware/client',
        path.join(__dirname, 'src/index.js'),
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: "bundle.js",
        publicPath: "/dist"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        port: 3000,
        host: '0.0.0.0',
    }
};
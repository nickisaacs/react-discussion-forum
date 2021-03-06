const path = require('path')

module.exports = {
    entry: [
        path.resolve(__dirname, 'src/index.js'),
    ],
    output: {
        path: path.resolve('dist'),
        filename: 'bundle.js'
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
    devServer: {
        port: 3000,
        host: '0.0.0.0',
    }
};
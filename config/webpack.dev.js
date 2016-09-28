var webpack = require('webpack');

module.exports = {
    entry: "./src/main.ts",
    output: {
        path: "./dist",
        filename: "bundle.js"
    },
    resolve: {
        extensions: ['', '.js', '.ts']
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loaders: ['ts-loader']
            }
        ]
    }
    ,
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false }
        })
    ]
}

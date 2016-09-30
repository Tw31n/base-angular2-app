var webpack = require('webpack');

module.exports = {
    entry: {
        bundle: "./src/main.ts",
        vendor: [
            "./node_modules/core-js/client/shim.min.js",
            "./node_modules/zone.js/dist/zone.min.js",
            "./node_modules/reflect-metadata/Reflect.js"
        ]
    },
    output: {
        path: "./dist",
        filename: "[name].js"
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
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false }
        })
    ]
}

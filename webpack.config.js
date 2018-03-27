var webpack = require("webpack");

module.exports = {
    entry: './index.ts',
    output: {
        filename: "./dist/ngx-octopus-connect.umd.js",
        libraryTarget: 'umd',
        library: "NgxOctopusConnect"
    },
    resolve: {
        extensions: [".webpack.js", ".web.js", ".js", ".ts"],
        alias: {

        }
    },
    module: {
        loaders: [
            { test: /\.ts?$/, loader: "ts-loader" }
        ]
    },
    externals: [/^\@angular\//, /^rxjs\//, /^octopus-connect/]
};
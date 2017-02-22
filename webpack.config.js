var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {

    entry: './src/main.ts',
    output: {
        path: __dirname + '/public',
        filename: '[name].build.js'
    },
    module: {
        loaders: [
            {test: /\.ts$/, loader: 'ts-loader'},
            { test: /\.json$/, loader: 'json-loader' }
        ]
    },
    
    resolve: { 
        extensions: ['.ts', '.js', '.json', '.html']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),

        new webpack.optimize.UglifyJsPlugin({
            output: {comments: false}
        })
    ]
};
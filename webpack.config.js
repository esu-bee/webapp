var webpack = require('webpack');

module.exports = {

    entry: './src/main.ts',
    output: {
        path: './public',
        filename: '[name].build.js',
        publicPath : "/content/public/"
    },
    module: {
        loaders: [
            {test: /\.ts$/, loader: 'ts-loader'},
            { test: /\.json$/, loader: 'json-loader' }
        ]
    },
    
    resolve: { 
        extensions: ['.ts', '.js', '.json', '.html']
    }
};
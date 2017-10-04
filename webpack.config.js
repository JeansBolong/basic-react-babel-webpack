const webpack = require('webpack');
const path = require('path');

module.exports ={
    entry: './src/app.js',
    output:{
        path: path.resolve(__dirname, 'dist/assets/js'),
        filename: 'bundle.js',
        publicPath: 'assets/js'
    },
    devtool: 'eval-source-map',
    devServer:{
        historyApiFallback: true,
        inline: true,
        contentBase: './dist',
        port: 3000
    },
    module:{
        loaders:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.json$/,
                exclude: /node_modules/,
                loader: 'json-loader'
            },
            {
                test: /\.css$/,
                loader: [ 'style-loader', 'css-loader?sourceMap', 'autoprefixer-loader' ]
            },
            {
                test: /\.scss$/,
                loaders: ['style-loader', 'css-loader?sourceMap','autoprefixer-loader','sass-loader?sourceMap']
            }
        ]
    }
};
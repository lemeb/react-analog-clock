const path = require('path');

module.exports = {
    devtool: "source-map",
    entry: [
        'babel-polyfill',
        __dirname + '/index.js'
    ],
    output: {
        filename: 'react-analog-clock.js',
        path: path.join(__dirname, 'dist'),
        publicPath: '/dist/'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel-loader'],
                exclude: /node_modules/
            }
        ]
    }
};

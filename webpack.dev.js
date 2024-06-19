const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'),
        },
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true,
        watchFiles: ['src/**/*.html', 'src/**/*.css'],
    },
});
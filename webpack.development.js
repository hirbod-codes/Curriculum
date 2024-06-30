const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        client: {
            logging: 'info',
            overlay: true,
        },
        compress: false,
        open: true,
        static: './build',
    },
    stats: {
        errorDetails: true,
    },
});

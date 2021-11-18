const path = require('path');
const GasPlugin = require('gas-webpack-plugin');

module.exports = {
    context: __dirname,
    entry: './src/index.ts',
    module: {
        rules: [
            {
                test: /(\.ts)$/,
                loader: 'ts-loader',
            },
        ],
    },
    resolve: {
        extensions: ['.ts'],
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new GasPlugin({
            comment: true
        }),
    ]
};
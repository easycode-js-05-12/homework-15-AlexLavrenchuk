const path = require('path');

module.exports = {
    entry: './js/main.js',
    context: path.resolve(__dirname, 'src'),
    output: {
        filename: 'homeWorkLavrenchuk.js',
        path: path.resolve(__dirname, 'dist')
    },
    module:{
        rules:[
            {
                test: /\.m?js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    mode: 'development'
}
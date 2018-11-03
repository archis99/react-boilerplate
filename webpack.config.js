let HtmlWebpackPlugin = require('html-webpack-plugin');
let PluginConfig = new HtmlWebpackPlugin ({
    template: __dirname + '/app/index.html',
    filename: 'index.html',
    inject: 'body',
    title: 'React App'
});
module.exports = {
    entry: __dirname + '/app/index.js',
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ]
    },
    output: {
        filename: 'build.js',
        path: __dirname + '/build'
    },
    plugins: [PluginConfig]

};
const HtmlWebPackPlugin = require('html-webpack-plugin')

const HtmlWebPackPluginConfig = new HtmlWebPackPlugin({
    template: './app/index.html',
    filename: 'index.html',
    inject: 'body'
}) 

const config = {
    entry : './app/index.jsx' ,
    output: {
        path : __dirname + '/dist',
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js','.jsx']
    },
    module:{
        rules:[
            {
                test : /.jsx$/,
                loader : 'babel-loader',
                exclude: /node_modules/,
                query:{
                    presets : ['es2015', 'react']
                }
            }
        ]
    },
    plugins: [HtmlWebPackPluginConfig],
    devtool: 'source-map'
}

module.exports = config
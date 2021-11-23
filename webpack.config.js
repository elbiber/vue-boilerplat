const path = './src/js/'
const output_path = `${__dirname}/public/assets/`

const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
    mode: process.env.NODE_ENV,
    watch: false,
    entry: {
        app: `${path}app.js`
    },
    output: {
        path: output_path,
        filename: '[name].bundle.js'
    },
    plugins: [
        new VueLoaderPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                exclude: /node_modules/
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    }

}

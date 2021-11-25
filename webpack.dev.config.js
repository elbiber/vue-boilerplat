const path = require('path')

const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const Sass = require('sass')
const { filesToInclude } = require('./common_config')

module.exports = {
    entry: {
        '/js/main': [
            path.resolve('./src/main.js')
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        chunkFilename: '[name].js',
        clean: true
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.vue'],
        symlinks: false
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html'),
            favicon: './public/favicon.ico'
        })
    ],
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                include: [
                    path.resolve('./src'),
                    path.resolve('./node_modules/vuetify/lib')
                ],
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true
                    }
                }
            },
            {
                test: /\.css$/i,
                use: [
                    'vue-style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            sourceMap: true
                        }

                    },
                    {
                        loader: 'postcss-loader',
                        options: {

                        }
                    }

                ]
            },
            {
                test: /\.s(a|c)ss$/,
                use: [
                    'vue-style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            implementation: Sass,
                            sassOptions: {
                                indentedSyntax: false
                            }
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {

                        }
                    }
                ]

            },
            {
                test: filesToInclude,
                loader: 'file-loader',
                include: path.resolve('./src/assets'),
                options: {
                    esModule: false,
                    context: path.resolve('./src/assets'),
                    name: '[path][name].[ext]',
                    outputPath: '/assets',
                    publicPath: '/assets/'
                }
            }
        ]
    }
}

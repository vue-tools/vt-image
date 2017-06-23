var path = require('path')
var webpack = require('webpack')
var px2rem = require('postcss-px2rem')
var autoprefixer = require('autoprefixer')

module.exports = {
    devtool: '#inline-source-map',
    resolve: {
        extensions: ['', '.js', '.vue', '.json'],
        alias: {
            'vue': 'vue/dist/vue.runtime.common.js',
            'src': path.resolve(process.cwd(), 'src'),
            'assets': path.resolve(__dirname, 'tests/assets')
        }
    },
    module: {
        loaders: [{
            test: /\.vue$/,
            loader: 'vue'
        }, {
            test: /\.js$/,
            loader: 'babel',
            exclude: /node_modules/
        }, {
            test: /\.css$/,
            loader: 'style!css'
        }, {
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            loader: 'url',
            query: {
                limit: 1,
                name: 'img/[name].[hash:7].[ext]'
            }
        }, {
            test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
            loader: 'url',
            query: {
                limit: 1,
                name: 'fonts/[name].[hash:7].[ext]'
            }
        }]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        })
    ],
    babel: {
        presets: ['es2015', 'stage-0'],
        plugins: ['transform-vue-jsx', 'transform-runtime'],
        env: {
            test: {
                plugins: [
                    ['istanbul', {
                        'exclude': ['tests']
                    }]
                ]
            }
        }
    },
    vue: {
        postcss: [
            autoprefixer({
                browsers: ['last 7 versions']
            }),
            px2rem({
                remUnit: 75
            })
        ]
    }
}
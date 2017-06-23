var path = require('path')
var WebPWebpackPlugin = require('webp-webpack-plugin')

module.exports = {
    port: 9999,
    webpack: {
        resolve: {
            alias: {
                'vt-image': path.resolve(__dirname, 'src'),
                'assets': path.resolve(__dirname, 'tests/assets')
            }
        },
        plugins: [
            new WebPWebpackPlugin({
                match: /(jpe?g|png)$/,
                webp: {
                    quality: 80
                }
            })
        ] 
    },
    md: { dir: './' },
    vue: { dir: './docs' }
}
let fs = require('fs')
let path = require('path')
let ghpages = require('gh-pages')
let homepage = require('./package.json').homepage
let dir = path.resolve(path.join(__dirname, './build'))
let docsConfFilePath = path.resolve(path.join(__dirname, './docs.conf.js'))
    
if (fs.existsSync(docsConfFilePath)) {
    let docsConfig = require(docsConfFilePath)

    if (docsConfig.vue && docsConfig.vue.dir) {
        dir = path.resolve(path.join(__dirname, docsConfig.vue.dir))
    }
}

ghpages.publish(dir, {
    message: 'Update docs'
}, function (err) {
    if (err) throw err
    console.log('visit ' + homepage)
})
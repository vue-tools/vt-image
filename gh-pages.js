let fs = require('fs')
let path = require('path')
let ghpages = require('gh-pages')
let homepage = require('./package.json').homepage
let dir = path.resolve(path.join(__dirname, './docs'))
let docsConfFilePath = path.resolve(path.join(__dirname, './docs.conf.js'))
let message = process.argv.slice(2).pop() || 'update'    
if (fs.existsSync(docsConfFilePath)) {
    let docsConfig = require(docsConfFilePath)

    if (docsConfig.vue && docsConfig.vue.dir) {
        dir = path.resolve(path.join(__dirname, docsConfig.vue.dir))
    }
}

ghpages.publish(dir, {
    message: message
}, function (err) {
    if (err) {
        console.log(err)
        throw err
    }
    console.log('visit ' + homepage)
})
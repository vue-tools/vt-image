var spawnSync = require('child_process').spawnSync
var package = require('./package.json')

var version = package.version
var name = package.name

var args = process.argv.slice(2)
var action = args.pop()
var message = args.pop() || `${name} ${version}`

if (!/\d+\.\d+\.\d+/.test(version)) {
    return console.log('\x1b[31m', 'package version非法')
}

switch (action) {

    case 'add:local':
        addLocalTag(version)
        break

    case 'add:remote':
        addRemoteTag(version)
        break

    case 'add':
        addLocalTag(version)
        addRemoteTag(version)
        break

    default:
        addLocalTag(version)
        addRemoteTag(version)
}

function addLocalTag(tag) {
    let local = spawnSync('git', ['tag', '-a', tag, '-m', message])
    logInfo(local.stdout.toString())
    logErr(local.stderr.toString())
}

function addRemoteTag(tag) {
    let remote = spawnSync('git', ['push', 'origin', tag])
    logInfo(remote.stdout.toString())
    logErr(remote.stderr.toString())
}

// http://stackoverflow.com/questions/9781218/how-to-change-node-jss-console-font-color
function logInfo(msg) {
    console.log('\x1b[34m', msg)
}

function logErr(msg) {
    console.log('\x1b[1m', msg)
}
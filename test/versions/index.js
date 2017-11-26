const fs = require('fs')
const path = require('path')

const versions = fs.readdirSync(__dirname)
.filter(f => fs.lstatSync(path.resolve(__dirname, f)).isDirectory())
.reduce((agg, f) => {
    agg[f] = require(`./${f}`)
    return agg
}, {})

module.exports = versions
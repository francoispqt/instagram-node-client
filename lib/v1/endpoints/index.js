const fs = require('fs')
const path = require('path')

// current file name
const mName = path.basename(module.filename)

module.exports = client => {
    const result = {};

    fs
        .readdirSync(__dirname)
        .filter((f) => {
            return fs.statSync(path.resolve(__dirname, f)).isDirectory()
        })
        .forEach((f) => {
            /* eslint-disable */
            const r = require(path.resolve(__dirname, f)) 
            /* eslint-disable */
            result[f] = r(client)
        })

    return result
}
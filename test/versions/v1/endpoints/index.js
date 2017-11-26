const fs = require("fs")
const path = require("path")

// current file name
const mName = path.basename(module.filename)

// loads all endpoints
module.exports = app => {
    const result = {}

    fs
        .readdirSync(__dirname)
        .filter(f => {
            return fs.statSync(path.resolve(__dirname, f)).isDirectory()
        })
        .forEach(f => {
            /* eslint-disable */
            const r = require(path.resolve(__dirname, f))
            /* eslint-disable */
            result[f] = r(app)
        })

    return result
}

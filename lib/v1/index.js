const Client = require("../client")
const loadEndpoints = require("./endpoints")
const version = "v1"

class V1 extends Client {
    constructor(opts = {}) {
        super(opts, loadEndpoints)
        this.version = version
    }
}

module.exports = V1

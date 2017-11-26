class Endpoint {
    constructor(prefix, client) {
        this.prefix = prefix
        this.client = client
        this.opts = client.opts
        this.api = client.api
    }
}

module.exports = Endpoint;
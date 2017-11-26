const Endpoint = require("../../../endpoint")

class Relationships extends Endpoint {
    constructor(client) {
        super("relationships", client)
    }
}

module.exports = client => new Relationships(client)

const Client = require("../client")
const loadEndpoints = require("./endpoints")
const version = "v1"
/**
 * InstagramClient V1
 * ```js
 * const Instagram = require("instragram-client").v1
 * 
 * const Client = new Instagram({
 *  CLIENT_ID: "SOMECLIENTID",
 *  CLIENT_SECRET: "SOMECLIENTSECRET",
 * }) 
 * ```
 * @augments InstagramClient
 * @constructor
 * @param {object} opts the options object { CLIENT_ID, CLIENT_SECRET } 
 */
class V1 extends Client {
    constructor(opts = {}) {
        super(opts, loadEndpoints)
        this.version = version
    }
}

module.exports = V1

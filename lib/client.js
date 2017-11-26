const hoek = require("hoek")
const Api = require("./api")

const clientDefaultOpts = {
    CLIENT_ID: null,
    CLIENT_SECRET: null,
    api: {},
}

const sendRequest = (Client, method, endpoint, opts, cb) => {
    // prepend slash
    if (endpoint.substring(0, 1) !== "/") endpoint = "/" + endpoint

    return Client.api.call(
        {
            uri: `/${Client.version}${endpoint}`,
            qs: opts.qs,
            sign: opts.sign,
            formData: opts.body,
            method,
        },
        cb
    )
}

class InstagramClient {
    constructor(opts, loadEndpoints) {
        this.opts = hoek.applyToDefaults(clientDefaultOpts, opts)
        this.api = new Api(this, this.opts.api)

        // assign endpoint to the current instance
        const obj = Object.assign(this, loadEndpoints(this))
    }
    /**
     * 
     * @param {string} endpoint 
     * @param {object} opts 
     * @param {function} cb 
     */
    get(endpoint, opts, cb) {
        return sendRequest(this, "GET", endpoint, opts, cb)
    }
    /**
     * 
     * @param {string} endpoint 
     * @param {object} opts 
     * @param {object} formData 
     * @param {function} cb 
     */
    post(endpoint, opts, formData, cb) {
        return sendRequest(this, "POST", endpoint, opts, cb)
    }
    /**
     * 
     * @param {string} endpoint 
     * @param {object} opts 
     * @param {object} formData 
     * @param {function} cb 
     */
    del(endpoint, opts, formData, cb) {
        return sendRequest(this, "DELETE", endpoint, opts, cb)
    }
}

module.exports = InstagramClient

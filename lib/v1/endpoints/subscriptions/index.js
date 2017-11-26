const Endpoint = require("../../../endpoint")

/**
 * Client.subscriptions
 * ```js
 * // example
 * Client.subscriptions.create({
 *  object: "",
 *  aspect: "",
 *  verifyToken: "",
 *  callbackURL: "",
 *  accessToken: "SOMEACCESSTOKEN",
 * })
 * .then(result => {})
 * ```
 * @augments Endpoint
 */
class Subscriptions extends Endpoint {
    constructor(client) {
        super("subscriptions", client)
    }

    /**
     * Creates a subscription
     * @param {object} opts the options object { accessToken, sign, object, aspect, verifyToken, callbackURL }
     * @param {function} cb callback called if paseed, otherwise returns a promise 
     */
    create(opts = {}, cb) {
        const CLIENT_ID = this.client.opts.CLIENT_ID || opts.CLIENT_ID
        if (!CLIENT_ID) {
            const error = new Error("You must provide a client id")
            return cb ? cb(error) : Promise.reject(error)
        }

        const CLIENT_SECRET =
            this.client.opts.CLIENT_SECRET || opts.CLIENT_SECRET
        if (!CLIENT_SECRET) {
            const error = new Error("You must provide a client secret")
            return cb ? cb(error) : Promise.reject(error)
        }

        if (!opts.object){
            const error = new Error("You must provide an object")
            return cb ? cb(error) : Promise.reject(error)
        } 

        if (!opts.aspect) { 
            const error = new Error("You must provide an aspect")
            return cb ? cb(error) : Promise.reject(error)
        } 

        if (!opts.verifyToken) {
            const error = new Error("You must provide a verify token")
            return cb ? cb(error) : Promise.reject(error)
        }

        if (!opts.callbackURL) {
            const error = new Error("You must provide a callback url")
            return cb ? cb(error) : Promise.reject(error)
        }

        return this.api.call({
            uri: "/v1/subscriptions",
            method: "POST",
            formData: {
                client_id: CLIENT_ID,
                client_secret: CLIENT_SECRET,
                object: opts.object,
                aspect: opts.aspect,
                verify_token: opts.verifyToken,
                callback_url: opts.callbackURL,
            },
            json: true,
            sign: opts.sign,
        }, cb)
    }

    /**
     * Lists the subscriptions for the client
     * @param {object} opts the options object { accessToken, sign, object, aspect, verifyToken, callbackURL }
     * @param {function} cb callback called if paseed, otherwise returns a promise 
     */
    list(opts = {}, cb) {
        
        const CLIENT_ID = this.client.opts.CLIENT_ID || opts.CLIENT_ID
        if (!CLIENT_ID) {
            const error = new Error("You must provide a client id")
            return cb ? cb(error) : Promise.reject(error)
        }

        const CLIENT_SECRET =
            this.client.opts.CLIENT_SECRET || opts.CLIENT_SECRET
        if (!CLIENT_SECRET) {
            const error = new Error("You must provide a client secret")
            return cb ? cb(error) : Promise.reject(error)
        }

        return this.api.call({
            uri: "/v1/subscriptions",
            method: "GET",
            qs: {
                client_id: CLIENT_ID,
                client_secret: CLIENT_SECRET,
            },
        }, cb)
    }

    /**
     * Deletes subscriptions for the client
     * @param {object} opts the options object { accessToken, sign, object, aspect, verifyToken, callbackURL }
     * @param {function} cb callback called if paseed, otherwise returns a promise 
     */
    del(opts = {}) {}
}

module.exports = client => new Subscriptions(client)

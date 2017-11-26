const request = require("request")
const hoek = require("hoek")
const errors = require("./errors")
const crypto = require("crypto")

const apiDefaultOpts = {
    baseURI: "https://api.instagram.com",
}

const concatKeys = obj => {
    return Object.keys(obj)
        .sort()
        .reduce((agg, k) => {
            agg += `|${k}=${obj[k]}`
            return agg
        }, "")
}

class Api {
    constructor(client, opts) {
        this.client = client
        this.opts = hoek.applyToDefaults(apiDefaultOpts, opts)
        this.request = request
        this.errors = errors
    }

    signRequest(opts) {
        const clientSecret =
            opts.CLIENT_SECRET || this.client.opts.CLIENT_SECRET
        const hmac = crypto.createHmac("sha256", clientSecret)
        let strToHash = opts.uri
        if (opts.qs) strToHash += concatKeys(opts.qs)
        hmac.update(strToHash)
        return hmac.digest("hex")
    }

    call(opts, cb) {
        const reqOpts = {
            uri: this.opts.baseURI + opts.uri,
            qs: opts.qs,
            formData: opts.formData,
            json: !!opts.json,
            method: opts.method,
        }

        reqOpts.qs = reqOpts.qs || {}
        reqOpts.qs.client_id = process.env.INSTAGRAM_CLIENT_ID
        // sign
        if (this.client.opts.signAll || opts.sign) {
            reqOpts.qs = reqOpts.qs || {}
            reqOpts.qs.sig = this.signRequest(opts)
        }
        return new Promise((resolve, reject) => {
            this.request(reqOpts, (error, response, body) => {
                if (
                    error ||
                    (response.statusCode < 200 || response.statusCode > 299)
                ) {
                    return reject(
                        new errors.ResponseError({
                            error,
                            body,
                            statusCode: response.statusCode,
                            op: opts.op,
                        })
                    )
                }
                return resolve(body)
            })
        })
            .then(result => {
                if (cb) return cb(null, result)
                return result
            })
            .catch(error => {
                if (cb) return cb(error)
                throw error
            })
    }
}

module.exports = Api

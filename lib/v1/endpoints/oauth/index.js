const Endpoint = require("../../../endpoint")

const DEFAULT_RESPONSE_TYPE = "code"

/**
 * Client.oauth
 * ```js
 * // example
 * Client.oauth.getAccessToken({
 *  grantType: "",
 *  redirectURI: "",
 *  code: "",
 * })
 * .then(result => {})
 * ```
 * @augments Endpoint
 */
class OAuth extends Endpoint {
    constructor(client) {
        super("oauth", client)
    }

    /**
     * It returns the accessToken
     * @param {object} opts the options object { code, grantType, redirectURI }
     * @param {function} cb callback called if paseed, otherwise returns a promise 
     */
    getAccessToken(opts, cb) {
        // @ToDo
        // redirect URI is mandatory
        // code is mandatory
        if (!opts.redirectURI) {
            const error = new Error("You must provide a redirect URI")
            return cb ? cb(error) : Promise.reject(error)
        }

        if (!opts.code) {
            const error = new Error("You must provide a code")
            return cb ? cb(error) : Promise.reject(error)
        }

        return this.api
            .call(
                {
                    uri: `/oauth/access_token`,
                    method: "POST",
                    formData: {
                        client_id: this.opts.CLIENT_ID,
                        client_secret: this.opts.CLIENT_SECRET,
                        grant_type: opts.grantType,
                        code: opts.code,
                        redirect_uri: opts.redirectURI,
                    },
                    json: true,
                },
                cb
            )
    }

    /**
     * It returns the authURL
     * @param {object} opts the options object { CLIENT_ID, CLIENT_SECRET, responseType, redirectURI, scope }
     */
    getAuthURL(opts) {
        const clientID = opts.CLIENT_ID || this.opts.CLIENT_ID
        if (!clientID) throw new Error("You must provide a client ID")

        const responseType = opts.responseType || DEFAULT_RESPONSE_TYPE
        if (typeof responseType !== "string")
            throw new Error("Your must provide a valid response type")

        const redirectURI = opts.redirectURI || this.opts.redirectURI
        if (!redirectURI) throw new Error("You must provide a redirect URI")

        let url =
            `${this.api.opts.baseURI}/oauth/authorize?` +
            `client_id=${clientID}&response_type=${responseType}&redirect_uri=${redirectURI}`

        // scopes
        if (opts.scope && Array.isArray(opts.scope) && opts.scope.length > 0) {
            url += `&scope=${opts.scope.join("+")}`
        }

        return url
    }
}

module.exports = client => new OAuth(client)

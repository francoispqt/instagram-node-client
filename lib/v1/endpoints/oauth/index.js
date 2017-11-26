const Endpoint = require("../../../endpoint")

const DEFAULT_RESPONSE_TYPE = "code"

class OAuth extends Endpoint {
    constructor(client) {
        super("oauth", client)
    }

    getAccessToken(opts, cb) {
        return this.api
            .call(
                {
                    uri: `/oauth/access_token`,
                    method: "POST",
                    formData: {
                        client_id: this.opts.CLIENT_ID,
                        client_secret: this.opts.CLIENT_SECRET,
                        grant_type: opts.grant_type,
                        code: opts.code,
                        redirect_uri: opts.redirect_uri,
                    },
                    json: true,
                },
                cb
            )
            .then(result => {
                return result
            })
    }

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

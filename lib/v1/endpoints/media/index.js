const Endpoint = require("../../../endpoint")

/**
 * Client.media
 * ```js
 * // example
 * Client.media.getByID("SOMEMEDIAID", {
 *  accessToken: "SOMEACCESSTOKEN",
 * })
 * .then(result => {})
 * ```
 * @augments Endpoint
 */
class Media extends Endpoint {
    constructor(client) {
        super("media", client)
    }

    /**
     * Gets a media by id
     * @param {string} id the media ID
     * @param {object} opts the options object { accessToken, sign }
     * @param {function} cb callback called if paseed, otherwise returns a promise 
     */
    getByID(id, opts = {}, cb) {
        // @ToDo
        // handle no media ia
        if (!id) {
            const error = new Error("You must provide a media id")
            return cb ? cb(error) : Promise.reject(error)
        }

        const uri = `/v1/media/${id}`

        return this.api.call(
            {
                uri,
                method: "GET",
                json: true,
                qs: {
                    access_token: opts.accessToken,
                },
                sign: opts.sign,
                op: "getByID",
            },
            cb
        )
    }

    /**
     * Gets a media by shortcode
     * @param {string} id the media shortcode
     * @param {object} opts the options object { accessToken, sign }
     * @param {function} cb callback called if paseed, otherwise returns a promise 
     */
    getByShortcode(shortcode, opts = {}, cb) {
        // @ToDo
        // handle no media ia
        if (!shortcode) {
            const error = new Error("You must provide a media shortcode")
            return cb ? cb(error) : Promise.reject(error)
        }

        const uri = `/v1/media/shortcode/${shortcode}`

        return this.api.call(
            {
                uri,
                method: "GET",
                json: true,
                sign: opts.sign,
                qs: {
                    access_token: opts.accessToken,
                },
                op: "getByShortcode",
            },
            cb
        )
    }

    /**
     * Search media by locations
     * @param {string} id the media shortcode
     * @param {object} opts the options object { accessToken, sign, lng, lat, distance }
     * @param {function} cb callback called if paseed, otherwise returns a promise 
     */
    search(opts = {}, cb) {
        return this.api.call(
            {
                uri: `/v1/media/search`,
                method: "GET",
                qs: {
                    access_token: opts.accessToken,
                    lat: opts.lat,
                    lng: opts.lng,
                    distance: opts.distance,
                },
                sign: opts.sign,
                json: true,
                op: "search",
            },
            cb
        )
    }
}

module.exports = client => new Media(client)

const Endpoint = require("../../../endpoint")

/**
 * Client.likes
 * ```js
 * // example
 * Client.likes.getByMedia("MEDIAID", {
 *  accessToken: "SOMEACCESSTOKEN",
 * })
 * .then(result => {})
 * ```
 * @augments Endpoint
 */
class Likes extends Endpoint {
    constructor(client) {
        super("likes", client)
    }

    /**
     * Gets likes for a media by media id
     * @param {string} id the media ID
     * @param {object} opts the options object { accessToken, sign }
     * @param {function} cb callback called if paseed, otherwise returns a promise 
     */
    getByMedia(mediaID, opts, cb) {
        // @ToDo
        // handle no tagname
        if (!mediaID) {
            const error = new Error("You must provide a media id")
            return cb ? cb(error) : Promise.reject(error)
        }
        //
        return this.api.call(
            {
                uri: `/v1/media/${mediaID}/likes`,
                qs: {
                    access_token: opts.accessToken,
                },
                method: "GET",
                json: true,
                op: "getByMedia",
            },
            cb
        )
    }

    /**
     * Like a media by media id with user from accessToken
     * @param {string} id the media ID
     * @param {object} opts the options object { accessToken, sign }
     * @param {function} cb callback called if paseed, otherwise returns a promise 
     */
    likeMedia(mediaID, opts = {}, cb) {
        // @ToDo
        // handle no tagname
        if (!mediaID) {
            const error = new Error("You must provide a media id")
            return cb ? cb(error) : Promise.reject(error)
        }
        // handle no accessToken
        if (!opts.accessToken) {
            const error = new Error("You must provide an access token")
            return cb ? cb(error) : Promise.reject(error)
        }

        //
        return this.api.call(
            {
                uri: `/v1/media/${mediaID}/likes`,
                qs: {
                    access_token: opts.accessToken,
                },
                method: "POST",
                json: true,
                op: "getMediaRecent",
            },
            cb
        )
    }

    /**
     * Unlike a media by media id with user from accessToken
     * @param {string} id the media ID
     * @param {object} opts the options object { accessToken, sign }
     * @param {function} cb callback called if paseed, otherwise returns a promise 
     */
    unlikeMedia(mediaID, opts, cb) {
        // @ToDo
        // handle no tagname
        if (!mediaID) {
            const error = new Error("You must provide a media id")
            return cb ? cb(error) : Promise.reject(error)
        }
        // handle no accessToken
        if (!opts.accessToken) {
            const error = new Error("You must provide an access token")
            return cb ? cb(error) : Promise.reject(error)
        }

        return this.api.call(
            {
                uri: `/v1/media/${mediaID}/likes`,
                qs: {
                    access_token: opts.accessToken,
                    search: opts.q,
                },
                method: "DELETE",
                json: true,
                op: "search",
            },
            cb
        )
    }
}

module.exports = client => new Likes(client)

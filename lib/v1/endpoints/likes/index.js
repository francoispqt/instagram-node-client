const Endpoint = require("../../../endpoint")

class Likes extends Endpoint {
    constructor(client) {
        super("likes", client)
    }

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

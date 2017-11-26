const Endpoint = require("../../../endpoint")

class Comments extends Endpoint {
    constructor(client) {
        super("comments", client)
    }

    create(mediaID, opts, cb) {
        if (!opts.accessToken) {
            const error = new Error("You must provide an access token")
            return cb ? cb(error) : Promise.reject(error)
        }
        if (!mediaID) {
            const error = new Error("You must provide a media id")
            return cb ? cb(error) : Promise.reject(error)
        }
        if (!opts.text) {
            const error = new Error("You must provide a text")
            return cb ? cb(error) : Promise.reject(error)
        }

        const uri = `/v1/media/${mediaID}/comments`

        return this.api.call({
            uri,
            method: "POST",
            formData: {
                text: opts.text,
                access_token: opts.accessToken,
            },
            json: true,
            sign: opts.sign,
            op: "create",
        }, cb)
    }

    del(mediaID, commentID, opts = {}, cb) {
        // handle no media ID given
        if (!mediaID) {
            const error = new Error("You must provide a media id")
            return cb ? cb(error) : Promise.reject(error)
        }
        // handle no comments ID given
        if (!commentID) {
            const error = new Error("You must provide a comment id")
            return cb ? cb(error) : Promise.reject(error)
        }
        // handle no accessToken given
        if (!opts.accessToken) {
            const error = new Error("You must provide an access token")
            return cb ? cb(error) : Promise.reject(error)
        }

        // call api
        return this.api.call(
            {
                uri: `/v1/media/${mediaID}/comments/${commentID}`,
                qs: {
                    access_token: opts.accessToken,
                },
                method: "DELETE",
                json: true,
                sign: opts.sign,
                op: "del",
            },
            cb
        )
    }

    getByMediaID(mediaID, opts, cb) {
        // handle no media ID given
        if (!mediaID) {
            const error = new Error("You must provide a media id")
            return cb ? cb(error) : Promise.reject(error)
        }
        // handle no accessToken given
        if (!opts.accessToken) {
            const error = new Error("You must provide an access token")
            return cb ? cb(error) : Promise.reject(error)
        }
        // call api
        return this.api.call({
            uri: `/v1/media/${mediaID}/comments`,
            qs: {
                access_token: opts.accessToken,
            },
            method: "GET",
            json: true,
            sign: opts.sign,
            op: "getByMediaID",
        }, cb)
    }
}

module.exports = client => new Comments(client)

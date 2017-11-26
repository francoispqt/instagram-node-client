const Endpoint = require("../../../endpoint")

class Media extends Endpoint {
    constructor(client) {
        super("media", client)
    }

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

    // newComment(mediaID, opts = {}, cb) {
    //     if (!opts.accessToken) {
    //         const error = new Error("You must provide an access token")
    //         return cb ? cb(error) : Promise.reject(error)
    //     }
    //     if (!mediaID) {
    //         const error = new Error("You must provide a media ID")
    //         return cb ? cb(error) : Promise.reject(error)
    //     }
    //     if (!opts.text) {
    //         const error = new Error("You must provide a text")
    //         return cb ? cb(error) : Promise.reject(error)
    //     }

    //     const uri = `/v1/media/${mediaID}/comments`

    //     return this.api.call({
    //         uri,
    //         method: "POST",
    //         formData: {
    //             text: opts.text,
    //             access_token: opts.accessToken,
    //         }
    //     })
    // }

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

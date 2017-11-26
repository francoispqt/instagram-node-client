const Endpoint = require("../../../endpoint")

class Tags extends Endpoint {
    constructor(client) {
        super("tags", client)
    }

    getByName(tagName, opts = {}, cb) {
        // @ToDo
        // handle no tagname
        if (!tagName) {
            const error = new Error("You must provide a tag name")
            return cb ? cb(error) : Promise.reject(error)
        }
        //
        return this.api.call(
            {
                uri: `/v1/tags/${tagName}`,
                qs: {
                    access_token: opts.accessToken,
                },
                method: "GET",
                json: true,
                sign: opts.sign,
                op: "getByName",
            },
            cb
        )
    }

    getMediaRecent(tagName, opts = {}, cb) {
        // @ToDo
        // handle no tagname
        if (!tagName) {
            const error = new Error("You must provide a tag name")
            return cb ? cb(error) : Promise.reject(error)
        }

        //
        return this.api.call(
            {
                uri: `/v1/tags/${tagName}/media/recent`,
                qs: {
                    access_token: opts.accessToken,
                    max_tag_id: opts.maxTagID,
                    min_tag_id: opts.minTagID,
                    count: opts.count,
                },
                method: "GET",
                json: true,
                sign: opts.sign,
                op: "getMediaRecent",
            },
            cb
        )
    }

    search(opts = {}, cb) {
        // @ToDo
        // handle no query
        if (!opts.q) {
            const error = new Error("You must search with a query")
            return cb ? cb(error) : Promise.reject(error)
        }

        return this.api.call(
            {
                uri: `/v1/tags/search`,
                qs: {
                    access_token: opts.accessToken,
                    q: opts.q,
                },
                method: "GET",
                json: true,
                sign: opts.sign,
                op: "search",
            },
            cb
        )
    }

}

module.exports = client => new Tags(client)

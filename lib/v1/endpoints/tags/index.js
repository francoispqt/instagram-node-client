const Endpoint = require("../../../endpoint")

/**
 * Client.tags
 * ```js
 * // example
 * Client.tags.getByName("travel", {
 *  accessToken: "SOMEACCESSTOKEN",
 * })
 * .then(result => {})
 * ```
 * @augments Endpoint
 */
class Tags extends Endpoint {
    constructor(client) {
        super("tags", client)
    }

    /**
     * Gets a tag by name
     * @param {string} tagName the tag name
     * @param {object} opts the options object { accessToken, sign }
     * @param {function} cb callback called if paseed, otherwise returns a promise 
     */
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

    /**
     * Gets a tag's recent media by tag name
     * @param {string} tagName the tag name
     * @param {object} opts the options object { accessToken, sign, minTagID, maxTaxID, count }
     * @param {function} cb callback called if paseed, otherwise returns a promise 
     */
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

    /**
     * Searches a tag by tag name
     * @param {string} tagName the tag name
     * @param {object} opts the options object { accessToken, sign }
     * @param {function} cb callback called if paseed, otherwise returns a promise 
     */
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

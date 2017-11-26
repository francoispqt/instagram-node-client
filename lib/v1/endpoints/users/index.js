const Endpoint = require("../../../endpoint")

/**
 * Client.users
 * ```js
 * // example
 * Client.users.getSelf({
 *  accessToken: "SOMEACCESSTOKEN",
 * })
 * .then(result => {})
 * ```
 * @augments Endpoint
 */
class Users extends Endpoint {
    constructor(client) {
        super("users", client)
    }

    /**
     * Gets the user from the access token
     * @param {object} opts the options object { accessToken, sign }
     * @param {function} cb callback called if paseed, otherwise returns a promise 
     */
    getSelf(opts = {}, cb) {
        if (!opts.accessToken) {
            const error = new Error("You must provide an access token")
            return cb ? cb(error) : Promise.reject(error)
        }

        return this.api.call(
            {
                uri: `/v1/users/self`,
                method: "GET",
                qs: {
                    access_token: opts.accessToken,
                },
                sign: opts.sign,
                json: true,
                op: "getSelf",
            },
            cb
        )
    }

    /**
     * Gets the users followed by the user from the access token
     * @param {object} opts the options object { accessToken, sign }
     * @param {function} cb callback called if paseed, otherwise returns a promise 
     */
    getSelfFollows(opts = {}, cb) {
        // @ToDo
        // Handle no accessToken error
        if (!opts.accessToken) {
            const error = new Error("You must provide an access token")
            return cb ? cb(error) : Promise.reject(error)
        }

        return this.api.call(
            {
                uri: `/v1/users/self/follows`,
                qs: {
                    access_token: opts.accessToken,
                },
                method: "GET",
                json: true,
                sign: opts.sign,
                op: "getSelfFollows",
            },
            cb
        )
    }

    /**
     * Gets the user's follower of the user from the access token
     * @param {object} opts the options object { accessToken, sign }
     * @param {function} cb callback called if paseed, otherwise returns a promise 
     */
    getSelfFollowedBy(opts = {}, cb) {
        // @ToDo
        // Handle no accessToken error
        if (!opts.accessToken) {
            const error = new Error("You must provide an access token")
            return cb ? cb(error) : Promise.reject(error)
        }

        return this.api.call(
            {
                uri: `/v1/users/self/followed-by`,
                qs: {
                    access_token: opts.accessToken,
                },
                method: "GET",
                json: true,
                sign: opts.sign,
                op: "getSelfFollowedBy",
            },
            cb
        )
    }

    /**
     * Gets the pending follow requests of the user from the access token
     * @param {object} opts the options object { accessToken, sign }
     * @param {function} cb callback called if paseed, otherwise returns a promise 
     */
    getSelfRequestedBy(opts = {}, cb) {
        if (!opts.accessToken) {
            const error = new Error("You must provide an access token")
            return cb ? cb(error) : Promise.reject(error)
        }

        return this.api.call(
            {
                uri: `/v1/users/self/requested-by`,
                qs: {
                    access_token: opts.accessToken,
                },
                method: "GET",
                json: true,
                sign: opts.sign,
                op: "getSelfRequestedBy",
            },
            cb
        )
    }

    /**
     * Gets the relationship between a user and the user from the access token
     * @param {string} id the ID of the user to check the relatioship with the accessToken user
     * @param {object} opts the options object { accessToken, sign }
     * @param {function} cb callback called if paseed, otherwise returns a promise 
     */
    getRelationshipWithUser(id, opts = {}, cb) {
        // @ToDo
        // Handle no ID
        if (!id) {
            const error = new Error("You must provide a user id")
            return cb ? cb(error) : Promise.reject(error)
        }

        // @ToDo
        // Handle no accessToken error
        if (!opts.accessToken) {
            const error = new Error("You must provide an access token")
            return cb ? cb(error) : Promise.reject(error)
        }

        return this.api.call(
            {
                uri: `/v1/users/${id}/relationship`,
                qs: {
                    access_token: opts.accessToken,
                },
                method: "GET",
                json: true,
                sign: opts.sign,
                op: "getRelationshipWithUser",
            },
            cb
        )
    }

    /**
     * Updates the relationship between a user and the user from the access token
     * @param {string} id the ID of the user to check the relatioship with the accessToken user
     * @param {object} opts the options object { accessToken, sign, action }
     * @param {function} cb callback called if paseed, otherwise returns a promise 
     */
    updateRelationshipWithUser(id, opts = {}, cb) {
        // @ToDo
        // Handle no ID
        if (!id) {
            const error = new Error("You must provide a user id")
            return cb ? cb(error) : Promise.reject(error)
        }

        // @ToDo
        // Handle no accessToken error
        if (!opts.accessToken) {
            const error = new Error("You must provide an access token")
            return cb ? cb(error) : Promise.reject(error)
        }

        return this.api.call(
            {
                uri: `/v1/users/${id}/relationship`,
                qs: {
                    access_token: opts.accessToken,
                },
                formData: {
                    action: opts.action,
                },
                method: "POST",
                json: true,
                sign: opts.sign,
                op: "updateRelationshipWithUser",
            },
            cb
        )
    }

    /**
     * Gets a user by ID
     * @param {string} id the ID of the user to get
     * @param {object} opts the options object { accessToken, sign }
     * @param {function} cb callback called if paseed, otherwise returns a promise 
     */
    getByID(id, opts = {}, cb) {
        const uri = `/v1/users/${id}`

        // Handle no ID
        if (!id) {
            const error = new Error("You must provide a user id")
            return cb ? cb(error) : Promise.reject(error)
        }

        return this.api.call(
            {
                uri,
                method: "GET",
                qs: {
                    access_token: opts.accessToken,
                },
                json: true,
                sign: opts.sign,
                op: "getByID",
            },
            cb
        )
    }

    /**
     * Gets a user's recent media by user ID
     * @param {string} id the ID of the user to get
     * @param {object} opts the options object { accessToken, sign, count }
     * @param {function} cb callback called if paseed, otherwise returns a promise 
     */
    getUserRecentMedia(id, opts = {}, cb) {
        if (!id) {
            const error = new Error("You must provide a user id")
            return cb ? cb(error) : Promise.reject(error)
        }

        return this.api.call(
            {
                uri: `/v1/users/${id}/media/recent`,
                qs: {
                    access_token: opts.accessToken,
                    count: opts.count,
                },
                method: "GET",
                json: true,
                sign: opts.sign,
                op: "getUserRecentMedia",
            },
            cb
        )
    }

    /**
     * Gets a self recent media from the accessToken
     * @param {object} opts the options object { accessToken, sign }
     * @param {function} cb callback called if paseed, otherwise returns a promise 
     */
    getSelfRecentMedia(opts = {}, cb) {
        if (!opts.accessToken) {
            const error = new Error("You must provide an access token")
            return cb ? cb(error) : Promise.reject(error)
        }
        return this.api.call(
            {
                uri: `/v1/users/self/media/recent`,
                qs: {
                    access_token: opts.accessToken,
                },
                method: "GET",
                json: true,
                sign: opts.sign,
                op: "getSelfRecentMedia",
            },
            cb
        )
    }

    /**
     * Gets a self media liked from the accessToken
     * @param {object} opts the options object { accessToken, sign }
     * @param {function} cb callback called if paseed, otherwise returns a promise 
     */
    getSelfMediaLiked(opts = {}, cb) {
        if (!opts.accessToken) {
            const error = new Error("You must provide an access token")
            return cb ? cb(error) : Promise.reject(error)
        }
        return this.api.call(
            {
                uri: `/v1/users/self/media/liked`,
                method: "GET",
                qs: {
                    access_token: opts.accessToken,
                    max_like_id: opts.maxLikeId,
                    count: opts.count,
                },
                json: true,
                sign: true,
                op: "getSelfMediaLiked",
            },
            cb
        )
    }

    /**
     * Search a users
     * @param {object} opts the options object { accessToken, sign, q }
     * @param {function} cb callback called if paseed, otherwise returns a promise 
     */
    search(opts = {}, cb) {
        if (!opts.q) {
            const error = new Error("You must search with a q")
            return cb ? cb(error) : Promise.reject(error)
        }
        return this.api.call(
            {
                uri: `/v1/users/search`,
                method: "GET",
                qs: {
                    access_token: opts.accessToken,
                    q: opts.q,
                },
                json: true,
                sign: opts.sign,
                op: "search",
            },
            cb
        )
    }
}

module.exports = client => new Users(client)

const Endpoint = require("../../../endpoint")

class Users extends Endpoint {
    constructor(client) {
        super("users", client)
    }

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

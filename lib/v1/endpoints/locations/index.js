const Endpoint = require("../../../endpoint")

class Locations extends Endpoint {
    constructor(client) {
        super("locations", client)
    }

    getByID(id, opts = {}, cb) {
        if (!id) {
            const error = new Error("You must provide a location id")
            return cb ? cb(error) : Promise.reject(error)
        }

        let uri = `/v1/locations/${id}`

        return this.api.call(
            {
                uri,
                method: "GET",
                qs: {
                    access_token: process.env.INSTAGRAM_ACCESS_TOKEN,
                },
                json: true,
                sign: opts.sign,
                op: "getByID",
            },
            cb
        )
    }

    getMediaRecent(id, opts = {}, cb) {
        if (!id) {
            const error = new Error("You must provide a location id")
            return cb ? cb(error) : Promise.reject(error)
        }

        return this.api.call(
            {
                uri: `/v1/locations/${id}/media/recent`,
                qs: {
                    access_token: opts.accessToken,
                    max_id: opts.maxTagID,
                    min_id: opts.minTagID,
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
        // handle no lat/lng or facebookplacesid
        if ((!opts.lat || !opts.lng) && !opts.facebookPlacesID) {
            const error = new Error("You must search with a query")
            return cb ? cb(error) : Promise.reject(error)
        }

        return this.api.call(
            {
                uri: `/v1/locations/search`,
                qs: {
                    access_token: opts.accessToken,
                    lat: opts.lat,
                    lng: opts.lng,
                    facebook_places_id: opts.facebookPlacesID,
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

module.exports = client => new Locations(client)

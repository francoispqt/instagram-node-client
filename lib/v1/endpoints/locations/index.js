const Endpoint = require("../../../endpoint")

/**
 * Client.locations
 * ```js
 * // example
 * Client.locations.getByID("LOCATIONID", {
 *  accessToken: "SOMEACCESSTOKEN",
 * })
 * .then(result => {})
 * ```
 * @augments Endpoint
 */
class Locations extends Endpoint {
    constructor(client) {
        super("locations", client)
    }

    /**
     * Gets a location by id
     * @param {string} id the location ID
     * @param {object} opts the options object { accessToken, sign }
     * @param {function} cb callback called if paseed, otherwise returns a promise 
     */
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

    /**
     * Gets recent media for location by location id
     * @param {string} id the location ID
     * @param {object} opts the options object { accessToken, sign, maxTagID, minTagID }
     * @param {function} cb callback called if paseed, otherwise returns a promise 
     */
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

    /**
     * Search locations
     * @param {object} opts the options object { accessToken, sign, lat, lng, facebookPlacesID }
     * @param {function} cb callback called if paseed, otherwise returns a promise 
     */
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

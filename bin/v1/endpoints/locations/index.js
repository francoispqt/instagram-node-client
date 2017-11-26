"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Endpoint = require("../../../endpoint");

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

var Locations = function (_Endpoint) {
    _inherits(Locations, _Endpoint);

    function Locations(client) {
        _classCallCheck(this, Locations);

        return _possibleConstructorReturn(this, (Locations.__proto__ || Object.getPrototypeOf(Locations)).call(this, "locations", client));
    }

    /**
     * Gets a location by id
     * @param {string} id the location ID
     * @param {object} opts the options object { accessToken, sign }
     * @param {function} cb callback called if paseed, otherwise returns a promise 
     */


    _createClass(Locations, [{
        key: "getByID",
        value: function getByID(id) {
            var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            var cb = arguments[2];

            if (!id) {
                var error = new Error("You must provide a location id");
                return cb ? cb(error) : Promise.reject(error);
            }

            var uri = "/v1/locations/" + id;

            return this.api.call({
                uri: uri,
                method: "GET",
                qs: {
                    access_token: process.env.INSTAGRAM_ACCESS_TOKEN
                },
                json: true,
                sign: opts.sign,
                op: "getByID"
            }, cb);
        }

        /**
         * Gets recent media for location by location id
         * @param {string} id the location ID
         * @param {object} opts the options object { accessToken, sign, maxTagID, minTagID }
         * @param {function} cb callback called if paseed, otherwise returns a promise 
         */

    }, {
        key: "getMediaRecent",
        value: function getMediaRecent(id) {
            var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            var cb = arguments[2];

            if (!id) {
                var error = new Error("You must provide a location id");
                return cb ? cb(error) : Promise.reject(error);
            }

            return this.api.call({
                uri: "/v1/locations/" + id + "/media/recent",
                qs: {
                    access_token: opts.accessToken,
                    max_id: opts.maxTagID,
                    min_id: opts.minTagID
                },
                method: "GET",
                json: true,
                sign: opts.sign,
                op: "getMediaRecent"
            }, cb);
        }

        /**
         * Search locations
         * @param {object} opts the options object { accessToken, sign, lat, lng, facebookPlacesID }
         * @param {function} cb callback called if paseed, otherwise returns a promise 
         */

    }, {
        key: "search",
        value: function search() {
            var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var cb = arguments[1];

            // @ToDo
            // handle no lat/lng or facebookplacesid
            if ((!opts.lat || !opts.lng) && !opts.facebookPlacesID) {
                var error = new Error("You must search with a query");
                return cb ? cb(error) : Promise.reject(error);
            }

            return this.api.call({
                uri: "/v1/locations/search",
                qs: {
                    access_token: opts.accessToken,
                    lat: opts.lat,
                    lng: opts.lng,
                    facebook_places_id: opts.facebookPlacesID
                },
                method: "GET",
                json: true,
                sign: opts.sign,
                op: "search"
            }, cb);
        }
    }]);

    return Locations;
}(Endpoint);

module.exports = function (client) {
    return new Locations(client);
};
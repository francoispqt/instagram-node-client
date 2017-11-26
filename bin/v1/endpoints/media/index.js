"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Endpoint = require("../../../endpoint");

/**
 * Client.media
 * ```js
 * // example
 * Client.media.getByID("SOMEMEDIAID", {
 *  accessToken: "SOMEACCESSTOKEN",
 * })
 * .then(result => {})
 * ```
 * @augments Endpoint
 */

var Media = function (_Endpoint) {
    _inherits(Media, _Endpoint);

    function Media(client) {
        _classCallCheck(this, Media);

        return _possibleConstructorReturn(this, (Media.__proto__ || Object.getPrototypeOf(Media)).call(this, "media", client));
    }

    /**
     * Gets a media by id
     * @param {string} id the media ID
     * @param {object} opts the options object { accessToken, sign }
     * @param {function} cb callback called if paseed, otherwise returns a promise 
     */


    _createClass(Media, [{
        key: "getByID",
        value: function getByID(id) {
            var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            var cb = arguments[2];

            // @ToDo
            // handle no media ia
            if (!id) {
                var error = new Error("You must provide a media id");
                return cb ? cb(error) : Promise.reject(error);
            }

            var uri = "/v1/media/" + id;

            return this.api.call({
                uri: uri,
                method: "GET",
                json: true,
                qs: {
                    access_token: opts.accessToken
                },
                sign: opts.sign,
                op: "getByID"
            }, cb);
        }

        /**
         * Gets a media by shortcode
         * @param {string} id the media shortcode
         * @param {object} opts the options object { accessToken, sign }
         * @param {function} cb callback called if paseed, otherwise returns a promise 
         */

    }, {
        key: "getByShortcode",
        value: function getByShortcode(shortcode) {
            var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            var cb = arguments[2];

            // @ToDo
            // handle no media ia
            if (!shortcode) {
                var error = new Error("You must provide a media shortcode");
                return cb ? cb(error) : Promise.reject(error);
            }

            var uri = "/v1/media/shortcode/" + shortcode;

            return this.api.call({
                uri: uri,
                method: "GET",
                json: true,
                sign: opts.sign,
                qs: {
                    access_token: opts.accessToken
                },
                op: "getByShortcode"
            }, cb);
        }

        /**
         * Search media by locations
         * @param {string} id the media shortcode
         * @param {object} opts the options object { accessToken, sign, lng, lat, distance }
         * @param {function} cb callback called if paseed, otherwise returns a promise 
         */

    }, {
        key: "search",
        value: function search() {
            var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var cb = arguments[1];

            return this.api.call({
                uri: "/v1/media/search",
                method: "GET",
                qs: {
                    access_token: opts.accessToken,
                    lat: opts.lat,
                    lng: opts.lng,
                    distance: opts.distance
                },
                sign: opts.sign,
                json: true,
                op: "search"
            }, cb);
        }
    }]);

    return Media;
}(Endpoint);

module.exports = function (client) {
    return new Media(client);
};
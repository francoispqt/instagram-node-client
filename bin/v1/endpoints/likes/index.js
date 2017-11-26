"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Endpoint = require("../../../endpoint");

/**
 * Client.likes
 * ```js
 * // example
 * Client.likes.getByMedia("MEDIAID", {
 *  accessToken: "SOMEACCESSTOKEN",
 * })
 * .then(result => {})
 * ```
 * @augments Endpoint
 */

var Likes = function (_Endpoint) {
    _inherits(Likes, _Endpoint);

    function Likes(client) {
        _classCallCheck(this, Likes);

        return _possibleConstructorReturn(this, (Likes.__proto__ || Object.getPrototypeOf(Likes)).call(this, "likes", client));
    }

    /**
     * Gets likes for a media by media id
     * @param {string} id the media ID
     * @param {object} opts the options object { accessToken, sign }
     * @param {function} cb callback called if paseed, otherwise returns a promise 
     */


    _createClass(Likes, [{
        key: "getByMedia",
        value: function getByMedia(mediaID, opts, cb) {
            // @ToDo
            // handle no tagname
            if (!mediaID) {
                var error = new Error("You must provide a media id");
                return cb ? cb(error) : Promise.reject(error);
            }
            //
            return this.api.call({
                uri: "/v1/media/" + mediaID + "/likes",
                qs: {
                    access_token: opts.accessToken
                },
                method: "GET",
                json: true,
                op: "getByMedia"
            }, cb);
        }

        /**
         * Like a media by media id with user from accessToken
         * @param {string} id the media ID
         * @param {object} opts the options object { accessToken, sign }
         * @param {function} cb callback called if paseed, otherwise returns a promise 
         */

    }, {
        key: "likeMedia",
        value: function likeMedia(mediaID) {
            var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            var cb = arguments[2];

            // @ToDo
            // handle no tagname
            if (!mediaID) {
                var error = new Error("You must provide a media id");
                return cb ? cb(error) : Promise.reject(error);
            }
            // handle no accessToken
            if (!opts.accessToken) {
                var _error = new Error("You must provide an access token");
                return cb ? cb(_error) : Promise.reject(_error);
            }

            //
            return this.api.call({
                uri: "/v1/media/" + mediaID + "/likes",
                qs: {
                    access_token: opts.accessToken
                },
                method: "POST",
                json: true,
                op: "getMediaRecent"
            }, cb);
        }

        /**
         * Unlike a media by media id with user from accessToken
         * @param {string} id the media ID
         * @param {object} opts the options object { accessToken, sign }
         * @param {function} cb callback called if paseed, otherwise returns a promise 
         */

    }, {
        key: "unlikeMedia",
        value: function unlikeMedia(mediaID, opts, cb) {
            // @ToDo
            // handle no tagname
            if (!mediaID) {
                var error = new Error("You must provide a media id");
                return cb ? cb(error) : Promise.reject(error);
            }
            // handle no accessToken
            if (!opts.accessToken) {
                var _error2 = new Error("You must provide an access token");
                return cb ? cb(_error2) : Promise.reject(_error2);
            }

            return this.api.call({
                uri: "/v1/media/" + mediaID + "/likes",
                qs: {
                    access_token: opts.accessToken,
                    search: opts.q
                },
                method: "DELETE",
                json: true,
                op: "search"
            }, cb);
        }
    }]);

    return Likes;
}(Endpoint);

module.exports = function (client) {
    return new Likes(client);
};
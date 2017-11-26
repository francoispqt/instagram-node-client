"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Endpoint = require("../../../endpoint");

/**
 * Client.comments
 * ```js
 * // example
 * Client.comments.create("MEDIAID", {
 *  text: "some comment",
 *  accessToken: "SOMEACCESSTOKEN",
 * })
 * .then(result => {})
 * ```
 * @augments Endpoint
 */

var Comments = function (_Endpoint) {
    _inherits(Comments, _Endpoint);

    function Comments(client) {
        _classCallCheck(this, Comments);

        return _possibleConstructorReturn(this, (Comments.__proto__ || Object.getPrototypeOf(Comments)).call(this, "comments", client));
    }

    /**
     * Creates a comment for a media by media id
     * @param {string} id the media ID
     * @param {object} opts the options object { accessToken, sign, text }
     * @param {function} cb callback called if paseed, otherwise returns a promise 
     */


    _createClass(Comments, [{
        key: "create",
        value: function create(mediaID, opts, cb) {
            if (!opts.accessToken) {
                var error = new Error("You must provide an access token");
                return cb ? cb(error) : Promise.reject(error);
            }
            if (!mediaID) {
                var _error = new Error("You must provide a media id");
                return cb ? cb(_error) : Promise.reject(_error);
            }
            if (!opts.text) {
                var _error2 = new Error("You must provide a text");
                return cb ? cb(_error2) : Promise.reject(_error2);
            }

            var uri = "/v1/media/" + mediaID + "/comments";

            return this.api.call({
                uri: uri,
                method: "POST",
                formData: {
                    text: opts.text,
                    access_token: opts.accessToken
                },
                json: true,
                sign: opts.sign,
                op: "create"
            }, cb);
        }

        /**
         * Deletes a comment for a media by media id
         * @param {string} id the media ID
         * @param {object} opts the options object { accessToken, sign, text }
         * @param {function} cb callback called if paseed, otherwise returns a promise 
         */

    }, {
        key: "del",
        value: function del(mediaID, commentID) {
            var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
            var cb = arguments[3];

            // handle no media ID given
            if (!mediaID) {
                var error = new Error("You must provide a media id");
                return cb ? cb(error) : Promise.reject(error);
            }
            // handle no comments ID given
            if (!commentID) {
                var _error3 = new Error("You must provide a comment id");
                return cb ? cb(_error3) : Promise.reject(_error3);
            }
            // handle no accessToken given
            if (!opts.accessToken) {
                var _error4 = new Error("You must provide an access token");
                return cb ? cb(_error4) : Promise.reject(_error4);
            }

            // call api
            return this.api.call({
                uri: "/v1/media/" + mediaID + "/comments/" + commentID,
                qs: {
                    access_token: opts.accessToken
                },
                method: "DELETE",
                json: true,
                sign: opts.sign,
                op: "del"
            }, cb);
        }

        /**
         * Get comments for a media by media id
         * @param {string} id the media ID
         * @param {object} opts the options object { accessToken, sign, text }
         * @param {function} cb callback called if paseed, otherwise returns a promise 
         */

    }, {
        key: "getByMediaID",
        value: function getByMediaID(mediaID, opts, cb) {
            // handle no media ID given
            if (!mediaID) {
                var error = new Error("You must provide a media id");
                return cb ? cb(error) : Promise.reject(error);
            }
            // handle no accessToken given
            if (!opts.accessToken) {
                var _error5 = new Error("You must provide an access token");
                return cb ? cb(_error5) : Promise.reject(_error5);
            }
            // call api
            return this.api.call({
                uri: "/v1/media/" + mediaID + "/comments",
                qs: {
                    access_token: opts.accessToken
                },
                method: "GET",
                json: true,
                sign: opts.sign,
                op: "getByMediaID"
            }, cb);
        }
    }]);

    return Comments;
}(Endpoint);

module.exports = function (client) {
    return new Comments(client);
};
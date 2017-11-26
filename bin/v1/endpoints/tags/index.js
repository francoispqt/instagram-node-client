"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Endpoint = require("../../../endpoint");

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

var Tags = function (_Endpoint) {
    _inherits(Tags, _Endpoint);

    function Tags(client) {
        _classCallCheck(this, Tags);

        return _possibleConstructorReturn(this, (Tags.__proto__ || Object.getPrototypeOf(Tags)).call(this, "tags", client));
    }

    /**
     * Gets a tag by name
     * @param {string} tagName the tag name
     * @param {object} opts the options object { accessToken, sign }
     * @param {function} cb callback called if paseed, otherwise returns a promise 
     */


    _createClass(Tags, [{
        key: "getByName",
        value: function getByName(tagName) {
            var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            var cb = arguments[2];

            // @ToDo
            // handle no tagname
            if (!tagName) {
                var error = new Error("You must provide a tag name");
                return cb ? cb(error) : Promise.reject(error);
            }
            //
            return this.api.call({
                uri: "/v1/tags/" + tagName,
                qs: {
                    access_token: opts.accessToken
                },
                method: "GET",
                json: true,
                sign: opts.sign,
                op: "getByName"
            }, cb);
        }

        /**
         * Gets a tag's recent media by tag name
         * @param {string} tagName the tag name
         * @param {object} opts the options object { accessToken, sign, minTagID, maxTaxID, count }
         * @param {function} cb callback called if paseed, otherwise returns a promise 
         */

    }, {
        key: "getMediaRecent",
        value: function getMediaRecent(tagName) {
            var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            var cb = arguments[2];

            // @ToDo
            // handle no tagname
            if (!tagName) {
                var error = new Error("You must provide a tag name");
                return cb ? cb(error) : Promise.reject(error);
            }

            //
            return this.api.call({
                uri: "/v1/tags/" + tagName + "/media/recent",
                qs: {
                    access_token: opts.accessToken,
                    max_tag_id: opts.maxTagID,
                    min_tag_id: opts.minTagID,
                    count: opts.count
                },
                method: "GET",
                json: true,
                sign: opts.sign,
                op: "getMediaRecent"
            }, cb);
        }

        /**
         * Searches a tag by tag name
         * @param {string} tagName the tag name
         * @param {object} opts the options object { accessToken, sign }
         * @param {function} cb callback called if paseed, otherwise returns a promise 
         */

    }, {
        key: "search",
        value: function search() {
            var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var cb = arguments[1];

            // @ToDo
            // handle no query
            if (!opts.q) {
                var error = new Error("You must search with a query");
                return cb ? cb(error) : Promise.reject(error);
            }

            return this.api.call({
                uri: "/v1/tags/search",
                qs: {
                    access_token: opts.accessToken,
                    q: opts.q
                },
                method: "GET",
                json: true,
                sign: opts.sign,
                op: "search"
            }, cb);
        }
    }]);

    return Tags;
}(Endpoint);

module.exports = function (client) {
    return new Tags(client);
};
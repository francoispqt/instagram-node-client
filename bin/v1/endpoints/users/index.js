"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Endpoint = require("../../../endpoint");

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

var Users = function (_Endpoint) {
    _inherits(Users, _Endpoint);

    function Users(client) {
        _classCallCheck(this, Users);

        return _possibleConstructorReturn(this, (Users.__proto__ || Object.getPrototypeOf(Users)).call(this, "users", client));
    }

    /**
     * Gets the user from the access token
     * @param {object} opts the options object { accessToken, sign }
     * @param {function} cb callback called if paseed, otherwise returns a promise 
     */


    _createClass(Users, [{
        key: "getSelf",
        value: function getSelf() {
            var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var cb = arguments[1];

            if (!opts.accessToken) {
                var error = new Error("You must provide an access token");
                return cb ? cb(error) : Promise.reject(error);
            }

            return this.api.call({
                uri: "/v1/users/self",
                method: "GET",
                qs: {
                    access_token: opts.accessToken
                },
                sign: opts.sign,
                json: true,
                op: "getSelf"
            }, cb);
        }

        /**
         * Gets the users followed by the user from the access token
         * @param {object} opts the options object { accessToken, sign }
         * @param {function} cb callback called if paseed, otherwise returns a promise 
         */

    }, {
        key: "getSelfFollows",
        value: function getSelfFollows() {
            var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var cb = arguments[1];

            // @ToDo
            // Handle no accessToken error
            if (!opts.accessToken) {
                var error = new Error("You must provide an access token");
                return cb ? cb(error) : Promise.reject(error);
            }

            return this.api.call({
                uri: "/v1/users/self/follows",
                qs: {
                    access_token: opts.accessToken
                },
                method: "GET",
                json: true,
                sign: opts.sign,
                op: "getSelfFollows"
            }, cb);
        }

        /**
         * Gets the user's follower of the user from the access token
         * @param {object} opts the options object { accessToken, sign }
         * @param {function} cb callback called if paseed, otherwise returns a promise 
         */

    }, {
        key: "getSelfFollowedBy",
        value: function getSelfFollowedBy() {
            var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var cb = arguments[1];

            // @ToDo
            // Handle no accessToken error
            if (!opts.accessToken) {
                var error = new Error("You must provide an access token");
                return cb ? cb(error) : Promise.reject(error);
            }

            return this.api.call({
                uri: "/v1/users/self/followed-by",
                qs: {
                    access_token: opts.accessToken
                },
                method: "GET",
                json: true,
                sign: opts.sign,
                op: "getSelfFollowedBy"
            }, cb);
        }

        /**
         * Gets the pending follow requests of the user from the access token
         * @param {object} opts the options object { accessToken, sign }
         * @param {function} cb callback called if paseed, otherwise returns a promise 
         */

    }, {
        key: "getSelfRequestedBy",
        value: function getSelfRequestedBy() {
            var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var cb = arguments[1];

            if (!opts.accessToken) {
                var error = new Error("You must provide an access token");
                return cb ? cb(error) : Promise.reject(error);
            }

            return this.api.call({
                uri: "/v1/users/self/requested-by",
                qs: {
                    access_token: opts.accessToken
                },
                method: "GET",
                json: true,
                sign: opts.sign,
                op: "getSelfRequestedBy"
            }, cb);
        }

        /**
         * Gets the relationship between a user and the user from the access token
         * @param {string} id the ID of the user to check the relatioship with the accessToken user
         * @param {object} opts the options object { accessToken, sign }
         * @param {function} cb callback called if paseed, otherwise returns a promise 
         */

    }, {
        key: "getRelationshipWithUser",
        value: function getRelationshipWithUser(id) {
            var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            var cb = arguments[2];

            // @ToDo
            // Handle no ID
            if (!id) {
                var error = new Error("You must provide a user id");
                return cb ? cb(error) : Promise.reject(error);
            }

            // @ToDo
            // Handle no accessToken error
            if (!opts.accessToken) {
                var _error = new Error("You must provide an access token");
                return cb ? cb(_error) : Promise.reject(_error);
            }

            return this.api.call({
                uri: "/v1/users/" + id + "/relationship",
                qs: {
                    access_token: opts.accessToken
                },
                method: "GET",
                json: true,
                sign: opts.sign,
                op: "getRelationshipWithUser"
            }, cb);
        }

        /**
         * Updates the relationship between a user and the user from the access token
         * @param {string} id the ID of the user to check the relatioship with the accessToken user
         * @param {object} opts the options object { accessToken, sign, action }
         * @param {function} cb callback called if paseed, otherwise returns a promise 
         */

    }, {
        key: "updateRelationshipWithUser",
        value: function updateRelationshipWithUser(id) {
            var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            var cb = arguments[2];

            // @ToDo
            // Handle no ID
            if (!id) {
                var error = new Error("You must provide a user id");
                return cb ? cb(error) : Promise.reject(error);
            }

            // @ToDo
            // Handle no accessToken error
            if (!opts.accessToken) {
                var _error2 = new Error("You must provide an access token");
                return cb ? cb(_error2) : Promise.reject(_error2);
            }

            return this.api.call({
                uri: "/v1/users/" + id + "/relationship",
                qs: {
                    access_token: opts.accessToken
                },
                formData: {
                    action: opts.action
                },
                method: "POST",
                json: true,
                sign: opts.sign,
                op: "updateRelationshipWithUser"
            }, cb);
        }

        /**
         * Gets a user by ID
         * @param {string} id the ID of the user to get
         * @param {object} opts the options object { accessToken, sign }
         * @param {function} cb callback called if paseed, otherwise returns a promise 
         */

    }, {
        key: "getByID",
        value: function getByID(id) {
            var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            var cb = arguments[2];

            var uri = "/v1/users/" + id;

            // Handle no ID
            if (!id) {
                var error = new Error("You must provide a user id");
                return cb ? cb(error) : Promise.reject(error);
            }

            return this.api.call({
                uri: uri,
                method: "GET",
                qs: {
                    access_token: opts.accessToken
                },
                json: true,
                sign: opts.sign,
                op: "getByID"
            }, cb);
        }

        /**
         * Gets a user's recent media by user ID
         * @param {string} id the ID of the user to get
         * @param {object} opts the options object { accessToken, sign, count }
         * @param {function} cb callback called if paseed, otherwise returns a promise 
         */

    }, {
        key: "getUserRecentMedia",
        value: function getUserRecentMedia(id) {
            var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            var cb = arguments[2];

            if (!id) {
                var error = new Error("You must provide a user id");
                return cb ? cb(error) : Promise.reject(error);
            }

            return this.api.call({
                uri: "/v1/users/" + id + "/media/recent",
                qs: {
                    access_token: opts.accessToken,
                    count: opts.count
                },
                method: "GET",
                json: true,
                sign: opts.sign,
                op: "getUserRecentMedia"
            }, cb);
        }

        /**
         * Gets a self recent media from the accessToken
         * @param {object} opts the options object { accessToken, sign }
         * @param {function} cb callback called if paseed, otherwise returns a promise 
         */

    }, {
        key: "getSelfRecentMedia",
        value: function getSelfRecentMedia() {
            var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var cb = arguments[1];

            if (!opts.accessToken) {
                var error = new Error("You must provide an access token");
                return cb ? cb(error) : Promise.reject(error);
            }
            return this.api.call({
                uri: "/v1/users/self/media/recent",
                qs: {
                    access_token: opts.accessToken
                },
                method: "GET",
                json: true,
                sign: opts.sign,
                op: "getSelfRecentMedia"
            }, cb);
        }

        /**
         * Gets a self media liked from the accessToken
         * @param {object} opts the options object { accessToken, sign }
         * @param {function} cb callback called if paseed, otherwise returns a promise 
         */

    }, {
        key: "getSelfMediaLiked",
        value: function getSelfMediaLiked() {
            var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var cb = arguments[1];

            if (!opts.accessToken) {
                var error = new Error("You must provide an access token");
                return cb ? cb(error) : Promise.reject(error);
            }
            return this.api.call({
                uri: "/v1/users/self/media/liked",
                method: "GET",
                qs: {
                    access_token: opts.accessToken,
                    max_like_id: opts.maxLikeId,
                    count: opts.count
                },
                json: true,
                sign: true,
                op: "getSelfMediaLiked"
            }, cb);
        }

        /**
         * Search a users
         * @param {object} opts the options object { accessToken, sign, q }
         * @param {function} cb callback called if paseed, otherwise returns a promise 
         */

    }, {
        key: "search",
        value: function search() {
            var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var cb = arguments[1];

            if (!opts.q) {
                var error = new Error("You must search with a q");
                return cb ? cb(error) : Promise.reject(error);
            }
            return this.api.call({
                uri: "/v1/users/search",
                method: "GET",
                qs: {
                    access_token: opts.accessToken,
                    q: opts.q
                },
                json: true,
                sign: opts.sign,
                op: "search"
            }, cb);
        }
    }]);

    return Users;
}(Endpoint);

module.exports = function (client) {
    return new Users(client);
};
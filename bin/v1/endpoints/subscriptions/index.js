"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Endpoint = require("../../../endpoint");

/**
 * Client.subscriptions
 * ```js
 * // example
 * Client.subscriptions.create({
 *  object: "",
 *  aspect: "",
 *  verifyToken: "",
 *  callbackURL: "",
 *  accessToken: "SOMEACCESSTOKEN",
 * })
 * .then(result => {})
 * ```
 * @augments Endpoint
 */

var Subscriptions = function (_Endpoint) {
    _inherits(Subscriptions, _Endpoint);

    function Subscriptions(client) {
        _classCallCheck(this, Subscriptions);

        return _possibleConstructorReturn(this, (Subscriptions.__proto__ || Object.getPrototypeOf(Subscriptions)).call(this, "subscriptions", client));
    }

    /**
     * Creates a subscription
     * @param {object} opts the options object { accessToken, sign, object, aspect, verifyToken, callbackURL }
     * @param {function} cb callback called if paseed, otherwise returns a promise 
     */


    _createClass(Subscriptions, [{
        key: "create",
        value: function create() {
            var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var cb = arguments[1];

            var CLIENT_ID = this.client.opts.CLIENT_ID || opts.CLIENT_ID;
            if (!CLIENT_ID) {
                var error = new Error("You must provide a client id");
                return cb ? cb(error) : Promise.reject(error);
            }

            var CLIENT_SECRET = this.client.opts.CLIENT_SECRET || opts.CLIENT_SECRET;
            if (!CLIENT_SECRET) {
                var _error = new Error("You must provide a client secret");
                return cb ? cb(_error) : Promise.reject(_error);
            }

            if (!opts.object) {
                var _error2 = new Error("You must provide an object");
                return cb ? cb(_error2) : Promise.reject(_error2);
            }

            if (!opts.aspect) {
                var _error3 = new Error("You must provide an aspect");
                return cb ? cb(_error3) : Promise.reject(_error3);
            }

            if (!opts.verifyToken) {
                var _error4 = new Error("You must provide a verify token");
                return cb ? cb(_error4) : Promise.reject(_error4);
            }

            if (!opts.callbackURL) {
                var _error5 = new Error("You must provide a callback url");
                return cb ? cb(_error5) : Promise.reject(_error5);
            }

            return this.api.call({
                uri: "/v1/subscriptions",
                method: "POST",
                formData: {
                    client_id: CLIENT_ID,
                    client_secret: CLIENT_SECRET,
                    object: opts.object,
                    aspect: opts.aspect,
                    verify_token: opts.verifyToken,
                    callback_url: opts.callbackURL
                },
                json: true,
                sign: opts.sign
            }, cb);
        }

        /**
         * Lists the subscriptions for the client
         * @param {object} opts the options object { accessToken, sign, object, aspect, verifyToken, callbackURL }
         * @param {function} cb callback called if paseed, otherwise returns a promise 
         */

    }, {
        key: "list",
        value: function list() {
            var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var cb = arguments[1];


            var CLIENT_ID = this.client.opts.CLIENT_ID || opts.CLIENT_ID;
            if (!CLIENT_ID) {
                var error = new Error("You must provide a client id");
                return cb ? cb(error) : Promise.reject(error);
            }

            var CLIENT_SECRET = this.client.opts.CLIENT_SECRET || opts.CLIENT_SECRET;
            if (!CLIENT_SECRET) {
                var _error6 = new Error("You must provide a client secret");
                return cb ? cb(_error6) : Promise.reject(_error6);
            }

            return this.api.call({
                uri: "/v1/subscriptions",
                method: "GET",
                qs: {
                    client_id: CLIENT_ID,
                    client_secret: CLIENT_SECRET
                }
            }, cb);
        }

        /**
         * Deletes subscriptions for the client
         * @param {object} opts the options object { accessToken, sign, object, aspect, verifyToken, callbackURL }
         * @param {function} cb callback called if paseed, otherwise returns a promise 
         */

    }, {
        key: "del",
        value: function del() {
            var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        }
    }]);

    return Subscriptions;
}(Endpoint);

module.exports = function (client) {
    return new Subscriptions(client);
};
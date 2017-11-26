"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Endpoint = require("../../../endpoint");

var DEFAULT_RESPONSE_TYPE = "code";

/**
 * Client.oauth
 * ```js
 * // example
 * Client.oauth.getAccessToken({
 *  grantType: "",
 *  redirectURI: "",
 *  code: "",
 * })
 * .then(result => {})
 * ```
 * @augments Endpoint
 */

var OAuth = function (_Endpoint) {
    _inherits(OAuth, _Endpoint);

    function OAuth(client) {
        _classCallCheck(this, OAuth);

        return _possibleConstructorReturn(this, (OAuth.__proto__ || Object.getPrototypeOf(OAuth)).call(this, "oauth", client));
    }

    /**
     * It returns the accessToken
     * @param {object} opts the options object { code, grantType, redirectURI }
     * @param {function} cb callback called if paseed, otherwise returns a promise 
     */


    _createClass(OAuth, [{
        key: "getAccessToken",
        value: function getAccessToken(opts, cb) {
            // @ToDo
            // redirect URI is mandatory
            // code is mandatory
            if (!opts.redirectURI) {
                var error = new Error("You must provide a redirect URI");
                return cb ? cb(error) : Promise.reject(error);
            }

            if (!opts.code) {
                var _error = new Error("You must provide a code");
                return cb ? cb(_error) : Promise.reject(_error);
            }

            return this.api.call({
                uri: "/oauth/access_token",
                method: "POST",
                formData: {
                    client_id: this.opts.CLIENT_ID,
                    client_secret: this.opts.CLIENT_SECRET,
                    grant_type: opts.grantType,
                    code: opts.code,
                    redirect_uri: opts.redirectURI
                },
                json: true
            }, cb);
        }

        /**
         * It returns the authURL
         * @param {object} opts the options object { CLIENT_ID, CLIENT_SECRET, responseType, redirectURI, scope }
         */

    }, {
        key: "getAuthURL",
        value: function getAuthURL(opts) {
            var clientID = opts.CLIENT_ID || this.opts.CLIENT_ID;
            if (!clientID) throw new Error("You must provide a client ID");

            var responseType = opts.responseType || DEFAULT_RESPONSE_TYPE;
            if (typeof responseType !== "string") throw new Error("Your must provide a valid response type");

            var redirectURI = opts.redirectURI || this.opts.redirectURI;
            if (!redirectURI) throw new Error("You must provide a redirect URI");

            var url = this.api.opts.baseURI + "/oauth/authorize?" + ("client_id=" + clientID + "&response_type=" + responseType + "&redirect_uri=" + redirectURI);

            // scopes
            if (opts.scope && Array.isArray(opts.scope) && opts.scope.length > 0) {
                url += "&scope=" + opts.scope.join("+");
            }

            return url;
        }
    }]);

    return OAuth;
}(Endpoint);

module.exports = function (client) {
    return new OAuth(client);
};
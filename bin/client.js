"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var hoek = require("hoek");
var Api = require("./api");

var clientDefaultOpts = {
    CLIENT_ID: null,
    CLIENT_SECRET: null,
    api: {}
};

var sendRequest = function sendRequest(Client, method, endpoint, opts, cb) {
    // prepend slash
    if (endpoint.substring(0, 1) !== "/") endpoint = "/" + endpoint;

    return Client.api.call({
        uri: "/" + Client.version + endpoint,
        qs: opts.qs,
        sign: opts.sign,
        formData: opts.body,
        method: method
    }, cb);
};

var InstagramClient = function () {
    function InstagramClient(opts, loadEndpoints) {
        _classCallCheck(this, InstagramClient);

        this.opts = hoek.applyToDefaults(clientDefaultOpts, opts);
        this.api = new Api(this, this.opts.api);

        // assign endpoint to the current instance
        var obj = Object.assign(this, loadEndpoints(this));
    }
    /**
     * 
     * @param {string} endpoint 
     * @param {object} opts 
     * @param {function} cb 
     */


    _createClass(InstagramClient, [{
        key: "get",
        value: function get(endpoint, opts, cb) {
            return sendRequest(this, "GET", endpoint, opts, cb);
        }
        /**
         * 
         * @param {string} endpoint 
         * @param {object} opts 
         * @param {object} formData 
         * @param {function} cb 
         */

    }, {
        key: "post",
        value: function post(endpoint, opts, formData, cb) {
            return sendRequest(this, "POST", endpoint, opts, cb);
        }
        /**
         * 
         * @param {string} endpoint 
         * @param {object} opts 
         * @param {object} formData 
         * @param {function} cb 
         */

    }, {
        key: "del",
        value: function del(endpoint, opts, formData, cb) {
            return sendRequest(this, "DELETE", endpoint, opts, cb);
        }
    }]);

    return InstagramClient;
}();

module.exports = InstagramClient;
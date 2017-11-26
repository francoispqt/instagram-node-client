"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var request = require("request");
var hoek = require("hoek");
var errors = require("./errors");
var crypto = require("crypto");

var apiDefaultOpts = {
    baseURI: "https://api.instagram.com"
};

var concatKeys = function concatKeys(obj) {
    return Object.keys(obj).sort().reduce(function (agg, k) {
        agg += "|" + k + "=" + obj[k];
        return agg;
    }, "");
};

var Api = function () {
    function Api(client, opts) {
        _classCallCheck(this, Api);

        this.client = client;
        this.opts = hoek.applyToDefaults(apiDefaultOpts, opts);
        this.request = request;
        this.errors = errors;
    }

    _createClass(Api, [{
        key: "signRequest",
        value: function signRequest(opts) {
            var clientSecret = opts.CLIENT_SECRET || this.client.opts.CLIENT_SECRET;
            var hmac = crypto.createHmac("sha256", clientSecret);
            var strToHash = opts.uri;
            if (opts.qs) strToHash += concatKeys(opts.qs);
            hmac.update(strToHash);
            return hmac.digest("hex");
        }
    }, {
        key: "call",
        value: function call(opts, cb) {
            var _this = this;

            var reqOpts = {
                uri: this.opts.baseURI + opts.uri,
                qs: opts.qs,
                formData: opts.formData,
                json: !!opts.json,
                method: opts.method
            };

            reqOpts.qs = reqOpts.qs || {};
            reqOpts.qs.client_id = process.env.INSTAGRAM_CLIENT_ID;
            // sign
            if (this.client.opts.signAll || opts.sign) {
                reqOpts.qs = reqOpts.qs || {};
                reqOpts.qs.sig = this.signRequest(opts);
            }
            return new Promise(function (resolve, reject) {
                _this.request(reqOpts, function (error, response, body) {
                    if (error || response.statusCode < 200 || response.statusCode > 299) {
                        return reject(new errors.ResponseError({
                            error: error,
                            body: body,
                            statusCode: response.statusCode,
                            op: opts.op
                        }));
                    }
                    return resolve(body);
                });
            }).then(function (result) {
                if (cb) return cb(null, result);
                return result;
            }).catch(function (error) {
                if (cb) return cb(error);
                throw error;
            });
        }
    }]);

    return Api;
}();

module.exports = Api;
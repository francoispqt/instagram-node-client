"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Endpoint = function Endpoint(prefix, client) {
    _classCallCheck(this, Endpoint);

    this.prefix = prefix;
    this.client = client;
    this.opts = client.opts;
    this.api = client.api;
};

module.exports = Endpoint;
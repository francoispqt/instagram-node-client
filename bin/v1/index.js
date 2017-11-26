"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Client = require("../client");
var loadEndpoints = require("./endpoints");
var version = "v1";
/**
 * InstagramClient V1
 * ```js
 * const Instagram = require("instragram-client").v1
 * 
 * const Client = new Instagram({
 *  CLIENT_ID: "SOMECLIENTID",
 *  CLIENT_SECRET: "SOMECLIENTSECRET",
 * }) 
 * ```
 * @augments InstagramClient
 * @constructor
 * @param {object} opts the options object { CLIENT_ID, CLIENT_SECRET } 
 */

var V1 = function (_Client) {
    _inherits(V1, _Client);

    function V1() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, V1);

        var _this = _possibleConstructorReturn(this, (V1.__proto__ || Object.getPrototypeOf(V1)).call(this, opts, loadEndpoints));

        _this.version = version;
        return _this;
    }

    return V1;
}(Client);

module.exports = V1;
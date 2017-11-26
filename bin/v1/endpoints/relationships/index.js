"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Endpoint = require("../../../endpoint");

var Relationships = function (_Endpoint) {
    _inherits(Relationships, _Endpoint);

    function Relationships(client) {
        _classCallCheck(this, Relationships);

        return _possibleConstructorReturn(this, (Relationships.__proto__ || Object.getPrototypeOf(Relationships)).call(this, "relationships", client));
    }

    return Relationships;
}(Endpoint);

module.exports = function (client) {
    return new Relationships(client);
};
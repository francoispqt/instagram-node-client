"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ResponseError = function (_Error) {
    _inherits(ResponseError, _Error);

    function ResponseError(opts) {
        _classCallCheck(this, ResponseError);

        var message = opts.message || "An error occured";
        if (opts.body) {
            if (opts.body.error_message) message = opts.body.error_message;else if (opts.body.meta && opts.body.meta.error_message) message = opts.body.meta.error_message;
        }

        var _this = _possibleConstructorReturn(this, (ResponseError.__proto__ || Object.getPrototypeOf(ResponseError)).call(this, message));

        _this.opts = opts;
        Error.captureStackTrace(_this, ResponseError);
        return _this;
    }

    return ResponseError;
}(Error);

exports.ResponseError = ResponseError;
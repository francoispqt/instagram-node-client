'use strict';

var fs = require('fs');
var path = require('path');

// current file name
var mName = path.basename(module.filename);

module.exports = function (client) {
    var result = {};

    fs.readdirSync(__dirname).filter(function (f) {
        return fs.statSync(path.resolve(__dirname, f)).isDirectory();
    }).forEach(function (f) {
        /* eslint-disable */
        var r = require(path.resolve(__dirname, f));
        /* eslint-disable */
        result[f] = r(client);
    });

    return result;
};
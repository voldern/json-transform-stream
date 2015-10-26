'use strict';

var through2 = require('through2');

module.exports = through2.ctor({ objectMode: true }, function transformJSON(record, encoding, callback) {
    record = record.toString();

    var json;

    try {
        json = JSON.parse(record);
    } catch (error) {
        return callback(error);
    }

    callback(null, json);
});

'use strict';

var test = require('tape'),
    JSONStream = require('./');

test('invalid json', function(t) {
    t.plan(1);

    var stream = new JSONStream();

    stream.on('error', function(err) {
        t.ok(err instanceof Error, 'should throw error');
    });

    stream.end('{');
});

test('valid json', function(t) {
    t.plan(1);

    var stream = new JSONStream();

    stream.on('data', function(data) {
        t.deepEqual(data, { foo: 'bar' });
    });

    stream.end('{ "foo": "bar" }');
});

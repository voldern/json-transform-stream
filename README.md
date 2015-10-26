# json-transform-stream

Transform JSON strings into objects

[![build status](https://travis-ci.org/voldern/json-transform-stream.svg)](https://travis-ci.org/voldern/json-transform-stream)
[![modules status](https://david-dm.org/voldern/json-transform-stream.svg)](https://david-dm.org/voldern/json-transform-stream)
[![npm badge](https://nodei.co/npm/json-transform-stream.png?downloads=true)](https://nodei.co/npm/json-transform-stream)

# Example

```javascript
var JSONTransformStream = require('json-transform-stream');

var stream = new JSONTransformStream({ highWaterMark: 16 });

stream.on('data', function(data) {
    console.log(data); // => { foo: 'bar' }
});

stream.end('{ "foo": "bar" }');
```

# License

MIT

# json-transform-stream

Transform JSON strings into objects

[![build status](https://travis-ci.org/voldern/json-transform-stream.svg)](https://travis-ci.org/voldern/json-transform-stream)

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

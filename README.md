# koa2-common


## Why

app.js

```
var serve = require('koa-static');
var Koa = require('koa');
var app = new Koa();

var favicon = require('koa-favicon');
var compress = require('koa-compress')
var conditional = require('koa-conditional-get');
var etag = require('koa-etag');

app.use(compress({
  filter: function (content_type) {
    return /text/i.test(content_type)
  },
  threshold: 2048,
  flush: require('zlib').Z_SYNC_FLUSH
}))

app.use(favicon(__dirname + '/public/favicon.ico'));

// etag works together with conditional-get
app.use(conditional());
app.use(etag());


// or use absolute paths
app.use(serve(__dirname + '/dist'));

app.listen(9090);

console.log('listening on port 9090');

```

这是非常常见的做法，先gzip压缩，然后favicon，is-fresh，etag。

还是可以简单点的。

```
    "koa-compress": "^2.0.0",
    "koa-conditional-get": "^2.0.0",
    "koa-etag": "^3.0.0",
    "koa-favicon": "^2.0.0",
```

记住这些版本都是个头疼的事儿。



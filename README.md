# koa2-common

koa2 common middlewares（先gzip压缩，然后favicon，is-fresh，etag）

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

## Install

```
$ npm i -S koa2-common
```

## Usages

注意，配置项如果里面有js回调等，配置项必须使用`.js`后缀。

### 使用默认配置

app.js

```
var Koa = require('koa');
var app = new Koa();

app.use(require('koa2-common')());

app.use(ctx => {
  ctx.body = "hello 1"
})

app.listen(9090);

console.log('listening on port 9090');
```

### 使用自定义配置

app2.js

```
var Koa = require('koa');
var app = new Koa();

app.use(require('.')(__dirname + '/conf2.js'))

app.use(ctx => {
  ctx.body = "hello 1"
})

app.listen(9090);

console.log('listening on port 9090');
```

使用conf2.js，在conf2.js里去掉了etag，所以请求的时候不会出现304.


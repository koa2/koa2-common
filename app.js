var Koa = require('koa');
var app = new Koa();

app.use(require('.')());

app.use(ctx => {
  ctx.body = "hello 1"
})

app.listen(9090);

console.log('listening on port 9090');
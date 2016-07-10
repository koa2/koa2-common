var Koa = require('koa');
var app = new Koa();

var m =require('.')()
console.dir(m)

app.use(m);


app.use(ctx => {
  ctx.body = "hello 1"
})

app.listen(9090);

console.log('listening on port 9090');
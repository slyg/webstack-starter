const Koa = require('koa');
const app = new Koa();
const r = require('koa-route');

app
  .use(r.get('/api', ctx => {
    ctx.body = {
      hello: 'world'
    }
  }))

app.listen(3000);


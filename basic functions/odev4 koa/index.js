'use strict';

const Koa = require('koa');
const Router = require('@koa/router');
const render = require('koa-ejs');
const path = require('path');

const app = new Koa();
const router = new Router();

app.use(async (ctx, next) => {
  try {
    await next()
  } catch(err) {
    console.log(err.status)
    ctx.status = err.status || 500;
    ctx.body = err.message;
  }
});

render(app, {
  root: path.join(__dirname, 'views'),
  layout: 'index',
  viewExt: '.js',
  cache: false,
  debug: true
});

router.get('index.js', '/', (ctx) => {
  ctx.body = '<h1>Merhaba<h1>';
});

router.get('index.js', '/error', (ctx) => {
  ctx.throw(500, 'internal server error');
});

router.get('index.js', '/index', (ctx) => {
  ctx.status = 200;
  ctx.body   = '<h1>Index Sayfasına Hoşgeldiniz<h1>';
})

router.get('index.js', '/hakkimda', (ctx) => {
  ctx.status = 200;
  ctx.body   = '<h1>Hakkımda Sayfasına Hoşgeldiniz<h1>';
})

router.get('index.js', '/iletisim', (ctx) => {
  ctx.status = 200;
  ctx.body   = '<h1>İletişim Sayfasına Hoşgeldiniz<h1>';
})

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3000);


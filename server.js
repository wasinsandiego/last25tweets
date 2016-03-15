'use strict';

const koa = require('koa');
const app = koa();
const handlebars = require('koa-handlebars');
const serve = require('koa-static');

app.use(serve(__dirname + '/public'));

app.use(handlebars({
    extension: ['hbs', 'handlebars'],
    defaultLayout: 'index',
    layoutsDir: 'app/templates',
    viewsDir: 'app/templates/views',
    partialsDir: 'app/templates/partials'
}));

if (process.env.NODE_ENV !== 'production') {
  var webpackDevServer = require('koa-webpack-dev');
  app.use(webpackDevServer({
      config: './webpack.config.js'
  }));
}

const routes = require('./app/routes')(app).next();
const port = process.env.PORT || 5000;

app.listen(port);
console.log('Koa listening on port ' + port);
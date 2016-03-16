'use strict';

const koa = require('koa');
const app = koa();
const json = require('koa-json');
const serve = require('koa-static');
const handlebars = require('koa-handlebars');
const bodyParser = require('koa-bodyparser');

// for json responses : with pretty toggle
app.use(json({ pretty: false, param: 'pretty' }));

app.use(bodyParser());

// serve static files
app.use(serve(__dirname + '/public'));

// handlebars config
app.use(handlebars({
    extension: ['hbs', 'handlebars'],
    defaultLayout: 'index',
    layoutsDir: 'app/templates',
    viewsDir: 'app/templates/views',
    partialsDir: 'app/templates/partials'
}));

// webpack dev server for LOCAL DEV ONLY
if (process.env.NODE_ENV !== 'production') {
  var webpackDevServer = require('koa-webpack-dev');
  app.use(webpackDevServer({
      config: './webpack.config.js'
  }));
}

// initialize routes
const routes = require('./app/routes')(app).next();

// boom
const port = process.env.PORT || 5000;
app.listen(port);
console.log('Koa listening on port ' + port);
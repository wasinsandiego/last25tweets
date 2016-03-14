'use strict';

const koa = require('koa');
const app = koa();
const handlebars = require('koa-handlebars');

app.use(handlebars({
    extension: ['hbs', 'handlebars'],
    defaultLayout: 'index',
    layoutsDir: 'app/templates',
    viewsDir: 'app/templates/views',
    partialsDir: 'app/templates/partials'
}));

const routes = require('./app/routes')(app).next();
const port = process.env.PORT || 5000;

app.listen(port);
console.log('Koa listening on port ' + port);
'use strict';

const koa = require('koa');
const app = koa();
const handlebars = require('koa-handlebars');

app.use(handlebars({
    extension: ['hbs', 'handlebars'],
    layoutsDir: 'app/templates',
    viewsDir: 'app/templates/views',
    partialsDir: 'app/templates/partials'
}));

const routes = require('./app/routes')(app).next();

app.listen(3000);
console.log('Koa listening on port 3000');
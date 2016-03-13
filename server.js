'use strict';

let koa = require('koa')
    , app
    , routes;

app = koa();
routes = require('./app/routes')(app).next();

app.listen(3000);
console.log('Koa listening on port 3000');
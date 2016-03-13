'use strict';

let route = require('koa-route'),
    controllers = require('./controllers');

module.exports = function *routes(app) {

  app.use(route.get('/', controllers.index));

  app.use(route.get('/about', controllers.about));

};


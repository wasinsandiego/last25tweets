'use strict';

const route = require('koa-route');
const controllers = require('./controllers');

module.exports = function *routes(app) {

  app.use(route.get('/', controllers.index));

};


'use strict';

const route = require('koa-route');
const controllers = require('./controllers');

module.exports = function *routes(app) {

  app.use(route.get('/', controllers.index));

  app.use(route.get('/api/user-timeline/:screenName', controllers.userTimeline));

};

'use strict';

const controller = module.exports = {};
const basePath = process.env.NODE_ENV === 'production' ? '.' : 'http://localhost:8080';

controller.index = function *index() {
  yield this.render('home', { base: basePath, description: 'Hello :)' });
};

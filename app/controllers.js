'use strict';

const controller = module.exports = {};

controller.index = function *index() {
  yield this.render('home', { description: 'Hello :)' });
};

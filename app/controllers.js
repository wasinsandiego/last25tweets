'use strict';

let controller = module.exports = {};

controller.index = function *index() {
  this.body = "<h1>Last 25 Tweets</h1>";
};

controller.about = function *about() {
  this.body = "<h2>My name is Will and I like JavaScript</h2>";
};





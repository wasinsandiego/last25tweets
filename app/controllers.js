'use strict';

const controller = module.exports = {};
const basePath = process.env.NODE_ENV === 'production' ? '.' : 'http://localhost:8080';
const request = require('koa-request');
const config = require('./config');
const twitterBearerCreds = new Buffer(encodeURIComponent(config.twitter.apiKey) + ':' + encodeURIComponent(config.twitter.apiSecret)).toString('base64');

controller.index = function *index() {
  yield this.render('home', { base: basePath, description: 'Hello :)' });
};




controller.userTimeline = function *userTimeline(screenName) {

  var options = {
      url: 'https://api.twitter.com/oauth2/token'
      ,'body': 'grant_type=client_credentials'
      ,headers: {
        'method': 'POST'
        ,'authorization': 'Basic ' + twitterBearerCreds
        ,'content-type': 'application/x-www-form-urlencoded;charset=UTF-8'
      }
  },
  response = yield request.post(options),
  info = JSON.parse(response.body);
  
  this.body = info;

};


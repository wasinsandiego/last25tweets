'use strict';

const controller = module.exports = {};
const basePath = process.env.NODE_ENV === 'production' ? '.' : 'http://localhost:8080';
const request = require('koa-request');
const config = require('./config');
const twitterBearerCreds = new Buffer(encodeURIComponent(config.twitter.apiKey) + ':' + encodeURIComponent(config.twitter.apiSecret)).toString('base64');

// -------------------------------------------
//  page controllers
// -------------------------------------------
controller.index = function *index() {
  yield this.render('home', { base: basePath, description: 'Hello :)' });
};


// -------------------------------------------
//  api controllers
// -------------------------------------------
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

  if (info.token_type === 'bearer') {
    options = {
        url: 'https://api.twitter.com/1.1/statuses/user_timeline.json'
        ,qs: {
          count: 25
          ,screen_name: '99piorg'
        }
        ,headers: {
          'method': 'GET'
          ,'authorization': 'Bearer ' + info.access_token
        }
    };
    response = yield request.get(options),
    info = response.body;
    
    this.body = info;
  } else if (info && info.token_type !== 'bearer') {
    this.throw(440);
  }

};


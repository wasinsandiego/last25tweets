require('./../css/main.css');

var React = require('react')
    ,ReactDOM = require('react-dom')
    ,Page = require('./components/model.page');


ReactDOM.render(
  <Page/>
  ,document.getElementById('app')
);
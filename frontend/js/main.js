require('./../css/main.css');

const React = require('react')
    ,ReactDOM = require('react-dom')
    ,Page = require('./components/model.page');


ReactDOM.render(
  <Page/>
  ,document.getElementById('app')
);
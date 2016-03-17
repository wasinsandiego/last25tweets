require('./../css/main.css');

// var component = require('./component.jsx');
// var app = document.createElement('div');

// document.body.appendChild(app);

// app.appendChild(component());


var React = require('react')
    ,ReactDOM = require('react-dom')
    // ,app = document.createElement('div')
    ,Heading = require('./components/heading');



console.log('Heading: ', Heading);
ReactDOM.render(
  <Heading/>,
  document.getElementById('app')
);
// document.body.appendChild(app);
// app.appendChild(heading);
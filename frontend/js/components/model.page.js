let Page
    , React = require('react')
    , template = require('./../../templates/page.jsx')
    , dummyData = require('./../dummy-data');

module.exports = Page = React.createClass({

  submitScreenName: function(name) {
    console.log('submitScreenName :: name: ', name);
  }

  , getInitialState: function() {
    return { data: { screenName: 'GameOfThrones', tweets: dummyData } };
  }
  
  , componentDidMount: function() {
    // this.loadCommentsFromServer();
    // setInterval(this.loadCommentsFromServer, this.props.pollInterval);
    console.log('Page Model Mounted');    
  }
  
  , render: template

});
let ScreenNameInput;
const React = require('react')
      , template = require('./../../templates/screen-name-form.jsx');

module.exports = ScreenNameInput = React.createClass({

  getInitialState: function() {
    return { screenName: '' };
  }

  , handleSubmit: function(event) {
    event.preventDefault();
    let screenName = this.state.screenName.trim();
    if (!screenName) { return; }
    this.props.onSubmit({ screenName: screenName });
    console.log('screenName: ', screenName);
    this.setState({ screenName: '' });
  }

  , handleScreenNameChange: function(event) {
    this.setState({ screenName: event.target.value });
  }

  , render: template

});
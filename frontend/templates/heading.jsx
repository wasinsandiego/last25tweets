const React = require('react')
      , ScreenNameForm = require('./../js/components/property.screen-name-form');

module.exports = function() {

  let userBg = this.props.profileImage ? { backgroundImage: 'url(\''+this.props.profileImage+'\')' } : {};

  return (
    <div className="page-hero" style={ userBg }>
      <h1 className="page-title">LAST 25 TWEETS</h1>
      <ScreenNameForm onSubmit={ this.props.onSubmit }/>
    </div>
  );

};
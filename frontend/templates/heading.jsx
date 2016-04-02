let React = require('react')
    ,ScreenNameForm = require('./../js/components/property.screen-name-form');

module.exports = function() {

    return (
      <div className="page-hero">
        <h1 className="page-title">LAST 25 TWEETS</h1>
        <ScreenNameForm />
      </div>
    );

};
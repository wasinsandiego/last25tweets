const React = require('react')
      , Heading = require('./../js/components/property.heading')
      , UserTimeline = require('./../js/components/property.user-timeline');

module.exports = function() {

    return (
      <main>
        <Heading />
        <UserTimeline data={ this.state.data } />

      </main>
    );

};
let React = require('react');

module.exports = function() {

    return (
      <div className="container-fluid user-tweet-cont">
        <h3>User tweet... { this.props.data.user.name }</h3>
      </div>
    );

};
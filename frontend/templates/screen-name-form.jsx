const React = require('react');

module.exports = function() {

    return (
      <div className="screen-name-form-cont">
        <form className="screen-name-form" role="form">
          <div className="form-group">
            <label htmlFor="screen-name-input" >Twitter Handle?</label>
            <input id="screen-name-input" className="form-control screen-name-input" placeholder="Twitter screen name" />
          </div>&nbsp;
          <button type="submit" className="btn btn-primary">Find</button>&nbsp;
        </form>
      </div>
    );

};
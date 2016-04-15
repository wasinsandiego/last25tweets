let Page
    , React = require('react')
    , template = require('./../../templates/page.jsx')
    , update = require('react-addons-update')
    , dummyData = require('./../dummy-data');

module.exports = Page = React.createClass({

  submitScreenName: function(data) {
    if (!data || !data.screenName) { return; }
    
    let _this = this
        , request = new XMLHttpRequest();
    
    if (data.screenName !== window.location.hash.substr(1)) {
      history.pushState(null, null, '#' + data.screenName);
    }
    
    // set now so we see the load blocker until results come back
    this.loaderOn();
    
    request.open('GET', '/api/user-timeline/' + data.screenName, true);
    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
        let resData = JSON.parse(request.responseText);

        console.log('resData: ', resData);
        if (resData.error) {
          // display message to user for invalid screen name.
          _this.loaderOff();
          return;
        }


        var profileImage = resData[0] ? resData[0].user.profile_banner_url : '';
        _this.setState({
          data: {
            screenName: data.screenName
            , tweets: resData
            , isLoading: false
            , profileImage: profileImage
          }
        });
      } else {
        console.log('get tweets error: ', request);
        // display message to user somehow
      }
    };
    request.onerror = function() {
      console.log('get tweets fail: ', request);
    };

    request.send();
  }

  , loaderOn: function() {
    let loadingState = { data: update(this.state.data, { isLoading: {$set: true} }) }; 
    this.setState(loadingState);
  }

  , loaderOff: function() {
    let loadingState = { data: update(this.state.data, { isLoading: {$set: false} }) }; 
    this.setState(loadingState);
  }

  , getInitialState: function() {
    return {
      data: {
        screenName: ''
        , tweets: []
        , isLoading: false
        , profileImage: ''
      }
    };
  }

  , onHashChange: function(event) {
    let urlHash = window.location.hash;
    if (urlHash) {
      this.submitScreenName({ screenName: urlHash.substr(1) });
    }
  }
  
  , componentDidMount: function() {
    console.log('Page Model Mounted');
    window.addEventListener('hashchange', this.onHashChange);
    this.onHashChange();
  }
  
  , render: template

});
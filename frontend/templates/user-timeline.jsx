const React = require('react')
      , UserTweet = require('./../js/components/property.user-tweet');

module.exports = function() {

  let tweets = this.props.data.tweets.map(function(tweet) {
    return (
      <UserTweet data={ tweet } key={ tweet.id }/>
    );
  });


  return (
    <div className="container-fluid user-timeline-cont">
      {
        this.props.data.screenName ?
          <h2>TWEETS by <a target="_blank" href={ 'http://twitter.com/' + this.props.data.screenName }>@{ this.props.data.screenName }</a></h2>
        : <h2 className="text-center">ENTER A TWITTER SCREEN NAME ABOVE!</h2>
      }  
      <div className="user-timeline-tweets">{ tweets }</div>
      <span className={ this.props.data.isLoading ? 'loader' : 'loader hidden'} >LOADING...</span>
    </div>
  );

};
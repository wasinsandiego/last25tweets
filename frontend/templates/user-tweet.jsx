const React = require('react')
      , entityParser = require('./../js/helpers/entity-parser');

module.exports = function() {

  let medias = '';
  if (this.props.data.entities.media) {
    medias = this.props.data.entities.media.map(function(media) {
      return (
        <a href={ media.expanded_url } title="View image on Twitter" key={ media.id_str }>
          <img className="media-image" src={ media.media_url } />
        </a>
      );
    });
  }

  return (
    <div className="container-fluid user-tweet-cont">
      <a className="user-info clearfix" href={ 'https://twitter.com/' + this.props.data.user.screen_name }>
        <span className="user-avatar pull-left">
          <img className="user-avatar-img" alt={ this.props.data.user.screen_name } src={ this.props.data.user.profile_image_url } />
        </span>
        <span className="user-name pull-left" title={ this.props.data.user.name } >{ this.props.data.user.name }</span><br/>
        <span className="user-screen-name pull-left" title={ this.props.data.user.screen_name } >‎@{ this.props.data.user.screen_name }</span>
      </a>
      <h3 className="user-tweet" dangerouslySetInnerHTML={{ __html: entityParser.all(this.props.data.text, this.props.data.entities) }}></h3>
      { medias }
    </div>
  );

};
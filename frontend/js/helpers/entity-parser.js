let Parser;
const urlPattern = /[A-Za-z]+:\/\/[A-Za-z0-9-_]+.[A-Za-z0-9-_:%&~?/.=]+/gi
      , usersPattern = /[@]+[A-Za-z0-9-_]+/g
      , hashtagPattern = /[#]+[A-Za-z0-9-_]+/g;


// String.prototype.parseURL = function() {
//     return this.replace(/[A-Za-z]+://[A-Za-z0-9-_]+.[A-Za-z0-9-_:%&~?/.=]+/g, function(url) {
//         return url.link(url);
//     });
// };

module.exports = Parser = {
  urls: function(text, entities) {
    return text.replace(urlPattern, function(match, urlId, text){
      let urls = entities.urls;
      for (let i = 0 ; i < urls.length ; i++ ) {
        let ref = urls[i];
        if (match === ref.url) {
          return '<a target="_blank" href="' + match + '" >' + ref.display_url + '</a>';
        }
      }
    });
  }

  , users: function(text, entities) {
    return text.replace(usersPattern, function(match, urlId, text){
      let mentions = entities.user_mentions;
      for (let i = 0 ; i < mentions.length ; i++ ) {
        let ref = mentions[i];
        if (match === '@'+ref.screen_name) {
          return '<a target="_blank" href="https://twitter.com/' + ref.screen_name + '" >' + match + '</a>';
        }
      }
    });
  }

  , hashtags: function(text, entities) {
    return text.replace(hashtagPattern, function(match, urlId, text){
      let hashtags = entities.hashtags;
      for (let i = 0 ; i < hashtags.length ; i++ ) {
        let ref = hashtags[i];
        if (match === '#'+ref.text) {
          return '<a target="_blank" href="https://twitter.com/hashtag/' + ref.text + '" >' + match + '</a>';
        }
      }
    });
  }

  , all: function(text, entities) {
    text = this.urls(text, entities);
    text = this.users(text, entities);
    return this.hashtags(text, entities);
  }
  
}
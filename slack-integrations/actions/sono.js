var http = require('http');
var q = require('q');

exports.action = {
  name:                   'sono',
  description:            'sono',
  
  version:                1.0,
  
  inputs: {
    // token:{required: true},
    // team_id:{required: true},
    // team_domain:{required: true},
    // channel_id:{required: true},
    // channel_name:{required: true},
    // user_id:{required: true},
    // user_name:{required: true},
    // command:{required: true},
    // text:{required: true}
  },

  roomName: 'P5%20R',

  sonoData: {
    trackUri: null,
    trackArtist: null,
    trackName: null,
    skips: []
  },

  getCurrentTrackData: function() {

  }

  advanceTrack: function() {

  },

  recordSono: function(userId) {
    var deferred = q.defer();
    
    var trackData = 

    return deferred.promise;
  },

  run: function(api, connection, next){
    if (connection.params.token === 'z4IEqNzTUDVYkWBgAymTclYP' || api.config.general.developmentMode) {
      // get param data
      var teamId = connection.params.team_id;
      var userId = connection.params.user_id;
      
      // add skip to track
      var result = this.recordSono(userId);

      // set response header to text/plain for Slack responses
      connection.rawConnection.responseHeaders.push(['Content-Type', 'text/plain']);
      // return text for Slack user
      connection.response = "soNO recorded for every Drake song";
    }
    
    // continue
    next(connection, true);
  }
};

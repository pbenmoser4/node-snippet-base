var cm = require('cloudmine');

module.exports = function(req, reply) {
  var app = new cm.WebService({
    appid: 'c9d4c770f12e8d46232bd2e0fecbfb0e',
    apikey: '5E0188E228844D1D85B3DB379A8E0853'
  });

  app.get().on('success', function(data, response){
    reply({success:data});
  });
};

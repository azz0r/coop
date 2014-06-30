define(['app/models/profile'],
  function(Model) {

    module("Model");

    asyncTest("fetch profile", 2, function(){

      var profile = new Model({id: localStorage.getItem('test.profile.id')});
      var options = {
        error: function() {
          ok(false);
          start();
        },
        success: function(profile) {
          ok(typeof(profile) === 'object', 'json response is an object');
          ok(typeof(profile.attributes._id) === 'object', 'profile id is a mongo id object');
          start();
        }
      };
      profile.fetch(options);
    });
  });

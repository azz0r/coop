define(['app/collections/profiles'],
  function(Collection) {

    module("Collection");

    asyncTest("fetch profiles", 2, function(){

      var profiles = new Collection();
      var options = {
        error: function() {
          ok(false);
          start();
        },
        success: function(profiles) {
          if (profiles.models[0].attributes._id.$id) {
            localStorage.setItem('test.profile.id', profiles.models[0].attributes._id.$id);
          }
          ok(typeof(profiles) === 'object', 'json response is an object');
          ok(profiles.length > 0, 'profiles is not empty');
          start();
        }
      };
      profiles.fetch(options);
    });
  });

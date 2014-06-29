define(['app/collections/profiles'],
  function( Collection) {

    module("Collection");

    asyncTest("fetch", 2, function(){
      var profiles = new Collection();
      var options = {
        error: function() {
          ok(false);
          start();
        },
        success: function(profiles) {
          ok(typeof(profiles) === 'object', 'json response is an object');
          ok(profiles.length > 0, 'profiles is not empty');
          start();
        }
      };
      profiles.fetch(options);
    });


  });

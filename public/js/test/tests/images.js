define(['app/collections/images'],
  function(Collection) {

    module("Collection");

    asyncTest("fetch images", 2, function(){

      var images = new Collection();
      var options = {
        error: function() {
          ok(false);
          start();
        },
        success: function(images) {
          ok(typeof(images) === 'object', 'json response is an object');
          ok(images.length > 0, 'images is not empty');
          start();
        }
      };
      images.fetch(options);
    });
  });

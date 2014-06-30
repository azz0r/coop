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
          if (images.models[0].attributes._id.$id) {
            localStorage.setItem('test.image.id', images.models[0].attributes._id.$id);
          }
          ok(typeof(images) === 'object', 'json response is an object');
          ok(images.length > 0, 'images is not empty');
          start();
        }
      };
      images.fetch(options);
    });
  });

define(['app/models/image'],
  function(Model) {

    module("Model");

    asyncTest("fetch image", 2, function(){

      var image = new Model({id: localStorage.getItem('test.image.id')});
      var options = {
        error: function() {
          ok(false);
          start();
        },
        success: function(image) {
          ok(typeof(image) === 'object', 'json response is an object');
          ok(typeof(image.attributes._id) === 'object', 'image id is a mongo id object');
          start();
        }
      };
      image.fetch(options);
    });
  });

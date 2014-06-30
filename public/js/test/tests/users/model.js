define(['app/models/user'],
  function(Model) {

    module("Model");

    asyncTest("fetch user", 2, function(){

      var user = new Model({id: localStorage.getItem('test.user.id')});
      var options = {
        error: function() {
          ok(false);
          start();
        },
        success: function(user) {
          console.log(user);
          ok(typeof(user) === 'object', 'json response is an object');
          ok(typeof(user.attributes._id) === 'object', 'user id is a mongo id object');
          start();
        }
      };
      user.fetch(options);
    });
  });

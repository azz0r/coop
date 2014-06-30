define(['app/collections/users'],
  function(Collection) {

    module("Collection");

    asyncTest("fetch users", 2, function(){

      var users = new Collection();
      var options = {
        error: function() {
          ok(false);
          start();
        },
        success: function(users) {
          if (users.models[0].attributes._id.$id) {
            localStorage.setItem('test.user.id', users.models[0].attributes._id.$id);
          }
          ok(typeof(users) === 'object', 'json response is an object');
          ok(users.length > 0, 'users is not empty');
          start();
        }
      };
      users.fetch(options);
    });
  });

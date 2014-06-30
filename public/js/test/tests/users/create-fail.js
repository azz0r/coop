define(['app/models/user'],
  function(Model) {

    module("Model");


    asyncTest("fail at creating user", 1, function(){

      var random = '';
      var notEnoughData = {username: 'John Doe'};
      var user = new Model(notEnoughData);

      var createUser = user.save({}, {
        success: function() {
          // failed 1
          ok(false, 'fail at creating a user without enough data');
        },
        error: function() {
          // success 1
          ok(true, 'fail at creating a user without enough data');
        },
        complete: function() {
          start();
        }
      });

    });
  });


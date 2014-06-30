define(['app/models/user'],
  function(Model) {

    module("Model");

    var notEnoughData = {username: 'John Doe'};

    asyncTest("succeed at creating a user", 1, function(){

      var random = '';
      var enoughData = {email: 'aaron.lote+'+random+'@gmail.com', };

      var user = new Model(enoughData);
      var createUser = user.save({}, {
        success: function() {
          // success 2
          ok(true, '33 succeed at creating a user with enough data');
        },
        error: function() {
          // failed 2
          ok(false, '22 succeed at creating a user with enough data');
        },
        complete: function() {
          start();
        }
      });
    });
  });

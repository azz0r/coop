define([],
  function() {

    module("Account");

    asyncTest("signin", 2, function(){

      $.ajax({
        type: "POST",
        url: "signin",
        async: false,
        data: "user%5Bemail%5D=user.one%40gmail.com&user%5Bpassword%5D=admin123"
      }).complete(function(data) {

        var response = JSON.parse(data.responseText);

        ok(_.isObject(response.user), 'response user is an object');
        ok(response.login, 'response login value: '+response.login);
        start();
      })
    });
  });

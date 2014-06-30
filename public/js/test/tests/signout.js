define([],
  function() {

    module("Account");

    asyncTest("signout", 1, function(){

      $.ajax({
        type: "GET",
        url: "signout",
        async: false,
      }).complete(function(data) {
        ok(JSON.parse(data.responseText), 'response isnt true?');
        start();
      })
    });
  });

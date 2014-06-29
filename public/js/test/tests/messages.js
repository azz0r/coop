define(['app/collections/messages/conversations'],
  function(Collection) {

    module("Collection");

    asyncTest("fetch messages", 2, function(){

      var messages = new Collection();
      var options = {
        error: function() {
          ok(false);
          start();
        },
        success: function(messages) {
          ok(typeof(messages) === 'object', 'json response is an object');
          ok(messages.length > 0, 'messages is not empty');
          start();
        }
      };
      messages.fetch(options);
    });


  });

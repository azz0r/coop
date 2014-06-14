define(["jquery"], function($) {
  return {
    authenticate: function(view,options) {

      // get the user object from local storage
      var user = localStorage.getObject('user');

      // we are trying to access a page without being logged in
      if (user == null) {
        return false;

      // load the view we requested
      } else {
        return require([view], function(View) {
          return MyApp.content.show(new View(options))
        })
      }
    }
  }
});
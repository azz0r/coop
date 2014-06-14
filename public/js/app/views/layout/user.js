define(["marionette", "text!app/templates/layout/user.html"],
  function(Marionette, Template) {
    "use strict";
    return Marionette.ItemView.extend({
      template: Template,
      onRender: function() {
        var that = this;
        MyApp.vent.on('signIn:successful', function(){
          that.render()
        })
        MyApp.vent.on('signOut:successful', function(){
          that.render()
        })
      },
      serializeData: function(){
        return {
          user: localStorage.getObject('user'),
          signedIn: (localStorage.getObject('user') != null ? true : false)
        };
      }
    })
  })
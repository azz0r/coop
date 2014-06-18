define([
  "marionette",
  "text!app/templates/hive/signin.html",
  "app/models/user",
],
  function (
    Marionette,
    Template,
    Model) {
    "use strict";
    return Backbone.Marionette.ItemView.extend({


      events: {
        'click #signInButton':        'signIn',
        'keypress input[type=text]':  'pressedEnter'
      },


      template: Template,
      itemViewContainer: "body",


      pressedEnter: function(e) {
        if (e.keyCode != 13) return;
        this.signIn();
      },


      signIn: function(ev) {
        ev.preventDefault();
        $.ajax({
          type: "POST",
          url: "signin",
          async: false,
          data: $("#signinForm").serialize()
        }).complete(function(data) {
          var response = JSON.parse(data.responseText);

          if (response.login != true) {
            alert("Username or password is incorrect");
          } else {
            localStorage.setObject('user', response.user);
            MyApp.vent.trigger('signIn:successful')
            return window.location.hash = 'home';
          };
        })
        return false;
      }


    })
  })
define(["marionette", "text!app/templates/hive/signup.html", "text!app/templates/hive/signup-success.html"],
  function (Marionette, Template, SuccessTemplate) {
    "use strict";
    return Backbone.Marionette.ItemView.extend({


      events: {
        'click #signUpButton':        'signUp',
        'keypress input[type=password]':  'pressedEnter'
      },


      template: Template,


      pressedEnter: function(e) {
        if (e.keyCode != 13) return;
        this.signIn();
      },


      signUp: function(ev) {

        ev.preventDefault();

        var that = this;

        $.ajax({
          type: "POST",
          url: "signup",
          async: false,
          data: {
            email: $('#signUpEmail').val(),
            password: $('#signUpPassword').val(),
          }
        }).complete(function(data) {
          var response = JSON.parse(data.responseText);

          if (response.created != true && typeof(response.result) != "undefined") {
            alert('Sign-up failed: '+response.result);

          } else if (response.created != true) {
            alert("Signup failed, please wait one moment and try again.");

          } else {
            that.template = SuccessTemplate;
            return that.render();

          };
        })
      }


    })
  })
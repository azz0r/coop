define(["marionette", "underscore", "text!app/templates/hive/signup.html", "text!app/templates/hive/signup-success.html", "app/models/user", "jquery"],
  function (Marionette, _, Template, SuccessTemplate, Model,$) {
  "use strict";
  return Backbone.Marionette.ItemView.extend({


    events: {
      'click #signupButton':        'signUp',
      'keypress input[type=text]':  'pressedEnter'
    },


    template: Template,


    pressedEnter: function(e) {
      if (e.keyCode != 13) return;
      this.signIn();
    },


    signUp: function(ev){
      ev.preventDefault();
      var that = this;
      $.ajax({
        type: "POST",
        url: "signup",
        async: false,
        data: {
          name: $('#hive_name').val(),
          email: $('#hive_email').val(),
          first_name: $('#hive_first_name').val(),
          last_name: $('#hive_last_name').val()
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
      return false;
    }


  })
})
define(["marionette", "underscore", "text!app/templates/users/update_password.html", "app/models/user"],
  function (Marionette, _, Template, Model) {
  "use strict";


    return Backbone.Marionette.ItemView.extend({
    events: {
      "click #update": "updatePass"
    },
    template: Template,
    itemViewContainer: "body",


    updatePass: function(ev) {
      ev.preventDefault();
      var newPassword = $('#user_password').val();
      var confirmPassword = $('#user_password_confirmation').val();

      if (newPassword.length < 5) {
        alert('Password length must be longer than 5 characters');
        return;

      } else if (newPassword != confirmPassword) {
        alert('Entered passwords do not match');
        return;

      } else {
        var user = localStorage.getObject('user');
        user.password = $('#user_password').val();
        this.user = new Model(user);

        this.user.save({}, {
          success: function() {
            alert('Password changed successfully');
            return window.location.hash = ""
          },
          error: function() {
            alert('Password was not changed successfully, please retry.')
          },
        })
      }
      return false;
    }


  })
})
define(["jquery","app/helper/user", "app/helper/underscore"],
  function($, userCheck, templateHelper) {
    "use strict"
    return {
      landing: function() {
        return require(["app/views/hive/landing"], function(View) {
          return MyApp.content.show(new View())
        })
      },
      debug: function() {
        userCheck.authenticate("app/views/debug");
      },

      // support
      support: function() {
        return require(["app/views/general/support"], function(View) {
          return MyApp.content.show(new View())
        })
      },
      aboutUs: function() {
        return require(["app/views/general/aboutUs"], function(View) {
          return MyApp.content.show(new View())
        })
      },
      FAQ: function() {
        return require(["app/views/general/FAQ"], function(View) {
          return MyApp.content.show(new View())
        })
      },


      messages: function() {
        return require(["app/views/messages/index"], function(View) {
          return MyApp.content.show(new View())
        })
      },
      profiles: function() {
        return require(["app/views/profiles/index"], function(View) {
          return MyApp.content.show(new View())
        })
      },


      // images
      images: function() {
        userCheck.authenticate("app/views/images/index");
      },
      uploadImage: function() {
        userCheck.authenticate("app/views/images/upload");
      },


      signIn: function() {
        var user = localStorage.getObject('user');
        if (user !=undefined && user != null) {
          userCheck.authenticate("app/views/hive/landing");
        } else {
          return require(["app/views/users/signin"], function(View) {
            return MyApp.content.show(new View())
          })
        }
      },
      signOut: function() {
        localStorage.clear();

        $.ajax({
          type: "DELETE",
          url: "signout",
          data: {}
        }).complete(function(data) {
            window.location.hash = '';
            return location.reload(true);
          })
      },
      updatePassword: function() {
        userCheck.authenticate("app/views/users/password");
      }


    }
  })

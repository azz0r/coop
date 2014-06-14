define(["marionette", "text!app/templates/layout/sidebar.html"],
  function(Marionette, Template, ComingSoonView, LogWorkForm) {
    "use strict";
    return Marionette.ItemView.extend({


      template: Template,


      serializeData: function() {

        return {user: localStorage.getObject('user')}
      },


	    onRender: function() {

        var that = this;
        MyApp.vent.on('signIn:successful', function(){
          that.render()
        })
        MyApp.vent.on('signOut:successful', function(){
          that.render()
        })

        setTimeout(function() {
          $('.fa-star-o, .fa-frown-o, .fa-clock-o').hover(
            function(){ $(this).addClass('fa-spin') },
            function(){ $(this).removeClass('fa-spin') }
          )
        }, 500)
      }


    })
  })
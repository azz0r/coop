define(["marionette", "text!app/templates/images/quickview.html"],
  function(Marionette, Template) {
    "use strict"
    return Backbone.Marionette.ItemView.extend({
      template: Template,


      events: {
        'click .delete': 'onClickDeleteImage'
      },


      onClickDeleteImage: function() {
        this.model.set('id', this.model.get('_id').$id);
        this.model.destroy({
            success: function(){
              MyApp.vent.trigger('filter:change');
              MyApp.vent.trigger('quickview:close');
            },
            error: function() {
              alert('failed, please try again');
            }
          });
      }


    })
  })
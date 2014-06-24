define(["marionette", "text!app/templates/partials/success.html"],
  function(Marionette, Template) {
    "use strict";
    return Backbone.Marionette.ItemView.extend({

      template: Template,

      initialize: function(options) {
        this.message = _.has(options, 'message') ? options.message : 'no message set'
      },

      serializeData: function() {
        return {
          message: this.message
        }
      }
    })
  }
);
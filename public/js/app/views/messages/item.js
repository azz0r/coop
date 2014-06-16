define(["marionette", "text!app/templates/messages/item.html", "app/models/message"],
  function(Marionette, Template, Model) {
    "use strict"


    return Backbone.Marionette.ItemView.extend({
      template: Template,
      tagName: "li",


      serializeData: function() {
        var model = new Model();
        return {
          model: this.model.toJSON()
        }
      }


    })
  })
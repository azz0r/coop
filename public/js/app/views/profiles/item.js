define(["marionette", "text!app/templates/profiles/item.html", "app/models/profile"],
  function(Marionette, Template, Model) {
    "use strict"


    return Backbone.Marionette.ItemView.extend({
      template: Template,
      tagName: 'div',
      className: 'row',


      serializeData: function() {
        return {
          model: this.model.toJSON()
        }
      }


    })
  })
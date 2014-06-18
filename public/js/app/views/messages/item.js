define(["marionette", "text!app/templates/messages/item.html", "app/models/message"],
  function(Marionette, Template, Model) {
    "use strict"


    return Backbone.Marionette.ItemView.extend({
      template: Template,
      tagName: 'div',
      className: 'row',


      serializeData: function() {

        var modelObject = this.model.toJSON();
        var arrayObject = $.map(modelObject, function (value, key) { return value; });

        return {
          messages: arrayObject,
          lastMessage: arrayObject[arrayObject.length - 1],
          messageCount: arrayObject.length
        }
      }


    })
  })
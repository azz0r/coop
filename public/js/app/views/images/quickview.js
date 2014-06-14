define(["marionette", "text!app/templates/images/quickview.html"],
  function(Marionette, Template) {
    "use strict"
    return Backbone.Marionette.ItemView.extend({
      template: Template
    })
  })
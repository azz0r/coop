define(["marionette", "tpl!app/templates/general/support.html"],
  function(Marionette, Template) {
    "use strict";
    return Backbone.Marionette.ItemView.extend({
      template: Template()
    })
  })
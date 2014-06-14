define(["marionette", "tpl!app/templates/general/aboutUs.html"],
  function(Marionette, Template) {
    "use strict";
    return Backbone.Marionette.ItemView.extend({
      template: Template()
    })
  })
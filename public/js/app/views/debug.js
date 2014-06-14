define(["marionette", "tpl!app/templates/debug.html"],
  function(Marionette, Template) {
    "use strict";
    return Backbone.Marionette.ItemView.extend({
      template: Template
    })
  })
define(["marionette", "underscore", "text!app/templates/hive/information.html"],
  function (Marionette, _, Template) {
    "use strict";
    return Backbone.Marionette.ItemView.extend({
      template: Template
    })
  })
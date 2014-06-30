define(["marionette", "underscore", "text!app/templates/landing/signup-success.html","jquery"],
  function (Marionette, _, Template, $) {
    "use strict";
    return Backbone.Marionette.ItemView.extend({
      template: Template,
    })
  })
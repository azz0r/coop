define(["marionette", "text!app/templates/partials/empty.html"],
  function(Marionette, Template) {
    "use strict";
    return Backbone.Marionette.ItemView.extend({

      template: Template,
      className: "alert alert-empty",
    })
  }
);
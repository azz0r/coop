define(["marionette", "text!app/templates/images/item.html", "app/views/images/quickview"],
  function(Marionette, Template, ItemQuickview) {
    "use strict"
    return Backbone.Marionette.ItemView.extend({
      template: Template,
      tagName: "div",
      className: "image col-xs-6 col-sm-3",


      events: {
        'click img': 'onClickImage'
      },


      onClickImage: function() {
        // create an instance of a image view
        $.quickview({className: 'image', view: new ItemQuickview({model: this.model})});
      }


    })
  })
define(["marionette", "text!app/templates/partials/clear_filter.html"],
  function(Marionette, Template) {
    "use strict"
    return Backbone.Marionette.ItemView.extend({
      template: Template,
      tagName: "span",



      events: {
        'click #clear': 'onClickClearFilter'
      },


      initialize: function(options) {
        this.key = _.isEmpty(options) ? '' : options.key;
      },


      onClickClearFilter: function() {
        localStorage.removeItem(this.key)
        MyApp.vent.trigger('filter:clear');
      }


    })
  })
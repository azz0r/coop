define(["marionette", "text!app/templates/profiles/partials/order_by.html", 'app/models/profile'],
  function(Marionette, Template, Model) {
    "use strict"
    return Backbone.Marionette.ItemView.extend({
      template: Template,


      events: {
        'change #orderBy': 'onOrderBy'
      },


      initialize: function(options) {
        this.order_by = _.isEmpty(options) ? '-' : options.order_by;
        this.order_direction = _.isEmpty(options) ? '-' : options.order_direction;
      },


      onOrderBy: function() {
        MyApp.vent.trigger('filter:change');
      },


      serializeData: function() {
        return {
          values: new Model().getOrderByOptions(),
          order_by: this.order_by,
          order_direction: this.order_direction
        };
      }


    })
  })
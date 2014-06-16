define([
  "text!app/templates/messages/index.html",
  'app/views/partials/clear_filter',
  'app/views/messages/collection',
  'app/views/messages/partials/order_by'
],
  function(Template, ClearFilterView, CollectionView, OrderByView) {
    "use strict"

    return Backbone.Marionette.Layout.extend({


      template: Template,


      regions: {
        clearFilter: '#clearFilter',
        orderBy: '#orderByContainer',
        collectionLatch: '#collectionLatch'
      },


      initialize: function() {

        // horrible scope issues with javascript
        var that = this;

        // if the filter change event is triggered in a sub view
        this.listenTo(MyApp.vent, 'filter:change', function() {
          // fetch the collection and pass its filters through
          that.renderCollection(that.getFilter());
        })

        // if the filter is cleared, re render the entire view
        this.listenTo(MyApp.vent, 'filter:clear', function() {
          // fetch the collection and pass its filters through
          that.render();
        })
      },



      getFilter: function() {

        // create our new filter object using jQuery picking the values
        var filter = {
          from: "0",
          to: parseInt(100),
          order_by: $('#orderBy').val(),
          order_direction: $('#orderBy option:selected').data('direction')
        };

        // passing it through a null stripper
        filter = _.cleanNullFieldsFromObject(filter);

        // set the filter object to local storage (extended, not typical)
        localStorage.setObject('messageFilter', filter);

        return filter;
      },


      renderClearFilter: function(options) {
        this.clearFilter.show(new ClearFilterView(options));
      },


      renderOrderBy: function(options) {
        this.orderBy.show(new OrderByView(options));
      },

      renderCollection: function(options) {
        // render the post list
        this.collectionLatch.show(new CollectionView(options));
      },


      onRender: function () {

        // do we need to over write the filter object from local storage?
        var messageFilter = localStorage.getObject('messageFilter');

        // if local storage isn't empty then over ride the filter with it
        if (!_.isEmpty(messageFilter)) {
          this.filter = messageFilter;
        } else {
          this.filter = this.getFilter();
        }

        //render the clear filter button
        this.renderClearFilter({key: 'messageFilter'});

        // ordering
        this.renderOrderBy(this.filter);

        // render the collection
        this.renderCollection(this.filter);
      }


    })
  })
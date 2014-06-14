define([
  "text!app/templates/users/index.html",

  'app/views/partials/clear_filter',

  'app/views/users/collection',

  'app/views/users/form',

  'app/views/users/partials/order_by'
],
  function(Template, ClearFilterView, CollectionView, CreateView, OrderByView) {
    "use strict"

    return Backbone.Marionette.Layout.extend({


      template: Template,


      regions: {
        clearFilter: '#clearFilter',
        orderBy: '#orderByContainer',
        collectionLatch: '#collectionLatch'
      },


      events: {
        'click #create': 'onClickCreate'
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


      onClickCreate: function(ev) {

        // stop it forwarding but still allow a href incase it fails
        ev.preventDefault();

        // send the add client page to the quickView
        $.quickview({view: new CreateView({quickview: true})});
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
        localStorage.setObject('userFilter', filter);

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
        var userFilter = localStorage.getObject('userFilter');

        // if local storage isn't empty then over ride the filter with it
        if (!_.isEmpty(userFilter)) {
          this.filter = userFilter;
        } else {
          this.filter = this.getFilter();
        }

        //render the clear filter button
        this.renderClearFilter({key: 'userFilter'});

        this.renderOrderBy(this.filter);

        // render the collection
        this.renderCollection(this.filter);
      }


    })
  })
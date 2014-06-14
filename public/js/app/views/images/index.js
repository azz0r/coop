define([
  "text!app/templates/images/index.html",

  'app/views/partials/clear_filter',

  'app/views/images/collection',

  'app/views/users/partials/order_by',

  'app/views/images/upload'
],
  function(Template, ClearFilterView, CollectionView, OrderByView, CreateView) {
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
        $.quickview({className: 'createImages', view: new CreateView({quickview: true})});
      },


      getFilter: function() {

        // create our new filter object using jQuery picking the values
        var filter = {
          from: "0",
          to: 100,
          order_by: $('#orderBy').val(),
          order_direction: $('#orderBy option:selected').data('direction')
        };

        // set the filter object to local storage (extended, not typical)
        localStorage.setObject('imageFilter', filter);

        // return the filter after passing it through a null stripper
        return _.cleanNullFieldsFromObject(filter);
      },


      renderClearFilter: function(options) {
        this.clearFilter.show(new ClearFilterView(options));
      },


      renderOrderBy: function(options) {
        this.orderBy.show(new OrderByView(options));
      },


      renderCollection: function(options) {
        // render the image list
        this.collectionLatch.show(new CollectionView(options));
      },


      onRender: function () {

        // do we need to over write the filter object from local storage?
        var imageFilter = localStorage.getObject('imageFilter');

        // if local storage isn't empty then over ride the filter with it
        if (!_.isEmpty(imageFilter)) {
          this.filter = imageFilter;
        } else {
          this.filter = this.getFilter();
        }

        //render the clear filter button
        this.renderClearFilter({key: 'imageFilter'});

        // render order view
        this.renderOrderBy(this.filter);

        // render the collection
        this.renderCollection(this.filter);
      }


    })
  })
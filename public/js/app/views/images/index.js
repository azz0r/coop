define([
  "text!app/templates/images/index.html",

  'app/views/images/collection',

  'app/views/images/upload'
],
  function(Template, CollectionView, CreateView) {
    "use strict"

    return Backbone.Marionette.Layout.extend({


      template: Template,


      regions: {
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
          user: _.getUser()._id.$id
        };

        console.log(filter);
        // return the filter after passing it through a null stripper
        return _.cleanNullFieldsFromObject(filter);
      },


      renderCollection: function(options) {
        // render the image list
        this.collectionLatch.show(new CollectionView(options));
      },


      onRender: function () {

        this.filter = this.getFilter();

        // render the collection
        this.renderCollection(this.filter);
      }


    })
  })
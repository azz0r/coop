define(["app/views/partials/page", "app/views/partials/empty"],
  function(PageView, EmptyView) {
    "use strict"
    return Backbone.Marionette.CompositeView.extend({


      collectionEvents: {
        'sync': 'hideLoading'
      },


      initialize: function(filter) {

        // set it on the instance so onRender can access the filter data
        this.filter = filter;

        return this.triggerCollection();
      },


      triggerCollection: function() {

        // empty the collection div of any content
        $(this.childViewContainer).html(' ');

        // set things loading
        this.setLoading();

        //so we can access the instance inside
        var that = this;

        // bind our vents for paging changes
        that.listenTo(MyApp.vent, 'paging:update', function(options) {

          // get the from and to from the paging view
          that.filter.from = options.from;
          that.filter.to = options.to;

          // ensure that filter cannot contain a count
          delete that.filter.count;

          // set collection loading
          that.setLoading();

          // clear the collection
          that.collection.reset();

          // fire off a new fetch
          return this.collection.fetch({
            data: this.filter,
            error: function() {
              that.hideLoading();
              $('#errorHappened').removeClass('hide')
            }
          })
        })

        // feth the collection
        return this.collection.fetch({
          data: this.filter,
          error: function() {
            that.hideLoading();
            $('#errorHappened').removeClass('hide')
          }
        })
      },


      // hide the loading state
      hideLoading: function() {
        $('.loadingLatch').removeClass('loadingActive');
        if (this.collection.length == 0) {
          this.$el.html(new EmptyView().render().el);
        }
      },


      // set loading by appending to the latch
      setLoading: function() {
        $('.loadingLatch').addClass('loadingActive');
      },


      // after we render we then call the paging
      onRender: function() {

        // create page view
        this.page = new PageView({collection: this.pageCollection, filter: this.filter});
        // append the html to the page latch
        $('.pageLatch').html(this.page.render().el);
      },


      onClose: function() {
        $(this.page.el).removeData().unbind();
      }


    })
  })
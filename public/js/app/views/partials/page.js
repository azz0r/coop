define(["marionette", "text!app/templates/partials/page.html"],
  function(Marionette, Template) {
    "use strict"
    return Backbone.Marionette.ItemView.extend({
      template: Template,
      className: 'expand',

      events: {
        'click .previous': "onClickPrevious",
        'click .next': "onClickNext",
        'click .pageChange': "onClickPageChange",
        'change .pageChange': "onChangePage"
      },


      templateData: {
        loading: true
      },


      initialize: function (options) {

        // if no filters are applied we need to protect ourself
        if (_.isEmpty(options.filter)) {
          options.filter = {};
        }

        // split the options data off so we can access it in serializeData
        this.filter = options.filter;

        this.triggerFetch();
      },


      triggerFetch: function() {

        // bind that var so inside the fetchwe can access the instance
        var that = this;

        // call a new instance of the collection
        this.options.collection.fetch({
          data: _.merge(this.options.filter, {count: 1}),
          success: function(data) {
            data = data.toJSON();
            that.serializeData(data[0].count);
          }
        })
      },


      serializeData: function (totalItems) {

        this.filter.to = _.has(this.filter, 'to') ? parseInt(this.filter.to) : 100;
        this.filter.from = _.has(this.filter, 'from') ? parseInt(this.filter.from) : 0;
        var totalItems = parseInt(totalItems);

        // create page data object
        this.templateData = {
          loading: false,
          totalItems: parseInt(totalItems),
          totalPages: parseInt(totalItems / this.filter.to) +1,
          perPage: parseInt(this.filter.to),
          offset: this.filter.from,
          currentPage: parseInt((this.filter.from / this.filter.to) + 1)
        };
        this.render();
      },


      onClickPrevious: function () {
        if (this.templateData.currentPage != 1) {
          this.filter.from = parseInt(this.filter.from) - parseInt(this.filter.to);
          MyApp.vent.trigger('paging:update', {from: this.filter.from, to: parseInt(this.filter.to)})
          return this.triggerFetch();
        }
      },


      onClickNext: function () {
        if (this.templateData.currentPage != this.templateData.totalPages) {
          this.filter.from = parseInt(this.filter.from) + parseInt(this.filter.to);
          MyApp.vent.trigger('paging:update', {from: this.filter.from, to: parseInt(this.filter.to)})
          return this.triggerFetch();
        }
      },


      onClickPageChange: function(ev) {
        var pageClicked = parseInt($(ev.currentTarget).data('page') - 1);
        MyApp.vent.trigger('paging:update', {from: pageClicked * this.filter.to, to: parseInt(this.filter.to)});
        return this.triggerFetch();
      },


      onChangePage: function(ev) {
        var pageClicked = parseInt($(ev.currentTarget).val()) - 1;
        MyApp.vent.trigger('paging:update', {from: pageClicked * this.filter.to, to: parseInt(this.filter.to)});
        return this.triggerFetch();
      },


      render: function() {
        if (this.templateData.loading === false) {
          var html = _.template($(Template).html(), this.templateData)
          this.$el.html(html)
        }
        return this
      }


    })
  })
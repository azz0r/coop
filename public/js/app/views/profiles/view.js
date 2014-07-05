define([
    "marionette",
    "text!app/templates/profiles/view.html",
    "app/models/profile",
    "app/models/profile/full",
    "app/views/images/quickview"
],

    function(Marionette, Template, Model, ModelFetch, ItemQuickview) {
        "use strict"
        return Backbone.Marionette.CompositeView.extend({

            loaded: false,

            events: {
                'click .image': 'onClickImage'
            },

            onClickImage: function(ev) {

                ev.preventDefault();

                var imageId = $(ev.currentTarget).data('id');

                var image = _.where(this.model.get('images'), {id: imageId});

                console.log(image[0]);

                // create an instance of a image view
                $.quickview({className: 'image', view: new ItemQuickview({model: image[0]})});
            },

            initialize: function(options) {

                this.options = options;

                this.model = new ModelFetch({id: this.options.id});
                this.model.set("id", this.options.id);
                this.model.fetch();

                var that = this;

                this.model.fetch({
                    success: function(response) {
                        that.loaded = true;
                        return that.render();
                    },
                    error: function() {
                        alert("Profile could not be loaded");
                        return window.location.hash = "profiles";
                    }
                })

            },

            render: function() {
                if (this.loaded == true) {
                    var html = _.template($(Template).html(), {
                        model: this.model.toJSON(),
                        options: new Model().getArrayMappedOptions()
                    });
                    this.$el.html(html);
                }
                return this;
            }

        })
    })
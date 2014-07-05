define([
    "marionette",
    "text!app/templates/profiles/view.html",
    "app/models/profile",
    "app/models/profile/full",
    "app/views/profiles/view/image"
],

    function(Marionette, Template, Model, ModelFetch, ItemQuickview) {
        "use strict"
        return Backbone.Marionette.CompositeView.extend({

            loaded: false,

            events: {
                'click .image': 'onClickImage'
            },

            onClickImage: function(ev) {

                // prevent any link default
                ev.preventDefault();

                // get image id via the element
                var imageId = $(ev.currentTarget).data('id');

                // get image object from the array of images via the id
                var image = _.where(this.model.get('images'), {id: imageId});

                // create an instance of a image view
                $.quickview({className: 'image', view: new ItemQuickview(image[0])});
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
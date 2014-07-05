define([
    "marionette",
    "text!app/templates/profiles/view/image.html"
    ],
    function(Marionette, Template) {
        "use strict"
        return Backbone.Marionette.ItemView.extend({

            initialize: function(options) {
                this.model = options;
            },

            render: function() {
                var html = _.template($(Template).html(), this.model);
                this.$el.html(html);
                return this;

            }

        })
    })
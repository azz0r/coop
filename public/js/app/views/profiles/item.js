define(["marionette", "text!app/templates/profiles/item.html", "app/models/profile"],
    function(Marionette, Template, Model) {
        "use strict"


        return Backbone.Marionette.ItemView.extend({
            template: Template,
            tagName: 'div',


            initialize: function(options) {
                this.options = options.options;
            },

            serializeData: function() {
                console.log(this.options);
                return {
                    options: this.options,
                    model: this.model.toJSON()
                }
            }


        })
    })
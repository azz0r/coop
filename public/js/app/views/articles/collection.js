define([
    "marionette",
    "text!app/templates/articles/collection.html",
    "json!app/store/articles.json",
],
    function(Marionette, Template, Collection) {
        "use strict"
        return Backbone.Marionette.ItemView.extend({

            template: Template,

            serializeData: function() {
                console.log(Collection);
                return {
                    collection: Collection
                };
            }

        })
    })
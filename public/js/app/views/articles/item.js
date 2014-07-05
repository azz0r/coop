define([
    "marionette",
    "text!app/templates/articles/item.html",
    "json!app/store/"+slug+".json"
    ],
    function(Marionette, Template, JSON) {
        "use strict"
        return Backbone.Marionette.ItemView.extend({

            template: Template,

            initialize: function(slug) {
                this.slug = slug;

                define([], function(JSONData) {
                    console.log('here');
                    console.log(JSONData)
                })
            },

            serializeData: function() {

            }

        })
    })
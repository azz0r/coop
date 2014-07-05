define([
    "text!app/templates/profiles/collection.html",
    "app/collections/profiles",
    "app/views/profiles/item",
    "app/models/profile",
    "baseCollectionView"
],
    function(Template, Collection, Item, Model, baseCollectionView) {
        "use strict"
        return baseCollectionView.extend({


            template: Template,
            childView: Item,
            childViewContainer: "#collectionBody",
            collection: new Collection(),
            pageCollection: new Collection(),
            childViewOptions: {options: new Model().getArrayMappedOptions()}
        })
    })
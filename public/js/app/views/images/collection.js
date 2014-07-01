define([
  "text!app/templates/images/collection.html",
  "app/collections/images",
  "app/views/images/item",
  "baseCollectionView"
],
  function(Template, Collection, Item, baseCollectionView) {
    "use strict"
    return baseCollectionView.extend({


      template: Template,
      childView: Item,
      childViewContainer: "#imagesBody",
      collection: new Collection(),
      pageCollection: new Collection()


    })
  })
define([
  "text!app/templates/users/collection.html",
  "app/collections/users",
  "app/views/users/item",
  "baseCollectionView"
],
  function(Template, Collection, Item, baseCollectionView) {
    "use strict"
    return baseCollectionView.extend({


      template: Template,
      itemView: Item,
      itemViewContainer: "#collectionBody",
      collection: new Collection(),
      pageCollection: new Collection()


    })
  })
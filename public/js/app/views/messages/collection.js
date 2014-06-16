define([
  "text!app/templates/messages/collection.html",
  "app/collections/messages",
  "app/views/messages/item",
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
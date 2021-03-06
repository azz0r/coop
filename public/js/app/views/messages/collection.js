define([
  "text!app/templates/messages/collection.html",
  "app/collections/messages/conversations",
  "app/views/messages/item",
  "baseCollectionView"
],
  function(Template, Collection, Item, baseCollectionView) {
    "use strict"
    return baseCollectionView.extend({


      template: Template,
      childView: Item,
      childViewContainer: "#collectionBody",
      collection: new Collection(),
      pageCollection: new Collection()

    })
  })
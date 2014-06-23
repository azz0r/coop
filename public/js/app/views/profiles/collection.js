define([
  "text!app/templates/profiles/collection.html",
  "app/collections/profiles",
  "app/views/profiles/item",
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
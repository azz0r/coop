define(["baseCollection", "app/models/image"],
  function(baseCollection, Model) {
    return baseCollection.extend({
      model: Model,
      url: "image"
    });
  })
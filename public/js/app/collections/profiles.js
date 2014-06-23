define(["baseCollection", "app/models/profile"],
  function(baseCollection, Model) {
    return baseCollection.extend({
      model: Model,
      url: "profile"
    });
  })
define(["baseCollection", "app/models/user"],
  function(baseCollection, Model) {
    return baseCollection.extend({
      model: Model,
      url: "user/birthday"
    });
  })
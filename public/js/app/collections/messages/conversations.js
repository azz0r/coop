define(["baseCollection", "app/models/message"],
  function(baseCollection, Model) {
    return baseCollection.extend({
      model: Model,
      url: "message/conversation"
    });
  })
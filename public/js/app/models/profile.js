define(["baseModel"],
  function(baseModel) {
  return baseModel.extend({
    urlRoot: "profile",

    getOrderByOptions: function() {
      return [
        {id: 'created', 'humanised': 'Created'},
        {id: 'updated', 'humanised': 'Updated'}
      ];
    }
  });
})
define(["baseModel"], function(baseModel) {
  return baseModel.extend({


    urlRoot: "image",


    getOrderByOptions: function() {
      return [
        {id: 'created', 'humanised': 'Created'},
        {id: 'updated', 'humanised': 'Updated'}
      ];
    }


  })
})
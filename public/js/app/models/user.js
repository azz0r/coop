define(["baseModel"],
  function(baseModel) {
  return baseModel.extend({


    urlRoot: "user",


    defaults: {
      first_name: ""
    },


    validation: {
      first_name: {
        required: true,
        msg: "Please enter a first name"
      },
      last_name: {
        required: true,
        msg: "Please enter a last name"
      },
      email: {
        required: true,
        msg: "Please enter a valid email"
      }
    },


    getRoleOptions: function() {
      return [
        {id: 'member', 'humanised': 'Member'},
        {id: 'admin', 'humanised': 'Admin'}
      ];
    },


    getOrderByOptions: function() {
      return [
        {id: 'created', 'humanised': 'Created'},
        {id: 'updated', 'humanised': 'Updated'}
      ];
    }


  });
})
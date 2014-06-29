define(["backbone", "underscore"],
  function(Backbone, _) {


    return _.extend({


      createUrl: function(model) {
        var url = 'http://localhost:3000/';
        if (model.id) {
          url += '/' + model.id;
        }
        url += '.json';
        if (! _.isEmpty(model.queryParams)) {
          url += '?' + this.generateQueryString(model.queryParams);
        }
        return url;
      },


      generateQueryString: function (queryParams) {
        var query = _.extend({}, queryParams),
          array = [];
        for(var k in query){
          if(query[k] !== undefined) {
            array.push(k+'='+encodeURIComponent(query[k]));
          }
        }
        return array.join('&');
      },


      getQueryString: function() {
        var result = {},
          queryString = location.search.substring(1),
          re = /([^&=]+)=([^&]*)/g, m;

        while (m = re.exec(queryString)) {
          result[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
        }
        return result;
      }


    })
  })
define([
  "marionette",
  "text!app/templates/profiles/form.html",
  "app/models/profile",
  "json!app/store/country.json",
  "json!app/store/city.json",
  "json!app/store/occupation.json",
  "app/views/partials/success",

],
  function(Marionette, Template, Model, Countries, Cities, Occupations, SuccessView) {
    "use strict"


    return Backbone.Marionette.ItemView.extend({
      template: Template,
      tagName: 'div',


      events: {
        'click .update': 'onClickUpdate'
      },


      initialize: function() {

        // get the current user id, we use it for the id of a profile
        this.currentUserId = _.getUser()._id.$id;

        // create a new instance of the model
        this.model = new Model();

        // set the id for our fetch call
        this.model.set('id', this.currentUserId);

        // js scope issues
        var that = this;

        // fetch the model
        this.model.fetch({
          // our call was successful
          success: function(response) {
            // set success to the attributes we fetched
            return that.setModel(response.attributes);
          },
          // our call errored
          error: function(response) {
            return that.render();
          }
        });
      },


      // convenience method to pass model object to the model instance
      setModel: function(model) {

        // set the model
        this.model.set(model);

        // re render the page
        this.render();
      },


      // save the model
      onClickUpdate: function(ev) {

        ev.preventDefault();

        var data = {
          name: this.$el.find('.name').val(),
          is_a: this.$el.find('.is_a').val(),
          is_for: this.$el.find('.is_for').val(),
          height: this.$el.find('.height').val(),

          city_id: this.$el.find('.city_id').val(),
          country_id: this.$el.find('.country_id').val(),

          sex: this.$el.find('.sex').val(),
          age: this.$el.find('.age').val(),

          occupation: this.$el.find('.occupation').val(),
          education: this.$el.find('.education').val(),
          religion: this.$el.find('.religion').val(),
          star_sign: this.$el.find('.star_sign').val(),
          income: this.$el.find('.income').val(),

          hair_colour: this.$el.find('.hair_colour').val(),
          eye_colour: this.$el.find('.eye_colour').val(),
          body: this.$el.find('.body').val(),
          ethnicity: this.$el.find('.ethnicity').val(),

          screening: this.$el.find('.screening').val(),
          smoke: this.$el.find('.smoke').val(),
          drink: this.$el.find('.drink').val(),
          blurb: this.$el.find('.blurb').val()
        };

        var that = this;

        $('.alert').addClass('hide')

        this.model = new Model(data);
        this.model.save({}, {
          success: function(response) {
            $.quickview({className: 'success', view: new SuccessView({
              message: "Your profile has successfully been saved"
            })});
          },
          error: function(model, response) {
            var responseObject = JSON && JSON.parse(response.responseText) || $.parseJSON(response.responseText);
            _.each(responseObject.data.errors, function (value, key) {
              $('.'+key+'-error').removeClass('hide').html(value);
            });
          }
        });
      },


      // render function
      render: function() {

        // create data object to pass to template
        var data = {
          model: this.model.toJSON(),
          lists: {
            country: Countries,
            city: Cities,
            occupation: Occupations
          },
          options: {
            isA: this.model.getIsAOptions(),
            isFor: this.model.getIsForOptions(),
            height: this.model.getHeightOptions(),
            age: this.model.getAgeOptions(),
            sex: this.model.getSexOptions(),
            education: this.model.getEducationOptions(),
            religion: this.model.getReligionOptions(),
            starSign: this.model.getStarSignOptions(),
            income: this.model.getIncomeOptions(),
            hairColour: this.model.getHairColourOptions(),
            body: this.model.getBodyOptions(),
            ethnicity: this.model.getEthnicityOptions(),
            eyeColour: this.model.getEyeColourOptions(),
            screening: this.model.getScreeningOptions(),
            smoke: this.model.getSmokeOptions(),
            drink: this.model.getDrinkOptions()
          }
        };

        var html = _.template($(Template).html(), data);
        this.$el.html(html)

        return this;
      }



    })
  })
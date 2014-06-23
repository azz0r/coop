define(["marionette", "text!app/templates/profiles/form.html", "app/models/profile"],
  function(Marionette, Template, Model) {
    "use strict"


    return Backbone.Marionette.ItemView.extend({
      template: Template,
      tagName: 'div',


      initialize: function() {
        this.currentUserId = _.getUser()._id;

        this.model = new Model({
          user_id: this.currentUserId
        })
        this.model.set("user_id", this.currentUserId)
        var that = this
        return this.model.fetch({
          success: function(response) {
            that.model = response
            return that.render()
          },
          error: function() {
            alert("Error loading data required to display this page, please try again later.")
            return window.location.hash = "clients"
          }
        })
      },


      serializeData: function() {
        this.model = new Model();
        return {
          options: {
            isA: this.model.getIsAOptions(),
            isFor: this.model.getIsForOptions(),
            height: this.model.getHeightOptions(),
            sex: this.model.getSexOptions(),
            education: this.model.getEducationOptions(),
            religion: this.model.getReligionOptions(),
            starsign: this.model.getStarsignOptions(),
            income: this.model.getIncomeOptions(),
            hairColour: this.model.getHairColourOptions(),
            body: this.model.getBodyOptions(),
            ethnic: this.model.getEthnicOptions(),
            eyeColour: this.model.getEyeColourOptions(),
            screening: this.model.getScreeningOptions(),
            smoke: this.model.getSmokeOptions(),
            drink: this.model.getDrinkOptions()
          }
        }
      },


      pretendRender: function() {
        html = _.template($(Template).html(), this.model.toJSON())
        this.$el.html(html)
      }


    })
  })
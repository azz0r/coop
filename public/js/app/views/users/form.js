define(["marionette", "underscore", "text!app/templates/users/form.html", "app/models/user"], function (Marionette, _, Template, Model) {
  "use strict"
  return Backbone.Marionette.ItemView.extend({
    events: {
      "click #save": "onClickSave"
    },
    _modelBinder: undefined,


    initialize: function(options) {

      // dont break if options is empty
      options = _.isEmpty(options) ? {} : options;

      // are we in a quick view?
      this.quickview = _.has(options, 'quickview') ? true : false;

      this._modelBinder = new Backbone.ModelBinder()
      this.model = new Model()
      this.mode = 'create'

      if (options && options.id) {
        this.model = new Model({
          id: options.id
        })
        this.model.set("id", options.id)
        this.mode = 'update'

        var that = this
        return this.model.fetch({
          success: function (response) {
            that.model = response
            return that.render()
          },
          error: function () {
            alert("Error loading data required to display this page, please try again later.")
            return window.location.hash = "users"
          }
        })
      }
    },


    close: function () {
      return this._modelBinder.unbind()
    },


    onClickSave: function (ev) {

      ev.preventDefault()

      $(".errorMessage").addClass("hide").html("&nbsp")

      var that = this;

      return this.model.save({}, {
        success: function () {
          if (that.quickview) {
            MyApp.vent.trigger('quickview:close');
            return MyApp.vent.trigger('filter:change');
          } else {
            // full page so go back to clients
            return window.location.hash = "users";
          }
        },
        error: function (request, error) {
          var mpInfo
          mpInfo = eval("(" + error.responseText + ")");
          return _.each(mpInfo.data, function(errors, key) {
            return $("#" + key + "_container .errorMessage").removeClass("hide").html(errors)
          })
        }
      })
    },


    generatePassword: function () {
      var length = 12,
        charset = "abcdefghijklnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        retVal = "";
      for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
      }
      return retVal;
    },


    render: function () {
      var bindings, html
      bindings = {
        first_name: "#first_name",
        last_name: "#last_name",
        birth_date: "#birth_date",
        job_title: "#job_title",
        job_start_date: "#job_start_date",
        job_probation_ends: "#job_probation_ends",
        email: "#email",
        work_address: "#work_address",
        work_phone_number: "#work_phone_number",
        personal_email: "#personal_email",
        personal_address: "#personal_address",
        personal_phone_number: "#personal_phone_number",
        password: "#password",
        password_confirmation: "#password_confirmation"
      }

      html = _.template($(Template).html(), {mode: this.mode})
      this.$el.html(html)
      this._modelBinder.bind(this.model, this.$el, bindings, this.mode === "create" ? {initialCopyDirection: Backbone.ModelBinder.Constants.ViewToModel} : {});

      if (this.mode === 'create') {
        var suggestedPassword = this.generatePassword();
        this.model.set({password: suggestedPassword, password_confirmation: suggestedPassword});
      }
      return this
    }
  })
})

define(["marionette", "text!app/templates/users/item.html", "app/views/users/form", "app/models/user"],
  function(Marionette, Template, UpdateView, UserModel, LocationModel) {
    "use strict"


    return Backbone.Marionette.ItemView.extend({
      template: Template,
      tagName: "tr",


      events: {
        "click .delete": "onClickDelete",
        "click .save": "onInlineEditSave",
        "click .reset": "onClickReset",
        "click .update": "onClickUpdate"
      },


      onClickReset: function () {

        // set the row to disabled
        this.setDisabled();

        // bind instance to that so we can re-render when the fetch is complete
        var that = this;

        // we use model fetch because this.render() with a model thats not different won't cause a re-render
        this.model.fetch({
          // when the ajax call has finished, re-render the row
          complete: function() {
            _.playSound();
            that.render();
          }});
      },


      onClickUpdate: function(ev) {

        // stop it forwarding but still allow a href incase it fails
        ev.preventDefault();

        // send the add client page to the quickView
        $.quickview({view: new UpdateView({quickview: true, id: this.model.attributes.id})});
      },


      onInlineEditSave: function (e) {

        // prevent default button action
        e.preventDefault();

        // set the model for alias
        this.model.set({
          username: this.$el.find(".username").val(),
          email: this.$el.find('.email').val(),
        });
        // save the model
        this.saveModel(this.model);
      },


      onClickDelete: function(ev) {

        // prevent default button action
        ev.preventDefault();

        if (confirm("Are you sure you want to delete this?")) {
          this.model.set("id", this.model.attributes.id);
          return this.model.destroy({
            wait: true,
            success: function() {
              return window.location.hash = "users"
            },
            error: function (request, error) {
              var mpInfo
              mpInfo = eval("(" + error.responseText + ")")
              return _.each(mpInfo, function (errors, key) {
                return _.each(errors, function (error, errorKey) {
                  return $("#" + key + "_container .errorMessage").removeClass("hide").html(error)
                })
              })
            }
          });
        }
      },


      setDisabled: function() {
        // set buttons and input to disabled
        this.$el.find('button, input, a').each(function(){
          $(this).attr('disabled', true);
        });
      },


      saveModel: function(model, remove) {

        // set this row disabled
        this.setDisabled();

        // bind the instance to a variable so we can access it inside the save call
        var that = this;

        // save the model
        this.model.save({}, {
          wait: true,
          success: function() {
            if (remove === true) {
              that.remove();
            } else {
              that.render();
            }
            return _.playSound();
          },
          error: function (request, error) {
            alert(error.responseText);
            that.render();
            return _.playSound();
          }
        });
      },


      serializeData: function() {
        var model = new UserModel();
        return {
          model: this.model.toJSON(),
          roles: model.getRoleOptions()
        }
      }


    })
  })
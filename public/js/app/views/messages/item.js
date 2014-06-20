define(["marionette", "text!app/templates/messages/item.html", "app/models/message"],
  function(Marionette, Template, Model) {
    "use strict"


    return Backbone.Marionette.ItemView.extend({
      template: Template,
      tagName: 'div',
      className: 'row',


      events: {
        'click .sendMessage': 'onClickSendMessage'
      },


      onClickSendMessage: function(ev) {

        // prevent default form submission
        ev.preventDefault();

        // create a new model with our messages schema
        var newModel = new Model({
          message: this.$el.find('.newMessage').val(),
          to_user: this.otherUserId,
          in_reply_to: this.lastMessage.in_reply_to.$id
        });

        //js scope
        var that = this;

        newModel.save({}, {
          success: function() {
            // when we save the post trigger the event that will reload the index view
            MyApp.vent.trigger('filter:change')
          },
          error: function() {
            alert('There was an error saving your reply, please try again');
          }
        })
      },


      serializeData: function() {

        this.modelObject = this.model.toJSON();
        this.arrayObject = $.map(this.modelObject, function (value, key) { return value; });
        this.lastMessage = this.arrayObject[this.arrayObject.length - 1];

        this.otherUserId = this.lastMessage.to_user._id.$id = _.getUser()._id.$id
          ? this.lastMessage.by_user._id.$id : this.lastMessage.to_user._id.$id;

        return {
          messages: this.arrayObject.reverse(),
          lastMessage: this.lastMessage,
          messageCount: this.arrayObject.length
        }
      }


    })
  })
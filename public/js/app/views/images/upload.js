define(["marionette", "text!app/templates/images/upload.html", "app/collections/images", "app/models/image"],
  function(Marionette, Template, Collection, Model) {
    "use strict"
    return Backbone.Marionette.ItemView.extend({
      template: Template,
      tagName: "div",
      className: "item",

      events: {
        'click .save': 'onClickSaveImages',
        'click .clear': 'onClickClearImages'
      },


      initialize: function(options) {

        // create a collection for us to play with
        this.options = options;
        this.collection = new Collection();
      },


      onClickSaveImages: function() {

        // length of the collection
        var length = this.collection.length;
        var completed = 0;
        var that = this;

        // loop the ollection
        _.each (this.collection.toJSON(), function(image, key) {

          // create a model of the image
          var newModel = new Model(image);

          // save the new image
          newModel.save({}, {
            complete: function() {
              completed++;
              that.onSavedImage(completed, length);
            }
          });
        });


      },


      onSavedImage: function(completed, length) {

        if (completed == length) {
          MyApp.vent.trigger('filter:change');
          MyApp.vent.trigger('quickview:close');
        }
      },


      onClickClearImages: function() {

        this.collection.reset();
        this.render();
      },


      onRender: function() {

        var that = this;

        setTimeout(function() {
          $("#choose").change(function (e) {
            if(this.disabled) return alert('File upload not supported!');
            var F = this.files;
            if(F && F[0]) for(var i=0; i<F.length; i++) that.readImage( F[i] );
          });
        })
      },


      readImage: function(file) {

        var reader = new FileReader();
        var image  = new Image();
        var images = new Collection();
        var that = this;

        reader.readAsDataURL(file);
        reader.onload = function(_file) {
          image.src    = _file.target.result;
          image.onload = function() {
            var newImage = {
              height: this.height,
              width: this.width,
              filename: file.name,
              type: file.type,
              size: ~~(file.size/1024),
              base64: this.src
            };
            that.collection.add(newImage);
            that.render();
          };
          image.onerror= function() {
            alert('Invalid file type: '+ file.type);
          };
        };
      },


      serializeData: function() {
        return {
          collection: this.collection.toJSON(),
          quickview: _.has(this.options, 'quickview') ? this.options.quickview : false
        }
      }

    })
  })
define(["backbone", "text!libs/quickview/quickview.html"],
  function(BackBone, Template) {
    "use strict";


    var createquickviewContainer = function(options) {

      if (options.view instanceof Backbone.View) {
        $('#quickviewLatch').html(_.template(Template));
        $('#quickviewContent').prepend(options.view.render().el);

        if (_.has(options, 'className') && !_.isEmpty(options.className)) {
          $('#quickviewContainer').addClass(options.className);
        }
        $('body').prepend('<div id="quickviewBackground"></div>');

      } else {
        throw 'Unsupported quickview type';
      }
    };


    $(document).keyup(function(e) {
      if (e.keyCode == 27) {
        MyApp.vent.trigger('quickview:close');
      }
    });


    $.quickview = function(options) {
      options = options || {};
      createquickviewContainer(options);
      // trigger ibox close using vents

      // when the user clicks the background or the close button, trigger the marionette close view
      $(".btn-close, #quickviewBackground").on('click', function() {
        MyApp.vent.trigger('quickview:close');
      });

      // when someone triggers the quickview close
      MyApp.vent.on('quickview:close', function() {
        $("#quickview").remove();
        $('#quickviewBackground').remove();
      });
    };


  }
)
QUnit.config.autostart = false;

require.config({
  baseUrl: "/js/",
  paths: {
    backbone: "libs/backbone/backbone",
    marionette: "libs/backbone/marionette",
    modelBinder: "libs/backbone/modelBinder",
    queryParams: "libs/backbone/queryParams",
    underscore: "libs/underscore/underscore-min",
    jquery: "libs/jquery/jquery-1.9.0",
    jqueryUI: "libs/jquery/jquery-ui-1.10.3.custom",
    chosen: "libs/chosen/chosen.jquery.amd",
    bootstrap: "libs/bootstrap/bootstrap",
    tpl: "libs/require/tpl",
    text: "libs/require/text",

    json: 'libs/require/json',

    quickview: "libs/quickview/quickview",

    highcharts: "libs/highcharts/highcharts.min",
    monthpicker: "libs/monthpicker/jquery.ui.monthpicker",

    baseModel: "app/models/base",
    baseCollection: "app/collections/base",
    baseCollectionView: "app/views/collection"
  },
  shim: {
    jquery: {
      exports: "jQuery"
    },
    underscore: {
      exports: "_"
    },
    backbone: {
      deps: ["jquery", "underscore"],
      exports: "Backbone"
    },
    marionette: {
      deps: ["jquery", "underscore", "backbone"],
      exports: "Marionette"
    },
    bootstrap: ["jquery"]
  }
})


require([
  "/js/app/helper/underscore.js",
  "/js/app/helper/url.js",
  "/js/app/helper/user.js",
  "/js/test/tests/login.js",
  "/js/test/tests/profiles.js",
  "/js/test/tests/users.js",
],
  function(){
//    localStorage.clear();
    $.ajaxPrefilter(function(options, originalOptions, jqXHR) {
      options.url = "/proxy.php/" + options.url;
      return;
    });
    Backbone.emulateJSON = true;
    QUnit.start();
  });

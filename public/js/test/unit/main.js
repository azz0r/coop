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
//  "underscore",
//  "backbone",
//  "marionette",
//  "baseModel",
//  "baseCollection",
//  "baseCollectionView",
  "/js/test/unit/profile.js",
//  "/js/test/unit/localstorage.js",
//  "/js/test/unit/selection.js",
//  "/js/test/unit/client.js",
//  "/js/test/unit/asset.js",
//  "/js/test/unit/post-create.js",
//  "/js/test/unit/post.js",
//  "/js/test/unit/analytics-overview.js"
], function(){
  $.ajaxPrefilter(function(options, originalOptions, jqXHR) {
    options.url = "/proxy.php/" + options.url;
    return;
  });
  Backbone.emulateJSON = true;
  QUnit.start();
});

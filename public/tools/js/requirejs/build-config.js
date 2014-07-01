({
  appDir: "../../../js/",
  baseUrl: ".",
  dir: "../../../js/build",
  inlineText: true,
//  optimize: "none",
  paths: {
    backbone: "libs/backbone/backbone",
    marionette: "libs/backbone/marionette",
    "backbone.babysitter": "libs/backbone/babysitter/backbone.babysitter.min",
    "backbone.wreqr": "libs/backbone/wreqr/backbone.wreqr.min",
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
    baseModel: "app/models/base",
    baseCollection: "app/collections/base",
    baseCollectionView: "app/views/collection",

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
  },
  modules: [
    {
      name: "main",
      include: [
        "app/views/messages/index",
        "app/views/images/index",
        "app/views/profiles/index"
      ]
    }
  ]
})

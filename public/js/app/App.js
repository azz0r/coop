define(["marionette", "app/views/layout/sidebar", "app/views/layout/navigation", "jquery", "app/helper/user"],
  function(marionette, SidebarView, NavigationView, $, userCheck) {
    "use strict"
    var app;
    app = new marionette.Application()
    app.addRegions({
      sidebar: "#sidebarInner",
      navigation: '#navigation',
      content: "#contentInner"
    });
    app.addInitializer(function() {
      app.navigation.show(new NavigationView ())
      app.sidebar.show(new SidebarView())
    })
    /* if we catch a user viewing a page they shouldnt */
    app.vent.on('access:Alert', function(){
      userCheck.authenticate("app/views/landing");
    })
    return app;
  })
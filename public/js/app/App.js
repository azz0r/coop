define(["marionette", "app/views/layout/sidebar", "app/views/layout/user", "jquery", "app/helper/user"],
  function(marionette, SidebarView, UsersActionsView, $, userCheck) {
    "use strict"
    var app;
    app = new marionette.Application()
    app.addRegions({
      sidebar: "#sidebarInner",
      userActions: '#userActions',
      content: "#contentInner"
    });
    app.addInitializer(function() {
      app.userActions.show(new UsersActionsView ())
      app.sidebar.show(new SidebarView())
    })
    /* if we catch a user viewing a page they shouldnt */
    app.vent.on('access:Alert', function(){
      userCheck.authenticate("app/views/landing");
    })
    return app;
  })
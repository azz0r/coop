define([
  'app/views/hive/signup',
  'app/views/hive/signin',
  'app/views/hive/signup-success',
  'app/views/hive/information',
  "tpl!app/templates/hive/landing.html"
],
  function (SignupView,
            SigninView,
            SignupSuccessfulView,
            InformationView,
            template) {
    "use strict"
    var AppLayout
    AppLayout = Backbone.Marionette.Layout.extend({
      template: template(),
      regions: {
        topColumn: '#top',
        leftColumn: '#signUpView',
        rightColumn: '#signInView',
        bottomColumn: '#bottom'
      },
      initialize: function(options) {
        if (_.isSignedIn()) {
          window.location.hash = "calendar"
        }
        var that = this
        MyApp.vent.on('signUp:successful', function(options){
          that.renderSignupSuccessful(options)
        })
      },
      renderSignin: function(options) {
        this.leftColumn.show(new SignupView(options));
      },
      renderSignup: function(options) {
        this.rightColumn.show(new SigninView(options));
      },
      renderSignupSuccessful: function(options) {
        this.leftColumn.show(new SignupSuccessfulView(options));
      },
      renderInformation: function() {
        this.topColumn.show(new InformationView());
      },
      onRender: function () {
        if (!_.isSignedIn()) {
          this.renderSignin();
          this.renderSignup();
        }
        this.renderInformation();
      }
    })
    return AppLayout
  })
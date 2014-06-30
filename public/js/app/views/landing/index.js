define([
  'app/views/landing/signup',
  'app/views/landing/signin',
  'app/views/landing/signup-success',
  "tpl!app/templates/landing/index.html"
],
  function (SignupView,
            SigninView,
            SignupSuccessfulView,
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
          window.location.hash = ""
        }
        var that = this
        MyApp.vent.on('signUp:successful', function(options){
          that.renderSignupSuccessful(options)
        })
        MyApp.vent.on('signIn:successful', function(options){
          that.render();
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
      onRender: function () {
        if (!_.isSignedIn()) {
          this.renderSignin();
          this.renderSignup();
        }
      }
    })
    return AppLayout
  })
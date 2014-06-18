define(['marionette', 'app/Controller'], function(marionette, Controller) {
  'use strict'
  return marionette.AppRouter.extend({
    appRoutes: {
      '': 'landing',
      landing: 'landing',
      debug: 'debug',

      support: 'support',
      FAQ: 'FAQ',
      aboutUs: 'aboutUs',

      signIn: 'signIn',
      updateProfile: 'updatePassword',
      updatePassword: 'updatePassword',
      signOut: 'signOut',

      messages: 'messages',

      /* images */
      images: 'images',
      uploadImage: 'uploadImage'
    },
    controller: Controller
  })
})

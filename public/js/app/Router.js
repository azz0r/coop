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
      updatePassword: 'updatePassword',
      signOut: 'signOut',

      /* images */
      images: 'images',
      uploadImage: 'uploadImage'
    },
    controller: Controller
  })
})

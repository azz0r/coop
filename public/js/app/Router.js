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

            messages: 'messages',

            articles: 'articles',

            "article/:slug": 'article',

            profiles: 'profiles',

            'profile/:id': 'profile',

            updateProfile: 'updateProfile',

            images: 'images',

            uploadImage: 'uploadImage'
        },
        controller: Controller
    })
})

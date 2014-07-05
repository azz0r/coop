define(["jquery","app/helper/user", "app/helper/underscore"],
    function($, userCheck, templateHelper) {
        "use strict"
        return {

            landing: function() {
                return require(["app/views/landing/index"], function(View) {
                    return MyApp.content.show(new View())
                })
            },

            debug: function() {
                userCheck.authenticate("app/views/debug");
            },

            // support
            support: function() {
                return require(["app/views/general/support"], function(View) {
                    return MyApp.content.show(new View())
                })
            },

            aboutUs: function() {
                return require(["app/views/general/aboutUs"], function(View) {
                    return MyApp.content.show(new View())
                })
            },

            FAQ: function() {
                return require(["app/views/general/FAQ"], function(View) {
                    return MyApp.content.show(new View())
                })
            },

            messages: function() {
                userCheck.authenticate("app/views/messages/index");
            },

            profiles: function() {
                return require(["app/views/profiles/index"], function(View) {
                    return MyApp.content.show(new View())
                })
            },

            articles: function(id) {
                return require(["app/views/articles/collection"], function(View) {
                    return MyApp.content.show(new View())
                })
            },

            article: function(slug) {
                return require(["app/views/articles/item"], function(View) {
                    return MyApp.content.show(new View(slug))
                })
            },

            profile: function(id) {
                userCheck.authenticate("app/views/profiles/view", {
                    id: id
                });
            },


            updateProfile: function() {
                userCheck.authenticate("app/views/profiles/form");
            },

            images: function() {
                userCheck.authenticate("app/views/images/index");
            },

            uploadImage: function() {
                userCheck.authenticate("app/views/images/upload");
            },

            signIn: function() {
                var user = localStorage.getObject('user');
                if (user !=undefined && user != null) {
                    userCheck.authenticate("app/views/hive/landing");
                } else {
                    return require(["app/views/users/signin"], function(View) {
                        return MyApp.content.show(new View())
                    })
                }
            },

            signOut: function() {
                localStorage.clear();

                $.ajax({
                    type: "DELETE",
                    url: "signout",
                    data: {}
                }).complete(function(data) {
                    window.location.hash = '';
                    return location.reload(true);
                })
            },

            updatePassword: function() {
                userCheck.authenticate("app/views/users/password");
            }

        }
    })

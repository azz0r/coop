define(["app/collections/images"],function(e){module("Collection"),asyncTest("fetch images",2,function(){var t=new e,n={error:function(){ok(!1),start()},success:function(e){e.models[0].attributes._id.$id&&localStorage.setItem("test.image.id",e.models[0].attributes._id.$id),ok(typeof e=="object","json response is an object"),ok(e.length>0,"images is not empty"),start()}};t.fetch(n)})});
define(["app/collections/messages/conversations"],function(e){module("Collection"),asyncTest("fetch messages",2,function(){var t=new e,n={error:function(){ok(!1),start()},success:function(e){ok(typeof e=="object","json response is an object"),ok(e.length>0,"messages is not empty"),start()}};t.fetch(n)})});
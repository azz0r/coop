define(["text!app/templates/images/index.html","app/views/images/collection","app/views/images/upload"],function(e,t,n){"use strict";return Backbone.Marionette.LayoutView.extend({template:e,regions:{collectionLatch:"#collectionLatch"},events:{"click #create":"onClickCreate"},initialize:function(){var e=this;this.listenTo(MyApp.vent,"filter:change",function(){e.renderCollection(e.getFilter())}),this.listenTo(MyApp.vent,"filter:clear",function(){e.render()})},onClickCreate:function(e){e.preventDefault(),$.quickview({className:"createImages",view:new n({quickview:!0})})},getFilter:function(){var e={from:"0",to:100,user:_.getUser()._id.$id};return console.log(e),_.cleanNullFieldsFromObject(e)},renderCollection:function(e){this.collectionLatch.show(new t(e))},onRender:function(){this.filter=this.getFilter(),this.renderCollection(this.filter)}})});
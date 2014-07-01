define(["text!app/templates/profiles/index.html","app/views/profiles/collection"],function(e,t){"use strict";return Backbone.Marionette.LayoutView.extend({template:e,regions:{clearFilter:"#clearFilter",orderBy:"#orderByContainer",collectionLatch:"#collectionLatch"},initialize:function(){var e=this;this.listenTo(MyApp.vent,"filter:change",function(){e.renderCollection(e.getFilter())}),this.listenTo(MyApp.vent,"filter:clear",function(){e.render()})},getFilter:function(){var e={from:"0",to:parseInt(100),order_by:$("#orderBy").val(),order_direction:$("#orderBy option:selected").data("direction")};return e=_.cleanNullFieldsFromObject(e),localStorage.setObject("profileFilter",e),e},renderCollection:function(e){this.collectionLatch.show(new t(e))},onRender:function(){var e=localStorage.getObject("profileFilter");_.isEmpty(e)?this.filter=this.getFilter():this.filter=e,this.renderCollection(this.filter)}})});
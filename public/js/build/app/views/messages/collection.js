define(["text!app/templates/messages/collection.html","app/collections/messages/conversations","app/views/messages/item","baseCollectionView"],function(e,t,n,r){"use strict";return r.extend({template:e,childView:n,childViewContainer:"#collectionBody",collection:new t,pageCollection:new t})});
(function(e,t){typeof exports=="object"&&e.require?module.exports=t(require("underscore"),require("backbone")):typeof define=="function"&&define.amd?define(["underscore","backbone"],function(n,r){return t(n||e._,r||e.Backbone)}):t(_,Backbone)})(this,function(e,t){function p(e,t){if(e==null)if(this._hasPushState||!this._wantsHashChange||t){e=this.location.pathname;var n=this.root.replace(h,""),r=this.location.search;e.indexOf(n)||(e=e.substr(n.length)),r&&(e+=r)}else e=this.getHash();return e.replace(c,"")}function d(e){return decodeURIComponent(e.replace(/\+/g," "))}function v(t,n){var r=t.split("&");e.each(r,function(e){var t=e.split("=");n(t.shift(),t.join("="))})}var n=/^\?(.*)/,r=/\((.*?)\)/g,i=/(\(\?)?:\w+/g,s=/\*\w+/g,o=/[\-{}\[\]+?.,\\\^$|#\s]/g,u=/(\?.*)$/,a=/^([^\?]*)/,f=/(\?)[\w-]+/i,l=/[\:\*]([^\:\?\/]+)/g,c=/^[#\/]|\s+$/g,h=/\/$/;t.Router.arrayValueSplit="|",e.extend(t.History.prototype,{getFragment:function(e,t){var n=this._wantsHashChange&&this._wantsPushState&&!this._hasPushState,r=p.apply(this,arguments);return e==null&&r==null&&!f.test(r)?r+=this.location.search:n&&(r=r.replace(u,"")),r},getQueryParameters:function(t,r){t=p.apply(this,arguments);var i=t.replace(a,""),s=i.match(n);if(s){i=s[1];var o={};return v(i,function(t,n){n=d(n),o[t]?e.isString(o[t])?o[t]=[o[t],n]:o[t].push(n):o[t]=n}),o}return{}}}),e.extend(t.Router.prototype,{initialize:function(e){this.encodedSplatParts=e&&e.encodedSplatParts},getFragment:function(e,t,n){return e=p.apply(this,arguments),n&&(e=e.replace(u,"")),e},_routeToRegExp:function(t){var n=s.exec(t)||{index:-1},u=i.exec(t)||{index:-1},a=t.match(l)||[];t=t.replace(o,"\\$&").replace(r,"(?:$1)?").replace(i,function(e,t){return t?e:"([^\\/\\?]+)"}).replace(s,"([^??]*?)"),t+="(\\?.*)?";var f=new RegExp("^"+t+"$");return n.index>=0&&(u>=0?f.splatMatch=n.index-u.index:f.splatMatch=-1),f.paramNames=e.map(a,function(e){return e.substring(1)}),f.namedParameters=this.namedParameters,f},_extractParameters:function(r,i){var s=r.exec(i).slice(1),o={};s.length>0&&e.isUndefined(s[s.length-1])&&s.splice(s.length-1,1);var u=s.length&&s[s.length-1]&&s[s.length-1].match(n);if(u){var a=u[1],f={};if(a){var l=this;v(a,function(e,t){l._setParamValue(e,t,f)})}s[s.length-1]=f,e.extend(o,f)}var c=s.length;if(r.splatMatch&&this.encodedSplatParts){if(r.splatMatch<0)return s;c-=1}for(var h=0;h<c;h++)e.isString(s[h])&&(s[h]=d(s[h]),r.paramNames&&r.paramNames.length>=h-1&&(o[r.paramNames[h]]=s[h]));return t.Router.namedParameters||r.namedParameters?[o]:s},_setParamValue:function(e,t,n){e=e.replace("[]",""),e=e.replace("%5B%5D","");var r=e.split("."),i=n;for(var s=0;s<r.length;s++){var o=r[s];s===r.length-1?i[o]=this._decodeParamValue(t,i[o]):i=i[o]=i[o]||{}}},_decodeParamValue:function(n,r){var i=t.Router.arrayValueSplit;if(i&&n.indexOf(i)>=0){var s=n.split(i);for(var o=s.length-1;o>=0;o--)s[o]?s[o]=d(s[o]):s.splice(o,1);return s}return n=d(n),r?e.isArray(r)?(r.push(n),r):[r,n]:n},toFragment:function(t,n){return n&&(e.isString(n)||(n=this._toQueryString(n)),n&&(t+="?"+n)),t},_toQueryString:function(n,r){function s(e){return String(e).replace(i,encodeURIComponent(i))}var i=t.Router.arrayValueSplit;if(!n)return"";r=r||"";var o="";for(var u in n){var a=n[u];if(e.isString(a)||e.isNumber(a)||e.isBoolean(a)||e.isDate(a)){a=this._toQueryParam(a);if(e.isBoolean(a)||e.isNumber(a)||e.isString(a)||a)o+=(o?"&":"")+this._toQueryParamName(u,r)+"="+s(encodeURIComponent(a))}else if(e.isArray(a)){var f="";for(var l=0;l<a.length;l++){var c=this._toQueryParam(a[l]);if(e.isBoolean(c)||c!==null)f+=i+s(c)}f&&(o+=(o?"&":"")+this._toQueryParamName(u,r)+"="+f)}else{var h=this._toQueryString(a,this._toQueryParamName(u,r,!0));h&&(o+=(o?"&":"")+h)}}return o},_toQueryParamName:function(e,t,n){return t+e+(n?".":"")},_toQueryParam:function(t){return e.isNull(t)||e.isUndefined(t)?null:t}})});
/* ========================================================================
 * Bootstrap: alert.js v3.1.1
 * http://getbootstrap.com/javascript/#alerts
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

/* ========================================================================
 * Bootstrap: button.js v3.1.1
 * http://getbootstrap.com/javascript/#buttons
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

/* ========================================================================
 * Bootstrap: carousel.js v3.1.1
 * http://getbootstrap.com/javascript/#carousel
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

/* ========================================================================
 * Bootstrap: dropdown.js v3.1.1
 * http://getbootstrap.com/javascript/#dropdowns
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

/* ========================================================================
 * Bootstrap: modal.js v3.1.1
 * http://getbootstrap.com/javascript/#modals
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

/* ========================================================================
 * Bootstrap: tooltip.js v3.1.1
 * http://getbootstrap.com/javascript/#tooltip
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

/* ========================================================================
 * Bootstrap: popover.js v3.1.1
 * http://getbootstrap.com/javascript/#popovers
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

/* ========================================================================
 * Bootstrap: tab.js v3.1.1
 * http://getbootstrap.com/javascript/#tabs
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

/* ========================================================================
 * Bootstrap: affix.js v3.1.1
 * http://getbootstrap.com/javascript/#affix
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

/* ========================================================================
 * Bootstrap: collapse.js v3.1.1
 * http://getbootstrap.com/javascript/#collapse
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

/* ========================================================================
 * Bootstrap: scrollspy.js v3.1.1
 * http://getbootstrap.com/javascript/#scrollspy
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

/* ========================================================================
 * Bootstrap: transition.js v3.1.1
 * http://getbootstrap.com/javascript/#transitions
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

+function(e){var t='[data-dismiss="alert"]',n=function(n){e(n).on("click",t,this.close)};n.prototype.close=function(t){function s(){i.trigger("closed.bs.alert").remove()}var n=e(this),r=n.attr("data-target");r||(r=n.attr("href"),r=r&&r.replace(/.*(?=#[^\s]*$)/,""));var i=e(r);t&&t.preventDefault(),i.length||(i=n.hasClass("alert")?n:n.parent()),i.trigger(t=e.Event("close.bs.alert"));if(t.isDefaultPrevented())return;i.removeClass("in"),e.support.transition&&i.hasClass("fade")?i.one(e.support.transition.end,s).emulateTransitionEnd(150):s()};var r=e.fn.alert;e.fn.alert=function(t){return this.each(function(){var r=e(this),i=r.data("bs.alert");i||r.data("bs.alert",i=new n(this)),typeof t=="string"&&i[t].call(r)})},e.fn.alert.Constructor=n,e.fn.alert.noConflict=function(){return e.fn.alert=r,this},e(document).on("click.bs.alert.data-api",t,n.prototype.close)}(jQuery),+function(e){var t=function(n,r){this.$element=e(n),this.options=e.extend({},t.DEFAULTS,r),this.isLoading=!1};t.DEFAULTS={loadingText:"loading..."},t.prototype.setState=function(t){var n="disabled",r=this.$element,i=r.is("input")?"val":"html",s=r.data();t+="Text",s.resetText||r.data("resetText",r[i]()),r[i](s[t]||this.options[t]),setTimeout(e.proxy(function(){t=="loadingText"?(this.isLoading=!0,r.addClass(n).attr(n,n)):this.isLoading&&(this.isLoading=!1,r.removeClass(n).removeAttr(n))},this),0)},t.prototype.toggle=function(){var e=!0,t=this.$element.closest('[data-toggle="buttons"]');if(t.length){var n=this.$element.find("input");n.prop("type")=="radio"&&(n.prop("checked")&&this.$element.hasClass("active")?e=!1:t.find(".active").removeClass("active")),e&&n.prop("checked",!this.$element.hasClass("active")).trigger("change")}e&&this.$element.toggleClass("active")};var n=e.fn.button;e.fn.button=function(n){return this.each(function(){var r=e(this),i=r.data("bs.button"),s=typeof n=="object"&&n;i||r.data("bs.button",i=new t(this,s)),n=="toggle"?i.toggle():n&&i.setState(n)})},e.fn.button.Constructor=t,e.fn.button.noConflict=function(){return e.fn.button=n,this},e(document).on("click.bs.button.data-api","[data-toggle^=button]",function(t){var n=e(t.target);n.hasClass("btn")||(n=n.closest(".btn")),n.button("toggle"),t.preventDefault()})}(jQuery),+function(e){var t=function(t,n){this.$element=e(t),this.$indicators=this.$element.find(".carousel-indicators"),this.options=n,this.paused=this.sliding=this.interval=this.$active=this.$items=null,this.options.pause=="hover"&&this.$element.on("mouseenter",e.proxy(this.pause,this)).on("mouseleave",e.proxy(this.cycle,this))};t.DEFAULTS={interval:5e3,pause:"hover",wrap:!0},t.prototype.cycle=function(t){return t||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(e.proxy(this.next,this),this.options.interval)),this},t.prototype.getActiveIndex=function(){return this.$active=this.$element.find(".item.active"),this.$items=this.$active.parent().children(),this.$items.index(this.$active)},t.prototype.to=function(t){var n=this,r=this.getActiveIndex();if(t>this.$items.length-1||t<0)return;return this.sliding?this.$element.one("slid.bs.carousel",function(){n.to(t)}):r==t?this.pause().cycle():this.slide(t>r?"next":"prev",e(this.$items[t]))},t.prototype.pause=function(t){return t||(this.paused=!0),this.$element.find(".next, .prev").length&&e.support.transition&&(this.$element.trigger(e.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},t.prototype.next=function(){if(this.sliding)return;return this.slide("next")},t.prototype.prev=function(){if(this.sliding)return;return this.slide("prev")},t.prototype.slide=function(t,n){var r=this.$element.find(".item.active"),i=n||r[t](),s=this.interval,o=t=="next"?"left":"right",u=t=="next"?"first":"last",a=this;if(!i.length){if(!this.options.wrap)return;i=this.$element.find(".item")[u]()}if(i.hasClass("active"))return this.sliding=!1;var f=e.Event("slide.bs.carousel",{relatedTarget:i[0],direction:o});this.$element.trigger(f);if(f.isDefaultPrevented())return;return this.sliding=!0,s&&this.pause(),this.$indicators.length&&(this.$indicators.find(".active").removeClass("active"),this.$element.one("slid.bs.carousel",function(){var t=e(a.$indicators.children()[a.getActiveIndex()]);t&&t.addClass("active")})),e.support.transition&&this.$element.hasClass("slide")?(i.addClass(t),i[0].offsetWidth,r.addClass(o),i.addClass(o),r.one(e.support.transition.end,function(){i.removeClass([t,o].join(" ")).addClass("active"),r.removeClass(["active",o].join(" ")),a.sliding=!1,setTimeout(function(){a.$element.trigger("slid.bs.carousel")},0)}).emulateTransitionEnd(r.css("transition-duration").slice(0,-1)*1e3)):(r.removeClass("active"),i.addClass("active"),this.sliding=!1,this.$element.trigger("slid.bs.carousel")),s&&this.cycle(),this};var n=e.fn.carousel;e.fn.carousel=function(n){return this.each(function(){var r=e(this),i=r.data("bs.carousel"),s=e.extend({},t.DEFAULTS,r.data(),typeof n=="object"&&n),o=typeof n=="string"?n:s.slide;i||r.data("bs.carousel",i=new t(this,s)),typeof n=="number"?i.to(n):o?i[o]():s.interval&&i.pause().cycle()})},e.fn.carousel.Constructor=t,e.fn.carousel.noConflict=function(){return e.fn.carousel=n,this},e(document).on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",function(t){var n=e(this),r,i=e(n.attr("data-target")||(r=n.attr("href"))&&r.replace(/.*(?=#[^\s]+$)/,"")),s=e.extend({},i.data(),n.data()),o=n.attr("data-slide-to");o&&(s.interval=!1),i.carousel(s),(o=n.attr("data-slide-to"))&&i.data("bs.carousel").to(o),t.preventDefault()}),e(window).on("load",function(){e('[data-ride="carousel"]').each(function(){var t=e(this);t.carousel(t.data())})})}(jQuery),+function(e){function i(r){e(t).remove(),e(n).each(function(){var t=s(e(this)),n={relatedTarget:this};if(!t.hasClass("open"))return;t.trigger(r=e.Event("hide.bs.dropdown",n));if(r.isDefaultPrevented())return;t.removeClass("open").trigger("hidden.bs.dropdown",n)})}function s(t){var n=t.attr("data-target");n||(n=t.attr("href"),n=n&&/#[A-Za-z]/.test(n)&&n.replace(/.*(?=#[^\s]*$)/,""));var r=n&&e(n);return r&&r.length?r:t.parent()}var t=".dropdown-backdrop",n="[data-toggle=dropdown]",r=function(t){e(t).on("click.bs.dropdown",this.toggle)};r.prototype.toggle=function(t){var n=e(this);if(n.is(".disabled, :disabled"))return;var r=s(n),o=r.hasClass("open");i();if(!o){"ontouchstart"in document.documentElement&&!r.closest(".navbar-nav").length&&e('<div class="dropdown-backdrop"/>').insertAfter(e(this)).on("click",i);var u={relatedTarget:this};r.trigger(t=e.Event("show.bs.dropdown",u));if(t.isDefaultPrevented())return;r.toggleClass("open").trigger("shown.bs.dropdown",u),n.focus()}return!1},r.prototype.keydown=function(t){if(!/(38|40|27)/.test(t.keyCode))return;var r=e(this);t.preventDefault(),t.stopPropagation();if(r.is(".disabled, :disabled"))return;var i=s(r),o=i.hasClass("open");if(!o||o&&t.keyCode==27)return t.which==27&&i.find(n).focus(),r.click();var u=" li:not(.divider):visible a",a=i.find("[role=menu]"+u+", [role=listbox]"+u);if(!a.length)return;var f=a.index(a.filter(":focus"));t.keyCode==38&&f>0&&f--,t.keyCode==40&&f<a.length-1&&f++,~f||(f=0),a.eq(f).focus()};var o=e.fn.dropdown;e.fn.dropdown=function(t){return this.each(function(){var n=e(this),i=n.data("bs.dropdown");i||n.data("bs.dropdown",i=new r(this)),typeof t=="string"&&i[t].call(n)})},e.fn.dropdown.Constructor=r,e.fn.dropdown.noConflict=function(){return e.fn.dropdown=o,this},e(document).on("click.bs.dropdown.data-api",i).on("click.bs.dropdown.data-api",".dropdown form",function(e){e.stopPropagation()}).on("click.bs.dropdown.data-api",n,r.prototype.toggle).on("keydown.bs.dropdown.data-api",n+", [role=menu], [role=listbox]",r.prototype.keydown)}(jQuery),+function(e){var t=function(t,n){this.options=n,this.$element=e(t),this.$backdrop=this.isShown=null,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,e.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};t.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},t.prototype.toggle=function(e){return this[this.isShown?"hide":"show"](e)},t.prototype.show=function(t){var n=this,r=e.Event("show.bs.modal",{relatedTarget:t});this.$element.trigger(r);if(this.isShown||r.isDefaultPrevented())return;this.isShown=!0,this.escape(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',e.proxy(this.hide,this)),this.backdrop(function(){var r=e.support.transition&&n.$element.hasClass("fade");n.$element.parent().length||n.$element.appendTo(document.body),n.$element.show().scrollTop(0),r&&n.$element[0].offsetWidth,n.$element.addClass("in").attr("aria-hidden",!1),n.enforceFocus();var i=e.Event("shown.bs.modal",{relatedTarget:t});r?n.$element.find(".modal-dialog").one(e.support.transition.end,function(){n.$element.focus().trigger(i)}).emulateTransitionEnd(300):n.$element.focus().trigger(i)})},t.prototype.hide=function(t){t&&t.preventDefault(),t=e.Event("hide.bs.modal"),this.$element.trigger(t);if(!this.isShown||t.isDefaultPrevented())return;this.isShown=!1,this.escape(),e(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.bs.modal"),e.support.transition&&this.$element.hasClass("fade")?this.$element.one(e.support.transition.end,e.proxy(this.hideModal,this)).emulateTransitionEnd(300):this.hideModal()},t.prototype.enforceFocus=function(){e(document).off("focusin.bs.modal").on("focusin.bs.modal",e.proxy(function(e){this.$element[0]!==e.target&&!this.$element.has(e.target).length&&this.$element.focus()},this))},t.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.bs.modal",e.proxy(function(e){e.which==27&&this.hide()},this)):this.isShown||this.$element.off("keyup.dismiss.bs.modal")},t.prototype.hideModal=function(){var e=this;this.$element.hide(),this.backdrop(function(){e.removeBackdrop(),e.$element.trigger("hidden.bs.modal")})},t.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},t.prototype.backdrop=function(t){var n=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var r=e.support.transition&&n;this.$backdrop=e('<div class="modal-backdrop '+n+'" />').appendTo(document.body),this.$element.on("click.dismiss.bs.modal",e.proxy(function(e){if(e.target!==e.currentTarget)return;this.options.backdrop=="static"?this.$element[0].focus.call(this.$element[0]):this.hide.call(this)},this)),r&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in");if(!t)return;r?this.$backdrop.one(e.support.transition.end,t).emulateTransitionEnd(150):t()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),e.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(e.support.transition.end,t).emulateTransitionEnd(150):t()):t&&t()};var n=e.fn.modal;e.fn.modal=function(n,r){return this.each(function(){var i=e(this),s=i.data("bs.modal"),o=e.extend({},t.DEFAULTS,i.data(),typeof n=="object"&&n);s||i.data("bs.modal",s=new t(this,o)),typeof n=="string"?s[n](r):o.show&&s.show(r)})},e.fn.modal.Constructor=t,e.fn.modal.noConflict=function(){return e.fn.modal=n,this},e(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(t){var n=e(this),r=n.attr("href"),i=e(n.attr("data-target")||r&&r.replace(/.*(?=#[^\s]+$)/,"")),s=i.data("bs.modal")?"toggle":e.extend({remote:!/#/.test(r)&&r},i.data(),n.data());n.is("a")&&t.preventDefault(),i.modal(s,this).one("hide",function(){n.is(":visible")&&n.focus()})}),e(document).on("show.bs.modal",".modal",function(){e(document.body).addClass("modal-open")}).on("hidden.bs.modal",".modal",function(){e(document.body).removeClass("modal-open")})}(jQuery),+function(e){var t=function(e,t){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",e,t)};t.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1},t.prototype.init=function(t,n,r){this.enabled=!0,this.type=t,this.$element=e(n),this.options=this.getOptions(r);var i=this.options.trigger.split(" ");for(var s=i.length;s--;){var o=i[s];if(o=="click")this.$element.on("click."+this.type,this.options.selector,e.proxy(this.toggle,this));else if(o!="manual"){var u=o=="hover"?"mouseenter":"focusin",a=o=="hover"?"mouseleave":"focusout";this.$element.on(u+"."+this.type,this.options.selector,e.proxy(this.enter,this)),this.$element.on(a+"."+this.type,this.options.selector,e.proxy(this.leave,this))}}this.options.selector?this._options=e.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},t.prototype.getDefaults=function(){return t.DEFAULTS},t.prototype.getOptions=function(t){return t=e.extend({},this.getDefaults(),this.$element.data(),t),t.delay&&typeof t.delay=="number"&&(t.delay={show:t.delay,hide:t.delay}),t},t.prototype.getDelegateOptions=function(){var t={},n=this.getDefaults();return this._options&&e.each(this._options,function(e,r){n[e]!=r&&(t[e]=r)}),t},t.prototype.enter=function(t){var n=t instanceof this.constructor?t:e(t.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);clearTimeout(n.timeout),n.hoverState="in";if(!n.options.delay||!n.options.delay.show)return n.show();n.timeout=setTimeout(function(){n.hoverState=="in"&&n.show()},n.options.delay.show)},t.prototype.leave=function(t){var n=t instanceof this.constructor?t:e(t.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);clearTimeout(n.timeout),n.hoverState="out";if(!n.options.delay||!n.options.delay.hide)return n.hide();n.timeout=setTimeout(function(){n.hoverState=="out"&&n.hide()},n.options.delay.hide)},t.prototype.show=function(){var t=e.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(t);if(t.isDefaultPrevented())return;var n=this,r=this.tip();this.setContent(),this.options.animation&&r.addClass("fade");var i=typeof this.options.placement=="function"?this.options.placement.call(this,r[0],this.$element[0]):this.options.placement,s=/\s?auto?\s?/i,o=s.test(i);o&&(i=i.replace(s,"")||"top"),r.detach().css({top:0,left:0,display:"block"}).addClass(i),this.options.container?r.appendTo(this.options.container):r.insertAfter(this.$element);var u=this.getPosition(),a=r[0].offsetWidth,f=r[0].offsetHeight;if(o){var l=this.$element.parent(),c=i,h=document.documentElement.scrollTop||document.body.scrollTop,p=this.options.container=="body"?window.innerWidth:l.outerWidth(),d=this.options.container=="body"?window.innerHeight:l.outerHeight(),v=this.options.container=="body"?0:l.offset().left;i=i=="bottom"&&u.top+u.height+f-h>d?"top":i=="top"&&u.top-h-f<0?"bottom":i=="right"&&u.right+a>p?"left":i=="left"&&u.left-a<v?"right":i,r.removeClass(c).addClass(i)}var m=this.getCalculatedOffset(i,u,a,f);this.applyPlacement(m,i),this.hoverState=null;var g=function(){n.$element.trigger("shown.bs."+n.type)};e.support.transition&&this.$tip.hasClass("fade")?r.one(e.support.transition.end,g).emulateTransitionEnd(150):g()}},t.prototype.applyPlacement=function(t,n){var r,i=this.tip(),s=i[0].offsetWidth,o=i[0].offsetHeight,u=parseInt(i.css("margin-top"),10),a=parseInt(i.css("margin-left"),10);isNaN(u)&&(u=0),isNaN(a)&&(a=0),t.top=t.top+u,t.left=t.left+a,e.offset.setOffset(i[0],e.extend({using:function(e){i.css({top:Math.round(e.top),left:Math.round(e.left)})}},t),0),i.addClass("in");var f=i[0].offsetWidth,l=i[0].offsetHeight;n=="top"&&l!=o&&(r=!0,t.top=t.top+o-l);if(/bottom|top/.test(n)){var c=0;t.left<0&&(c=t.left*-2,t.left=0,i.offset(t),f=i[0].offsetWidth,l=i[0].offsetHeight),this.replaceArrow(c-s+f,f,"left")}else this.replaceArrow(l-o,l,"top");r&&i.offset(t)},t.prototype.replaceArrow=function(e,t,n){this.arrow().css(n,e?50*(1-e/t)+"%":"")},t.prototype.setContent=function(){var e=this.tip(),t=this.getTitle();e.find(".tooltip-inner")[this.options.html?"html":"text"](t),e.removeClass("fade in top bottom left right")},t.prototype.hide=function(){function i(){t.hoverState!="in"&&n.detach(),t.$element.trigger("hidden.bs."+t.type)}var t=this,n=this.tip(),r=e.Event("hide.bs."+this.type);this.$element.trigger(r);if(r.isDefaultPrevented())return;return n.removeClass("in"),e.support.transition&&this.$tip.hasClass("fade")?n.one(e.support.transition.end,i).emulateTransitionEnd(150):i(),this.hoverState=null,this},t.prototype.fixTitle=function(){var e=this.$element;(e.attr("title")||typeof e.attr("data-original-title")!="string")&&e.attr("data-original-title",e.attr("title")||"").attr("title","")},t.prototype.hasContent=function(){return this.getTitle()},t.prototype.getPosition=function(){var t=this.$element[0];return e.extend({},typeof t.getBoundingClientRect=="function"?t.getBoundingClientRect():{width:t.offsetWidth,height:t.offsetHeight},this.$element.offset())},t.prototype.getCalculatedOffset=function(e,t,n,r){return e=="bottom"?{top:t.top+t.height,left:t.left+t.width/2-n/2}:e=="top"?{top:t.top-r,left:t.left+t.width/2-n/2}:e=="left"?{top:t.top+t.height/2-r/2,left:t.left-n}:{top:t.top+t.height/2-r/2,left:t.left+t.width}},t.prototype.getTitle=function(){var e,t=this.$element,n=this.options;return e=t.attr("data-original-title")||(typeof n.title=="function"?n.title.call(t[0]):n.title),e},t.prototype.tip=function(){return this.$tip=this.$tip||e(this.options.template)},t.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},t.prototype.validate=function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},t.prototype.enable=function(){this.enabled=!0},t.prototype.disable=function(){this.enabled=!1},t.prototype.toggleEnabled=function(){this.enabled=!this.enabled},t.prototype.toggle=function(t){var n=t?e(t.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type):this;n.tip().hasClass("in")?n.leave(n):n.enter(n)},t.prototype.destroy=function(){clearTimeout(this.timeout),this.hide().$element.off("."+this.type).removeData("bs."+this.type)};var n=e.fn.tooltip;e.fn.tooltip=function(n){return this.each(function(){var r=e(this),i=r.data("bs.tooltip"),s=typeof n=="object"&&n;if(!i&&n=="destroy")return;i||r.data("bs.tooltip",i=new t(this,s)),typeof n=="string"&&i[n]()})},e.fn.tooltip.Constructor=t,e.fn.tooltip.noConflict=function(){return e.fn.tooltip=n,this}}(jQuery),+function(e){var t=function(e,t){this.init("popover",e,t)};if(!e.fn.tooltip)throw new Error("Popover requires tooltip.js");t.DEFAULTS=e.extend({},e.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),t.prototype=e.extend({},e.fn.tooltip.Constructor.prototype),t.prototype.constructor=t,t.prototype.getDefaults=function(){return t.DEFAULTS},t.prototype.setContent=function(){var e=this.tip(),t=this.getTitle(),n=this.getContent();e.find(".popover-title")[this.options.html?"html":"text"](t),e.find(".popover-content")[this.options.html?typeof n=="string"?"html":"append":"text"](n),e.removeClass("fade top bottom left right in"),e.find(".popover-title").html()||e.find(".popover-title").hide()},t.prototype.hasContent=function(){return this.getTitle()||this.getContent()},t.prototype.getContent=function(){var e=this.$element,t=this.options;return e.attr("data-content")||(typeof t.content=="function"?t.content.call(e[0]):t.content)},t.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")},t.prototype.tip=function(){return this.$tip||(this.$tip=e(this.options.template)),this.$tip};var n=e.fn.popover;e.fn.popover=function(n){return this.each(function(){var r=e(this),i=r.data("bs.popover"),s=typeof n=="object"&&n;if(!i&&n=="destroy")return;i||r.data("bs.popover",i=new t(this,s)),typeof n=="string"&&i[n]()})},e.fn.popover.Constructor=t,e.fn.popover.noConflict=function(){return e.fn.popover=n,this}}(jQuery),+function(e){var t=function(t){this.element=e(t)};t.prototype.show=function(){var t=this.element,n=t.closest("ul:not(.dropdown-menu)"),r=t.data("target");r||(r=t.attr("href"),r=r&&r.replace(/.*(?=#[^\s]*$)/,""));if(t.parent("li").hasClass("active"))return;var i=n.find(".active:last a")[0],s=e.Event("show.bs.tab",{relatedTarget:i});t.trigger(s);if(s.isDefaultPrevented())return;var o=e(r);this.activate(t.parent("li"),n),this.activate(o,o.parent(),function(){t.trigger({type:"shown.bs.tab",relatedTarget:i})})},t.prototype.activate=function(t,n,r){function o(){i.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),t.addClass("active"),s?(t[0].offsetWidth,t.addClass("in")):t.removeClass("fade"),t.parent(".dropdown-menu")&&t.closest("li.dropdown").addClass("active"),r&&r()}var i=n.find("> .active"),s=r&&e.support.transition&&i.hasClass("fade");s?i.one(e.support.transition.end,o).emulateTransitionEnd(150):o(),i.removeClass("in")};var n=e.fn.tab;e.fn.tab=function(n){return this.each(function(){var r=e(this),i=r.data("bs.tab");i||r.data("bs.tab",i=new t(this)),typeof n=="string"&&i[n]()})},e.fn.tab.Constructor=t,e.fn.tab.noConflict=function(){return e.fn.tab=n,this},e(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(t){t.preventDefault(),e(this).tab("show")})}(jQuery),+function(e){var t=function(n,r){this.options=e.extend({},t.DEFAULTS,r),this.$window=e(window).on("scroll.bs.affix.data-api",e.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",e.proxy(this.checkPositionWithEventLoop,this)),this.$element=e(n),this.affixed=this.unpin=this.pinnedOffset=null,this.checkPosition()};t.RESET="affix affix-top affix-bottom",t.DEFAULTS={offset:0},t.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(t.RESET).addClass("affix");var e=this.$window.scrollTop(),n=this.$element.offset();return this.pinnedOffset=n.top-e},t.prototype.checkPositionWithEventLoop=function(){setTimeout(e.proxy(this.checkPosition,this),1)},t.prototype.checkPosition=function(){if(!this.$element.is(":visible"))return;var n=e(document).height(),r=this.$window.scrollTop(),i=this.$element.offset(),s=this.options.offset,o=s.top,u=s.bottom;this.affixed=="top"&&(i.top+=r),typeof s!="object"&&(u=o=s),typeof o=="function"&&(o=s.top(this.$element)),typeof u=="function"&&(u=s.bottom(this.$element));var a=this.unpin!=null&&r+this.unpin<=i.top?!1:u!=null&&i.top+this.$element.height()>=n-u?"bottom":o!=null&&r<=o?"top":!1;if(this.affixed===a)return;this.unpin&&this.$element.css("top","");var f="affix"+(a?"-"+a:""),l=e.Event(f+".bs.affix");this.$element.trigger(l);if(l.isDefaultPrevented())return;this.affixed=a,this.unpin=a=="bottom"?this.getPinnedOffset():null,this.$element.removeClass(t.RESET).addClass(f).trigger(e.Event(f.replace("affix","affixed"))),a=="bottom"&&this.$element.offset({top:n-u-this.$element.height()})};var n=e.fn.affix;e.fn.affix=function(n){return this.each(function(){var r=e(this),i=r.data("bs.affix"),s=typeof n=="object"&&n;i||r.data("bs.affix",i=new t(this,s)),typeof n=="string"&&i[n]()})},e.fn.affix.Constructor=t,e.fn.affix.noConflict=function(){return e.fn.affix=n,this},e(window).on("load",function(){e('[data-spy="affix"]').each(function(){var t=e(this),n=t.data();n.offset=n.offset||{},n.offsetBottom&&(n.offset.bottom=n.offsetBottom),n.offsetTop&&(n.offset.top=n.offsetTop),t.affix(n)})})}(jQuery),+function(e){var t=function(n,r){this.$element=e(n),this.options=e.extend({},t.DEFAULTS,r),this.transitioning=null,this.options.parent&&(this.$parent=e(this.options.parent)),this.options.toggle&&this.toggle()};t.DEFAULTS={toggle:!0},t.prototype.dimension=function(){var e=this.$element.hasClass("width");return e?"width":"height"},t.prototype.show=function(){if(this.transitioning||this.$element.hasClass("in"))return;var t=e.Event("show.bs.collapse");this.$element.trigger(t);if(t.isDefaultPrevented())return;var n=this.$parent&&this.$parent.find("> .panel > .in");if(n&&n.length){var r=n.data("bs.collapse");if(r&&r.transitioning)return;n.collapse("hide"),r||n.data("bs.collapse",null)}var i=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[i](0),this.transitioning=1;var s=function(){this.$element.removeClass("collapsing").addClass("collapse in")[i]("auto"),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!e.support.transition)return s.call(this);var o=e.camelCase(["scroll",i].join("-"));this.$element.one(e.support.transition.end,e.proxy(s,this)).emulateTransitionEnd(350)[i](this.$element[0][o])},t.prototype.hide=function(){if(this.transitioning||!this.$element.hasClass("in"))return;var t=e.Event("hide.bs.collapse");this.$element.trigger(t);if(t.isDefaultPrevented())return;var n=this.dimension();this.$element[n](this.$element[n]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"),this.transitioning=1;var r=function(){this.transitioning=0,this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")};if(!e.support.transition)return r.call(this);this.$element[n](0).one(e.support.transition.end,e.proxy(r,this)).emulateTransitionEnd(350)},t.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()};var n=e.fn.collapse;e.fn.collapse=function(n){return this.each(function(){var r=e(this),i=r.data("bs.collapse"),s=e.extend({},t.DEFAULTS,r.data(),typeof n=="object"&&n);!i&&s.toggle&&n=="show"&&(n=!n),i||r.data("bs.collapse",i=new t(this,s)),typeof n=="string"&&i[n]()})},e.fn.collapse.Constructor=t,e.fn.collapse.noConflict=function(){return e.fn.collapse=n,this},e(document).on("click.bs.collapse.data-api","[data-toggle=collapse]",function(t){var n=e(this),r,i=n.attr("data-target")||t.preventDefault()||(r=n.attr("href"))&&r.replace(/.*(?=#[^\s]+$)/,""),s=e(i),o=s.data("bs.collapse"),u=o?"toggle":n.data(),a=n.attr("data-parent"),f=a&&e(a);if(!o||!o.transitioning)f&&f.find('[data-toggle=collapse][data-parent="'+a+'"]').not(n).addClass("collapsed"),n[s.hasClass("in")?"addClass":"removeClass"]("collapsed");s.collapse(u)})}(jQuery),+function(e){function t(n,r){var i,s=e.proxy(this.process,this);this.$element=e(n).is("body")?e(window):e(n),this.$body=e("body"),this.$scrollElement=this.$element.on("scroll.bs.scroll-spy.data-api",s),this.options=e.extend({},t.DEFAULTS,r),this.selector=(this.options.target||(i=e(n).attr("href"))&&i.replace(/.*(?=#[^\s]+$)/,"")||"")+" .nav li > a",this.offsets=e([]),this.targets=e([]),this.activeTarget=null,this.refresh(),this.process()}t.DEFAULTS={offset:10},t.prototype.refresh=function(){var t=this.$element[0]==window?"offset":"position";this.offsets=e([]),this.targets=e([]);var n=this,r=this.$body.find(this.selector).map(function(){var r=e(this),i=r.data("target")||r.attr("href"),s=/^#./.test(i)&&e(i);return s&&s.length&&s.is(":visible")&&[[s[t]().top+(!e.isWindow(n.$scrollElement.get(0))&&n.$scrollElement.scrollTop()),i]]||null}).sort(function(e,t){return e[0]-t[0]}).each(function(){n.offsets.push(this[0]),n.targets.push(this[1])})},t.prototype.process=function(){var e=this.$scrollElement.scrollTop()+this.options.offset,t=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,n=t-this.$scrollElement.height(),r=this.offsets,i=this.targets,s=this.activeTarget,o;if(e>=n)return s!=(o=i.last()[0])&&this.activate(o);if(s&&e<=r[0])return s!=(o=i[0])&&this.activate(o);for(o=r.length;o--;)s!=i[o]&&e>=r[o]&&(!r[o+1]||e<=r[o+1])&&this.activate(i[o])},t.prototype.activate=function(t){this.activeTarget=t,e(this.selector).parentsUntil(this.options.target,".active").removeClass("active");var n=this.selector+'[data-target="'+t+'"],'+this.selector+'[href="'+t+'"]',r=e(n).parents("li").addClass("active");r.parent(".dropdown-menu").length&&(r=r.closest("li.dropdown").addClass("active")),r.trigger("activate.bs.scrollspy")};var n=e.fn.scrollspy;e.fn.scrollspy=function(n){return this.each(function(){var r=e(this),i=r.data("bs.scrollspy"),s=typeof n=="object"&&n;i||r.data("bs.scrollspy",i=new t(this,s)),typeof n=="string"&&i[n]()})},e.fn.scrollspy.Constructor=t,e.fn.scrollspy.noConflict=function(){return e.fn.scrollspy=n,this},e(window).on("load",function(){e('[data-spy="scroll"]').each(function(){var t=e(this);t.scrollspy(t.data())})})}(jQuery),+function(e){function t(){var e=document.createElement("bootstrap"),t={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var n in t)if(e.style[n]!==undefined)return{end:t[n]};return!1}e.fn.emulateTransitionEnd=function(t){var n=!1,r=this;e(this).one(e.support.transition.end,function(){n=!0});var i=function(){n||e(r).trigger(e.support.transition.end)};return setTimeout(i,t),this},e(function(){e.support.transition=t()})}(jQuery);
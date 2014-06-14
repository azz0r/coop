String.prototype.capitalize = function () {
  return this.replace(/^./, function (char) {
    return char.toUpperCase();
  });
};
Storage.prototype.setObject = function(key, value) {
  this.setItem(key, JSON.stringify(value));
}

Storage.prototype.getObject = function(key) {
  var value = this.getItem(key);
  return value && JSON.parse(value);
}


define(["underscore"], function(_) {


  return _.mixin({


    parseMinutes: function (x) {
      return Math.floor(x/60)+'h '+x% 60+'m';
    },


    parseHours: function (H,M){
      return M+H*60;
    },


    numberWithCommas: function(x) {
      x = x.toString();
      var pattern = /(-?\d+)(\d{3})/;
      while (pattern.test(x))
        x = x.replace(pattern, "$1,$2");
      return x;
    },

    print_r: function(o){
      return JSON.stringify(o,null,'\t').replace(/\n/g,'<br>').replace(/\t/g,'&nbsp;&nbsp;&nbsp;');
    },


    nl2br: function(str) {
      return (str + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + '<br />' + '$2');
    },


    isSet: function (stringName) {
      try {
        eval(stringName);
      } catch (error) {
        if (error instanceof ReferenceError)
          return false;
      }

      return true;
    },


    playSound: function () {
      this.audioElement = document.createElement('audio');
      this.audioElement.setAttribute('src', '/sounds/update.mp3');
      this.audioElement.load()
      this.audioElement.play();
    },


    numberWithCommas: function(x) {
      x = x.toString();
      var pattern = /(-?\d+)(\d{3})/;
      while (pattern.test(x))
        x = x.replace(pattern, "$1,$2");
      return x;
    },


    isSignedIn: function() {
      this.getUser();

      if (this.user) {
        $('body').removeClass('signedOut');
        return true;
      } else {
        $('body').addClass('signedOut');
        return false;
      }
    },


    getUser: function () {
      this.user = localStorage.getObject('user');
      return this.user;
    },


    inArray: function(item,arr) {
      if(!arr) {
        return false;
      } else {
        for (var p=0;p<arr.length;p++) {
          if (item == arr[p]) {
            return true;
          }
        }
        return false;
      }
    },


    // look over an object and ensure any nulls get removed
    cleanNullFieldsFromObject: function(object) {
      for(var f in object) {
        if(object[f] == null || object[f] == "") {
          delete object[f];
        }
      }
      return object;
    },


    // take a date object and turn it into yyyy-mm-dd
    dateToYMD: function (date) {
      var d = date.getDate();
      var m = date.getMonth() + 1;
      var y = date.getFullYear();
      return '' + y + '-' + (m<=9 ? '0' + m : m) + '-' + (d <= 9 ? '0' + d : d);
    },


    // take a date object and turn it into hh:mm
    dateToHM: function (date) {
      var h = date.getHours();
      var m = date.getMinutes()
      return (h<=9 ? '0' + h : h) + ':' + (m <= 9 ? '0' + m : m);
    },


    inArray: function(item,arr) {
      if(!arr) {
        return false;
      } else {
        for (var p=0;p<arr.length;p++) {
          if (item == arr[p]) {
            return true;
          }
        }
        return false;
      }
    },


    merge: function(target, source) {

      /* Merges two (or more) objects,
       giving the last one precedence */

      if ( typeof target !== 'object' ) {
        target = {};
      }

      for (var property in source) {

        if ( source.hasOwnProperty(property) ) {

          var sourceProperty = source[ property ];

          if ( typeof sourceProperty === 'object' ) {
            target[ property ] = util.merge( target[ property ], sourceProperty );
            continue;
          }

          target[ property ] = sourceProperty;

        }

      }

      for (var a = 2, l = arguments.length; a < l; a++) {
        merge(target, arguments[a]);
      }

      return target;
    },


    appendZero: function (number) {
      return number < 10 && number[0] != "0" ? "0"+number : number;
    },


    formatTwitterLinks: function(text) {
      var tweet = text.replace(/\s#([\w]+)/gi,' <a href="http://twitter.com/#!/search?q=%23$1" target="_blank" class="pp-tw-hashtag"><span class="pp-tw-hashtag-hash">#</span><span class="pp-tw-hashtag-link">$1</span></a>')
        .replace(/\s@([\w]+)/gi,' <a href="http://www.twitter.com/$1" target="_blank" class="pp-tw-mention"><span class="pp-tw-mention-at">@</span><span class="pp-tw-mention-link">$1</span></a>');
      return _.nl2br(tweet);
    },


    formatDateTime: function(datetime) {
      return new Date(datetime).toLocaleString();
    }


  })
})



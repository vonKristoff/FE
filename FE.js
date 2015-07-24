/**
 * Frontend library for inclusion of many day to day helpers
 * @type {object}
 */
var FE = {

  toggle: function (target) {
    return !target
  },
  toggleTruth: function (scope, target) {
    scope[target] = true;
    for (var el in scope) {      
      // if scope is set to true && not equal to who
      if(scope[el] && el != target){
        // reverse bool on the rest
        scope[el] = !scope[el];
      }
    }
  },
  getURLParams: function (name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
      results = regex.exec(location.search);
    return results == null ? false : decodeURIComponent(results[1].replace(/\+/g, " "));
  },
  type: function (ofThis, expecting) {
    var type = (typeof ofThis).toLowerCase();
    return expecting ? type === expecting : type;
  },
  urlify: function (text) {
    var urlRegex = /(https?:\/\/[^\s]+)/g;
    return text.replace(urlRegex, '<a href="$1">$1</a>')
  }
}

////////////////////
// String Methods //
////////////////////

String.prototype.contains = function(test) {
    return this.indexOf(test) == -1 ? false : true;
};
String.prototype.countWords = function(){
  return this.split(/\s+\b/).length;
}

///////////////////
// Array methods //
///////////////////

Array.prototype.order = function (from, to) {
  this.splice(to, 0, this.splice(from, 1)[0]);
};

Array.prototype.shuffle = function () {
  for (var i = this.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var tmp = this[i];
    this[i] = this[j];
    this[j] = tmp;
  }
  return this;
}
Array.prototype.clone = function() {
  return this.slice(0);
};
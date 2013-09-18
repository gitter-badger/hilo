(function (A, M, D) {

  // Asynchronous Module Definition, if available

  /*globals YUI: false, module: false, define: false*/

  if (typeof module !== "undefined" && module.exports) {
    module.exports = D;
  } else if (typeof define === "function" && define.amd) {
    define(D);
  } else if (typeof YUI === "function") {
    YUI.add(A, D);
  } else {
    M[A] = D();
  }
}("Helio", this, function () {

  var Helio = {};
  
  var each = function each (o, fn) {
    var _i = 0
      , _l = o.length;

    for (; _i < _l; _i += 1) {
      fn(o[_i]);
    }
  };

  var own = function (o, p) {
    if (o.hasOwnProperty(p)) {
      return true;
    }

    return false;
  };

  var extend = function extend (o, ao) {
    var _i;

    for (_i in ao) {
      if (own(ao, _i)) {
        o[_i] = ao[_i];
      }
    }

    return o;
  };

  extend(Helio, {
    each: each,
    forEach: each,
    own: own,
    extend: extend
  });
  
  return Helio;
  
}));
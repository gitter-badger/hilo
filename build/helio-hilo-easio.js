// ========================= 
// Hilo - 0.1.0-pre-dev-beta-10
// ========================= 
// 2013-09-14
// Project started before 2 months and 14 days
// http://erikroyall.github.com/hilo/
// Copyright (c) 2013 Erik Royall
// Licensed under MIT (see LICENSE-MIT) 

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

  var Helio = function Helio (o) {
    this.o = o;
  };
  
  var each = function each (o, fn) {
    var _i = 0
      , _l = o.length;

    for (; _i < _l; _i += 1) {
      fn(o[_i]);
    }
  };

  var own = function (o, p) {
    if (o.hasOwnProperty(o)) {
      return true;
    }

    return false;
  };

  var extend = function extend (o, ao) {
    var _i;

    for (_i in ao) {
      if (!own(ao, _i)) {
        continue;
      }

      o[_i] = ao[_i];
    }

    return o;
  };

  extend(Helio, {
    each: each,
    forEach: each,
    own: own,
    extend
  });
  
  return Helio;
  
}));
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
}("Hilo", this, function () {

}));
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
}("Easio", this, function () {

  /*jshint -W098*/

  var 
      // Measure performance
      perf = new Date().getTime,

      // Main Easio Function
      Easio,

      // Referenced to window and document
      win = this.window,
      doc = win.document;
  

}));
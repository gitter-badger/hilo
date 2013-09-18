// ========================= 
// Hilo - 0.1.0-pre-dev-beta-10
// ========================= 
// 2013-09-18
// Project started before 2 months and 18 days
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

  var Helio = {};
  
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
    extend: extend
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

  /**
   * The main Hilo object
   * 
   * @static
   * @class Hilo
   * @author Erik Royall <erikroyall@hotmail.com>
   * @since 0.1.0
   */
  var Hilo = {}
    , Helio = Helio || this.Helio;

  Helio.extend(Hilo, {

    /**
     * Version number
     * 
     * @property version
     * @for Hilo
     * @type number
     * @since 0.1.0
     */
    version: 0.1,
    
    /**
     * Version in string
     * 
     * @property versionStr
     * @for Hilo
     * @type string
     * @since 0.1.0
     */
    versionStr: "0.1.0",
    
    /**
     * Exact version in string
     * 
     * @property versionPrecise
     * @for Hilo
     * @type string
     * @since 0.1.0
     */
    versionPrecise: "0.1.0-pre-dev-beta-10"
  });
  
  /**
   * @static
   * @class dom
   * @for Hilo
   */
  var dom = (function () {

    // Helper Functions

    // dom.getById
    // Get element with a given ID

    /**
     * Get element with a given id
     * 
     * @method getById
     * @for dom
     * @param id The ID
     * @return NodeList The first element wrapped in an array
     * @since 0.1.0
     */
    function getById (id) {
      return [doc.getElementById(id)];
    }

    // dom.getByClassName
    // Get elements with a given class name

    /**
     * Get elements with a given class name
     * 
     * @method getByClassName
     * @for dom
     * @param className The class name [without period (.)]
     * @return NodeList The selected elements
     * @since 0.1.0
     */
    function getByClassName (className) {
      return doc.getElementsByClassName(className);
    }

    // dom.getByTagName
    // Get elements with a given class name
    
    /**
     * Get elements with a given tag name
     * 
     * @method getByTagName
     * @for dom
     * @param tagName The tag name [without period (.)]
     * @return NodeList The selected elements
     * @since 0.1.0
     */
    function getByTagName (tagName) {
      return doc.getElementsByTagName(tagName);
    }

    // return as object
    return {
      getById: getById,
      getByClassName: getByClassName,
      getByTagName: getByTagName
    };
  }());
  
  return Hilo;

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

  

}));
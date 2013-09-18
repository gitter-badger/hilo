// ========================= 
// Hilo - 0.1.0-pre-dev-beta-10
// ========================= 
// 2013-09-19
// Project started before 2 months and 19 days
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
    if (o.hasOwnProperty(p)) {
      return true;
    }

    return false;
  };

  var extend = function extend (obj, ext) {
    var _i;

    for (_i in ext) {
      if (ext.hasOwnProperty(_i)) {
        obj[_i] = ext[_i];
      }
    }

    return obj;
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
    , Helio = Helio || this.Helio
    , win = window
    , doc = win.document;

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
     * @param String id The ID
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
     * @param String className The class name [without period (.)]
     * @return NodeList The selected elements
     * @since 0.1.0
     */
    function getByClassName (className) {
      var els = doc.getElementsByClassName(className);
      
      return els.length > 0 ? els : [];
    }

    // dom.getByTagName
    // Get elements with a given class name
    
    /**
     * Get elements with a given tag name
     * 
     * @method getByTagName
     * @for dom
     * @param String tagName The tag name [without period (.)]
     * @return NodeList The selected elements
     * @since 0.1.0
     */
    function getByTagName (tagName) {
      var els = doc.getElementsByTagName(tagName);
      
      return els.length > 0 ? els : [];
    }

    // dom.getByAttribute
    // Get elements with a given class name
    
    /**
     * Get elements with a given attribute
     * Optionally check for value
     * 
     * @method getByAttribute
     * @for dom
     * @param String attr The name of the attribute
     * @param {String|Number|Boolean} value
     * @return NodeList The selected elements
     * @since 0.1.0
     */
    function getByAttribute (attr, value) {

      if (typeof doc.querySelectorAll === "function") {
        return value ? doc.querySelectorAll("[attr=value]") : doc.querySelectorAll("[attr]");
      }

      var all = document.all || document.getElementsByTagName("*")
        , _i = 0
        , _l = all.length
        , result = [];

      for (; _i < _l; _i += 1) {
        if (hasAttribute(attr, value || false)) {
          result.push(all[_i]);
        }
      }

      return result;
    }

    // Validation methods

    // dom.hasAttribute
    // Check if an element has an attribute
    // optionally check if it has a value

    /**
     * Check if an element has an attribute
     * Optionally check if it has a value equal to the given
     * 
     * @for dom
     * @method hasAttribute
     * @param String Name of attribute to check for
     * @param {String|Number|Boolean} Optional value
     * @return bool Whether test is passed
     * @since 0.1.0
     */
    function hasAttribute (el, attr, value) {
      return value ? el[attr] === value : el[attr];
    }

    // Properties

    // Get the baseURI of an element
    function getBaseURI (el) {
      return el.baseURI || document.URL;
    }

    // Manipulation

    // Get innerHTML of an element
    function getInnerHTML (el) {
      return el.innerHTML;
    }

    // Set innerHTML of an element
    function setInnerHTML (el, html) {
      el.innerHTML = html;

      return el;
    }

    // Remove all child elements
    function killChildren (el) {
      Helio.each(el.children, function (child) {
        child.parent.removeChild(child);
      });

      return el;
    }

    // return as object
    return {
      getById: getById,
      getByClassName: getByClassName,
      getByTagName: getByTagName,
      getByAttribute: getByAttribute,
      hasAttribute: hasAttribute,
      getBaseURI: getBaseURI,
      getBaseURIOf: getBaseURI,
      getInnerHTML: getInnerHTML,
      getInnerHTMLOf: getInnerHTML,
      setInnerHTML: setInnerHTML,
      setInnerHTMLOf: setInnerHTML,
      killChildren: killChildren,
      killChildrenOf: killChildren
    };
  }());

  // Provide the DOM methods
  Helio.extend(Hilo, {
    dom: dom
  });
  
  /**
   * @static
   * @class dom
   * @for Hilo
   */
  var event = (function () {

    // ### Implementation Notes
    // 
    // 1. If addEventListener, removeEventListener and dispatchEvent:
    //    Use them, they work fine together
    // 2. If addEventListener and removeEventListener but no dispatchEvent:
    //    Store the event in a cache and trigger it when fired
    // 3. If attachEvent, detachEvent:
    //    Use them
    // 4. If nothing
    //    Manually attach the events el[on + evt] style
    // 

    // The handlers
    var handlers = {};

    // addEvent
    var addEvent = (function () {
      if (typeof doc.addEventListener === "function") {
        return function (el, evt, fn) {
          el.addEventListener(evt, fn, false);
          handlers[el][evt] = handlers[el][evt] || [];
          handlers[el][evt].push(fn);

        };
      } else if (typeof doc.attachEvent === "function") {
        return function (el, evt, fn) {
          el.attachEvent(evt, fn);
          handlers[el][evt] = handlers[el][evt] || [];
          handlers[el][evt].push(fn);
        };
      } else {
        return function (el, evt, fn) {
          el["on" + evt] = fn;
          handlers[el][evt] = handlers[el][evt] || [];
          handlers[el][evt].push(fn);
        };
      }
    }());

    // removeEvent
    var removeEvent = (function () {
      if (typeof doc.removeEventListener === "function") {
        return function (el, evt, fn) {
          el.removeEventListener(evt, fn, false);
          Helio.each(handlers[el][evt], function (fun) {
            if (fun === fn) {
              handlers[el][evt][handlers[el][evt].indexOf(fun)] = undefined;
            }
          });

        };
      } else if (typeof doc.detachEvent === "function") {
        return function (el, evt, fn) {
          el.detachEvent(evt, fn);
          Helio.each(handlers[el][evt], function (fun) {
            if (fun === fn) {
              handlers[el][evt][handlers[el][evt].indexOf(fun)] = undefined;
            }
          });
        };
      } else {
        return function (el, evt, fn) {
          el["on" + evt] = undefined;
          Helio.each(handlers[el][evt], function (fun) {
            if (fun === fn) {
              handlers[el][evt][handlers[el][evt].indexOf(fun)] = undefined;
            }
          });
        };
      }
    }());

    // triggerEvent
    function triggerEvent (el, evt) {
      Helio.each(handlers[el][evt], function (fn) {
        fn();
      });
    }

    return {
      add: addEvent,
      on: addEvent,
      attach: addEvent,
      subscribe: addEvent,
      remove: removeEvent,
      off: removeEvent,
      detach: removeEvent,
      unsubscribe: removeEvent,
      trigger: triggerEvent,
      fire: triggerEvent,
      dispatch: triggerEvent,
      publish: triggerEvent
    };
  }());

  // Provide event methods
  Helio.extend(Hilo, {
    event: event
  });

  
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
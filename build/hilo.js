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
      var els = doc.getElementsByTagName(className);
      
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

    // return as object
    return {
      getById: getById,
      getByClassName: getByClassName,
      getByTagName: getByTagName,
      getByAttribute: getByAttribute,
      hasAttribute: hasAttribute
    };
  }());
  
  Helio.extend(Hilo, {
    dom: dom
  });
  
  return Hilo;

}));
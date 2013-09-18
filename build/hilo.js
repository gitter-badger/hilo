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
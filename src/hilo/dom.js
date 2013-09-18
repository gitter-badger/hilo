  
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
     * @param {String|Number} Optional value
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
      hasAttribute: hasAttribute
    };
  }());
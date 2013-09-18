  
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
      return doc.getElementsByClassName(className);
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
      return doc.getElementsByTagName(tagName);
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
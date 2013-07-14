  
  var hilo             // Public API
    , win = window     // Reference to window
    , doc = document   // Reference to document
    , callbacks = []   // Array of functions to be executed on DOMReady
    , select           // Private Selector Function
    , feature          // Feature Detection
    , browser          // Browser Detection
    , hiloAjax         // AJAX Func.
    , createEl         // Create an Element
    , impEvts          // Array containing imp. evts.
    , impCss           // Array containing imp. css props.
    , _i               // Loop helper
    , Dom              // DOM Manipulation Methods
    , Test;            // Test class

  /* 
   * Select elements
   * 
   * !selector - Selector {String}
   * root - Root element {String|HTMLElement} | Whether to cache {Boolean}
   * e - Root element if cache is specfied {String|HTMLElement} 
   * 
   * This function can be used throughout the code
   * to select elements
   */

  select = function (selector, root, en) {
    var rt, sel = selector, tempObj;

    /*
     * Selects elements based on selector and root
     *
     * !sel - Selector {String}
     * root - Root element {String|HTMLElement}
     */

    function get (sel, root) {
      var c, rt;

      rt = root || document;

      /*
       * The main selecting engine. Written by me.
       *
       * !sel - Selector {String}
       * rt - Root element {String|HTMLElement}
       */

      function dom (sel, rt) {
        var els;

        if(                               // >
          sel.split(" ").length === 1 &&  // >>
          sel.split(">").length === 1 &&  // >>> Make sure sel doesn't have  ,>,: or +
          sel.split(":").length === 1 &&  // >>
          sel.split("+").length === 1) {  // >
          c = sel.slice(0,1); // Find out first ltr; Useful in next step
          switch(c) {
            case "#":
              els = [rt.getElementById(sel.substr(1,sel.length))];
              break;
            case ".":
              els = rt.getElementsByClassName(sel);
              break;
            case "*":
              els = document.all;
              break;
            case "&":
              els = document.documentElement;
              break;
            default:
              els = rt.getElementsByTagName(sel);
              break;
          }
        } else {
          try {
            els = rt.querySelectorAll(sel);
          } catch (en) {
            els = win.Hilo.select(sel, rt);
          }
        }

        return els;
      }

      return dom(sel, rt);
    }

    if (root === true) {
      // The temporary object
      tempObj = win.Hilo.temp[sel];
      if (tempObj) {
        return tempObj;
      } else {
        if (typeof en === 'object') {
          tempObj = get(sel, en);
        } else {
          tempObj = get(sel);
        }
        
        return tempObj;
      }
    } else if (typeof root === 'string') {

    } else {
      rt = document;
    }

    return get(sel, rt);
  };

  /*
   * Local copy of the one and only global
   */

  hilo = function (input, root, en) {
    if (typeof input === 'string') {
      return new Dom(select(input, root, en));
    } else if (typeof input === 'function') { // Function
      if (document.readyState === 'complete') {
        input();
      } else {
        callbacks.push(input);
      }
    } else if (input.length) { // DOM Node List | Hilo DOM Object
      return new Dom(input);
    } else { // DOM Node
      input = [input];
      return new Dom(input);
    }
  };

  // Enable Selector Caching
  hilo.temp = {};

  hilo.version = '0.1.0-pre-dev-beta-5';
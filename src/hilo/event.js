  
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
          handlers[el] = handlers[el] || {};
          handlers[el][evt] = handlers[el][evt] || [];
          handlers[el][evt].push(fn);

        };
      } else if (typeof doc.attachEvent === "function") {
        return function (el, evt, fn) {
          el.attachEvent(evt, fn);
          handlers[el] = handlers[el] || {};
          handlers[el][evt] = handlers[el][evt] || [];
          handlers[el][evt].push(fn);
        };
      } else {
        return function (el, evt, fn) {
          el["on" + evt] = fn;
          handlers[el] = handlers[el] || {};
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
              handlers[el] = handlers[el] || {};
              handlers[el][evt] = handlers[el][evt] || [];
              handlers[el][evt][handlers[el][evt].indexOf(fun)] = undefined;
            }
          });

        };
      } else if (typeof doc.detachEvent === "function") {
        return function (el, evt, fn) {
          el.detachEvent(evt, fn);
          Helio.each(handlers[el][evt], function (fun) {
            if (fun === fn) {
              handlers[el] = handlers[el] || {};
              handlers[el][evt] = handlers[el][evt] || [];
              handlers[el][evt][handlers[el][evt].indexOf(fun)] = undefined;
            }
          });
        };
      } else {
        return function (el, evt, fn) {
          el["on" + evt] = undefined;
          Helio.each(handlers[el][evt], function (fun) {
            if (fun === fn) {
              handlers[el] = handlers[el] || {};
              handlers[el][evt] = handlers[el][evt] || [];
              handlers[el][evt][handlers[el][evt].indexOf(fun)] = undefined;
            }
          });
        };
      }
    }());

    // triggerEvent
    function triggerEvent (el, evt) {
      handlers[el] = handlers[el] || {};
      handlers[el][evt] = handlers[el][evt] || [];
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
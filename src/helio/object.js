  
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
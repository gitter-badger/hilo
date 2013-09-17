  
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
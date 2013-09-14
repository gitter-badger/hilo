  
  var each = forEach = function each (o, fn) {
    var _i = 0
      , _l = o.length;

    for (; _i < _l; _i += 1) {
      fn(o[_i]);
    }
  };
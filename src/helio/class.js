  
  function clas (parent, prop) {
    var CLASS = parent;

    CLASS.prototype = prop;

    return CLASS;
  }

  function inherit (parent, child, prop) {
    var props = extend(parent, prop);

    parent[child].prototype = props;
  }
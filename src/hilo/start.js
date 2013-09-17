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
  var Hilo = {

    /**
     * Version number
     * 
     * @property
     * @for Hilo
     * @type number
     * @since 0.1.0
     */
    version: 0.1,
    versionStr: "0.1.0",
    versionPrecise: "0.1.0-pre-dev-beta-10"
  };
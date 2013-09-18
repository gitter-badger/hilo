describe("Hilo.dom", function () {
  describe(".getById", function () {
    it("should get elements by id", function () {
      document.body.id = "someID";

      expect(Hilo.dom.getById("someID")[0]).toEqual(document.getElementById("someID"));
    });
    it("shoud return an array with null when no id is passed", function () {
      expect(Hilo.dom.getById()).toEqual([null]);
    });
    it("should return an array with null when empty string is passed", function () {
      expect(Hilo.dom.getById("")).toEqual([null]);
    });
  });
  describe(".getByClassName", function () {
    it("should get elements by className", function () {
      document.body.className += " someClass";

      expect(Hilo.dom.getByClassName("someClass")).toEqual(document.getElementsByClassName("someClass"));
    });
    it("shoud return an empty array with null when no className is passed", function () {
      expect(Hilo.dom.getByClassName()).toEqual({ length: 0 });
    });
    it("should return an empty array when empty string is passed", function () {
      expect(Hilo.dom.getByClassName("")).toEqual({ length: 0 });
    });
  });
  describe(".getByTagName", function () {
    it("should get elements by tag name", function () {
      expect(Hilo.dom.getByTagName("div")).toEqual(document.getElementsByTagName("div"));
    });
    it("shoud return an empty array with null when no tag name is passed", function () {
      expect(Hilo.dom.getByTagName()).toEqual({ length: 0 });
    });
    it("should return an empty array when empty string is passed", function () {
      expect(Hilo.dom.getByTagName("")).toEqual({ length: 0 });
    });
  });
});
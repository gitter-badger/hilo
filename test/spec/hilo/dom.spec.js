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
    it("should get elements by id", function () {
      document.body.className += " someClass";

      expect(Hilo.dom.getByClassName("someClass")).toEqual(document.getElementsByClassName("someClass"));
    });
    it("shoud return an empty array with null when no id is passed", function () {
      expect(Hilo.dom.getByClassName()).toEqual({ length: 0 });
    });
    it("should return an empty array when empty string is passed", function () {
      expect(Hilo.dom.getByClassName("")).toEqual({ length: 0 });
    });
  });
});
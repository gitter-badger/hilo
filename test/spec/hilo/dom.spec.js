describe("Hilo.dom", function () {
  describe(".getById", function () {
    it("should get elements by id", function () {
      document.body.id = "someID";

      expect(Hilo.dom.getById("someID")[0]).toEqual(document.getElementById("someID"));
    });
  });
});
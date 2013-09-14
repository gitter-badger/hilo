// Let's to it for the sake of testing
this._ = Helio;

describe("Helio", function () {
  describe(".forEach()", function () {
    it("should call a function for every element in array", function () {
      var peeps = [
        {
          name: "Erik Royall",
          age: 14,
          job: "Web Developer"
        },
        {
          name: "John Doe",
          age: 14,
          job: "Cats' Tail Cleaning Specialist"
        }
      ];

      var info = "";
      var infoTest = "";

      _.forEach(peeps, function (peep) {
        info += peep.name + ", " + peep.age + ", is a " + peep.job + ".";
      });

      for (var _i = 0, _l = peeps.length; _i < _l; _i += 1) {
        infoTest += peeps[_i].name + ", " + peeps[_i].age + ", is a " + peeps[_i].job + ".";
      }

      expect(info).toEqual(infoTest);
    });
  });
});
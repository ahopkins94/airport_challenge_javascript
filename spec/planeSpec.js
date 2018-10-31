describe("Plane", function(){
  var plane;

  beforeEach(function() {
    plane = new Plane();
  })

  it("should default not landed", function() {
    expect(plane.isLanded).toBe(false);
  });

  it("should be able to become landed", function() {
    plane.land()
    expect(plane.isLanded).toBe(true);
  });

  it("should be able to become airborne again", function() {
    plane.land()
    plane.fly()
    expect(plane.isLanded).toBe(false);
  })

})

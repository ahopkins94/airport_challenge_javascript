describe("Airport", function(){
  var airport;

  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
  })

  it("should default an empty airport to start", function() {
    expect(airport.landedPlanes).toEqual([]);
  });

  it("should receive a plane that is not landed", function() {
    airport.receive(plane)
    expect(airport.landedPlanes).toEqual([plane]);
  });

  it("should not receive a plane that is landed", function() {
    plane.land()
    airport.receive(plane)
    expect(airport.landedPlanes).toEqual([]);
  });

  it("should raise an error if it cannot receive a landed plane", function() {
    plane.land()
    expect(airport.receive(plane)).toEqual('Plane is already landed');
  });

  it("should release a plane that is landed", function() {
    plane.land()
    airport.release(plane)
    expect(airport.landedPlanes).toEqual([]);
  })

  it("should raise an error if it cannot release a plane", function() {
    expect(airport.release(plane)).toEqual('Plane is already airborne');
  });

  it("should not receive a plane if the weather is stormy", function() {
    spyOn(Math, 'random').and.returnValue(5);
    plane.land()
    airport.receive(plane)
    expect(airport.landedPlanes).toEqual([]);
  })


})

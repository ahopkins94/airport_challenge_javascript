describe("Airport", function(){
  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
  })

  it("should default an empty airport to start", function() {
    expect(airport.landedPlanes).toEqual([]);
  });

  it("should receive a plane that is not landed", function() {
    spyOn(Math, 'random').and.returnValue(0.5);
    airport.receive(plane)
    expect(airport.landedPlanes).toEqual([plane]);
  });

  it("should not receive a plane that is landed", function() {
    spyOn(Math, 'random').and.returnValue(0.5);
    plane.land()
    airport.receive(plane)
    expect(airport.landedPlanes).toEqual([]);
  });

  it("should raise an error if it cannot receive a landed plane", function() {
    spyOn(Math, 'random').and.returnValue(0.5);
    plane.land()
    expect(airport.receive(plane)).toEqual('Plane is already landed');
  });

  it("should release a plane that is landed", function() {
    spyOn(Math, 'random').and.returnValue(0.5);
    airport.receive(plane)
    plane.land()
    airport.release(plane)
    expect(airport.landedPlanes).toEqual([]);
  })

  it("should raise an error if it cannot release a plane", function() {
    expect(airport.release(plane)).toEqual('Plane is already airborne');
  });

  it("should not receive a plane if the weather is stormy", function() {
    spyOn(Math, 'random').and.returnValue(0.7);
    airport.receive(plane)
    expect(airport.landedPlanes).toEqual([]);
  })

  it("should raise an error if it cannot receive a plane because it is stormy", function() {
    spyOn(Math, 'random').and.returnValue(0.7);
    expect(airport.receive(plane)).toEqual('It is stormy, cannot land plane');
  })

  it("should not release a plane if the weather is stormy", function() {
    spyOn(Math, 'random').and.returnValue(0.7);
    airport.landedPlanes.push(plane);
    plane.land()
    airport.release(plane)
    expect(airport.landedPlanes).toEqual([plane]);
  })

  it("should raise an error if the weather is stormy", function() {
    spyOn(Math, 'random').and.returnValue(0.7);
    airport.landedPlanes.push(plane);
    plane.land()
    expect(airport.release(plane)).toEqual('It is stormy, cannot release plane');
  })


})

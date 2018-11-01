describe("Weather", function(){
  var weather;

  beforeEach(function() {
    weather = new Weather();
  })

  it("should determine when it is stormy weather", function() {
    spyOn(Math, 'random').and.returnValue(0.7);
    expect(weather.isStormy()).toBe(true);
  });

  it("should determine when it is not stormy weather", function() {
    spyOn(Math, 'random').and.returnValue(0.4);
    expect(weather.isStormy()).toBe(false);
  });

  })

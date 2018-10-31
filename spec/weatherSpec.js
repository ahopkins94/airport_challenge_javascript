describe("Weather", function(){
  var weather;

  beforeEach(function() {
    weather = new Weather();
  })

  it("should determine when it is stormy weather", function() {
    spyOn(Math, 'random').and.returnValue(5);
    expect(weather.isStormy()).toBe(true);
  });

  })

function Weather() {
  this.weather = 0
}

Weather.prototype.isStormy = function () {
  return this.weather = ((Math.floor((Math.random() * 10))) > 6);
}

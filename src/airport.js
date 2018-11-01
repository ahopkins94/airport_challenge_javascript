function Airport() {
  this.landedPlanes = []
  this.weather = new Weather()
};

Airport.prototype.receive = function (plane) {
  if (plane.isLanded === false && this.weather.isStormy() === false) {
    return this.landedPlanes.push(plane);
  } else if (plane.isLanded === true && this.weather.isStormy() === false) {
    return 'Plane is already landed';
  } else if (plane.isLanded === false && this.weather.isStormy() === true) {
    return 'It is stormy, cannot land plane';
  }
}

Airport.prototype.release = function (plane) {
  if (plane.isLanded === true) {
    return this.landedPlanes.pop;
  }
  return 'Plane is already airborne';
}

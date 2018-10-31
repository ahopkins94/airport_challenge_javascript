function Airport() {
  this.landedPlanes = []
};

Airport.prototype.receive = function (plane) {
  if (plane.isLanded === false) {
    return this.landedPlanes.push(plane);
  }
  return 'Plane is already landed';
}

Airport.prototype.release = function (plane) {
  if (plane.isLanded === true) {
    return this.landedPlanes.pop;
  }
  return 'Plane is already airborne';
}

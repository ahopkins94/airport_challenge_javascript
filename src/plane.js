function Plane() {
  this.isLanded = false
}

Plane.prototype.land = function () {
  this.isLanded = true
}

Plane.prototype.fly = function () {
  this.isLanded = false
}

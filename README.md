Airport Challenge
==============

Javascript back-end business logic for an airport that receives and releases planes if it is not stormy and the plane has the correct landed status. Testing in Jasmine.

## Installation

1) Clone the repository
2) Run `open specrunner.html` to run the tests

## Deployment in node

$ node  
$ .load ./src/airport.js  
$ .load ./src/plane.js  
$ .load ./src/weather.js  
$ var airport = new Airport()  
$ var plane = new Plane()  
$ airport.receive(plane)  
$ plane.land()  
$ airport.release(plane)    

## Contributing

If you have any suggestions, please create a GitHub issue, or feel free to make a pull request!

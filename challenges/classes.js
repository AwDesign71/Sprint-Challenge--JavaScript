// 1. Copy and paste your prototype in here and refactor into class syntax.
/* function cuboidMaker(cubArrt) {
    this.length = cubArrt.length;
    this.width = cubArrt.width;
    this.height = cubArrt.height;
  }
  cuboidMaker.prototype.volume = function(length, width, height) {
    return this.length * this.width * this.height;
  }
  cuboidMaker.prototype.surfaceArea = function(length, width, height) {
    this.surfaceArea = 2 *(this.length * this.width + this.length * this.height + this.width * this.height);
    return this.surfaceArea;
  } */
  

// Refactor the class
class CuboidMaker {
    constructor(cubArrt) {
        this.length = cubArrt.length;
        this.width = cubArrt.width;
        this.height = cubArrt.height;
    }
    volume(length, width, height) {
        return this.length * this.width * this.height;
      }
    surfaceArea(length, width, height) {
        this.surfaceArea = 2 *(this.length * this.width + this.length * this.height + this.width * this.height);
        return this.surfaceArea;
      }
  }
  const area = new CuboidMaker({
    'length': 4,
    'width': 5,
    'height': 5,
});

// Test your volume and surfaceArea methods by uncommenting the logs below:
 console.log(area.volume()); // 100
 console.log(area.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.
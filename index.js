function Point(x, y) {
  this.x = x;
  this.y = y;
  // this.toString = function() {
  //   return {x, y}
  // }
}

Point.prototype.toString = function() {
  return "(" + this.x + ", " + this.y + ")";
}

///////////////////////////////////////////////////////
// Side
function Side(length) {
  this.length = length;
}

///////////////////////////////////////////////////////
// SHAPE
function Shape() {
}

Shape.prototype.addToPlane = function(x, y) {
  return this.position = new Point(x, y)
}
Shape.prototype.move = function(x, y) {
  return this.position = new Point(x, y)
}
///////////////////////////////////////////////////////
// CIRCLE - inherits from SHAPE
function Circle(radius) {
  Shape.call(this);

  this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle

Circle.prototype.diameter = function() {
  return this.radius * 2;
}
Circle.prototype.area = function() {
  return Math.PI * (this.radius * this.radius);
}
Circle.prototype.circumference = function() {
  return 2 * Math.PI * this.radius;
}
///////////////////////////////////////////////////////
// POLYGON - inherits from SHAPE
function Polygon(array) {
  Shape.call(this);
  this.sides = array;
  // constructed with four integer arguments representing the side lengths.
}

Polygon.prototype = Object.create(Shape.prototype);
Polygon.prototype.constructor = Polygon

Polygon.prototype.perimeter = function() {
  return this.sides.reduce(function(sum, side) {
    return sum + side.length;
  }, 0)
}
Polygon.prototype.numberOfSides = function() {
  return this.sides.length;
}
///////////////////////////////////////////////////////
// QUADRILATERAL - inherits from POLYGON
function Quadrilateral(num1, num2, num3, num4) {

  Polygon.call(this, [new Side(num1), new Side(num2), new Side(num3), new Side(num4)]);
}

Quadrilateral.prototype = Object.create(Polygon.prototype);
Quadrilateral.prototype.constructor = Quadrilateral
///////////////////////////////////////////////////////
// RECTANGLE - inherits from QUADRILATERAL
function Rectangle(width, height) {
  Quadrilateral.call(this, width, width, height, height);
  this.width = width;
  this.height = height;
}

Rectangle.prototype = Object.create(Quadrilateral.prototype);
Rectangle.prototype.constructor = Rectangle

Rectangle.prototype.area = function() {
  return this.width * this.height;
}
///////////////////////////////////////////////////////
// SQUARE - inherits from RECTANGLE
function Square(length) {
  Rectangle.call(this, length, length);
}

Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square

Square.prototype.listProperties = function() {
  return this.length
}
///////////////////////////////////////////////////////
// TRIANGLE - inherits from POLYGON
function Triangle(num1, num2, num3) {
  Polygon.call(this, [new Side(num1), new Side(num2), new Side(num3)]);
}

Triangle.prototype = Object.create(Polygon.prototype);
Triangle.prototype.constructor = Triangle

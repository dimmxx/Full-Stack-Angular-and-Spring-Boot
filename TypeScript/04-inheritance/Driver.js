"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Shape_1 = require("./Shape");
var Circle_1 = require("./Circle");
var Rectangle_1 = require("./Rectangle");
var myShape = new Shape_1.Shape(10, 20);
console.log(myShape.getInfo());
var myCircle = new Circle_1.Circle(100, 200, 15);
console.log(myCircle.getInfo());
var myRectangle = new Rectangle_1.Rectangle(100, 200, 500, 600);
console.log(myRectangle.getInfo());
var array = [];
array.push(myShape);
array.push(myCircle);
array.push(myRectangle);
for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
    var temp = array_1[_i];
    console.log("-");
    console.log(temp.getInfo());
}

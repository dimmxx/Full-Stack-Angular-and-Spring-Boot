import {Shape} from "./Shape";
import {Circle} from "./Circle";
import {Rectangle} from "./Rectangle";

let myShape = new Shape(10, 20);
console.log(myShape.getInfo());

let myCircle = new Circle(100, 200, 15);
console.log(myCircle.getInfo());

let myRectangle  = new Rectangle(100, 200, 500, 600);
console.log(myRectangle.getInfo());


let array:Shape[] = [];

array.push(myShape);
array.push(myCircle);
array.push(myRectangle);

for(let temp of array){
    console.log("-")
    console.log(temp.getInfo());
}


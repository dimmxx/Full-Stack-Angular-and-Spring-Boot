import {Shape} from "./Shape";
import {Circle} from "./Circle";
import {Rectangle} from "./Rectangle";

let myCircle = new Circle(100, 200, 15);
console.log(myCircle.getInfo());

let myRectangle  = new Rectangle(100, 200, 500, 600);
console.log(myRectangle.getInfo());

let array:Shape[] = [];

array.push(myCircle);
array.push(myRectangle);

for(let temp of array){
    console.log("___________________________________");
    console.log(temp.getInfo());
    console.log(temp.calculateArea());
    console.log();
}


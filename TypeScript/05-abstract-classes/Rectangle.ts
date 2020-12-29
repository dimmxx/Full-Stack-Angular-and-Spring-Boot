import {Shape} from "./Shape";

export class Rectangle extends Shape {

    constructor(theX:number, theY:number, private _length:number, private _width:number) {
        super(theX, theY);
    }

    get length(): number {
        return this._length;
    }

    set length(value: number) {
        this._length = value;
    }

    get width(): number {
        return this._width;
    }

    set width(value: number) {
        this._width = value;
    }

    getInfo(): string {
        return super.getInfo() + `, length = ${this._length}, width = ${this._width}`;
    }

    calculateArea(): number {
        return this._width * this._length;
    }
}
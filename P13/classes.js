class Shape {
    constructor(color) {
        this.color = color;
    }

    sayColor() {
        console.log('This is my color:', this.color);
    }
}


class Triangle extends Shape {
    getAngleCount() {
        return 3;
    }
}

const myNewTriangle = new Triangle('Red');

console.log(myNewTriangle.color);
console.log(myNewTriangle.getAngleCount());
myNewTriangle.sayColor();


const myNewShape = new Shape('Blue');
console.log(myNewShape.color);
// console.log(myNewShape.getAngleCount());
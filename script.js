class Polygon {
    constructor(height, width) {
        this.name = 'Polygon';
        this.height = height;
        this.width = width;
    }

    area() {
        console.log(`The area of: ${this.name} = ${this.height * this.width}`);
    }
}

class Square extends Polygon {
    constructor(length) {
        super(length, length);
        this.name = 'Square';
    }
}

class Triangle extends Polygon{
    constructor(height, high){
        super(height,high);
        this. name = "Triangle"
    }

    area(){
        console.log(`The area of: ${this.name} = ${this.height * this.width}`);
    }
}

let polygon = new Polygon(11, 12);
polygon.area();

let square = new Square(11);
square.area(); //extends polygon say function

let triangle = new Triangle(10,5);
triangle.area();


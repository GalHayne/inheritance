class Polygon {
    constructor(height, width) {
        this.name = 'Polygon';
        this.height = height;
        this.width = width;
    }

    area() {
        console.log(`The area of: ${this.name} = ${this.height * this.width}`);
    }

    perimeter(){
        console.log(`The perimeter of: ${this.name} = ${this.height*2 + this.width*2}`);
    }
}

class Square extends Polygon {
    constructor(length) {
        super(length, length);
        this.name = 'Square';
    }
}

class Triangle extends Polygon{
    constructor(side1, side2,side3,high){
        super(side1,side2);
        this.name = "Triangle"
        this.height = high;
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
    }

    area(){
        console.log(`The area of: ${this.name} = ${this.height * this.side1 / 2}`);
    }

    perimeter(){
        console.log(`The perimeter of: ${this.name} = ${this.side1 + this.side2 + this.side3}`);
    }
}

let polygon = new Polygon(11, 12);
polygon.area();
polygon.perimeter();

let square = new Square(11);
square.area(); //use polygon say function
square.perimeter();

let triangle = new Triangle(10,10,5,3);
triangle.area(); //extends polygon say function and overload the function
triangle.perimeter();

;


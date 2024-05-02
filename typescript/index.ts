//** Abstraction */

//shapes
//interface for a shape
interface Shape {
  area(): number;
  perimeter(): number;
}

class Circle implements Shape {
  constructor(private radius: number) {}
  area(): number {
    return Math.PI * this.radius * this.radius;
  }
  perimeter(): number {
    return 2 * Math.PI * this.radius;
  }
}

class Rectangle implements Shape {
  constructor(private width: number, private height: number) {}
  area(): number {
    return this.width * this.height;
  }
  perimeter(): number {
    return 2 * (this.width + this.height);
  }
}

function calculateTotalArea(shape: Shape): number {
  return shape.area();
}

//Client code

let circle: Circle = new Circle(5);
let rectangle: Rectangle = new Rectangle(4, 6);

console.log(calculateTotalArea(circle));
console.log(calculateTotalArea(rectangle));

//Practice
const now = new Date();
const currentDate = now.getDay();
const currentMonth = now.getMonth() + 1;
const currentYear = now.getFullYear();

console.log(currentDate);
console.log(currentMonth);
console.log(currentYear);

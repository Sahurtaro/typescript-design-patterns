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

//BankAccount

//Depositing

//Withdrawing

//Balance - hidden/encapsulated

class BankAccount {
  private _balance: number;

  constructor(initialBalance: number) {
    this._balance = initialBalance;
  }

  //Getter to get balance
  public get checkBalance(): number {
    return this._balance;
  }

  //Method to deposit money
  public deposit(amount: number): void {
    if (amount < 0) {
      console.log("Invalid deposit amount");
      return;
    }
    this._balance += amount;
  }
  //Method to withdraw money
  public withdraw(amount: number): void {
    if (amount < 0) {
      console.log("Invalid withdrawal amount");
      return;
    }
    if (this._balance - amount < 0) {
      console.log("Not enough money in the account");
      return;
    }
    this._balance = -amount;
  }
}

const bankAcc = new BankAccount(500);
bankAcc.deposit(200);
bankAcc.withdraw(124);
bankAcc.checkBalance;

//Inheritance
class Animal {
  constructor(public name: string) {}

  move(distance: number): void {
    console.log(`${this.name} moved ${distance} meters`);
  }
}

class Dog extends Animal {
  constructor(public name: string = "dog") {
    super(name);
  }
}

const newDog = new Dog();
newDog.move(21);
console.log(newDog.name);

//Implementation

class Product {
  constructor(
    public id: string,
    public price: number,
    public description: string
  ) {}
  display(): void {
    console.log(
      `Id: ${this.id}, Price: ${this.price}, Description: ${this.description}`
    );
  }
}

class Book extends Product {
  constructor(
    public id: string,
    public price: number,
    public description: string,
    public title: string,
    public author: string
  ) {
    super(id, price, description);
  }
  display(): void {
    super.display();
    console.log(`Author: ${this.author}, Title: ${this.title}`);
  }
}

class Electronic extends Product {
  constructor(
    public id: string,
    public price: number,
    public description: string,
    public brand: string,
    public model: string
  ) {
    super(id, price, description);
  }
  display(): void {
    super.display();
    console.log(`Brand: ${this.brand}, Model: ${this.model}`);
  }
}

const myBook = new Book(
  "1",
  25,
  "El mejor libro",
  "Palabras radiantes",
  "Branderson"
);

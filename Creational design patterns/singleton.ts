class Singleton {
  private static instance: Singleton;
  private static _value: number;

  private constructor() {}

  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }

  set value(value: number) {
    Singleton._value = value;
  }

  get value() {
    return Singleton._value;
  }
}

let instance1 = Singleton.getInstance();
let instance2 = Singleton.getInstance();
instance1.value = 10;
console.log(instance1.value);
console.log(instance2.value);
console.log(instance1 === instance2);

// Singleton Logger Class
// log method
// Can have multiple methods

class Logger {
  private static instance: Logger;

  private constructor() {}

  public static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  public log(message: string): void {
    const timestamp = new Date();
    console.log(`[ ${timestamp.toLocaleString()}] - ${message}`);
  }
}

// New Instance
let logger1 = Logger.getInstance();
logger1.log("This is the first message");

let logger2 = Logger.getInstance();
logger2.log("This is the message two");

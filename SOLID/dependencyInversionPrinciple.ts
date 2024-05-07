interface Database {
  save(data: string): void;
}

class MySqlDatabase implements Database {
  save(data: string): void {
    console.log(`${data} is being saved in MYSQL`);
  }
}

class MongoDBDatabase implements Database {
  save(data: string): void {
    console.log(`${data} is being saved in MongoDB`);
  }
}

class HighLevelModule {
  constructor(private database: Database) {}

  execute(data: string) {
    this.database.save(data);
  }
}

const MySQLDB: MySqlDatabase = new MySqlDatabase();
const module1: HighLevelModule = new HighLevelModule(MySQLDB);
module1.execute("data1");

const MONGO: MongoDBDatabase = new MongoDBDatabase();
const module2: HighLevelModule = new HighLevelModule(MONGO);
module2.execute("data2");

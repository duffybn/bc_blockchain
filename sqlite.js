
const fs = require("fs");
const dbFile = "./.data/eva.db";
const exists = fs.existsSync(dbFile);
const sqlite3 = require("sqlite3").verbose();
const dbWrapper = require("sqlite");
const casual = require("casual");
let db;

dbWrapper
  .open({
    filename: dbFile,
    driver: sqlite3.Database
  })
  .then(async dBase => {
    db = dBase;

    try {
      if (!exists) {
        await db.run(
          "CREATE TABLE PROFESSORS (id INTEGER PRIMARY KEY AUTOINCREMENT, NAME VARCHAR(100) NOT NULL, Contract_address INTEGER NOT NULL UNIQUE)"
        );
        
        await db.run(
        "CREATE TABLE REVIEWS (id INTEGER PRIMARY KEY AUTOINCREMENT, contract INTEGER references PROFESSORS(contract), UNIVERSITY VARCHAR(100) NOT NULL, rating INTEGER  CHECK ( rating >= 0 AND rating <= 10), review VARCHAR(100))"
        );
        for (let r = 0; r < 5; r++)
          await db.run(
            "INSERT INTO Messages (message) VALUES (?)",
            casual.catch_phrase
          );
      }
      console.log(await db.all("SELECT * from Messages"));
    } catch (dbError) {
      console.error(dbError);
    }
  });
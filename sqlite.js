
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
          "CREATE TABLE PROFESSOR (id INTEGER PRIMARY KEY AUTOINCREMENT, NAME VARCHAR(100) NOT NULL, Contract_address VARCHAR(100) NOT NULL UNIQUE)"
        );
        
        await db.run(
        "CREATE TABLE REVIEWS (id INTEGER PRIMARY KEY AUTOINCREMENT, contract VARCHAR(100) references PROFESSORS(contract_address), UNIVERSITY VARCHAR(100) NOT NULL, rating INTEGER  CHECK ( rating >= 0 AND rating <= 10), review VARCHAR(100))"
        );
        
        for (let r = 0; r < 5; r++)
          await db.run(
            "INSERT INTO PROFESSOR (name, contract_address) VALUES (?, ?)",
            casual.catch_phrase
          );
        for (let r = 0; r < 5; r++)
          await db.run(
            "INSERT INTO REVIEWS (contract, university, review, rating) VALUES (?, ?, ?, ?)",
            casual.catch_phrase
          );
      }
      console.log(await db.all("SELECT * from REVIEWS"));
    } catch (dbError) {
      console.error(dbError);
    }
  });

// Server script calls these methods to connect to the db
module.exports = {
  
  
  // Professors
  // Get professors in the database
  getProfessor: async () => {
    try {
      return await db.all("SELECT * from PROFESSORS");
    } catch (dbError) {
      console.error(dbError);
    }
  },

  // Add new prof
  addProfessor: async professor => {
    let success = false;
    try {
      success = await db.run("INSERT INTO PROFESSORS (name, contract_address) VALUES (?, ?)", [
        professor
      ]);
    } catch (dbError) {
      console.error(dbError);
    }
    return success.changes > 0 ? true : false;
  },

  // Update professor name
  // updateProfessorName: async (id, name) => {
  //   let success = false;
  //   try {
  //     success = await db.run(
  //       "Update PROFESSORS SET name = ? WHERE id = ?",
  //       name,
  //       id
  //     );
  //   } catch (dbError) {
  //     console.error(dbError);
  //   }
  //   return success.changes > 0 ? true : false;
  // },

  // Remove prof
  deleteProfessor: async id => {
    let success = false;
    try {
      success = await db.run("Delete from PROFESSORS WHERE id = ?", id);
    } catch (dbError) {
      console.error(dbError);
    }
    return success.changes > 0 ? true : false;
  },
  
  // Reviews
  // Get  reviews in the database
  
  getReview: async () => {
    try {
      return await db.all("SELECT * from REVIEWS");
    } catch (dbError) {
      console.error(dbError);
    }
  },

  // Add new review
  addReview: async review => {
    let success = false;
    try {
      success = await db.run("INSERT INTO REVIEWS (review) VALUES (?)", [
        review
      ]);
    } catch (dbError) {
      console.error(dbError);
    }
    return success.changes > 0 ? true : false;
  },

  // Update review text
  updateReview: async (id, review) => {
    let success = false;
    try {
      success = await db.run(
        "Update REVIEWS SET review = ? WHERE id = ?",
        review,
        id
      );
    } catch (dbError) {
      console.error(dbError);
    }
    return success.changes > 0 ? true : false;
  },

  // Remove review
  deleteReview: async id => {
    let success = false;
    try {
      success = await db.run("Delete from REVIEWS WHERE id = ?", id);
    } catch (dbError) {
      console.error(dbError);
    }
    return success.changes > 0 ? true : false;
  }
};

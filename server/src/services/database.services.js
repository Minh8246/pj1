import mysql from "mysql";
import dotenv from "dotenv";

dotenv.config();

class DatabaseService {
  constructor() {
    this.pool = mysql.createPool({
      host: process.env.DB_HOST,
      user: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });
  }

  async connect() {
    return new Promise((resolve, reject) => {
      this.pool.getConnection((err, connection) => {
        if (err) {
          console.error("Error connecting to the database", err);
          reject(err);
        } else {
          console.log("Successfully connected to the database");
          connection.release();
          resolve();
        }
      });
    });
  }

  query(sql, args) {
    return new Promise((resolve, reject) => {
      this.pool.query(sql, args, (err, rows) => {
        if (err) return reject(err);
        resolve(rows);
      });
    });
  }
}
const databaseService = new DatabaseService();
export default databaseService;

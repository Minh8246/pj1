import DatabaseService from "./database.services.js";

class UserServices {
  constructor() {
    this.sql_checkUserName =
      "SELECT count(userName) as count FROM account where userName= ? ";
    this.sql_checkPassword =
      "SELECT count(userName) as count FROM account where userName= ? AND password = ?";
    this.sql_getId =
      "SELECT account_id FROM account where userName = ? AND password = ?";
    this.sql_signup = "INSERT INTO account(userName,password) VALUES(?,?)";
  }

  async login(userName, password) {
    const result = await DatabaseService.query(this.sql_checkUserName, [
      userName,
    ]);
    if (result[0].count === 1) {
      const result2 = await DatabaseService.query(this.sql_checkPassword, [
        userName,
        password,
      ]);
      if (result2[0].count === 1) {
        const result3 = await DatabaseService.query(this.sql_getId, [
          userName,
          password,
        ]);
        return result3[0].account_id;
      } else {
        return "False password";
      }
    } else {
      return "Account not found";
    }
  }

  async signup(userName, password) {
    const result = await DatabaseService.query(this.sql_checkUserName, [
      userName,
    ]);

    if (result[0].count === 1) {
      return false;
    } else {
      await DatabaseService.query(this.sql_signup, [userName, password]);
      return true;
    }
  }
}

const userServices = new UserServices();

export default userServices;

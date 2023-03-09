const mysql = require("mysql");


const HOST =  "localhost";
const USER =  "root";
const PASSWORD = "rpm0811";
const PORT = 3306;
const DATABASE = "taskrpm";
const TIMEZONE = "utc";
const CHARSET = "utf8";

console.log(HOST, USER, PASSWORD);

const createConnection = () => {
  return mysql.createConnection({
    host: HOST,
    user: USER,
    password: PASSWORD,
    port: PORT,
    database: DATABASE,
  });
};

exports.querySync = (query, data, {} = {}) =>
  new Promise((res, rej) => {
    const connection = createConnection();
    connection.connect((error) => {
      if (error) {
        connection.end();
        return rej(error);
      }
      connection.query(query, data, (error, result) => {
        if (error) {
          connection.end();
          return rej(error);
        }
        res(result);
        connection.end();
      });
    });
  });
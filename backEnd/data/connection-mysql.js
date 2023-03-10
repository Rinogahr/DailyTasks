require("dotenv").config();
const mysql = require("mysql");


const HOST = process.env.DAILYTASK_DB_HOST || "localhost";
const USER = process.env.DAILYTASK_DB_USERNAME || "root";
const PASSWORD = process.env.DAILYTASK_DB_PASSWORD || "rpm0811";
const PORT = Number(process.env.DAILYTASK_DB_PORT  || 3306);
const DATABASE = process.env.DAILYTASK_DB_DATABASE || "dailytasks";
const TIMEZONE = process.env.DAILYTASK_TIMEZONE || "utc";
const CHARSET = process.env.DAILYTASK_CHARSET || "utf8";

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
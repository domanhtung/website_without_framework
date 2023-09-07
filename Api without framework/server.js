import http from "http";
import mysql from "mysql2";
import { requestModule } from "./module.js";

const port = 3001;
const host = "localhost";
const server = http.createServer();

export const mySql = mysql.createConnection({
  host: "127.0.0.1",
  port: "3306",
  user: "root",
  password: "sakaGAMI1",
  database: "world",
});

mySql.connect(function (err) {
  if (err) throw err;
});

server.on("request", (request, response) => {
  response.setHeader("Content-Type", "application/json");
  requestModule(request, response);
});

server.listen(port, host, (error) => {
  if (error) return console.log(`Error: ${error}`);
  console.log(`Server is running on http://${host}:${port}`);
});

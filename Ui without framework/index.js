import http from "http";
import { requestModule } from "./module.js";

const port = 3000;
const host = "localhost";
const server = http.createServer();

server.on("request", (request, response) => {
  response.setHeader("Content-Type", "text/html");
  requestModule(request, response);
});

server.listen(port, host, (error) => {
  if (error) return console.log(`Error: ${error}`);
  console.log(`Server is running on http://${host}:${port}`);
});

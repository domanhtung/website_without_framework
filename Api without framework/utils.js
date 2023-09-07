import { mySql } from "./server.js";

export const queryFromDB = async (query) => {
  return new Promise(function (resolve) {
    mySql.query(query, function (err, result) {
      if (!err) {
        resolve(result);
      } else {
        resolve({
          status: "error",
          message: "Error Getting Data",
          debug: err,
        });
      }
    });
  });
};

export const queryDataSuccess = (response, result) => {
  response.writeHead(200);
  const resultString = JSON.stringify(result);
  response.end(resultString);
};

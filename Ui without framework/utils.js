import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

export const renderFileHtml = async (url, response) => {
  try {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const contents = await fs.readFileSync(__dirname + url);
    if (contents) {
      response.writeHead(200);
      response.end(contents);
    } else {
      response.writeHead(404);
      response.end("err");
      return;
    }
  } catch (e) {
    response.writeHead(500);
    response.end(e);
    return;
  }
};

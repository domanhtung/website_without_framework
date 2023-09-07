import { mainUI } from "./controllers/main.js";

export const requestModule = (request, response) => {
  switch (request.url) {
    case "/":
      mainUI(request, response);
      break;
    case "/city":
      break;
    case "/language":
      break;
    default:
      mainUI(request, response);
      break;
  }
};

import {
  allDataCity,
  allDataCountryLanguage,
  allDataWorld,
} from "./controllers/world-controllers.js";

export const requestModule = (request, response) => {
  switch (request.url) {
    case "/city":
      allDataCity(request, response);
      break;
    case "/language":
      allDataCountryLanguage(request, response);
      break;
    default:
      allDataWorld(request, response);
      break;
  }
};

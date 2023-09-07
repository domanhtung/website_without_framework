import {
  getAllDataCity,
  getAllDataCountryLanguage,
  getAllDataWorld,
} from "../services/world-service.js";
import { queryDataSuccess } from "../utils.js";

export const allDataWorld = async (_, response) => {
  try {
    const result = await getAllDataWorld();
    queryDataSuccess(response, result);
  } catch (err) {
    response.writeHead(500);
    response.end(err);
    return;
  }
};

export const allDataCity = async (_, response) => {
  try {
    const result = await getAllDataCity();
    queryDataSuccess(response, result);
  } catch (err) {
    response.writeHead(500);
    response.end(err);
    return;
  }
};

export const allDataCountryLanguage = async (_, response) => {
  try {
    const result = await getAllDataCountryLanguage();
    queryDataSuccess(response, result);
  } catch (err) {
    response.writeHead(500);
    response.end(err);
    return;
  }
};

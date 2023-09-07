import { queryFromDB } from "../utils.js";

export const getAllDataWorld = async () => {
  const query = "SELECT * FROM country";
  return await queryFromDB(query);
};

export const getAllDataCity = async () => {
  const query = "SELECT * FROM city";
  return await queryFromDB(query);
};

export const getAllDataCountryLanguage = async () => {
  const query = "SELECT * FROM countrylanguage";
  return await queryFromDB(query);
};

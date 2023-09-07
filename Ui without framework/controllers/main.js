import { renderFileHtml } from "../utils.js";

export const mainUI = async (_, response) => {
  renderFileHtml("/ui/main.html", response);
};

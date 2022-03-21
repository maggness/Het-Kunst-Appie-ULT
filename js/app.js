import { getData } from "./modules/getData.js";
import "./modules/search.js";
import "./modules/openHelpText.js";
import "./routes/routie.js";

routie({
  "": () => {
    getData();
  },
  "art/:id": (id) => {
    getData(id);
  },
});

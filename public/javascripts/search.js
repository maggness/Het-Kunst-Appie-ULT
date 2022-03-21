import { getData } from "./getData.js";
import { searchInputSearchBar } from "./variables.js";
import { searchEasterEggs } from "./easterEggs.js";

//search
const search = () => {
  let searchTerm = searchInputSearchBar.value;
  searchEasterEggs();
};

searchInputSearchBar.addEventListener("keyup", function (e) {
  search();
  getData();
});

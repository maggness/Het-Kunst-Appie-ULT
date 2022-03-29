import "./search.js";
import "./getData.js";
import {
  searchInputSearchBar,
  itemsSection,
  artistsForError,
} from "./variables.js";

const artistsForError = [
  "Rembrandt",
  "Vermeer",
  "Hals",
  "Cuyp",
  "Asselijn",
  "Steen",
];

// Error screen if there are no results while searching
export const searchError = (data) => {
  let searchTerm = searchInputSearchBar.value;
  if (data.artObjects.length === 0) {
    const artistName =
      artistsForError[Math.floor(Math.random() * artistsForError.length)];
    itemsSection.insertAdjacentHTML(
      "afterbegin",
      "<p class='searchErrorTekst'>We found nothing with '<span class='SearchErrorInput'>" +
        searchTerm +
        "</span>', try a name like <span class='masterName'>" +
        artistName +
        "</span>. Or try to type out the full name of the Master/Artwork."
    );
  }
};
if (window.location.href.indexOf("art") > -1) { 

// Zoom for artwork
let artWorkScale = 1;
const detailItemSection = document.querySelector("#artDetail");
const detailItemSectionImg = document.querySelector("#artDetail img");

const zoomInArtwork = () => {
  artWorkScale = artWorkScale * 2;
  if (artWorkScale > 8) {
    artWorkScale = 1;
  }
  detailItemSectionImg.className = "";
  detailItemSectionImg.classList.add(
    "artWorkScaleTranslate" + artWorkScale + ""
  );
};

detailItemSection.addEventListener("click", zoomInArtwork);
}
const hostname = "127.0.0.1";
const express = require("express");
const fetch = require("node-fetch");
const request = require("request");
const app = express();
const port = 3000;
const apiURL = "https://www.rijksmuseum.nl/api/nl/collection";
const searchValue = "";
const artLength = 8;

require("dotenv").config();

const { API_KEY } = process.env;

// Link the templating engine to the express app
app.set("view engine", "ejs");

// Tell the views engine/ejs where the template files are stored (Settingname, value)
app.set("views", "views");

// Tell express to use a 'public' folder
app.use(express.static("public"));

// render home
app.get("/", (req, res) => {
  fetch(`${apiURL}?key=${API_KEY}&q=${searchValue}&ps=${artLength}`)
    .then(async (response) => {
      console.log(searchValue);
      const artWorks = await response.json();
      res.render("index", {
        title: "Home",
        data: artWorks.artObjects,
      });
    })
    .catch((err) => res.send(err));
});

// render art detail
app.get("/art/:id", function (req, res) {
  fetch(`${apiURL}?key=${API_KEY}&q=${searchValue}&ps=${artLength}`)
    .then(async (response) => {
      const artWorks = await response.json();
      const result = artWorks.artObjects.filter(
        (item) => item.id === req.params.id
      );

      res.render("results", {
        title: "Results" + req.params.id,
        data: result,
      });
    })
    .catch((err) => res.send(err));
});

app.listen(port, () => {
  console.log(
    `Lekker man, hij is hier te vinden: http://${hostname}:${port}/, zo niet zoek het uit.`
  );
});

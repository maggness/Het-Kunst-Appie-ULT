const hostname = "127.0.0.1";
const express = require("express");
const fetch = require("node-fetch");
const request = require("request");
const app = express();
const port = 3000;
const apiURL = "https://www.rijksmuseum.nl/api/nl/collection";
const searchValue = "";
let artLength = '10';

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
  fetch(`${apiURL}?key=${API_KEY}&q=${searchValue}&ps=${artLength}&imgonly=true`)
    .then(async (response) => {
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
  fetch(`${apiURL}/${req.params.id}?key=${API_KEY}&imgonly=true`)
    .then(async (response) => {
      const artWorks = await response.json();
      res.render("results", {
        title: "Artwork: " + req.params.id,
        data: artWorks.artObject,
      });
    })
    .catch((err) => res.send(err));
});

app.get('/offline', (req, res) => {
  res.render("offline", {
    title: "You are Offline"
  });
})

app.get('/search', (req, res) => {
  const searchValue = req.query.q
  fetch(`${apiURL}?key=${API_KEY}&q=${searchValue}&ps=${artLength}&imgonly=true`)
  .then(async (response) => {
    const artWorks = await response.json();
    res.render("index", {
      title: "Results for " + searchValue,
      data: artWorks.artObjects,
    });
  })
  .catch((err) => res.send(err));
})

app.listen(port, () => {
  console.log(
    `Lekker man, hij is hier te vinden: http://${hostname}:${port}/, zo niet zoek het uit.`
  );
});

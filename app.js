const hostname = "127.0.0.1";
const express = require("express")
const request = require('request');
const app = express();
const port = 3000;

require("dotenv").config();

const { API_KEY } = process.env;

// Link the templating engine to the express app
app.set("view engine", "ejs");

// Tell the views engine/ejs where the template files are stored (Settingname, value)
app.set("views", "views");

// Tell express to use a 'static' folder
app.use(express.static("public"));

// Create a home route
app.get("/", (req, res) => {
  // Send a plain string using res.send();
  request(
    `https://www.rijksmuseum.nl/api/nl/collection?key=${API_KEY}`,
    { json: true },
    (err, requestRes, json) => {
      if (err) {
        // We got an error
        res.send(err);
      } else {
        // Render the page using the 'posts' view and our body data
        res.render("index", {
          pageTitle: "Het Kunst Appie", // We use this for the page title, see views/index.ejs
          data: json.artObjects,
        });
      }
    }
  );
});

app.listen(port, () => {
  console.log(
    `Lekker man, hij is hier te vinden: http://${hostname}:${port}/, zo niet zoek het uit.`
  );
});

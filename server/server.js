const express = require("express"); //
const app = express();
const path = require("path");
const db = require("./knex.js");

//set up static assets(image, css,html,image)
// __dirname --> directory name of file is
app.use(express.static(path.resolve(__dirname, "..", "build")));
// backend default server 9000
const port = process.env.PORT || 9000;

// Api to get data from backend
app.get("/api/allshoes", async (req, res) => {
  try {
    const allshoes = await db.select().table("shoesInfo");
    res.json(allshoes);
  } catch (err) {
    console.error("Error loading locations!", err);
    res.sendStatus(500);
  }
});

app.post("/api/allshoes", async (req, res) => {});

app.listen(port, () => {
  console.log(`App listing port ${port}`);
});

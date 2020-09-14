const express = require("express"); //
const app = express();
const path = require("path");
const db = require("./knex.js");

//set up static assets
app.use(express.static(path.resolve(__dirname, "build")));

// listing port that setting in .env or default 4000
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`App listing port ${port}`);
});

// Api to get data from backend
app.get("/api/allshoes", async (req, res) => {
  try {
    const allshoes = await db.select().table("shoesRack");
    res.send(allshoes);
  } catch (err) {
    console.error("Error loading locations!", err);
    res.sendStatus(500);
  }
});

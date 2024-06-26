const express = require("express");

const app = express();
const { query } = require("./data.js");

app.use(express.json());

app.get("/api20001575/books", async (req, res) => {
  console.info(`Getting all books`);

  const books = await query("SELECT * FROM tblbookIUH20001575");
  res.json(books);
});

app.listen(5000, () => {
  console.info(`Server started listening on port 80`);
});

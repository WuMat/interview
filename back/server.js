const express = require("express");
const app = express();
const port = 8080;
const cors = require("cors");

app.use(cors());

const solana = [
  { coin: "solana", short: "sol", price: 101, volume: 8373823, change24: 3 },
  { coin: "serum", short: "srm", price: 2, volume: 9488232, change24: 4 },
  { coin: "Oxygen", short: "oxy", price: 20, volume: 12344344, change24: 2.5 },
];

const eth = [
  {
    name: "Ethereum",
    shortName: "eth",
    actualPrice: 3100,
    volume: 34425735,
    change24: 10,
  },
  {
    name: "Decentraland",
    shortName: "mana",
    actualPrice: 2.05,
    volume: 9488232,
    change24: 4.02,
  },
  {
    name: "aave",
    shortName: "aave",
    actualPrice: 176,
    volume: 358627445,
    change24: 7.08,
  },
];

app.get("/solana", function (req, res) {
  res.send(solana);
});

app.get("/ethereum", function (req, res) {
  res.send(eth);
});

app.listen(port, function (req, res) {
  console.log(`Server is listening on port ${port}!`);
});

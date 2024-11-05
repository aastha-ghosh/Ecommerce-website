const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const products = [
    { id: 1, title: "Pedestal Fan with Remote Control", price: "$37" },
    { id: 2, title: "Electric Egg Boiler", price: "$20" },
    { id: 3, title: "Grill Sandwich Maker", price: "$50" },
  ];
  res.json(products);
});

module.exports = router;

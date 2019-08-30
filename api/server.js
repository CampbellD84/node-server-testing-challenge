const express = require("express");
const Supplies = require("../schoolsupplies/supplies-model");

const server = express();

server.use(express.json());

server.get("/supplies", async (req, res) => {
  const supplies = await Supplies.getSupplies();

  try {
    res.status(200).json({ message: "Got 'em!", supplies });
  } catch ({ err }) {
    res.status(500).json({ err });
  }
});

server.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const supply = await Supplies.remove(id);

  try {
    res.status(201).json({ message: "removed supply", supply });
  } catch ({ err }) {
    res.status(500).json({ err, message: "could not remove supply." });
  }
});

module.exports = server;

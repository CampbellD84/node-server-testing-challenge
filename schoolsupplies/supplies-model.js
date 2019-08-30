const db = require("../data/dbConfig");

module.exports = {
  insert,
  remove,
  getSupplies
};

async function insert(supply) {
  const [id] = await db("schoolsupplies").insert(supply, "id");

  return db("schoolsupplies")
    .where({ id })
    .first();
}

function remove(id) {
  return db("schoolsupplies")
    .where({ id })
    .del();
}

function getSupplies() {
  return db("schoolsupplies");
}

exports.up = function(knex) {
  return knex.schema.createTable("schoolsupplies", tbl => {
    tbl.increments();
    tbl.string("name", 128).notNullable();
    tbl.text("description").notNullable();
    tbl.integer("quantity").notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("schoolsupplies");
};

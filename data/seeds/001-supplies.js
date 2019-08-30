exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("schoolsupplies")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("schoolsupplies").insert([
        {
          id: 1,
          name: "pencils",
          description: "writing utensils you can fix mistakes with",
          quantity: 24
        },
        {
          id: 2,
          name: "pens",
          description: "writing utensils for signing legal forms",
          quantity: 24
        },
        {
          id: 3,
          name: "moleskin notebooks",
          description: "somewhere to write my billion dollar startup ideas",
          quantity: 2
        }
      ]);
    });
};

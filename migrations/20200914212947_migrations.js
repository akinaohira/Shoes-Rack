exports.up = function (knex) {
  return knex.schema.createTable("shoesInfo", (table) => {
    table.increments().index();
    table.text("name");
    table.string("color");
    table.string("type");
    table.string("size");
    table.integer("year_bounght");
    table.string("where_to_bought");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("shoesInfo");
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("carddata", (table) => {
    table.increments("id").primary();
    table.string("card_number", 16).notNullable();
    table.integer("expiration_date", 7).notNullable();
    table.integer("cvv", 4);
    table.string("card_name").notNullable();
    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("carddata");
};

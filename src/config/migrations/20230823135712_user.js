/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("user", (table) => {
    table.increments("id").primary();
    table.string("email").notNullable();
    table.string("nome").notNullable();
    table.string("senha").notNullable();
    table.string("rua").notNullable();
    table.string("cep").notNullable();
    table.string("numero").notNullable();
    table.string("estado").notNullable();
    table.string("cidade").notNullable();
    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("user");
};

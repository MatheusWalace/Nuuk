/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("produtos", (table) => {
    table.string("id").primary();
    table.string("nome").notNullable();
    table.string("usuario_id").notNullable();
    table.string("preco").notNullable();
    table.string("vendido").notNullable();
    table.string("descricao").notNullable();
    table.string("fotos").notNullable();
    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("produtos");
};

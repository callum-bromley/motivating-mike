/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('heckles', (table) => {
    table.increments('id')
    table.string('heckle')
    table.integer('severity')
    table.integer('avatar_id')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('heckles')
}

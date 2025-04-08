/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('heckles', (table) => {
    table.number('id').primary()
    table.integer('todos_id')
    table.integer('avatar_id')
    table.string('heckles')
    table.integer('severity')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('heckles')
}

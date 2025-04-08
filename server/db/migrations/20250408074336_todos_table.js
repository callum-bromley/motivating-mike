/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('todos', (table) => {
    table.increments('id')
    table.string('task')
    table.boolean('status')
    table.integer('urgency')
    table.timestamp('created')
    table.timestamp('due')
    table.integer('user_id')
    table.number('avatar_id')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('todos')
}

/**
 * @param {import('knex').Knex} knex
 */
export async function up(knex) {
  return knex.schema.createTable('units', (table) => {
    table.increments('id')
    table.string('number').notNullable().unique() // '01'
    table.string('name').notNullable()
  })
}

export async function down(knex) {
  return knex.schema.dropTable('units')
}

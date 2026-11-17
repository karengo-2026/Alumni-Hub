/**
 * @param {import('knex').Knex} knex
 */
export async function up(knex) {
  return knex.schema.createTable('resources', (table) => {
    table.increments('id')
    table.integer('unit_id').references('units.id').onDelete('SET NULL').defaultTo(null) // null = General
    table.enu('type', ['Docs', 'Handbook', 'Guide', 'Cheatsheet', 'Video']).notNullable()
    table.string('title').notNullable()
    table.string('url').notNullable()
    table.string('description').defaultTo(null) // e.g. 'react.dev' or 'Video guide · 18:45'
    table.string('added_by').defaultTo(null) // Auth0 id; null for seeded resources
    table.timestamp('created_at').defaultTo(knex.fn.now())
  })
}

export async function down(knex) {
  return knex.schema.dropTable('resources')
}
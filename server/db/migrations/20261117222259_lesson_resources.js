/**
 * @param {import('knex').Knex} knex
 */
export async function up(knex) {
  // Join table: a resource can fit many lessons, and a lesson can have many resources
  return knex.schema.createTable('lesson_resources', (table) => {
    table.integer('lesson_id').notNullable().references('lessons.id').onDelete('CASCADE')
    table.integer('resource_id').notNullable().references('resources.id').onDelete('CASCADE')
    table.primary(['lesson_id', 'resource_id']) // each link only once
  })
}

export async function down(knex) {
  return knex.schema.dropTable('lesson_resources')
}
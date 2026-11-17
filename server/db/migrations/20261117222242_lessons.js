/**
 * @param {import('knex').Knex} knex
 */
export async function up(knex) {
  return knex.schema.createTable('lessons', (table) => {
    table.increments('id')
    table.integer('unit_id').notNullable().references('units.id').onDelete('CASCADE')
    table.integer('lesson_number').notNullable() // 1 = first lesson in the unit
    table.string('name').notNullable()
    table.string('description').defaultTo(null)
    table.enu('source', ['handbook', 'miro']).notNullable().defaultTo('handbook')
    table.string('handbook_url').defaultTo(null) // null for Miro extras
    table.string('code_from_class_url').defaultTo(null)
    table.unique(['unit_id', 'lesson_number']) // no two lessons in the same spot
  })
}

export async function down(knex) {
  return knex.schema.dropTable('lessons')
}
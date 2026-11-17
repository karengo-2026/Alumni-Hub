/**
 * @param {import('knex').Knex} knex
 */
export async function up(knex) {
  return knex.schema.createTable('lectures', (table) => {
    table.increments('id')
    table
      .integer('lesson_id')
      .notNullable()
      .references('lessons.id')
      .onDelete('CASCADE')
    table.integer('lecture_number').notNullable() // 1 = watch first
    table.string('title').notNullable()
    table.string('youtube_id').notNullable() // part after v= in the YouTube link
    table.string('length').notNullable() // e.g. '1:07:30'
    table.unique(['lesson_id', 'lecture_number'])
  })
}

export async function down(knex) {
  return knex.schema.dropTable('lectures')
}

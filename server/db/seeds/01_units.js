/**
 * @param {import('knex').Knex} knex
 */
export async function seed(knex) {
  // This seed runs first, so it clears every table, children before parents,
  // so the foreign keys never point at a row that has gone
  await knex('lesson_resources').del()
  await knex('lectures').del()
  await knex('resources').del()
  await knex('lessons').del()
  await knex('units').del()

  // Units 01–06 from the units tab of alumni-hub-mvp1-data.xlsx
  await knex('units').insert([
    { id: 1, number: '01', name: 'JavaScript Fundamentals' },
    { id: 2, number: '02', name: 'Client-Side Rendering' },
    { id: 3, number: '03', name: 'Frontend APIs and Async' },
    { id: 4, number: '04', name: 'Express Server and JSON APIs' },
    { id: 5, number: '05', name: 'Databases' },
    { id: 6, number: '06', name: 'The Full Stack' },
  ])
}

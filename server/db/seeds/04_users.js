export async function seed(knex) {
  await knex('users').insert([
    {
      id: 1,
      name: 'Bob',
      avatar_id: 3
    },
    {
      id: 2,
      name: 'Betty',
      avatar_id: 2
    },
    {
      id: 3,
      name: 'Brian',
      avatar_id: 1
    },
  ])
}

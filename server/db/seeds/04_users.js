export async function seed(knex) {
  await knex('users').insert([
    {
      id: 1,
      auth_id: 'auth0|67f7a03499daeb618caf09e8',
      name: 'Bob',
      avatar_id: 3
    },
    {
      id: 2,
      auth_id: 'auth0|67f7a03499daeb618caf09e7',
      name: 'Betty',
      avatar_id: 2
    },
    {
      id: 3,
      auth_id: 'auth0|67f7a03499daeb618caf09e6',
      name: 'Brian',
      avatar_id: 1
    },
  ])
}

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
      auth_id: 'auth0|67fa332524fad18524c99d2f',
      name: 'Betty',
      avatar_id: 2
    },
    {
      id: 3,
      auth_id: 'auth0|67fb2186b22d575854197bbb',
      name: 'Brian',
      avatar_id: 1
    },
    {
      id: 4,
      auth_id: 'auth0|67fb254aff80744b40bf1075',
      name: 'Dave',
      avatar_id: 1
    },
    {
      id: 5,
      auth_id: 'auth0|67fb306c0864dfef98476fa6',
      name: 'Jane',
      avatar_id: 1
    },
  ])
}

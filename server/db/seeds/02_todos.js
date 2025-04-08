export async function seed(knex) {
  await knex('todos').insert([
    {
      id: 1,
      task: 'Cook',
      status: 0,
      urgency: 3,
      created: '2025-04-25 08:30:56',
      due: '2025-04-25 18:30:56',
      user_id: 2
    },
    {
      id: 1,
      task: 'Cook',
      status: 0,
      urgency: 1,
      created: '2025-04-25 08:30:56',
      due: '2025-04-25 10:30:56',
      user_id: 1
    },
  ]);
}
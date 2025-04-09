export async function seed(knex) {
  await knex('todos').insert([
    {
      id: 1,
      task: 'Cook',
      completed: null,
      urgency: 3,
      created: '2025-04-25 08:30:58',
      due: '2025-04-25 18:30:26',
      user_id: 2,
    },
    {
      id: 2,
      task: 'Clean',
      completed: '2025-04-25 9:30:53',
      urgency: 1,
      created: '2025-04-25 08:30:56',
      due: '2025-04-25 10:30:43',
      user_id: 1,
    },
    {
      id: 2,
      task: 'Shower',
      completed: null,
      urgency: 1,
      created: '2025-04-25 08:30:10',
      due: '2025-04-25 10:30:56',
      user_id: 1,
    },
  ])
}

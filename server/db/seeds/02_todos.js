export async function seed(knex) {
  await knex('todos').insert([
    {
      id: 1,
      task: 'Cook',
      urgency: 3,
      created: '2025-04-25 08:30:58',
      due: '2025-04-25 18:30:26',
      completed: null,
      user_id: 2,
    },
    {
      id: 2,
      task: 'Clean',
      urgency: 1,
      created: '2025-04-25 08:30:56',
      due: '2025-04-25 10:30:43',
      completed: '2025-04-25 9:30:53',
      user_id: 1,
    },
    {
      id: 2,
      task: 'Shower',
      urgency: 1,
      created: '2025-04-25 08:30:10',
      due: '2025-04-25 10:30:56',
      completed: null,
      user_id: 1,
    },
  ])
}

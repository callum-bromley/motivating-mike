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
      completed: '2025-04-25 09:30:53',
      urgency: 0,
      created: '2025-04-25 08:30:56',
      due: '2025-04-25 10:30:43',
      user_id: 1,
    },
    {
      id: 3,
      task: 'Shower',
      completed: null,
      urgency: 1,
      created: '2025-04-25 08:30:10',
      due: '2025-04-25 10:30:56',
      user_id: 1,
    },
    {
      id: 4,
      task: 'Task 4',
      completed: null,
      urgency: 3,
      created: '2025-04-25 08:30:58',
      due: '2025-04-25 18:30:26',
      user_id: 2,
    },
    {
      id: 5,
      task: 'Task 5',
      completed: '2025-04-25 09:30:53',
      urgency: 0,
      created: '2025-04-25 08:30:58',
      due: '2025-04-25 10:30:43',
      user_id: 2,
    },
    {
      id: 6,
      task: 'Task 6',
      completed: '2025-04-25 15:32:27',
      urgency: 0,
      created: '2025-04-25 08:30:58',
      due: '2025-04-25 15:26:35',
      user_id: 1,
    },
    {
      id: 7,
      task: 'Task 7',
      completed: '2025-04-25 10:45:42',
      urgency: 0,
      created: '2025-04-25 08:30:58',
      due: '2025-04-25 20:57:22',
      user_id: 1,
    },
    {
      id: 8,
      task: 'Task 8',
      completed: null,
      urgency: 1,
      created: '2025-04-25 08:30:58',
      due: '2025-04-25 13:28:30',
      user_id: 1,
    },
    {
      id: 9,
      task: 'Task 9',
      completed: '2025-04-25 00:46:18',
      urgency: 0,
      created: '2025-04-25 08:30:58',
      due: '2025-04-25 01:52:26',
      user_id: 2,
    },
    {
      id: 10,
      task: 'Task 10',
      completed: '2025-04-25 13:02:09',
      urgency: 0,
      created: '2025-04-25 08:30:58',
      due: '2025-04-25 13:20:52',
      user_id: 2,
    },
    {
      id: 11,
      task: 'Task 11',
      completed: '2025-04-25 23:59:37',
      urgency: 0,
      created: '2025-04-25 08:30:58',
      due: '2025-04-25 06:21:47',
      user_id: 2,
    },
    {
      id: 12,
      task: 'Task 12',
      completed: '2025-04-25 22:51:38',
      urgency: 0,
      created: '2025-04-25 08:30:58',
      due: '2025-04-25 06:44:58',
      user_id: 1,
    },
    {
      id: 13,
      task: 'Task 13',
      completed: null,
      urgency: 2,
      created: '2025-04-25 08:30:58',
      due: '2025-04-25 06:40:10',
      user_id: 1,
    },
    {
      id: 14,
      task: 'Task 14',
      completed: '2025-04-25 12:04:22',
      urgency: 0,
      created: '2025-04-25 08:30:58',
      due: '2025-04-25 02:42:43',
      user_id: 2,
    },
    {
      id: 15,
      task: 'Task 15',
      completed: null,
      urgency: 2,
      created: '2025-04-25 08:30:58',
      due: '2025-04-25 01:48:42',
      user_id: 2,
    },
    {
      id: 16,
      task: 'Task 16',
      completed: null,
      urgency: 1,
      created: '2025-04-25 08:30:58',
      due: '2025-04-25 16:50:17',
      user_id: 1,
    },
    {
      id: 17,
      task: 'Task 17',
      completed: null,
      urgency: 2,
      created: '2025-04-25 08:30:58',
      due: '2025-04-25 19:56:51',
      user_id: 1,
    },
    {
      id: 18,
      task: 'Task 18',
      completed: null,
      urgency: 1,
      created: '2025-04-25 08:30:58',
      due: '2025-04-25 16:25:40',
      user_id: 1,
    },
    {
      id: 19,
      task: 'Task 19',
      completed: null,
      urgency: 3,
      created: '2025-04-25 08:30:58',
      due: '2025-04-25 19:04:05',
      user_id: 1,
    },
    {
      id: 20,
      task: 'Task 20',
      completed: '2025-04-25 13:19:34',
      urgency: 0,
      created: '2025-04-25 08:30:58',
      due: '2025-04-25 15:37:31',
      user_id: 2,
    },
    {
      id: 21,
      task: 'Task 21',
      completed: null,
      urgency: 3,
      created: '2025-04-25 08:30:58',
      due: '2025-04-25 15:53:36',
      user_id: 2,
    },
    {
      id: 22,
      task: 'Task 22',
      completed: null,
      urgency: 2,
      created: '2025-04-25 08:30:58',
      due: '2025-04-25 02:41:05',
      user_id: 2,
    },
    {
      id: 23,
      task: 'Task 23',
      completed: null,
      urgency: 2,
      created: '2025-04-25 08:30:58',
      due: '2025-04-25 20:01:38',
      user_id: 1,
    },
  ])
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex('heckles').insert([
    {
      id: 1,
      todo_id: 1,
      avatar_id: 1,
      heckles: 'Come on, you can do it!',
      celebrations: 'Nice!',
      severity: 3,
    },
    {
      id: 2,
      todo_id: 2,
      avatar_id: 1,
      heckles: 'Put your back into it!',
      celebrations: 'You done did it',
      severity: 2,
    },
    {
      id: 3,
      todo_id: 3,
      avatar_id: 1,
      heckles: 'Dude, HURRY UP. I got a golf match to get to',
      celebrations: 'Bloody good job',
      severity: 1,
    },
    {
      id: 4,
      todo_id: 4,
      avatar_id: 2,
      heckles: 'Come on lets get started',
      celebrations: 'Excellent',
      severity: 3,
    },
    {
      id: 5,
      todo_id: 5,
      avatar_id: 2,
      heckles: "You're headed for detention!",
      celebrations: 'Great work!',
      severity: 2,
    },
    {
      id: 6,
      todo_id: 6,
      avatar_id: 2,
      heckles: "I'm not paid enough for this",
      celebrations: 'Phew, You made it!',
      severity: 1,
    },
    {
      id: 7,
      todo_id: 7,
      avatar_id: 3,
      heckles: 'Slip slop slap and sthmash out your goals!',
      celebrations: 'woop woop',
      severity: 3,
    },
    {
      id: 8,
      todo_id: 8,
      avatar_id: 3,
      heckles: 'Whoopsty doopsty you should probably start that',
      celebrations: 'Holy tamoli!',
      severity: 2,
    },
    {
      id: 9,
      todo_id: 9,
      avatar_id: 3,
      heckles: "Scadoosh! You're in trouble. Glop glop glop!",
      celebrations: 'Wow im so proud of you! Sklip sklamp plomp!',
      severity: 1,
    },
  ])
}

// avatar_id 1 = Mike
// avatar_id 2 = Mandy
// avatar_id 3 = Slappy

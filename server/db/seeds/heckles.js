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
      severity: 3,
    },
    {
      id: 2,
      todo_id: 2,
      avatar_id: 1,
      heckles: 'Put your back into it!',
      severity: 2,
    },
    {
      id: 3,
      todo_id: 3,
      avatar_id: 1,
      heckles: 'Dude, HURRY UP. I got a golf match to get to',
      severity: 1,
    },
    {
      id: 4,
      todo_id: 4,
      avatar_id: 2,
      heckles: 'Complete this in your lunch break',
      severity: 3,
    },
    {
      id: 5,
      todo_id: 5,
      avatar_id: 2,
      heckles: "You're headed for detention!",
      severity: 2,
    },
    {
      id: 6,
      todo_id: 6,
      avatar_id: 2,
      heckles: "I'm not paid enough for this",
      severity: 1,
    },
    {
      id: 7,
      todo_id: 7,
      avatar_id: 3,
      heckles: 'Slip slop slap and sthmash out your goals!',
      severity: 3,
    },
    {
      id: 8,
      todo_id: 8,
      avatar_id: 3,
      heckles: 'Whoopsty doopsty you should probably start that',
      severity: 2,
    },
    {
      id: 9,
      todo_id: 9,
      avatar_id: 3,
      heckles: "Scadoosh! You're in trouble. Glop glop glop!",
      severity: 1,
    },
  ])
}

// avatar_id 1 = Mike
// avatar_id 2 = Mandy
// avatar_id 3 = Slappy

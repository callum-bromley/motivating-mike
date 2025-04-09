/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex('heckles').insert([
    {
      id: 1,
      heckle: 'Come on, you can do it!',

            avatar_id: 1,

      severity: 3,
    },
    {
      heckle: 'Put your back into it!',
      heckle: 'Put your back into it!',
            avatar_id: 1,


      severity: 2,
    },
      heckle: 'Dude, HURRY UP. I got a golf match to get to',
      avatar_id: 1,
            avatar_id: 1,

      heckle: 'Dude, HURRY UP. I got a golf match to get to',

      severity: 1,
      heckle: 'Come on lets get started',
      todo_id: 4,
            avatar_id: 2,

      avatar_id: 2,
      heckle: 'Come on lets get started',

      heckle: "You're headed for detention!",
      id: 5,
            avatar_id: 2,

      todo_id: 5,
      avatar_id: 2,
      heckle: "You're headed for detention!",
      heckle: "I'm not paid enough for this",
    {
            avatar_id: 2,

      id: 6,
      todo_id: 6,
      avatar_id: 2,
      heckle: 'Slip slop slap and sthmash out your goals!',
    },
            avatar_id: 3,

    {
      id: 7,
      todo_id: 7,
      heckle: 'Whoopsty doopsty you should probably start that',
      severity: 3,
            avatar_id: 3,

    },
    {
      id: 8,
      heckle: "Scadoosh! You're in trouble. Glop glop glop!",

            avatar_id: 3,

      severity: 2,
    },
    {
      id: 9,
      todo_id: 9,
      avatar_id: 3,
      heckle: "Scadoosh! You're in trouble. Glop glop glop!",

      severity: 1,
    },
  ])
}

// avatar_id 1 = Mike
// avatar_id 2 = Mandy
// avatar_id 3 = Slappy

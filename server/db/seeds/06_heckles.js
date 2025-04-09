/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex('heckles').insert([
    {
      id: 10,
      heckle: 'Come on, you can do it!',
      severity: 2,
      avatar_id: 1
    },
    {
      id: 11,
      heckle: 'Put your back into it!',
      severity: 1,
      avatar_id: 1
    },
    {
      id: 12,
      heckle: 'Dude, HURRY UP. I got a golf match to get to',
      severity: 3,
      avatar_id: 1
    },
    {
      id: 13,
      heckle: 'come on you can do it',
      severity: 2,
      avatar_id: 3
    },
    {
      id: 14,
      heckle: 'Come on lets get started',
      severity: 1,
      avatar_id: 2
    },
    {
      id: 15,
      heckle: "You're headed for detention!",
      severity: 2,
      avatar_id: 2
    },
    {
      id: 16,
      heckle: "I'm not paid enough for this",
      severity: 3,
      avatar_id: 3

    },
    {
      id: 17,
      heckle: 'Slip slop slap and sthmash out your goals!',
      severity: 1,
      avatar_id: 3
    },
    {
      id: 18,
      heckle: 'Whoopsty doopsty you should probably start that',
      severity: 3,
      avatar_id: 3
    }
  ])
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex('heckles').insert([
    {
      id: 1,
      avatar_id: 1,
      heckle: 'Nice!',
      severity: 0,
    },
    {
      id: 2,
      avatar_id: 1,
      heckle: 'You done did it',
      severity: 0,
    },
    {
      id: 3,
      avatar_id: 1,
      heckle: 'Bloody good job',
      severity: 0,
    },
    {
      id: 4,
      avatar_id: 2,
      heckle: 'Excellent',
      severity: 0,
    },
    {
      id: 5,
      avatar_id: 2,
      heckle: 'Great work!',
      severity: 0,
    },
    {
      id: 6,
      avatar_id: 2,
      heckle: 'Phew, You made it!',
      severity: 0,
    },
    {
      id: 7,
      avatar_id: 3,
      heckle: 'woop woop',
      severity: 3,
    },
    {
      id: 8,
      avatar_id: 3,
      heckle: 'Holy tamoli!',
      severity: 0,
    },
    {
      id: 9,
      avatar_id: 3,
      heckle: 'Wow im so proud of you! Sklip sklamp plomp!',
      severity: 0,
    },
  ])
}

// avatar_id 1 = Mike
// avatar_id 2 = Mandy
// avatar_id 3 = Slappy

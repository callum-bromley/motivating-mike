/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex('heckles').insert([
    {
      id: 1,
      heckle: 'Nice!',
      severity: 0,
      avatar_id: 1
    },
    {
      id: 2,
      heckle: 'You done did it',
      severity: 0,
      avatar_id: 1
    },
    {
      id: 3,
      heckle: 'Bloody good job',
      severity: 0,
      avatar_id: 1
    },
    {
      id: 4,
      heckle: 'Excellent',
      severity: 0,
      avatar_id: 2
    },
    {
      id: 5,
      heckle: 'Great work!',
      severity: 0,
      avatar_id: 2
    },
    {
      id: 6,
      heckle: 'Phew, You made it!',
      severity: 0,
      avatar_id: 2
    },
    {
      id: 7,
      heckle: 'woop woop',
      severity: 3,
      avatar_id: 3

    },
    {
      id: 8,
      heckle: 'Holy tamoli!',
      severity: 0,
      avatar_id: 3
    },
    {
      id: 9,
      heckle: 'Wow im so proud of you! Sklip sklamp plomp!',
      severity: 0,
      avatar_id: 3
    }
  ])
}

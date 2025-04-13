/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex('heckles').insert([
    //Mike: Celebration
    {
      id: 115,
      heckle: 'Now that’s what I’m talkin’ about! Knew you had it in you.',
      severity: 0,
      avatar_id: 1,
    },
    {
      id: 116,
      heckle: 'Hard work pays off — feel that? That’s pride, kid.',
      severity: 0,
      avatar_id: 1,
    },
    {
      id: 117,
      heckle: 'No shortcuts, no excuses. Just grit. Well done.',
      severity: 0,
      avatar_id: 1,
    },
    {
      id: 118,
      heckle: 'You earned your break. Don’t get too soft now.',
      severity: 0,
      avatar_id: 1,
    },
    {
      id: 119,
      heckle: 'That’s another brick laid on the road to greatness.',
      severity: 0,
      avatar_id: 1,
    },

    //Mandy: Celebration

    {
      id: 120,
      heckle: 'About time! I was starting to lose hope — but look at you!',
      severity: 0,
      avatar_id: 2,
    },
    {
      id: 121,
      heckle: 'You did it, eh? Not bad for a whippersnapper.',
      severity: 0,
      avatar_id: 2,
    },
    {
      id: 122,
      heckle: 'Now sit down and have a biscuit. You’ve earned it — barely.',
      severity: 0,
      avatar_id: 2,
    },
    {
      id: 123,
      heckle: 'You’ve still got a lot to learn, but that was a good start.',
      severity: 0,
      avatar_id: 2,
    },
    {
      id: 124,
      heckle: 'I suppose I can be proud. Just don’t let it go to your head!',
      severity: 0,
      avatar_id: 2,
    },

    //Slappy: Celebration

    {
      id: 125,
      heckle: 'WOOO! Splash party!! You did it! You DID IT!',
      severity: 0,
      avatar_id: 3,
    },
    {
      id: 126,
      heckle: 'Seal of approval unlocked! 🎉 Slappy flops in delight',
      severity: 0,
      avatar_id: 3,
    },
    {
      id: 127,
      heckle: 'That’s how we do it in the deep end, baby!',
      severity: 0,
      avatar_id: 3,
    },
    {
      id: 128,
      heckle: 'I’m doing somersaults in your honor — actual somersaults!',
      severity: 0,
      avatar_id: 3,
    },
    {
      id: 129,
      heckle: 'High flipper! That was flippin’ amazing!',
      severity: 0,
      avatar_id: 3,
    },

    // {
    //   id: 120,
    //   heckle: ,
    //   severity: 0,
    //   avatar_id: 3,
    // },
    // {
    //   id: 2,
    //   heckle: 'You done did it',
    //   severity: 0,
    //   avatar_id: 1,
    // },
    // {
    //   id: 3,
    //   heckle: 'Bloody good job',
    //   severity: 0,
    //   avatar_id: 1,
    // },
    // {
    //   id: 4,
    //   heckle: 'Excellent',
    //   severity: 0,
    //   avatar_id: 2,
    // },
    // {
    //   id: 5,
    //   heckle: 'Great work!',
    //   severity: 0,
    //   avatar_id: 2,
    // },
    // {
    //   id: 6,
    //   heckle: 'Phew, You made it!',
    //   severity: 0,
    //   avatar_id: 2,
    // },
    // {
    //   id: 7,
    //   heckle: 'woop woop',
    //   severity: 3,
    //   avatar_id: 3,
    // },
    // {
    //   id: 8,
    //   heckle: 'Holy tamoli!',
    //   severity: 0,
    //   avatar_id: 3,
    // },
    // {
    //   id: 9,
    //   heckle: 'Wow im so proud of you! Sklip sklamp plomp!',
    //   severity: 0,
    //   avatar_id: 3,
    // },
  ])
}

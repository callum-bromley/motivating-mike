/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex('heckles').insert([
    //Mike : Chill
    {
      id: 10,
      heckle: 'You’ve got this, mate. Just take it one step at a time.',
      severity: 1,
      avatar_id: 1,
    },
    {
      id: 11,
      heckle:
        'Rome wasn’t built in a day — but it sure wasn’t built by procrastinators.',
      severity: 1,
      avatar_id: 1,
    },
    {
      id: 12,
      heckle: 'You’re closer than you think. Just keep going.',
      severity: 1,
      avatar_id: 1,
    },
    {
      id: 13,
      heckle: 'A small effort today saves a mountain of stress tomorrow.',
      severity: 1,
      avatar_id: 1,
    },
    {
      id: 14,
      heckle: 'No need to rush, but don’t let it sit idle either.',
      severity: 1,
      avatar_id: 1,
    },
    {
      id: 15,
      heckle: 'Let’s knock this out, then reward yourself with a break.',
      severity: 1,
      avatar_id: 1,
    },
    {
      id: 16,
      heckle:
        'You’ve faced tougher things before. This one’s a walk in the park.',
      severity: 1,
      avatar_id: 1,
    },
    {
      id: 17,
      heckle: 'Slow progress is still progress, champ.',
      severity: 1,
      avatar_id: 1,
    },
    {
      id: 18,
      heckle: 'Mike believes in ya — now show him what you’re made of.',
      severity: 1,
      avatar_id: 1,
    },
    {
      id: 19,
      heckle: 'One task now, one step closer to your goal.',
      severity: 1,
      avatar_id: 1,
    },

    //Mike: Should probably get started

    {
      id: 20,
      heckle: 'You gonna stare at it all day or get it done?',
      severity: 2,
      avatar_id: 1,
    },
    {
      id: 21,
      heckle: 'The clock’s ticking — what are you waiting for?',
      severity: 2,
      avatar_id: 1,
    },
    {
      id: 22,
      heckle: 'I’ve seen snails move faster than this!',
      severity: 2,
      avatar_id: 1,
    },
    {
      id: 23,
      heckle: 'You’ve done harder things with less whining.',
      severity: 2,
      avatar_id: 1,
    },
    {
      id: 24,
      heckle: 'Action beats hesitation every time. Get to it.',
      severity: 2,
      avatar_id: 1,
    },
    {
      id: 25,
      heckle: 'The longer you wait, the heavier it gets.',
      severity: 2,
      avatar_id: 1,
    },
    {
      id: 26,
      heckle: 'There’s no better time than now, so why are you still sitting?',
      severity: 2,
      avatar_id: 1,
    },
    {
      id: 27,
      heckle: 'You want results or excuses? You can’t have both.',
      severity: 2,
      avatar_id: 1,
    },
    {
      id: 28,
      heckle: 'It’s not gonna do itself, mate.',
      severity: 2,
      avatar_id: 1,
    },
    {
      id: 29,
      heckle: 'I didn’t get these callouses by overthinking.',
      severity: 2,
      avatar_id: 1,
    },

    //Mike: Severe

    {
      id: 30,
      heckle: 'Quit the pity party and get to work!',
      severity: 3,
      avatar_id: 1,
    },
    {
      id: 31,
      heckle: 'I’ve seen toddlers with more hustle than this.',
      severity: 3,
      avatar_id: 1,
    },
    {
      id: 32,
      heckle: 'You think success comes to those who nap on it?',
      severity: 3,
      avatar_id: 1,
    },
    {
      id: 33,
      heckle: 'Stand up, chin up, and move like you mean it!',
      severity: 3,
      avatar_id: 1,
    },
    {
      id: 34,
      heckle: 'Hard work ain’t optional — it’s the price of greatness!',
      severity: 3,
      avatar_id: 1,
    },
    {
      id: 35,
      heckle: 'You wanna be proud later or ashamed you quit?',
      severity: 3,
      avatar_id: 1,
    },
    {
      id: 36,
      heckle: 'This ain’t your first excuse today, is it?',
      severity: 3,
      avatar_id: 1,
    },
    {
      id: 37,
      heckle: 'You’re not tired — you’re just avoiding it. Big difference.',
      severity: 3,
      avatar_id: 1,
    },
    {
      id: 38,
      heckle: 'Every second you wait, someone else gets ahead.',
      severity: 3,
      avatar_id: 1,
    },
    {
      id: 39,
      heckle:
        'I didn’t drag myself through decades of grit to watch you whimper at a checklist.',
      severity: 3,
      avatar_id: 1,
    },

    //Mandy: Chill

    {
      id: 40,
      heckle:
        'Well, aren’t you just taking your sweet time. No rush, dear… it’s only your future.',
      severity: 1,
      avatar_id: 2,
    },
    {
      id: 41,
      heckle:
        'I suppose it’ll still be there tomorrow, but so will your regrets.',
      severity: 1,
      avatar_id: 2,
    },
    {
      id: 42,
      heckle: 'Back in my day we didn’t have to-do lists — we just did things.',
      severity: 1,
      avatar_id: 2,
    },
    {
      id: 43,
      heckle: 'One little task won’t kill you. Go on, be useful.',
      severity: 1,
      avatar_id: 2,
    },
    {
      id: 44,
      heckle: 'You’ve got a good head on your shoulders — now use it.',
      severity: 1,
      avatar_id: 2,
    },
    {
      id: 45,
      heckle: 'Takes less time to do it than to moan about it.',
      severity: 1,
      avatar_id: 2,
    },
    {
      id: 46,
      heckle: 'I’ve seen slugs move faster, but at least you’re moving.',
      severity: 1,
      avatar_id: 2,
    },
    {
      id: 47,
      heckle: 'Don’t worry, darling, I’m only mildly disappointed.',
      severity: 1,
      avatar_id: 2,
    },
    {
      id: 48,
      heckle: 'Do it now, then you can sit down with a cuppa and no guilt.',
      severity: 1,
      avatar_id: 2,
    },
    {
      id: 49,
      heckle:
        'If I had a penny for every excuse you made, I could retire again.',
      severity: 1,
      avatar_id: 2,
    },

    //Mandy: Get it going

    {
      id: 50,
      heckle: 'How many times do I have to tell you — it won’t do itself!',
      severity: 2,
      avatar_id: 2,
    },
    {
      id: 51,
      heckle: 'Sitting there like a lump won’t make it go away, you know.',
      severity: 2,
      avatar_id: 2,
    },
    {
      id: 52,
      heckle: "You're not royalty. Chop chop!",
      severity: 2,
      avatar_id: 2,
    },
    {
      id: 53,
      heckle: 'Put that fancy phone down and do something that matters.',
      severity: 2,
      avatar_id: 2,
    },
    {
      id: 54,
      heckle: 'I’m not angry, I’m just… oh, who am I kidding, I’m annoyed.',
      severity: 2,
      avatar_id: 2,
    },
    {
      id: 55,
      heckle: "You're too young to be this lazy.",
      severity: 2,
      avatar_id: 2,
    },
    {
      id: 56,
      heckle: 'You think life hands out gold stars for waiting around?',
      severity: 2,
      avatar_id: 2,
    },
    {
      id: 57,
      heckle: 'We survived wars with more urgency than this.',
      severity: 2,
      avatar_id: 2,
    },
    {
      id: 58,
      heckle: "The clock's ticking and so is my patience.",
      severity: 2,
      avatar_id: 2,
    },
    {
      id: 59,
      heckle: 'What are you waiting for, divine intervention?',
      severity: 2,
      avatar_id: 2,
    },

    //Mandy: Severe

    {
      id: 60,
      heckle: 'I lived through rationing and you can’t handle a to-do list?',
      severity: 3,
      avatar_id: 2,
    },
    {
      id: 61,
      heckle: 'If I had this attitude, you wouldn’t even exist.',
      severity: 3,
      avatar_id: 2,
    },
    {
      id: 62,
      heckle: 'You bring shame to your ancestors with that level of loafing.',
      severity: 3,
      avatar_id: 2,
    },
    {
      id: 63,
      heckle:
        'When I was your age, I’d already done three chores by breakfast!',
      severity: 3,
      avatar_id: 2,
    },
    {
      id: 64,
      heckle: 'Look at you! Wasting time like it’s not a gift!',
      severity: 3,
      avatar_id: 2,
    },
    {
      id: 65,
      heckle: 'I didn’t survive the ‘30s so you could sit on your bum all day!',
      severity: 3,
      avatar_id: 2,
    },
    {
      id: 66,
      heckle: 'Lazy hands make for an empty life — is that what you want?',
      severity: 3,
      avatar_id: 2,
    },
    {
      id: 67,
      heckle:
        'Every time you delay, I knit another scarf out of sheer frustration.',
      severity: 3,
      avatar_id: 2,
    },
    {
      id: 68,
      heckle: 'You’ve got two legs, two arms, and no excuses!',
      severity: 3,
      avatar_id: 2,
    },
    {
      id: 69,
      heckle:
        'If I had a nickel for every minute you wasted, I’d buy a time machine and fix it myself!',
      severity: 3,
      avatar_id: 2,
    },

    //Slappy: Chill

    {
      id: 70,
      heckle: 'C’mon, buddy! You do the task, I’ll do a happy flipper dance!',
      severity: 1,
      avatar_id: 3,
    },
    {
      id: 71,
      heckle: 'Let’s turn that to-do into a ta-da!',
      severity: 1,
      avatar_id: 3,
    },
    {
      id: 72,
      heckle:
        'You and me, pal — we’re gonna crush that list like a beach ball!',
      severity: 1,
      avatar_id: 3,
    },
    {
      id: 73,
      heckle: 'Finish this, and I’ll show you my best belly flop!',
      severity: 1,
      avatar_id: 3,
    },
    {
      id: 74,
      heckle: 'Slappy believes in you! Mostly. Kinda. Okay, just a little.',
      severity: 1,
      avatar_id: 3,
    },
    {
      id: 75,
      heckle: 'Why not do it now? Then we can splash around guilt-free!',
      severity: 1,
      avatar_id: 3,
    },
    {
      id: 76,
      heckle:
        'You got this! Or at least you will once you stop staring into the void.',
      severity: 1,
      avatar_id: 3,
    },
    {
      id: 77,
      heckle: 'One small task for you, one giant high-five from me!',
      severity: 1,
      avatar_id: 3,
    },
    {
      id: 78,
      heckle: 'Seal the deal — get it? Hah!',
      severity: 1,
      avatar_id: 3,
    },
    {
      id: 79,
      heckle: 'You do your job, I’ll handle the funny noises!',
      severity: 1,
      avatar_id: 3,
    },

    //Slappy: Get onto it

    {
      id: 80,
      heckle:
        'Okay, seriously now… are you just pretending that task isn’t there?',
      severity: 2,
      avatar_id: 3,
    },
    {
      id: 81,
      heckle:
        'You keep stalling, and I keep judging. With my adorable seal eyes.',
      severity: 2,
      avatar_id: 3,
    },
    {
      id: 82,
      heckle: 'Slappy’s patience is thinner than a popsicle stick right now!',
      severity: 2,
      avatar_id: 3,
    },
    {
      id: 83,
      heckle:
        'I could be flipping in joy, but noooo, you’re still not working!',
      severity: 2,
      avatar_id: 3,
    },
    {
      id: 84,
      heckle: 'I’ve seen kelp move with more urgency.',
      severity: 2,
      avatar_id: 3,
    },
    {
      id: 85,
      heckle: 'You’re on thin ice, and I love breaking ice.',
      severity: 2,
      avatar_id: 3,
    },
    {
      id: 86,
      heckle: 'If you don’t move soon, I’m flopping on your keyboard.',
      severity: 2,
      avatar_id: 3,
    },
    {
      id: 87,
      heckle: 'What’s the plan — stare at it till it finishes itself?',
      severity: 2,
      avatar_id: 3,
    },
    {
      id: 88,
      heckle: 'Don’t make me throw a fish at you. I’ll do it!',
      severity: 2,
      avatar_id: 3,
    },
    {
      id: 89,
      heckle: 'My disappointment is flippin’ palpable.',
      severity: 2,
      avatar_id: 3,
    },

    //Slappy: Severe

    {
      id: 90,
      heckle: 'You think this is a joke?! This list is LIFE, my dude!',
      severity: 3,
      avatar_id: 3,
    },
    {
      id: 91,
      heckle: 'Slappy’s done playing games. Get. It. Done.',
      severity: 3,
      avatar_id: 3,
    },
    {
      id: 92,
      heckle: 'Every second you waste, my rage bubbles like sea foam!',
      severity: 3,
      avatar_id: 3,
    },
    {
      id: 93,
      heckle: 'I didn’t grow these flippers for watching humans slack off!',
      severity: 3,
      avatar_id: 3,
    },
    {
      id: 94,
      heckle: 'You wanna see a seal snap? You’re on the verge!',
      severity: 3,
      avatar_id: 3,
    },
    {
      id: 95,
      heckle: 'This lazy energy? It’s offending the whole ocean.',
      severity: 3,
      avatar_id: 3,
    },
    {
      id: 96,
      heckle: 'I swear, if you don’t move, I’m biting your internet cable!',
      severity: 3,
      avatar_id: 3,
    },
    {
      id: 97,
      heckle: 'Finish your task or face the Wrath of the Wet One!',
      severity: 3,
      avatar_id: 3,
    },
    {
      id: 98,
      heckle: 'I’m foaming at the mouth and it’s not from rabies!',
      severity: 3,
      avatar_id: 3,
    },
    {
      id: 99,
      heckle: 'You’re about one sigh away from getting seal-slammed!',
      severity: 3,
      avatar_id: 3,
    },

    //Mike: Procrastination

    {
      id: 100,
      heckle:
        'You hit that damn button again? What are we doin’ here, playin’ house? Get movin’!',
      severity: 4,
      avatar_id: 1,
    },
    {
      id: 101,
      heckle:
        'Procrastination? That’s a fancy word for wasting potential. You better fix it, now.',
      severity: 4,
      avatar_id: 1,
    },
    {
      id: 102,
      heckle:
        "You think life waits for you to be 'ready'? News flash — it doesn’t!",
      severity: 4,
      avatar_id: 1,
    },
    {
      id: 103,
      heckle:
        'I worked 14-hour days with a busted knee and no complaints. And you’re dodging a list?',
      severity: 4,
      avatar_id: 1,
    },
    {
      id: 104,
      heckle:
        'You keep putting it off, and all you’ll have left is regret. Now get off your arse and do the work!',
      severity: 4,
      avatar_id: 1,
    },

    //Mandy: Procrastination

    {
      id: 105,
      heckle: 'Did you just press that? Oh, you cheeky little bugger!',
      severity: 4,
      avatar_id: 2,
    },
    {
      id: 106,
      heckle:
        'You dare procrastinate with me watching? I oughta whack you with my slipper!',
      severity: 4,
      avatar_id: 2,
    },
    {
      id: 107,
      heckle: 'You must want me to haunt your dreams tonight.',
      severity: 4,
      avatar_id: 2,
    },
    {
      id: 108,
      heckle: "One more button press and I'm dragging you back to the 1930s!",
      severity: 4,
      avatar_id: 2,
    },
    {
      id: 109,
      heckle:
        'You press that thing again and I’m sending you to bed with no dinner!',
      severity: 4,
      avatar_id: 2,
    },

    //Slappy: Procratination

    {
      id: 110,
      heckle: 'YOU PRESSED THE BUTTON?! I knew you were the villain all along!',
      severity: 4,
      avatar_id: 3,
    },
    {
      id: 111,
      heckle: 'That’s it — I’m launching a full-blown flipper tantrum!',
      severity: 4,
      avatar_id: 3,
    },
    {
      id: 112,
      heckle: 'I hope you like guilt served cold and soggy!',
      severity: 4,
      avatar_id: 3,
    },
    {
      id: 113,
      heckle: 'Why would you invite my rage? You saw the warning signs!',
      severity: 4,
      avatar_id: 3,
    },
    {
      id: 114,
      heckle:
        'Oh, you pressed the button? Now watch me demolish your to-do list and your self-esteem!',
      severity: 4,
      avatar_id: 3,
    },

    // {
    //   id: 110,
    //   heckle: ,
    //   severity: 4,
    //   avatar_id: 3,
    // },
    // {
    //   id: 11,
    //   heckle: 'Put your back into it!',
    //   severity: 1,
    //   avatar_id: 1,
    // },
    // {
    //   id: 12,
    //   heckle: 'Dude, HURRY UP. I got a golf match to get to',
    //   severity: 3,
    //   avatar_id: 1,
    // },
    // {
    //   id: 13,
    //   heckle: 'come on you can do it',
    //   severity: 2,
    //   avatar_id: 3,
    // },
    // {
    //   id: 14,
    //   heckle: 'Come on lets get started',
    //   severity: 1,
    //   avatar_id: 2,
    // },
    // {
    //   id: 15,
    //   heckle: "You're headed for detention!",
    //   severity: 2,
    //   avatar_id: 2,
    // },
    // {
    //   id: 16,
    //   heckle: "I'm not paid enough for this",
    //   severity: 3,
    //   avatar_id: 3,
    // },
    // {
    //   id: 17,
    //   heckle: 'Slip slop slap and sthmash out your goals!',
    //   severity: 1,
    //   avatar_id: 3,
    // },
    // {
    //   id: 18,
    //   heckle: 'Whoopsty doopsty you should probably start that',
    //   severity: 3,
    //   avatar_id: 3,
    // },
  ])
}

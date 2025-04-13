export async function seed(knex) {
  await knex('avatars').insert([
    {
      id: 1,
      name: 'Mike',
      description: 'Mike is the kind of guy who embodies determination and grit. Picture an old bloke with a weathered face, each wrinkle telling a story of hard work and perseverance. His hands, calloused from years of labor, grip tools with a fierce tenacity. Mike rises before dawn, fueled by a sense of purpose and an unwavering belief that success is earned, not given.\n\nWhen you’re feeling lazy or making excuses, Mike’s no-nonsense attitude cuts through the fog of doubt. He’s the first to remind you that every setback is just an opportunity to push harder. “Excuses don’t build character,” he often says, his voice gruff yet encouraging.\n\nWith a twinkle in his eye, Mike shares tales of his own struggles, each anecdote packed with lessons on resilience. He challenges you to rise to the occasion, pushing you to step outside your comfort zone. Whether it’s tackling a tough project or facing personal fears, Mike stands as a living testament to the power of hard work and commitment.\n\nWhen you’re around him, you can’t help but feel inspired. His relentless spirit ignites a fire within you, urging you to embrace challenges head-on and strive for greatness without a hint of hesitation. Mike doesn’t just motivate you; he lights a path forward, showing you that with hard work and determination, anything is possible.',
      image: '/public/images/avatars/mike.WebP'
    },
    {
      id: 2,
      name: 'Mandy',
      description: 'Mandy is a grumpy old grandmother with a heart of gold hidden beneath her tough exterior. Growing up in the 1920s, she carries the weight of the past in her furrowed brow and sharp tongue. Her home is filled with relics from a bygone era, each item a testament to her long life and the stories she rarely tells.\n\nWith her arms crossed and a glare that could freeze fire, Mandy doesn’t sugarcoat her opinions. She’s seen it all and has little patience for what she considers nonsense. Yet, beneath her gruff demeanor lies a fierce love for her family, often expressed through her home-cooked meals and unsolicited advice.\n\nDespite her grumpiness, Mandy has a unique way of motivating those around her. She challenges you to be better, reminding you of the resilience needed to face life’s hardships. “You think this is tough? Try living through the Great Depression!” she often exclaims, pushing you to appreciate the little things and work hard for what you want.\n\nWhen she shares her memories of the 1920s, her eyes light up, revealing a glimpse of the spirited young woman she once was. Mandy may be grumpy, but her wisdom and unwavering strength inspire you to tackle life’s challenges with the same tenacity she displayed in her youth.',
      image: '/public/images/avatars/mandy.WebP'
    },
    {
      id: 3,
      name: 'Slappy the Seal',
      description: 'Slappy the Seal is a playful and silly character who brings joy wherever he swims. When he’s relaxed, he bounces around with a carefree spirit, cracking jokes and making everyone laugh with his goofy antics. His playful nature shines as he flops around on the beach, splashing water and engaging with anyone willing to join in on the fun.\n\nHowever, don’t be fooled by his jovial demeanor—when angered, Slappy transforms into a force to be reckoned with. His playful barks turn into fierce growls, and his eyes flash with intensity. Anyone who crosses him quickly learns that he’s not just a silly seal; he has a serious side that demands respect.\n\nDespite his occasional temper, Slappy’s heart is in the right place. He values friendship and loyalty, always ready to lend a flipper to those in need. His dual nature makes him a fascinating character, reminding everyone that it’s okay to be silly and serious in equal measure.\n\nWhen you’re around Slappy, you can’t help but feel uplifted by his playful spirit—just remember to tread lightly if you see him getting riled up!',
      image: '/public/images/avatars/slappy-the-seal.WebP'
    },
  ])
}

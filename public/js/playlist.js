const shuffled = [
  {
    "name": "Baba O'Riley",
    "artist": "The Who",
    "album": "Who's Next",
    "url": "/songs/song 31.m4a"
  },
  {
    "name": "13",
    "artist": "Tally Hall",
    "album": "Marvin's Marvelous Mechanical Museum",
    "url": "/songs/13 13.wav"
  },
  {
    "name": "Tom's Dog",
    "artist": "The Living Tombstone",
    "album": "Tom's Dog (Single)",
    "url": "/songs/song 81.mp3"
  },
  {
    "name": "Hold Me",
    "artist": "Mere Notilde",
    "album": "Cool Songs - EP",
    "url": "/songs/song 55.wav"
  },
  {
    "name": "Over The Horizon (2012)",
    "artist": "Samsung",
    "album": "Over the Horizon (2012)",
    "url": "/songs/Over the Horizon (2012).mp3"
  },
  {
    "name": "Créce",
    "artist": "Mere Notilde",
    "album": "Black One",
    "url": "/songs/song 9.m4a"
  },
  {
    "name": "One Second",
    "artist": "Mere Notilde",
    "album": "Komoroko",
    "url": "/songs/song 74.mp3"
  },
  {
    "name": "Cannibal",
    "artist": "Tally Hall",
    "album": "Good & Evil",
    "url": "/songs/song 40.wav"
  },
  {
    "name": "What Do They Know?",
    "artist": "Mindless Self Indulgence",
    "album": "You'll Rebel to Anything",
    "url": "/songs/song 124.mp3"
  },
  {
    "name": "PUSH UR T3MPRR [Explicit]",
    "artist": "femtanyl",
    "album": "CHASER",
    "url": "/songs/03 PUSH UR T3MPRR.mp3"
  },
  {
    "name": "Boris",
    "artist": "Mere Notilde",
    "album": "Solanin (Deluxe)",
    "url": "/songs/song 83.mp3"
  },
  {
    "name": "Hidden in the Sand",
    "artist": "Tally Hall",
    "album": "Marvin's Marvelous Mechanical Museum",
    "url": "/songs/song 39.wav"
  },
  {
    "name": "Emotional Prism",
    "artist": "Mikazuki BIGWAVE",
    "album": "Emotional Prism - Single",
    "url": "/songs/Mikazuki BIGWAVE Emotional Prism.wav"
  },
  {
    "name": "Now That I Have You",
    "artist": "Mere Notilde (feat. Tyler Keller)",
    "album": "Now That I Have You",
    "url": "/songs/song 4.m4a"
  },
  {
    "name": "P3T [Explicit]",
    "artist": "femtanyl",
    "album": "CHASER",
    "url": "/songs/02 P3T.mp3"
  },
  {
    "name": "Up Up Up",
    "artist": "GIVERS",
    "album": "In Light",
    "url": "/songs/song 79.mp3"
  },
  {
    "name": "The Whole World and You",
    "artist": "Tally Hall",
    "album": "Marvin's Marvelous Mechanical Museum",
    "url": "/songs/12 The Whole World and You.wav"
  },
  {
    "name": "Röyksopp - Eple (Black Strobe Remix)",
    "artist": "Aphearse",
    "album": "Eple",
    "url": "/songs/song 77.wav"
  },
  {
    "name": "Two Wuv",
    "artist": "Tally Hall",
    "album": "Marvin's Marvelous Mechanical Museum",
    "url": "/songs/10 Two Wuv.wav"
  },
  {
    "name": "Sweet Baby!",
    "artist": "Mere Notilde",
    "album": "Now That I Have You",
    "url": "/songs/song 8.m4a"
  },
  {
    "name": "Dizzy",
    "artist": "Joakim Karud",
    "album": "Dizzy",
    "url": "/songs/Dizzy.mp3"
  },
  {
    "name": "Welcome to Tally Hall",
    "artist": "Tally Hall",
    "album": "Marvin's Marvelous Mechanical Museum",
    "url": "/songs/song 35.wav"
  },
  {
    "name": "Haiku",
    "artist": "Tally Hall",
    "album": "Marvin's Marvelous Mechanical Museum",
    "url": "/songs/11 Haiku.wav"
  },
  {
    "name": "Accela",
    "artist": "marui midnight",
    "album": "Accela - Single",
    "url": "/songs/song 68.wav"
  },
  {
    "name": "Our Melody",
    "artist": "Mere Notilde (feat. Phaun)",
    "album": "Sample Heaven",
    "url": "/songs/song 7.m4a"
  },
  {
    "name": "AND I'M GONE [Explicit]",
    "artist": "femtanyl",
    "album": "REACTOR",
    "url": "/songs/AND I'M GONE.mp3"
  },
  {
    "name": "Good Day",
    "artist": "Tally Hall",
    "album": "Marvin's Marvelous Mechanical Museum",
    "url": "/songs/song 33.wav"
  },
  {
    "name": "I Got The News",
    "artist": "Steely Dan",
    "album": "Aja",
    "url": "/songs/song 30.mp3"
  },
  {
    "name": "LOVESICK, CANNIBAL! [Explicit]",
    "artist": "femtanyl",
    "album": "LOVESICK, CANNIBAL!",
    "url": "/songs/01 LOVESICK, CANNIBAL!.mp3"
  },
  {
    "name": "This Will End",
    "artist": "Mere Notilde",
    "album": "Cool Songs - EP",
    "url": "/songs/song 59.wav"
  },
  {
    "name": "GIRL HELL 1999 [Explicit]",
    "artist": "femtanyl",
    "album": "CHASER",
    "url": "/songs/GIRL HELL 1999.mp3"
  },
  {
    "name": "Knockin' At Your Door",
    "artist": "Mere Notilde",
    "album": "Cool Songs - EP",
    "url": "/songs/song 56.wav"
  },
  {
    "name": "Fate Of The Stars",
    "artist": "Tally Hall",
    "album": "Good & Evil",
    "url": "/songs/song 42.wav"
  },
  {
    "name": "Draw the Line",
    "artist": "Mere Notilde (feat. Tokyo Wanderer & Nameless Warning)",
    "album": "Sample Heaven",
    "url": "/songs/song 22.m4a"
  },
  {
    "name": "NASTYWERKKKK! [Explicit]",
    "artist": "femtanyl",
    "album": "NASTYWERKKKK!",
    "url": "/songs/NASTYWERKKKK!.mp3"
  },
  {
    "name": "Auctioneer",
    "artist": "The Broken West",
    "album": "Now Or Heaven",
    "url": "/songs/song 78.wav"
  },
  {
    "name": "Commercial",
    "artist": "Mere Notilde",
    "album": "Solanin (Deluxe)",
    "url": "/songs/song 85.mp3"
  },
  {
    "name": "Roundabout",
    "artist": "Yes",
    "album": "The Ultimate Yes",
    "url": "/songs/SpotiDownloader.com - Roundabout - Yes.mp3"
  },
  {
    "name": "Nobody",
    "artist": "Mere Notilde",
    "album": "Komoroko",
    "url": "/songs/song 73.mp3"
  },
  {
    "name": "Greener",
    "artist": "Tally Hall",
    "album": "Marvin's Marvelous Mechanical Museum",
    "url": "/songs/song 34.wav"
  },
  {
    "name": "So Long",
    "artist": "Mere Notilde",
    "album": "Komoroko",
    "url": "/songs/song 75.mp3"
  },
  {
    "name": "IT'S TIME [Explicit]",
    "artist": "femtanyl",
    "album": "REACTOR",
    "url": "/songs/IT'S TIME.mp3"
  },
  {
    "name": "&",
    "artist": "Tally Hall",
    "album": "Good & Evil",
    "url": "/songs/song 43.wav"
  },
  {
    "name": "Honeybun - Pop Up! Remix",
    "artist": "Mere Notilde & Pop Up!",
    "album": "Solanin (Deluxe)",
    "url": "/songs/song 88.mp3"
  },
  {
    "name": "Senses Working Overtime",
    "artist": "XTC",
    "album": "English Settlement",
    "url": "/songs/song 82.mp3"
  },
  {
    "name": "WORLDWID3 [Explicit]",
    "artist": "femtanyl",
    "album": "WORLDWID3",
    "url": "/songs/01 WORLDWID3.mp3"
  },
  {
    "name": "DINNER! [Explicit]",
    "artist": "femtanyl",
    "album": "REACTOR",
    "url": "/songs/DINNER!.mp3"
  },
  {
    "name": "M3 N MIN3 [Explicit]",
    "artist": "femtanyl",
    "album": "REACTOR",
    "url": "/songs/M3 N MIN3.mp3"
  },
  {
    "name": "Banana Man",
    "artist": "Tally Hall",
    "album": "Marvin's Marvelous Mechanical Museum",
    "url": "/songs/07 Banana Man.wav"
  },
  {
    "name": "WEIGHTLESS! [Explicit]",
    "artist": "femtanyl",
    "album": "REACTOR",
    "url": "/songs/WEIGHTLESS!.mp3"
  },
  {
    "name": "ACT RIGHT [Explicit]",
    "artist": "femtanyl",
    "album": "CHASER",
    "url": "/songs/01 ACT RIGHT.mp3"
  },
  {
    "name": "Deathroof",
    "artist": "Mere Notilde",
    "album": "Solanin (Deluxe)",
    "url": "/songs/song 86.mp3"
  },
  {
    "name": "Lift Off",
    "artist": "Mere Notilde",
    "album": "Black One",
    "url": "/songs/song 6.m4a"
  },
  {
    "name": "Wait a Minute",
    "artist": "Mark Krurnowski",
    "album": "OLiVe FiNGERs",
    "url": "/songs/song 80.m4a"
  },
  {
    "name": "Poumtchak",
    "artist": "Mere Notilde",
    "album": "Cool Songs - EP",
    "url": "/songs/song 58.wav"
  },
  {
    "name": "Toss Turn",
    "artist": "Mere Notilde",
    "album": "Black One",
    "url": "/songs/song 18.m4a"
  },
  {
    "name": "Be Born",
    "artist": "Tally Hall",
    "album": "Marvin's Marvelous Mechanical Museum",
    "url": "/songs/06 Be Born.wav"
  },
  {
    "name": "Huff",
    "artist": "Mere Notilde",
    "album": "Solanin (Deluxe)",
    "url": "/songs/song 90.mp3"
  },
  {
    "name": "Just Apathy",
    "artist": "Tally Hall",
    "album": "Marvin's Marvelous Mechanical Museum",
    "url": "/songs/08 Just Apathy.wav"
  },
  {
    "name": "Taken for a Ride",
    "artist": "Tally Hall",
    "album": "Marvin's Marvelous Mechanical Museum",
    "url": "/songs/song 36.wav"
  },
  {
    "name": "MURDER EVERY 1 U KNOW! [Explicit]",
    "artist": "femtanyl",
    "album": "CHASER",
    "url": "/songs/05 MURDER EVERY 1 U KNOW!.mp3"
  },
  {
    "name": "Fluff",
    "artist": "Mere Notilde",
    "album": "Solanin (Deluxe)",
    "url": "/songs/song 87.mp3"
  },
  {
    "name": "Cool Song 2",
    "artist": "Mere Notilde",
    "album": "Sample Heaven",
    "url": "/songs/song 1.m4a"
  },
  {
    "name": "Ruler of Everything",
    "artist": "Tally Hall",
    "album": "Marvin's Marvelous Mechanical Museum",
    "url": "/songs/song 38.wav"
  },
  {
    "name": "ATTACKING VERTICAL [Explicit]",
    "artist": "femtanyl",
    "album": "REACTOR",
    "url": "/songs/ATTACKING VERTICAL.mp3"
  },
  {
    "name": "Love Again",
    "artist": "Mere Notilde",
    "album": "Black One",
    "url": "/songs/song 2.m4a"
  },
  {
    "name": "Your Mother is a Basketball",
    "artist": "Joe Hawley",
    "album": "Joe Hawley Joe Hawley",
    "url": "/songs/song 32.wav"
  },
  {
    "name": "The Bidding",
    "artist": "Tally Hall",
    "album": "Marvin's Marvelous Mechanical Museum",
    "url": "/songs/song 37.wav"
  },
  {
    "name": "Mood For Dining",
    "artist": "Mere Notilde",
    "album": "Komoroko",
    "url": "/songs/song 72.mp3"
  },
  {
    "name": "Cool Song",
    "artist": "Mere Notilde",
    "album": "Now That I Have You",
    "url": "/songs/song 19.m4a"
  },
  {
    "name": "Honeybun",
    "artist": "Mere Notilde",
    "album": "Solanin (Deluxe)",
    "url": "/songs/song 89.mp3"
  },
  {
    "name": "Altered Beast",
    "artist": "Mere Notilde",
    "album": "Love Is Gonna Getcha - Single",
    "url": "/songs/song 5.m4a"
  },
  {
    "name": "KATAMARI [Explicit]",
    "artist": "femtanyl",
    "album": "CHASER",
    "url": "/songs/04 KATAMARI.mp3"
  },
  {
    "name": "Hymn For A Scarecrow",
    "artist": "Tally Hall",
    "album": "Good & Evil",
    "url": "/songs/song 41.wav"
  },
  {
    "name": "Fast Lane",
    "artist": "Mere Notilde",
    "album": "Komoroko",
    "url": "/songs/song 71.mp3"
  },
  {
    "name": "Misery Fell",
    "artist": "Tally Hall",
    "album": "Good & Evil",
    "url": "/songs/song 44.wav"
  },
  {
    "name": "Spring and a Storm",
    "artist": "Tally Hall",
    "album": "Marvin's Marvelous Mechanical Museum",
    "url": "/songs/09 Spring and a Storm.wav"
  },
  {
    "name": "Unlimited",
    "artist": "Mere Notilde",
    "album": "Now That I Have You",
    "url": "/songs/song 12.m4a"
  },
  {
    "name": "Broken Flowers",
    "artist": "Mere Notilde",
    "album": "Solanin (Deluxe)",
    "url": "/songs/song 84.mp3"
  },
  {
    "name": "Soldissimo",
    "artist": "Mere Notilde",
    "album": "Now That I Have You",
    "url": "/songs/song 23.m4a"
  },
  {
    "name": "Love Is Gonna Getcha",
    "artist": "Mere Notilde",
    "album": "Love Is Gonna Getcha - Single",
    "url": "/songs/song 3.m4a"
  },
  {
    "name": "Fastbreaker",
    "artist": "Artifyber",
    "album": "Fastbreaker (Single)",
    "url": "/songs/Fastbreaker.wav"
  }
];
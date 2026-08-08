/* ============================================================
   CASE STUDY DATA
   To add / remove a project: edit this array. Nothing else.

   Fields
     id       unique slug
     client   display name
     cat      fnb | beauty | medical | fashion | retail | agency
     tag      label shown on the card
     role     what Esraa did
     handle   optional { label, url } social link
     cover    assets/<file>.jpg   — the card image
     teaser   one line shown on the card
     brief    array of paragraphs
     copy     array of Arabic copy samples { text, tags }
     figures  array of { src, caption } — the grid screenshots
     links    array of { label, url }
     pills    array of short strings (deliverables)
   ============================================================ */

const CASES = [

  /* ---------- FOOD & BEVERAGE ---------- */
  {
    id: "yafa",
    client: "Yafa Restaurant",
    cat: "fnb",
    tag: "Food & Beverage",
    role: "Concept · Scriptwriting · Direction",
    handle: { label: "@yafa_eg", url: "https://www.instagram.com/yafa_eg" },
    cover: "assets/yafa-cover.jpg",
    teaser: "A cinematic four-film series on Palestinian dishes as living memory.",
    brief: [
      "The campaign concept was built around Yafa's signature Palestinian items — showcasing the story behind each dish with a cinematic direction rather than a menu shot.",
      "I wrote and directed all four films. Each one treats a dish as a vessel for something larger: memory, land, dignity, generosity. The pacing, sound design and lighting were chosen to let the story land before any words do."
    ],
    films: [
      { name: "Maqluba", url: "https://www.instagram.com/reel/DRXHESpAJIL/", note: "A visual narrative translating Palestinian heritage into mood, rhythm and imagery. Through food, I explored Maqluba not just as a dish, but as a symbol of collective memory, land, victory, and roots passed down through generations." },
      { name: "Mansaf", url: "https://instagram.com/reel/DSANnXsk71V/", note: "Written and directed as a sensory journey, using food as a visual language for Palestinian heritage and belonging. Slow pacing, warm tones and intimate close-ups portray Mansaf as more than a meal — a living symbol of identity, memory and continuity." },
      { name: "Musakhan", url: "https://www.instagram.com/reel/DRhViLqjPj4/", note: "A sensory experience where sound and visuals lead the story before words. Sizzling oil, crackling fire, warm lighting and intimate details portray Musakhan as a symbol of dignity, generosity and gathering — connecting its journey to the scent of home." },
      { name: "Ouzi", url: "https://instagram.com/reel/DSU8xKGDJ_w/", note: "Intimate close-ups, controlled movement and subtle fire crackles paired with soft Palestinian music create a sense of warmth and occasion. Deliberate pacing and heritage details present Ouzi as a visual expression of generosity, joy and Palestinian identity." }
    ],
    figures: [
      { src: "assets/yafa-grid.jpg", caption: "Yafa — Instagram grid, Palestinian heritage series" }
    ],
    pills: ["Campaign concept", "4 scripts", "Shoot direction", "Sound direction"]
  },

  {
    id: "hathout",
    client: "Hathout",
    cat: "fnb",
    tag: "Food & Beverage",
    role: "Creative direction · Mood boards · Captions",
    handle: { label: "@hathout.eg", url: "https://www.instagram.com/hathout.eg" },
    cover: "assets/hathout-cover.jpg",
    teaser: "Two seasonal campaigns for a heritage pastry house — plus a carousel that went viral.",
    brief: [
      "Hathout is a pastry, bakery and café brand in Shibin Al-Kawm built on premium ingredients, unique flavours and visually irresistible products — a go-to spot for a treat, a drink, a casual hangout, or celebration sweets.",
      "I led the creative direction across both seasonal campaigns: building the mood boards for the photoshoots, defining the visual style, and writing the campaign captions — holding one unified creative vision from concept through to execution."
    ],
    subprojects: [
      {
        title: "Eid Campaign — حتحوت حلو يجمعنا",
        note: "Ramadan and Eid creative direction. The line positions Hathout as the table everyone gathers around, not just a bakery.",
        links: [
          { label: "Reel 01", url: "https://www.instagram.com/reel/DVLfwZDEvQU/" },
          { label: "Reel 02", url: "https://www.instagram.com/reel/DVyLD1aCuLV/" },
          { label: "Reel 03", url: "https://www.instagram.com/reel/DV530a5AUCg/" },
          { label: "Reel 04", url: "https://www.instagram.com/reel/DYrh4gtD78S/" }
        ],
        figure: { src: "assets/hathout-grid-1.jpg", caption: "Eid campaign grid — reach per post visible, peaking at 467K" }
      },
      {
        title: "Summer Campaign — صيفك حكاية تانية",
        note: "Showcasing summer items and the vibe of the new café branch.",
        links: [
          { label: "Reel 01", url: "https://www.instagram.com/reel/DXehViEDrqL/" },
          { label: "Reel 02", url: "https://www.instagram.com/reel/DbVv1veD8H8/" },
          { label: "Reel 03", url: "https://www.instagram.com/reel/DXtea_Sij7f/" }
        ],
        figure: { src: "assets/hathout-grid-2.jpg", caption: "Summer campaign grid — new branch reveal reached 773K" }
      }
    ],
    links: [
      { label: "Viral carousel", url: "https://www.instagram.com/p/DZSU1rBE9Py/" },
      { label: "Other creative 01", url: "https://www.instagram.com/reel/DTiVCO0lXOU/" },
      { label: "Other creative 02", url: "https://www.instagram.com/reel/DNlFBSyiVp_/" },
      { label: "Other creative 03", url: "https://www.instagram.com/reel/DSXhWqlCv7p/" }
    ],
    pills: ["Creative direction", "Mood boards", "Caption writing", "2 seasonal campaigns"]
  },

  {
    id: "coffee-wizard",
    client: "Coffee Wizard",
    cat: "fnb",
    tag: "Food & Beverage",
    role: "Creative direction · Shoot prep · Copywriting",
    handle: { label: "@coffeewizardeg", url: "https://www.instagram.com/coffeewizardeg" },
    cover: "assets/coffee-wizard-cover.jpg",
    teaser: "Positioning a speciality coffee and French bakery as a Mediterranean summer destination.",
    brief: [
      "Coffee Wizard is a speciality coffee and French bakery café. The project was the Alexandria branch summer campaign.",
      "The campaign set out to showcase the signature summer drinks, drive engagement, boost sales, and position the café as a go-to Mediterranean summer destination. I developed and prepared the shoot direction, creating visually appealing and interactive social content to strengthen the online presence and grow the digital community."
    ],
    copy: [
      { text: "Good coffee, great friends and unforgettable moments\nIt's time for a coffee break ❤️" },
      { text: "Craving something cool, creamy and just the right amount of sweet? 👀\nOur iced mocha's got you covered!\nIt's the ultimate pick-me-up for chocolate and coffee lovers who like their energy served cold. 🥰❤️" }
    ],
    linkGroups: [
      {
        title: "Lifestyle photo content",
        links: [
          { label: "Post 01", url: "https://www.instagram.com/p/DOBheSVD8kh/" },
          { label: "Post 02", url: "https://www.instagram.com/p/DOJF2gXgiAQ/" },
          { label: "Post 03", url: "https://www.instagram.com/p/DOTRUBfgqKJ/" },
          { label: "Post 04", url: "https://www.instagram.com/p/DOdpIewiCUS/" },
          { label: "Post 05", url: "https://www.instagram.com/p/DOydsUWiGHk/" },
          { label: "Post 06", url: "https://www.instagram.com/p/DPEG7EyFdTk/" },
          { label: "Post 07", url: "https://www.instagram.com/p/DPL42lHiIy9/" },
          { label: "Post 08", url: "https://www.instagram.com/p/DPbXZ7diDh4/" }
        ]
      },
      {
        title: "Reels",
        links: [
          { label: "Reel 01", url: "https://www.instagram.com/reel/DOD4sRCiI8o/" },
          { label: "Reel 02", url: "https://www.instagram.com/reel/DOLnyiliD1t/" },
          { label: "Reel 03", url: "https://www.instagram.com/reel/DOYjOQRCMqW/" },
          { label: "Reel 04", url: "https://www.instagram.com/reel/DOoDiyOiBu8/" }
        ]
      }
    ],
    figures: [
      { src: "assets/coffee-wizard-grid.jpg", caption: "Coffee Wizard — Alexandria summer campaign grid" }
    ],
    pills: ["Shoot direction", "Lifestyle content", "Reels", "English copy"]
  },

  {
    id: "sharqi",
    client: "Sharqi — شرقي",
    cat: "fnb",
    tag: "Food & Beverage",
    role: "Creative direction · Copywriting",
    handle: { label: "@Sharqyeg", url: "https://www.instagram.com/Sharqyeg" },
    cover: "assets/sharqi-cover.jpg",
    teaser: "صيفك على كيفك — launching the Marina Delta branch on a summer note.",
    brief: [
      "The campaign concept was about the new branch at Marina Delta, highlighting the limited-edition new menu items and folding summer vibes into every piece."
    ],
    copy: [
      { text: "جمدان الفطار مش هيكمل إلا مع الفلافل كيري\nكلمنا على: 17113\nدلوقتي شرقي موجود في مارينا دلتا - داخل شاطئ لاكشيري", tags: "#شرقي  #صيفك_على_كيفك" },
      { text: "ازاي تبسط نفسك على البحر؟\nالاجابة: وجبة بروست من شرقي\nكلمنا على: 17113\nمارينا دلتا - داخل شاطئ لاكشيري", tags: "#شرقي  #صيفك_على_كيفك" }
    ],
    linkGroups: [
      {
        title: "Reels",
        links: [
          { label: "Reel 01", url: "https://www.instagram.com/reel/C8Xf6qhtpHM/" },
          { label: "Reel 02", url: "https://www.instagram.com/reel/C8cpdwVN7Dn/" }
        ]
      },
      {
        title: "Posts",
        links: [
          { label: "Post 01", url: "https://www.instagram.com/p/C9Hh2dRNGcH/" },
          { label: "Post 02", url: "https://www.instagram.com/p/C9SdDvos3HI/" },
          { label: "Post 03", url: "https://www.instagram.com/p/C9u4p__pu3q/" }
        ]
      }
    ],
    figures: [
      { src: "assets/sharqi-grid.jpg", caption: "Sharqi — صيفك على كيفك campaign grid" }
    ],
    pills: ["Branch launch", "Campaign line", "Arabic copy"]
  },

  {
    id: "mac-n-pie",
    client: "Mac 'N' Pie",
    cat: "fnb",
    tag: "Food & Beverage",
    role: "Creative direction · Scriptwriting",
    handle: { label: "@mac.n.pie", url: "https://www.instagram.com/mac.n.pie" },
    cover: "assets/mac-n-pie-cover.jpg",
    teaser: "A fourth-birthday campaign built on four reasons people keep coming back.",
    brief: [
      "The campaign concept covered the 4th birthday anniversary of Mac 'N' Pie while introducing a new menu item — using the number four as the structural hook for the anniversary message."
    ],
    copy: [
      { text: "4 أسباب بنحب ماك أند باي عشانهم!\nأجمل مكان وأحسن أجواء للمة الصحاب أو خروجة العيلة\nأحلى طعم وجودة للأكل الشرقي اللي بنحبه\nالكيدز ايريا عشان اطفالنا يقضوا وقت جميل\nأسرع خدمة دليفري متاحة للساعة 4 فجراً", tags: "#MacNPie  #4_سنين  #بيجمعنا_كلنا" },
      { text: "رول الفطير في ماك أند باي حجمه كبير بطعم خطير مبيخلصش، والكادر مش مكفي\nالمنصورة - حي الجامعة أمام بوابة توشكى\nللتوصيل والطلبات: 0502224545 - 0502394829 - 01500028232", tags: "#MacNPie  #صيفك_ماك_أند_باي" }
    ],
    linkGroups: [
      {
        title: "Posts",
        links: [
          { label: "Post 01", url: "https://www.instagram.com/p/C-qDiRZNLMC/" },
          { label: "Post 02", url: "https://www.instagram.com/p/C9iAtCgvpEt/" }
        ]
      },
      {
        title: "Reels",
        links: [
          { label: "Reel 01", url: "https://www.instagram.com/reel/C-x1XGmt9-Z/" },
          { label: "Reel 02", url: "https://www.instagram.com/reel/C_Q7mSPNYIQ/" }
        ]
      }
    ],
    figures: [
      { src: "assets/mac-n-pie-grid.jpg", caption: "Mac 'N' Pie — 4th anniversary campaign grid" }
    ],
    pills: ["Anniversary campaign", "New item launch", "Scripts", "Arabic copy"]
  },

  {
    id: "hamdy-shalaby-rest",
    client: "Hamdy Shalaby Restaurant",
    cat: "fnb",
    tag: "Food & Beverage",
    role: "Creative direction · Copywriting",
    handle: { label: "@Hamdyshalaby_restaurant", url: "https://www.instagram.com/Hamdyshalaby_restaurant" },
    cover: "assets/hamdy-shalaby-rest-cover.jpg",
    teaser: "Making Middle Eastern classics sound like a mood, not a menu item.",
    brief: [
      "A dining restaurant offering oriental dishes with a specialisation in Middle Eastern cuisine. The copy leans on familiarity and craving rather than description — every line is written to be read out loud."
    ],
    copy: [
      { text: "طعم المندي في حمدي شلبي بيحكي عن نفسه!\nلحمة دايبة وتتبيلة مفيش زيها لازم تجربها\nجربه دلوقتي! 17069" },
      { text: "الطاجن دة مش بس اكلة حلوة، دة مزاج شرقي وطعم متعودين عليه\nطاجن كوارع بورق العنب من حمدي شلبي بطعم ميتوصفش\nاطلبه دلوقتي 17069" }
    ],
    links: [
      { label: "Mandi post", url: "https://www.instagram.com/p/DIG1GBGRlHj/" },
      { label: "Tagen post", url: "https://www.instagram.com/p/DIQ5rEoRcaS/" },
      { label: "Reel", url: "https://www.instagram.com/reel/DIb_qktBrLv/" }
    ],
    figures: [
      { src: "assets/hamdy-shalaby-rest-grid.jpg", caption: "Hamdy Shalaby Restaurant — content grid" }
    ],
    pills: ["Creative direction", "Arabic copy"]
  },

  {
    id: "hamdy-shalaby-butchery",
    client: "Hamdy Shalaby Butchery",
    cat: "fnb",
    tag: "Food & Beverage",
    role: "Creative direction · Scriptwriting",
    handle: { label: "@Hamdyshalabybutcher", url: "https://www.instagram.com/Hamdyshalabybutcher" },
    cover: "assets/hamdy-shalaby-butchery-cover.jpg",
    teaser: "A butchery reel that crossed one million views.",
    brief: [
      "The butchery arm of the Hamdy Shalaby brand. Direction and scripts written to carry the restaurant's credibility into a category where quality has to be visible before it's believed.",
      "One reel from this work passed a million views."
    ],
    links: [
      { label: "1M-view reel", url: "https://www.instagram.com/reel/DF8dATHhv8S/" }
    ],
    figures: [
      { src: "assets/hamdy-shalaby-butchery-grid.jpg", caption: "Hamdy Shalaby Butchery — content grid" }
    ],
    pills: ["Creative direction", "Scripts", "1M+ views"]
  },

  {
    id: "cairo-eats",
    client: "Cairo Eats",
    cat: "fnb",
    tag: "Food & Beverage",
    role: "Creative direction · Scriptwriting",
    handle: { label: "@Cairoeats.eg", url: "https://www.instagram.com/Cairoeats.eg" },
    cover: "assets/cairo-eats-cover.jpg",
    teaser: "An Egyptian restaurant in Saudi Arabia — writing homesickness into an appetite.",
    brief: [
      "Cairo Eats is an Egyptian restaurant in Saudi Arabia serving eastern food with an Egyptian touch. The direction plays to an expat audience: familiar flavours, familiar language, in an unfamiliar place."
    ],
    figures: [
      { src: "assets/cairo-eats-grid.jpg", caption: "Cairo Eats — content grid" }
    ],
    pills: ["Creative direction", "Scripts", "KSA market"]
  },

  /* ---------- BEAUTY & SKINCARE ---------- */
  {
    id: "upcellro",
    client: "UPCELLRO® by Aloria Aesthetic",
    cat: "beauty",
    tag: "Beauty & Skincare",
    role: "Launch strategy · Awareness plan · Content",
    handle: { label: "@Upcellro_me", url: "https://www.instagram.com/Upcellro_me" },
    cover: "assets/upcellro-cover.jpg",
    teaser: "Launching a patented NAD+ biotech skincare brand from zero.",
    brief: [
      "UPCELLRO® is an advanced skincare brand that uses patented biotechnology (NAD+) to target the root causes of skin ageing.",
      "I led the brand's launch strategy and developed the awareness content plan — introducing the patented technology, the formula, and the two-product lineup. I created the complete launch content to build awareness and position the brand in the market."
    ],
    figures: [
      { src: "assets/upcellro-grid.jpg", caption: "UPCELLRO® — launch grid, full awareness rollout" }
    ],
    links: [
      { label: "Launch post 01", url: "https://www.instagram.com/p/DS7m3_TDIlz/" },
      { label: "Launch post 02", url: "https://www.instagram.com/p/DS2eIyajJjJ/" }
    ],
    pills: ["Launch strategy", "Awareness plan", "Product positioning", "Full content rollout"]
  },

  /* ---------- MEDICAL ---------- */
  {
    id: "dermatopia",
    client: "Dermatopia Clinic",
    cat: "medical",
    tag: "Medical",
    role: "Launch plan · Content & visual direction · Scripts",
    handle: { label: "@Dermatopiaclinic_", url: "https://www.instagram.com/Dermatopiaclinic_" },
    cover: "assets/dermatopia-cover.jpg",
    teaser: "Built the launch plan from scratch for a dermatology and aesthetic clinic.",
    brief: [
      "Dermatopia is a dermatology and aesthetic clinic specialising in skincare, laser and aesthetic treatments.",
      "I developed its launching plan from scratch, shaped the content and visual direction, and helped grow and elevate the page — contributing to a stronger brand presence and attracting new clients."
    ],
    linkGroups: [
      {
        title: "Scriptwriting and direction",
        links: [
          { label: "Reel 01", url: "https://www.instagram.com/reel/DUDsECjDiFH/" },
          { label: "Reel 02", url: "https://www.instagram.com/reel/DXW6oLWiGdb/" },
          { label: "Reel 03", url: "https://www.instagram.com/reel/DUc8cvJCP6H/" }
        ]
      },
      {
        title: "Posts and campaigns",
        links: [
          { label: "Post 01", url: "https://www.instagram.com/p/DQcClE_iOnI/" },
          { label: "Post 02", url: "https://www.instagram.com/p/DUf9m_8iEwx/" },
          { label: "Post 03", url: "https://www.instagram.com/p/DX6ZPMbCPle/" }
        ]
      }
    ],
    figures: [
      { src: "assets/dermatopia-grid-1.jpg", caption: "Dermatopia — content grid" },
      { src: "assets/dermatopia-grid-2.jpg", caption: "Dermatopia — campaign grid" }
    ],
    pills: ["Launch from scratch", "Visual direction", "Scripts", "Page growth"]
  },

  {
    id: "arty-smile",
    client: "Arty Smile — Dr. Mohamed Al Dydamony",
    cat: "medical",
    tag: "Medical",
    role: "Scriptwriting",
    handle: null,   // no public Instagram profile for this one
    cover: "assets/arty-smile-cover.jpg",
    teaser: "Dental content that answers the fear before it sells the treatment.",
    brief: [
      "Dental clinic content for Dr. Mohamed Al Dydamony in Nasr City. Each script opens on the patient's actual problem — pain, an uneven smile, a gap — and only then introduces the treatment as the answer."
    ],
    copy: [
      { text: "لو بتعاني من الم شديد في اسنانك ومش قادر تتحمل الالم\nحشو العصب هو الحل المثالي عشان تحفظ اسنانك من اي الم محتمل\nفي عيادات دكتور محمد الدايدموني بنقدملك كل الحلول لمشاكل اسنانك بكل وسائل الراحة!\nللحجز عن طريق رسائل الصفحة او اتصل على الارقام\n0226774877 - 01111954547 - 01101002333" },
      { text: "الفينيرز هي احسن حل لو بتدور على ابتسامة مثالية!\nدة لأنها بتغطي عيوب كتير منها عدم تناسق الاسنان و التصبغات و كسور الاسنان والفراغات بين الاسنان\nلو بتواجهك أي مشكلة من المشاكل دي الحق احجز معادك معانا\nالعنوان: مدينة نصر - 90 شارع حسن المأمون - الدور الثاني (203) أعلى ماكدونالدز" }
    ],
    figures: [
      { src: "assets/arty-smile-grid.jpg", caption: "Arty Smile — content grid" }
    ],
    pills: ["Medical scripts", "Patient-first framing", "Arabic copy"]
  },

  /* ---------- FASHION ---------- */
  {
    id: "alia-hijab",
    client: "Alia Hijab",
    cat: "fashion",
    tag: "Fashion",
    role: "Creative direction · Scriptwriting",
    handle: { label: "@Alia_hiijab", url: "https://www.instagram.com/Alia_hiijab" },
    cover: "assets/alia-hijab-cover.jpg",
    teaser: "Modest fashion content directed around movement, fabric and light.",
    brief: [
      "Creative direction and scriptwriting for Alia Hijab. The direction focuses on how fabric behaves on camera — drape, movement and light doing the selling rather than product callouts."
    ],
    figures: [
      { src: "assets/alia-hijab-grid.jpg", caption: "Alia Hijab — content grid" }
    ],
    pills: ["Creative direction", "Scripts", "Modest fashion"]
  },

  /* ---------- RETAIL ---------- */
  {
    id: "el-shazly",
    client: "El Shazly Stationery",
    cat: "retail",
    tag: "Retail",
    role: "Account management · Campaign concepts · Reels",
    handle: { label: "@Elshazlystationeries", url: "https://www.instagram.com/Elshazlystationeries" },
    cover: "assets/el-shazly-cover.jpg",
    teaser: "A full year of seasonal campaigns — including stationery framed as a cure for brain rot.",
    brief: [
      "I managed El Shazly Stationery's social media account for a full year, developing creative campaigns tailored to different seasons and occasions.",
      "The work covered standalone campaigns, Back-to-School campaigns, creative concepts, and reel ideas — each with a visual direction matched to the period and its audience."
    ],
    subprojects: [
      {
        title: "Campaign — التعفن الدماغي",
        note: "Position El Shazly's products as a mental reset — a way out of brain rot. Instead of being seen as traditional stationery, the products become tools for relaxation, focus and self-care.",
        links: [
          { label: "Reel 01", url: "https://www.instagram.com/reel/Daaak_4jIOc/" },
          { label: "Reel 02", url: "https://www.instagram.com/reel/DaSobR8D3Oz/" }
        ]
      },
      {
        title: "Campaign — Picnic with El Shazly",
        note: "Position the products as the perfect companions for a fun, aesthetic picnic — showing how they turn any outing into a more enjoyable and memorable moment.",
        links: [
          { label: "Reel 01", url: "https://www.instagram.com/reel/DZulGVIDkvJ/" },
          { label: "Reel 02", url: "https://www.instagram.com/reel/DZ7dPfFEQzp/" },
          { label: "Reel 03", url: "https://www.instagram.com/reel/DaApBNnCq3D/" }
        ]
      }
    ],
    linkGroups: [
      {
        title: "Light content",
        links: [
          { label: "Reel 01", url: "https://www.instagram.com/reel/DYHtUmOjlED/" },
          { label: "Reel 02", url: "https://www.instagram.com/reel/DRrwR5sDhIn/" }
        ]
      },
      {
        title: "Product presentation",
        links: [
          { label: "Reel 01", url: "https://www.instagram.com/reel/DQuEFbCkS6X/" },
          { label: "Reel 02", url: "https://www.instagram.com/reel/DbN5SklAt4k/" }
        ]
      }
    ],
    figures: [
      { src: "assets/el-shazly-grid.jpg", caption: "El Shazly Stationery — content grid" }
    ],
    pills: ["1 year account management", "Seasonal campaigns", "Back to School", "Reel concepts"]
  },

  /* ---------- AGENCY ---------- */
  {
    id: "run-agency",
    client: "Run Agency",
    cat: "agency",
    tag: "Agency",
    role: "Concept · In-house content",
    handle: { label: "@Runagency", url: "https://www.instagram.com/Runagency" },
    cover: "assets/run-agency-cover.jpg",
    teaser: "Bonus ideas written for the agency's own channels.",
    brief: [
      "In-house creative work for Run Agency — concepts written for the agency's own audience rather than a client's. Selling an agency's thinking to marketers is a different job from selling food to a hungry person, and the writing shifts accordingly."
    ],
    figures: [
      { src: "assets/run-agency-grid.jpg", caption: "Run Agency — in-house content grid" }
    ],
    pills: ["In-house concepts", "B2B tone"]
  }

];

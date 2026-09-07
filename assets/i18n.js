/* ===================================================================
   THE WORDS, IN BOTH LANGUAGES
   ===================================================================
   English is the default. The button in the top corner switches to
   Arabic and flips the whole page to right to left.

   Every visible string on the page is here. To change wording, edit
   it here, not in index.html. Keys ending in Html may contain tags.
   =================================================================== */

const I18N = {

  en: {
    dir: "ltr",
    docTitle: "Roaa Basil — Graphic Design Portfolio",
    switchTo: "العربية",          // label shown ON the button while in English
    switchAria: "Switch the site to Arabic",

    skip:        "Skip to the work",
    brandName:   "Roaa Basil",
    brandSuffix: "/ design",
    navWork:     "Work",
    navAbout:    "About me",
    navContact:  "Contact",
    themeAria:   "Switch between light and dark",
    menuAria:      "Open the menu",
    menuCloseAria: "Close the menu",

    heroEyebrow: "Graphic designer, Baghdad",
    heroNameHtml: "Roaa <em>Basil</em>",
    heroLede: "I design visuals that have to work in a feed and hold up on a wall. Education campaigns, product posters, cultural pieces and editorial composition, built with Photoshop, Illustrator and Canva.",
    heroMeta1: "Baghdad, Iraq",
    heroMeta2: "Available for freelance",
    heroMeta3: "Arabic and English",
    ctaWork:     "See the work",
    ctaTouch:    "Get in touch",
    ctaCv:       "CV",
    cvTitle:     "CV",
    cvOpen:      "Open the PDF",
    ctaWhatsapp: "Message on WhatsApp",

    workTitle: "Selected work",
    workCount: function (n) { return n + (n === 1 ? " piece" : " pieces"); },
    viewLabel: "View",
    openAria:  function (t) { return "Open " + t + " at full size"; },

    aboutTitle: "About me",
    aboutP1Html: "I am an <strong>Information and Communications Engineering</strong> graduate of Al-Nahrain University in Baghdad, and I designed alongside the degree the whole way through. The engineering side taught me structure. The design side is where I get to decide what someone notices first.",
    aboutP2Html: "Most of my work is for small businesses and educational pages: logos and visual identities, promotional posters, advertising cards, social media sets. I take a brief from a client who often cannot yet describe what they want, and turn it into something they recognise the moment they see it.",
    aboutP3Html: "I also teach mathematics in Arabic to primary and intermediate students at <strong>Abwab Educational Platform</strong>. Standing in front of a class that has stopped following you teaches you more about visual hierarchy than any tutorial does, and a lot of my educational design work comes out of it.",
    aboutP4Html: "I trained in graphic design at <strong>Makers of Baghdad</strong>, and in web development through the <strong>Zain Iraq Women in Tech</strong> programme, which means I can hand a developer files that actually make sense on screen.",

    toolsTitle: "Tools",
    tool1: "Adobe Photoshop",
    tool2: "Adobe Illustrator",
    tool3: "Canva",

    doTitle: "What I do",
    do1: "Logos and visual identity for small brands",
    do2: "Social media and educational content sets",
    do3: "Promotional posters and advertising cards",
    do4: "Typography, layout and visual hierarchy",
    do5: "Arabic and English composition",

    bgTitle: "Background",
    bg1: "Al-Nahrain University, B.Sc. Information Engineering, 2026",
    bg2: "Graphic design training, Makers of Baghdad",
    bg3: "Web development, Zain Iraq Women in Tech, 2025",
    bg4: "IT and networks training, Supercell, 2025",
    bg5: "Mathematics teacher, Abwab Educational Platform, 2026 to now",

    contactHtml: "Have something that <em>needs designing?</em>",
    contactP: "Send over the brief, however rough it is. I will come back to you with a direction and a timeline.",
    contactCity: "Baghdad, Iraq",

    footA: "Roaa Basil. All work shown is her own.",
    footB: "Designed and built in Baghdad.",

    lbAria:    "Work viewer",
    lbClose:   "Close viewer",
    lbPrev:    "Previous piece",
    lbNext:    "Next piece"
  },

  ar: {
    dir: "rtl",
    docTitle: "رؤى باسل — أعمال تصميم جرافيك",
    switchTo: "English",
    switchAria: "تحويل الموقع إلى الإنجليزية",

    skip:        "انتقل إلى الأعمال",
    brandName:   "رؤى باسل",
    brandSuffix: "/ تصميم",
    navWork:     "الأعمال",
    navAbout:    "نبذة عني",
    navContact:  "تواصل",
    themeAria:   "التبديل بين الوضع الفاتح والداكن",
    menuAria:      "فتح القائمة",
    menuCloseAria: "إغلاق القائمة",

    heroEyebrow: "مصمّمة جرافيك، بغداد",
    heroNameHtml: "رؤى <em>باسل</em>",
    heroLede: "أصمّم أعمالاً بصرية تلفت الانتباه على الشاشة وتبقى قوية على الورق. حملات تعليمية، بوسترات إعلانية، أعمال ذات طابع ثقافي، وتكوينات تحريرية، أنفّذها ببرامج فوتوشوب وإلستريتر وكانفا.",
    heroMeta1: "بغداد، العراق",
    heroMeta2: "متاحة للعمل الحر",
    heroMeta3: "العربية والإنجليزية",
    ctaWork:     "شاهد الأعمال",
    ctaTouch:    "تواصل معي",
    ctaCv:       "السيرة الذاتية",
    cvTitle:     "السيرة الذاتية",
    cvOpen:      "افتح الملف",
    ctaWhatsapp: "راسلني على واتساب",

    workTitle: "أعمال مختارة",
    workCount: function (n) { return n + " أعمال"; },
    viewLabel: "عرض",
    openAria:  function (t) { return "فتح " + t + " بالحجم الكامل"; },

    aboutTitle: "نبذة عني",
    aboutP1Html: "أنا خرّيجة <strong>هندسة المعلومات والاتصالات</strong> من جامعة النهرين ببغداد، وعملت في التصميم إلى جانب الدراسة طوال سنواتها. الهندسة علّمتني البناء والترتيب، أما التصميم فهو المكان الذي أقرّر فيه ما الذي ستقع عليه العين أولاً.",
    aboutP2Html: "أغلب أعمالي لأصحاب مشاريع صغيرة وصفحات تعليمية: شعارات وهويات بصرية، بوسترات دعائية، بطاقات إعلانية، ومجموعات محتوى لمواقع التواصل. آخذ طلباً من عميل لا يستطيع غالباً وصف ما يريده بدقة، وأحوّله إلى شيء يعرفه فور أن يراه.",
    aboutP3Html: "وأدرّس الرياضيات بالعربية لطلبة الابتدائية والمتوسطة في <strong>منصة أبواب التعليمية</strong>. الوقوف أمام صف توقّف عن متابعتك يعلّمك عن التسلسل البصري أكثر من أي درس، ومن هنا جاء جزء كبير من أعمالي التعليمية.",
    aboutP4Html: "تدرّبت على التصميم الجرافيكي في <strong><span class=\"lat\">Makers of Baghdad</span></strong>، وعلى تطوير الويب ضمن برنامج <strong><span class=\"lat\">Women in Tech</span></strong> من زين العراق، ما يعني أنني أسلّم المبرمج ملفات مفهومة وقابلة للتنفيذ على الشاشة.",

    toolsTitle: "البرامج",
    tool1: "أدوبي فوتوشوب",
    tool2: "أدوبي إلستريتر",
    tool3: "كانفا",

    doTitle: "ما أقدّمه",
    do1: "شعارات وهويات بصرية للعلامات الصغيرة",
    do2: "محتوى تعليمي ومجموعات لمواقع التواصل",
    do3: "بوسترات دعائية وبطاقات إعلانية",
    do4: "الخطوط والتنسيق والتسلسل البصري",
    do5: "تكوينات بالعربية والإنجليزية",

    bgTitle: "الخلفية",
    bg1: "جامعة النهرين، بكالوريوس هندسة المعلومات، 2026",
    bg2: "تدريب في التصميم الجرافيكي، Makers of Baghdad",
    bg3: "تطوير الويب، Women in Tech من زين العراق، 2025",
    bg4: "تدريب في تقنية المعلومات والشبكات، Supercell، 2025",
    bg5: "مدرّسة رياضيات، منصة أبواب التعليمية، من 2026 حتى الآن",

    contactHtml: "عندك شيء <em>يحتاج تصميماً؟</em>",
    contactP: "أرسل لي الفكرة مهما كانت أولية، وسأعود إليك برؤية واضحة وموعد تسليم.",
    contactCity: "بغداد، العراق",

    footA: "رؤى باسل. جميع الأعمال المعروضة من تنفيذها.",
    footB: "صُمّم ونُفّذ في بغداد.",

    lbAria:    "عارض الأعمال",
    lbClose:   "إغلاق العارض",
    lbPrev:    "العمل السابق",
    lbNext:    "العمل التالي"
  }

};

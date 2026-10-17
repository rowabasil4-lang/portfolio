/* ===================================================================
   THE WORK LIST
   ===================================================================
   To add a new piece:
     1. Put the image in  assets/work/     (the big version)
     2. Put a smaller copy in  assets/thumbs/   with the SAME filename
        (roughly 900px on the long edge keeps the page fast)
     3. Copy one block below, paste it, fill in the two languages.

   Every text field takes  { en: "...", ar: "..." }.
   If you only write the English, the Arabic view falls back to it,
   so an unfinished translation never breaks the page.

   Keep the newest or strongest work at the top. The numbering on the
   page is automatic, so you never have to renumber anything.
   =================================================================== */

const WORKS = [

  {
    file: "01-kahramana.jpg",
    title: {
      en: "Kahramana",
      ar: "كهرمانة"
    },
    cat: {
      en: "Cultural / Poster",
      ar: "ثقافي / بوستر"
    },
    note: {
      en: "Baghdad's Kahramana fountain rebuilt as a single blue plate on paper stock, with blossom, swallows and Arabic lettering around it, and one orange disc to break the monochrome.",
      ar: "نافورة كهرمانة في بغداد أُعيد بناؤها كلوحة زرقاء واحدة على ورق، مع أزهار وطيور سنونو وحروف عربية حولها، ودائرة برتقالية واحدة تكسر أحادية اللون."
    },
    tag: {
      en: "Personal work",
      ar: "عمل شخصي"
    },
    alt: {
      en: "Ornamental poster in deep blue on cream paper showing the Kahramana fountain statue pouring into rows of jars, framed by blossom branches, swallows and vertical Arabic calligraphy, with a solid orange circle at the upper right.",
      ar: "بوستر زخرفي بالأزرق الغامق على ورق كريمي يُظهر تمثال نافورة كهرمانة وهو يصبّ في صفوف من الجرار، تحيط به أغصان مزهرة وطيور سنونو وحروف عربية عمودية، مع دائرة برتقالية صلبة في الأعلى."
    }
  },

  {
    file: "02-mental-math.jpg",
    title: {
      en: "Mental Arithmetic",
      ar: "الحساب الذهني"
    },
    cat: {
      en: "Education / Social",
      ar: "تعليمي / تواصل اجتماعي"
    },
    note: {
      en: "A course poster for a Baghdad educational centre. Equations float as chalk marks behind a 3D Arabic headline, with the astronaut carrying the idea that arithmetic is something you explore.",
      ar: "بوستر لدورة في مركز تعليمي ببغداد. المعادلات تطفو كخطوط طباشير خلف عنوان عربي مجسّم، ورائد الفضاء يحمل الفكرة: أن الحساب شيء يُكتشف."
    },
    tag: {
      en: "Client work",
      ar: "عمل لعميل"
    },
    alt: {
      en: "Arabic educational poster with a 3D headline over a night-blue field of chalk equations, an astronaut child studying at a desk and a rocket in the corner.",
      ar: "بوستر تعليمي عربي بعنوان مجسّم فوق خلفية زرقاء داكنة مليئة بمعادلات مرسومة بالطباشير، مع طفل برداء رائد فضاء يدرس على مكتب وصاروخ في الزاوية."
    }
  },

  {
    file: "03-galaxy-s24.jpg",
    title: {
      en: "Galaxy S24 Ultra",
      ar: "غالاكسي S24 ألترا"
    },
    cat: {
      en: "Advertising / Product",
      ar: "إعلان / منتج"
    },
    note: {
      en: "A campaign study in restraint. The desert horizon does the work of a light source, the product sits slightly off centre, and the type is left almost alone at the top.",
      ar: "دراسة حملة قائمة على الاقتصاد في العناصر. أفق الصحراء يقوم بدور مصدر الضوء، والمنتج يقف بعيداً قليلاً عن المركز، والنص متروك وحده تقريباً في الأعلى."
    },
    tag: {
      en: "Concept, unofficial",
      ar: "تصوّر غير رسمي"
    },
    alt: {
      en: "Product advertising poster showing a smartphone standing upright in a sunlit desert dune under a large headline.",
      ar: "بوستر إعلاني لمنتج يظهر هاتفاً ذكياً منتصباً على كثيب رملي مضاء بضوء الشمس تحت عنوان كبير."
    }
  },

  {
    file: "04-good-things.jpg",
    title: {
      en: "Good Things Take Time",
      ar: "الأشياء الجميلة تحتاج وقتاً"
    },
    cat: {
      en: "Editorial / Lifestyle",
      ar: "تحريري / أسلوب حياة"
    },
    note: {
      en: "Flat vector illustration held together by a two-weight type lockup. Everything sits in one narrow band of pink and violet so the red sails are the only place the eye lands.",
      ar: "رسم متجّه مسطّح يجمعه تكوين نصّي بوزنين مختلفين. كل شيء داخل نطاق ضيق من الوردي والبنفسجي، لتبقى الأشرعة الحمراء المكان الوحيد الذي تستقر عليه العين."
    },
    tag: {
      en: "Personal work",
      ar: "عمل شخصي"
    },
    alt: {
      en: "Pastel pink and violet poster of a sailing boat with red sails in front of a full moon and pale icebergs, under a two-line headline.",
      ar: "بوستر بألوان وردية وبنفسجية هادئة يُظهر قارباً شراعياً بأشرعة حمراء أمام قمر مكتمل وجبال جليدية شاحبة، تحت عنوان من سطرين."
    }
  },

  {
    file: "05-conan.jpg",
    title: {
      en: "Detective Conan",
      ar: "المحقق كونان"
    },
    cat: {
      en: "Editorial / Illustration",
      ar: "تحريري / رسم"
    },
    note: {
      en: "A monochrome tribute composition. Halftone, hazard stripes and a shattered pane divide the frame into three registers, each carrying a different part of the cast.",
      ar: "تكوين أحادي اللون تحية للعمل الأصلي. التنقيط والخطوط التحذيرية والزجاج المهشّم تقسم الإطار إلى ثلاثة مستويات، يحمل كل منها جزءاً من الشخصيات."
    },
    tag: {
      en: "Fan work, non-commercial",
      ar: "عمل معجبين، غير تجاري"
    },
    alt: {
      en: "Black and white manga tribute composition with a character on a skateboard above a night city, a cracked glass pane, and figures arranged behind lilies along the lower edge.",
      ar: "تكوين بالأبيض والأسود على أسلوب المانغا، يضم شخصية على لوح تزلّج فوق مدينة ليلية، ولوح زجاج مهشّم، وشخصيات مرتّبة خلف زنابق على الحافة السفلى."
    }
  },

  {
    file: "06-cat-food-home.jpg",
    title: {
      en: "Dry Food for Cats",
      ar: "طعام جاف للقطط"
    },
    cat: {
      en: "Product / Packaging",
      ar: "منتج / تغليف"
    },
    note: {
      en: "Packaging and product shot for a dry cat food. A cream and orange pouch with a clear window for the kibble, set in a warm home scene with a cat behind it so the product is read as cat food at first glance.",
      ar: "تصميم تغليف وصورة منتج لطعام جاف للقطط. كيس كريمي وبرتقالي بنافذة شفافة تُظهر الحبوب، في أجواء بيتية دافئة مع قطة خلفه، لتُفهم هوية المنتج كطعام قطط من النظرة الأولى."
    },
    tag: {
      en: "Product mockup",
      ar: "تصميم منتج"
    },
    alt: {
      en: "A cream and orange Dry Food for Cats pouch with a clear window showing kibble, on a light floor with a fluffy cat in soft focus behind and loose kibble in front.",
      ar: "كيس طعام جاف للقطط بلون كريمي وبرتقالي مع نافذة شفافة تُظهر الحبوب، على أرضية فاتحة، وخلفه قطة كثيفة الفرو خارج التركيز وأمامه حبوب متناثرة."
    }
  },

  {
    file: "07-cat-food-fish.jpg",
    title: {
      en: "Dry Food for Cats: Fish Flavour",
      ar: "طعام جاف للقطط: نكهة السمك"
    },
    cat: {
      en: "Product / Advertising",
      ar: "منتج / إعلان"
    },
    note: {
      en: "The same pack, this time selling the fish flavour. The pouch sits on a sandy seabed with light rays from the surface and two fish framing it, so the flavour is told by the scene rather than by extra text.",
      ar: "الكيس نفسه، وهذه المرة لإبراز نكهة السمك. الكيس على قاع رملي مع أشعة ضوء من السطح وسمكتين تحيطان به، فتُروى النكهة بالمشهد بدل نص إضافي."
    },
    tag: {
      en: "Product mockup",
      ar: "تصميم منتج"
    },
    alt: {
      en: "Cream and orange pouch labelled Dry Food for Cats standing on a sandy seabed among coral and shells, with sunlight rays and two fish swimming on either side.",
      ar: "كيس بلون كريمي وبرتقالي مكتوب عليه طعام جاف للقطط يقف على قاع رملي بين المرجان والأصداف، مع أشعة شمس وسمكتين تسبحان على الجانبين."
    }
  }

];

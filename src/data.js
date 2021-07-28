const data = [
  {
    id: 0,
    category: "nagels",
    typeProblem: "Splijtende nagels",
    isSelected: false,
    hasAdditonalQuestions: true,
    nextQuestion: "Zijn jouw nagels hard?",
    standardAdvice: {
      title: "",
      advice: "",
      products: "",
    },
    ja: {
      title: "Jouw persoonlijke hand- en nageladvies",
      advice:
        "Je nagels zijn uitgedroogd en hebben een voedende olie nodig om te herstellen. Zorg er met een fijne vijl voor dat de 3 nagellagen waaruit de nagel bestaat dicht worden 'geseald'. Wij adviseren onderstaande producten voor een snel herstel van jouw harde, splijtende nagels.",
      url: "https://www.herome.com/tips-advies/herstel-gespleten-nagels/",
      products: [
        "Nourishing Nail Oil",
        "Glass Nail File",
        "Caring Nail Polish Remover, bij nagellak gebruik",
      ],
    },
    nee: {
      title: "Jouw persoonlijke hand- en nageladvies",
      advice:
        "Zorg er met een fijne vijl voor dat de 3 nagellagen waaruit de nagel bestaat dicht worden 'geseald'. Wij adviseren onderstaande producten voor een snel herstel van jouw zachte, splijtende nagels. ",
      url: "https://www.herome.com/tips-advies/herstel-gespleten-nagels/",
      products: [
        "Nail Hardener (Extra) Strong",
        "Glass Nail File",
        "Cuticle Cream",
        "Caring Nail Polish Remover",
      ],
    },
  },
  {
    id: 1,
    category: "Nagels",
    typeProblem: "Broze nagels",
    isSelected: false,
    hasAdditonalQuestions: true,
    nextQuestion: "Zijn jouw nagels hard?",
    standardAdvice: {
      title: "",
      advice: "",
      products: "",
    },
    ja: {
      title: "Jouw persoonlijke hand- en nageladvies",
      advice:
        "Je nagels zijn uitgedroogd en hebben een voedende olie nodig om te herstellen. Wij adviseren onderstaande producten voor een snel herstel van jouw harde, broze nagels.",
      url: "https://www.herome.com/tips-advies/broze-nagels-versterken/",
      products: ["Nourishing Nail Oil", "Caring Nail Polish Remover"],
    },
    nee: {
      title: "Jouw persoonlijke hand- en nageladvies",
      advice:
        "Wij adviseren onderstaande producten voor een snel herstel van jouw zachte, broze nagels.",
      url: "https://www.herome.com/tips-advies/broze-nagels-versterken/",
      products: ["Nail Hardener (Extra) Strong", "Caring Nail Polish Remover"],
    },
  },

  {
    id: 2,
    category: "Nagels",
    typeProblem: "Gele nagles",
    isSelected: false,
    hasAdditonalQuestions: true,
    nextQuestion: "Gebruik jij vaak gekleurde nagellak??",
    standardAdvice: {
      title: "",
      advice: "",
      products: "",
    },
    ja: {
      title: "Jouw persoonlijke hand- en nageladvies",
      advice:
        "De kleurpigmenten in een kleurlak kunnen zonder een Base Coat doordringen in de nagels. Gebruik daarom altijd een Base Coat onder een kleurlak. Wij adviseren onderstaande producten voor een snel herstel van jouw gele nagels.",
      url: "https://www.herome.com/tips-advies/herstel-geel-verkleurde-nagels/",
      prodcuts: [
        "Ridge Filling Base Coat",
        "Super Shine",
        "Natural Nail Whitener Pink Glow",
      ],
    },
    nee: {
      title: "Jouw persoonlijke hand- en nageladvies",
      advice:
        "Wij adviseren onderstaande producten voor een snel herstel van jouw gele nagels.",
      url: "https://www.herome.com/tips-advies/broze-nagels-versterken/",
      products: ["Super Shine", "Natural Nail Whitener Pink Glow"],
    },
  },

  {
    id: 3,
    category: "Nagels",
    typeProblem: "Geribbelde nagels",
    isSelected: false,
    hasAdditonalQuestions: false,
    nextQuestion: "",
    standardAdvice: {
      title: "Jouw persoonlijke hand- en nageladvies",
      advice:
        "Wij adviseren onderstaande producten voor gladde, stralende nagels.",
      url: "https://www.herome.com/tips-advies/stop-geribbelde-nagels/",
      products: ["Super Shine", "Ridge Filling Base Coat"],
    },
    ja: {
      title: "",
      advice: "",
      url: "",
      prodcuts: [],
    },
    nee: {
      title: "",
      advice: "",
      url: "",
      products: [],
    },
  },
  {
    id: 4,
    category: "Nagels",
    typeProblem: "Nagelbijten",
    isSelected: false,
    hasAdditonalQuestions: false,
    nextQuestion: "",
    standardAdvice: {
      title: "Jouw persoonlijke hand- en nageladvies",
      advice:
        "Wij adviseren onderstaande producten om snel te kunnen stoppen met nagelbijten en te zorgen voor mooie, verzorgde nagels en nagelriemen.",
      url: "",
      products: ["Bye Bite", "Cuticle Night Repair"],
    },
    ja: {
      title: "",
      advice: "",
      url: "",
      prodcuts: [],
    },
    nee: {
      title: "",
      advice: "",
      url: "",
      products: [],
    },
  },
  {
    id: 5,
    category: "Nagels",
    typeProblem: "Afbladderende nagellak",
    isSelected: false,
    hasAdditonalQuestions: false,
    nextQuestion: "",
    standardAdvice: {
      title: "Jouw persoonlijke hand- en nageladvies",
      advice:
        "Wij adviseren onderstaande producten voor een goede hechting van jouw nagellak.",
      url: "https://www.herome.com/tips-advies/afbladderende-nagellak/",
      products: [
        "Ridge Filling Base Coat",
        "Protecting Top Coat",
        "Caring Nail Polish Remover",
      ],
    },
    ja: {
      title: "",
      advice: "",
      url: "",
      prodcuts: [],
    },
    nee: {
      title: "",
      advice: "",
      url: "",
      products: [],
    },
  },
  {
    id: 6,
    category: "Nagels",
    typeProblem: "Ongelijke nagellengte",
    isSelected: false,
    hasAdditonalQuestions: false,
    nextQuestion: "",
    standardAdvice: {
      title: "Jouw persoonlijke hand- en nageladvies:",
      advice:
        "Wij adviseren nagels minstens 1 keer per week te vijlen met de Glass Nail File zodat haakjes en scheurtjes voorkomen worden. Tip! Ongelijke nagellengte kan goed gecamoufleerd worden door het maken van een French Manicure.",
      url: "",
      products: ["Glass Nail File", "Nail Contour 'White or Without'"],
    },
    ja: {
      title: "",
      advice: "",
      url: "",
      prodcuts: [],
    },
    nee: {
      title: "",
      advice: "",
      url: "",
      products: [],
    },
  },
  {
    id: 7,
    category: "Nagelriemen",
    typeProblem: "Vastzittende nagelriemen",
    isSelected: false,
    hasAdditonalQuestions: false,
    nextQuestion: "",
    standardAdvice: {
      title: "Jouw persoonlijke hand- en nageladvies",
      advice:
        "Wij adviseren onderstaande producten voor zachte en verzorgde nagelriemen.",
      url: "",
      products: ["Cuticle Remover", "Cuticle Pusher", "Cuticle Night Repair"],
    },
    ja: {
      title: "",
      advice: "",
      url: "",
      prodcuts: [],
    },
    nee: {
      title: "",
      advice: "",
      url: "",
      products: [],
    },
  },
  {
    id: 8,
    category: "Nagelriemen",
    typeProblem: "Droge nagelriemen",
    isSelected: false,
    hasAdditonalQuestions: false,
    nextQuestion: "",
    standardAdvice: {
      title: "Jouw persoonlijke hand- en nageladvies",
      advice: "",
      url: "",
      products: ["Cuticle Night Repair"],
    },
    ja: {
      title: "",
      advice: "",
      url: "",
      prodcuts: [],
    },
    nee: {
      title: "",
      advice: "",
      url: "",
      products: [],
    },
  },
  {
    id: 9,
    category: "Nagelriemen",
    typeProblem: "Nagelriemvelletjes",
    isSelected: false,
    hasAdditonalQuestions: false,
    nextQuestion: "",
    standardAdvice: {
      title: "Jouw persoonlijke hand- en nageladvies",
      advice:
        "Wij adviseren onderstaande producten voor mooie en verzorgde nagelriemen zonder velletjes.",
      url: "",
      products: ["Cuticle Remover", "Cuticle Pusher", "Cuticle Night Repair"],
    },
    ja: {
      title: "",
      advice: "",
      url: "",
      prodcuts: [],
    },
    nee: {
      title: "",
      advice: "",
      url: "",
      products: [],
    },
  },
  {
    id: 10,
    category: "Handen",
    typeProblem: "Droge handen",
    isSelected: false,
    hasAdditonalQuestions: true,
    nextQuestion: "Heb je weleens kloven?",
    standardAdvice: {
      title: "",
      advice: "",
      url: "",
      products: [],
    },
    ja: {
      title: "Jouw persoonlijke hand- en nageladvies",
      advice:
        "Wij adviseren onderstaande producten voor een snel herstel van jouw kloven.",
      url: "",
      prodcuts: [
        {
          name: "Cream for Chapped Skin",
          image: require("../src/images/products/cream-for-chapped-skin.png"),
          info: "De rijke samenstelling van ingrediënten beschermt, verzorgt én herstelt de handhuid, waardoor er geen schrale plekken op de huid ontstaan. Bovendien voelt de huid na gebruik fluweelzacht aan. De handcreme bevat o.a. sheabutter, aloë vera, vitamine E en B5, lanoline, bisabolol en allantoïne. Dit stimuleert de wondheling en verhoogt de weerstand van de huid.",
          price: "€ 14.40",
        },
        {
          name: "Cure for Chapped Skin",
          image: require("../src/images/products/cure-for-chapped-skin.png"),
          info: "Door de rijke samenstelling van de Cure For Chapped Skin zorg je ervoor dat ontstane schrale plekken zacht worden en snel genezen. De natuurlijke en huideigen ingrediënten zorgen samen voor een diepe herstellende werking:",
          price: "€ 12.35",
        },
      ],
    },
    nee: {
      title: "Jouw persoonlijke hand- en nageladvies",
      advice:
        "Wij adviseren onderstaande producten voor een snel herstel van jouw droge handen.",
      url: "",
      products: [
        {
          name: "Daily Protection Hand Cream",
          image: require("../src/images/products/hand-cream-daily-protection.png"),
          info: "De handhuid wordt intensief verzorgd met vochtbinders en krijgt stevigheid en glans. De handen voelen weer zacht en soepel aan. Bovendien vertraagt de Hand Cream Daily Protection het proces van vroegtijdige huidveroudering. De crème smeert makkelijk uit, is niet vet en wordt direct door de huid opgenomen. Een goede handcreme voor iedere dag.",
          price: "€ 7.73",
        },
        {
          name: "24 Hours Protective Hand Cream",
          image: require("../src/images/products/24-hour-protection-hand-cream.png"),
          info: "De handcreme laat een ultrafijn laagje achter op de handen, die de huid versterkt en uitdroging voorkomt. Door een hoge zonbeschermingsfactor van de 24 Hour Protective Hand Cream zijn je handen optimaal beschermd tegen de schadelijke invloeden van zonlicht en wordt huidveroudering tegengegaan.",
          price: "€ 11.28",
        },
        {
          name: "One Minute Manicure",
          image: require("../src/images/products/one-minute-manicure.png"),
          info: "Deze natuurlijke handscrub met verzorgende oliën en een verfrissend citroen-/sinaasappelaroma hydrateert en voedt de handen, nagelriemen en nagels. De One Minute Scrub maakt de handen zijdezacht en zorgt tegelijkertijd voor soepele nagelriemen en glanzende nagels. De oranjegekleurde duindoorn, rijk aan antioxidanten, revitaliseert en verbetert de conditie van de huid. En fijn: je kunt de scrub ook gebruiken voor je voeten en lichaam.",
          price: "€ 14.99",
        },
      ],
    },
  },
  {
    id: 11,
    category: "Handen",
    typeProblem: "Kloven",
    isSelected: false,
    hasAdditonalQuestions: false,
    nextQuestion: "",
    standardAdvice: {
      title: "Jouw persoonlijke hand- en nageladvies",
      advice:
        "Wij adviseren onderstaande producten voor een snel herstel van jouw kloven.",
      url: "",
      products: ["Cream for Chapped Skin", "Cure for Chapped Skin"],
    },
    ja: {
      title: "",
      advice: "",
      url: "",
      prodcuts: [],
    },
    nee: {
      title: "",
      advice: "",
      url: "",
      products: [],
    },
  },
  {
    id: 12,
    category: "Handen",
    typeProblem: "Pigmentvlekken",
    isSelected: false,
    hasAdditonalQuestions: false,
    nextQuestion: "",
    standardAdvice: {
      title: "Jouw persoonlijke hand- en nageladvies",
      advice:
        "De eerste tekenen van huidveroudering beginnen al vanaf het 25ste levensjaar. Wij adviseren onderstaande producten voor een optimale bescherming voor je handen.",
      url: "",
      products: ["Hand Cream Extra Anti Aging", "Overnight Hand Mask"],
    },
    ja: {
      title: "",
      advice: "",
      url: "",
      prodcuts: [],
    },
    nee: {
      title: "",
      advice: "",
      url: "",
      products: [],
    },
  },
];

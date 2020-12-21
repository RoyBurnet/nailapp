const data = [
  {
    id: 0,
    category: "Nagels",
    typeProblem: "Splijtende nagels",
    isSelected: false,
    hasAdditionalQuestions: true,
    nextQuestion: "Zijn jouw nagels hard?",
    standardAdvice: {
      title: "",
      advice: "",
      products: "",
    },
    followUpQuestion: [
      {
        id: 0,
        answer: "ja",
        isSelected: false,
        title: "Jouw persoonlijke hand- en nageladvies",
        advice:
          "Je nagels zijn uitgedroogd en hebben een voedende olie nodig om te herstellen. Zorg er met een fijne vijl voor dat de 3 nagellagen waaruit de nagel bestaat dicht worden 'geseald'.\n\nWij adviseren onderstaande producten voor een snel herstel van jouw harde, splijtende nagels.",
        url: "https://www.herome.com/tips-advies/herstel-gespleten-nagels/",
        products: [
          "Nourishing Nail Oil",
          "Glass Nail File",
          "Caring Nail Polish Remover",
        ],
      },
      {
        id: 1,
        answer: "nee",
        isSelected: false,
        title: "Jouw persoonlijke hand- en nageladvies",
        advice:
          "Zorg er met een fijne vijl voor dat de 3 nagellagen waaruit de nagel bestaat dicht worden 'geseald'.\n\n Wij adviseren onderstaande producten voor een snel herstel van jouw zachte, splijtende nagels. ",
        url: "https://www.herome.com/tips-advies/herstel-gespleten-nagels/",
        products: [
          "Nail Hardener (Extra) Strong",
          "Glass Nail File",
          "Cuticle Cream",
          "Caring Nail Polish Remover",
        ],
      },
    ],
  },
  {
    id: 1,
    category: "Nagels",
    typeProblem: "Broze nagels",
    isSelected: false,
    hasAdditionalQuestions: true,
    nextQuestion: "Zijn jouw nagels hard?",
    standardAdvice: {
      title: "",
      advice: "",
      products: "",
    },
    followUpQuestion: [
      {
        id: 0,
        answer: "ja",
        isSelected: false,
        title: "Jouw persoonlijke hand- en nageladvies",
        advice:
          "Je nagels zijn uitgedroogd en hebben een voedende olie nodig om te herstellen.\n\nWij adviseren onderstaande producten voor een snel herstel van jouw harde, broze nagels.",
        url: "https://www.herome.com/tips-advies/broze-nagels-versterken/",
        products: ["Nourishing Nail Oil", "Caring Nail Polish Remover"],
      },
      {
        id: 1,
        answer: "nee",
        isSelected: false,
        title: "Jouw persoonlijke hand- en nageladvies",
        advice:
          "Wij adviseren onderstaande producten voor een snel herstel van jouw zachte, broze nagels.",
        url: "https://www.herome.com/tips-advies/broze-nagels-versterken/",
        products: [
          "Nail Hardener (Extra) Strong",
          "Caring Nail Polish Remover",
        ],
      },
    ],
  },

  {
    id: 2,
    category: "Nagels",
    typeProblem: "Gele nagles",
    isSelected: false,
    hasAdditionalQuestions: true,
    nextQuestion: "Gebruik jij vaak gekleurde nagellak?",
    standardAdvice: {
      title: "",
      advice: "",
      products: "",
    },
    followUpQuestion: [
      {
        id: 0,
        answer: "ja",
        isSelected: false,
        title: "Jouw persoonlijke hand- en nageladvies",
        advice:
          "De kleurpigmenten in een kleurlak kunnen zonder een Base Coat doordringen in de nagels. Gebruik daarom altijd een Base Coat onder een kleurlak.\n\nWij adviseren onderstaande producten voor een snel herstel van jouw gele nagels.",
        url:
          "https://www.herome.com/tips-advies/herstel-geel-verkleurde-nagels/",
        products: [
          "Ridge Filling Base Coat",
          "Super Shine",
          "Natural Nail Whitener Pink Glow",
        ],
      },
      {
        id: 1,
        answer: "nee",
        isSelected: false,
        title: "Jouw persoonlijke hand- en nageladvies",
        advice:
          "De kleurpigmenten in een kleurlak kunnen zonder een Base Coat doordringen in de nagels. Gebruik daarom altijd een Base Coat onder een kleurlak.\n\nWij adviseren onderstaande producten voor een snel herstel van jouw gele nagels.",
        url:
          "https://www.herome.com/tips-advies/herstel-geel-verkleurde-nagels/",
        products: [
          "Ridge Filling Base Coat",
          "Super Shine",
          "Natural Nail Whitener Pink Glow",
        ],
      },
    ],
  },
  {
    id: 3,
    category: "Nagels",
    typeProblem: "Geribbelde nagels",
    isSelected: false,
    hasAdditionalQuestions: false,
    nextQuestion: "",
    standardAdvice: {
      title: "Jouw persoonlijke hand- en nageladvies",
      advice:
        "Wij adviseren onderstaande producten voor gladde, stralende nagels.",
      url: "https://www.herome.com/tips-advies/stop-geribbelde-nagels/",
      products: ["Super Shine", "Ridge Filling Base Coat"],
    },
    followUpQuestion: [],
  },
  {
    id: 4,
    category: "Nagels",
    typeProblem: "Nagelbijten",
    isSelected: false,
    hasAdditionalQuestions: false,
    nextQuestion: "",
    standardAdvice: {
      title: "Jouw persoonlijke hand- en nageladvies",
      advice:
        "Wij adviseren onderstaande producten om snel te kunnen stoppen met nagelbijten en te zorgen voor mooie, verzorgde nagels en nagelriemen.",
      url: "",
      products: ["Bye Bite", "Cuticle Night Repair"],
    },
    followUpQuestion: [],
  },
  {
    id: 5,
    category: "Nagels",
    typeProblem: "Afbladderende nagellak",
    isSelected: false,
    hasAdditionalQuestions: false,
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
    followUpQuestion: [],
  },
  {
    id: 6,
    category: "Nagels",
    typeProblem: "Ongelijke nagellengte",
    isSelected: false,
    hasAdditionalQuestions: false,
    nextQuestion: "",
    standardAdvice: {
      title: "Jouw persoonlijke hand- en nageladvies:",
      advice:
        "Wij adviseren nagels minstens 1 keer per week te vijlen met de Glass Nail File zodat haakjes en scheurtjes voorkomen worden. Tip! Ongelijke nagellengte kan goed gecamoufleerd worden door het maken van een French Manicure.",
      url: "",
      products: ["Glass Nail File", "Nail Contour White or Without"],
    },
    followUpQuestion: [],
  },
  {
    id: 7,
    category: "Nagelriemen",
    typeProblem: "Vastzittende nagelriemen",
    isSelected: false,
    hasAdditionalQuestions: false,
    nextQuestion: "",
    standardAdvice: {
      title: "Jouw persoonlijke hand- en nageladvies",
      advice:
        "Wij adviseren onderstaande producten voor zachte en verzorgde nagelriemen.",
      url: "",
      products: ["Cuticle Remover", "Cuticle Pusher", "Cuticle Night Repair"],
    },
    followUpQuestion: [],
  },
  {
    id: 8,
    category: "Nagelriemen",
    typeProblem: "Droge nagelriemen",
    isSelected: false,
    hasAdditionalQuestions: false,
    nextQuestion: "",
    standardAdvice: {
      title: "Jouw persoonlijke hand- en nageladvies",
      advice:
        "Wij adviseren onderstaand product voor mooie en verzorgde nagelriemen",
      url: "",
      products: ["Cuticle Night Repair"],
    },
    followUpQuestion: [],
  },
  {
    id: 9,
    category: "Nagelriemen",
    typeProblem: "Nagelriemvelletjes",
    isSelected: false,
    hasAdditionalQuestions: false,
    nextQuestion: "",
    standardAdvice: {
      title: "Jouw persoonlijke hand- en nageladvies",
      advice:
        "Wij adviseren onderstaande producten voor mooie en verzorgde nagelriemen zonder velletjes.",
      url: "",
      products: ["Cuticle Remover", "Cuticle Pusher", "Cuticle Night Repair"],
    },
    followUpQuestion: [],
  },
  {
    id: 10,
    category: "Handen",
    typeProblem: "Droge handen",
    isSelected: false,
    hasAdditionalQuestions: true,
    nextQuestion: "Heb je weleens kloven?",
    standardAdvice: {
      title: "",
      advice: "",
      url: "https://www.herome.com/",
      products: [],
    },
    followUpQuestion: [
      {
        id: 0,
        answer: "ja",
        isSelected: false,
        title: "Jouw persoonlijke hand- en nageladvies",
        advice:
          "Wij adviseren onderstaande producten voor een snel herstel van jouw kloven.",
        url: "https://www.herome.com/",
        products: ["Cream for Chapped Skin", "Cure for Chapped Skin"],
      },
      {
        id: 1,
        answer: "nee",
        isSelected: false,
        title: "Jouw persoonlijke hand- en nageladvies",
        advice:
          "Wij adviseren onderstaande producten voor een snel herstel van jouw droge handen.",
        url: "https://www.herome.com/",
        products: [
          "Daily Protection Hand Cream",
          "24 Hours Protective Hand Cream",
          "One Minute Manicure",
        ],
      },
    ],
  },
  {
    id: 11,
    category: "Handen",
    typeProblem: "Kloven",
    isSelected: false,
    hasAdditionalQuestions: false,
    nextQuestion: "",
    standardAdvice: {
      title: "Jouw persoonlijke hand- en nageladvies",
      advice:
        "Wij adviseren onderstaande producten voor een snel herstel van jouw kloven.",
      url: "",
      products: ["Cream for Chapped Skin", "Cure for Chapped Skin"],
    },
    followUpQuestion: [],
  },
  {
    id: 12,
    category: "Handen",
    typeProblem: "Pigmentvlekken",
    isSelected: false,
    hasAdditionalQuestions: false,
    nextQuestion: "",
    standardAdvice: {
      title: "Jouw persoonlijke hand- en nageladvies",
      advice:
        "De eerste tekenen van huidveroudering beginnen al vanaf het 25ste levensjaar. Wij adviseren onderstaande producten voor een optimale bescherming voor je handen.",
      url: "",
      products: ["Hand Cream Extra Anti Aging", "Overnight Hand Mask"],
    },
    followUpQuestion: [],
  },
];

function getCategory(categoryName) {
  return data.filter((item) => item.category === categoryName);
}

const quest = [
  {id: 0, isSelected: false, typeProblem: 'ja'},
  {id: 1, isSelected: false, typeProblem: 'nee'},
];

const nagels = getCategory('Nagels');
const nagelRiemen = getCategory('Nagelriemen');
const handen = getCategory('Handen');

export {nagels, nagelRiemen, handen, quest};

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
        typeProblem: "ja",
        isSelected: false,
        title: "Jouw persoonlijke hand- en nageladvies",
        advice:
          "Je nagels zijn uitgedroogd en hebben een voedende olie nodig om te herstellen. Zorg er met een fijne vijl voor dat de 3 nagellagen waaruit de nagel bestaat dicht worden 'geseald'.\n\nWij adviseren onderstaande producten voor een snel herstel van jouw harde, splijtende nagels.",
        url: "https://www.herome.com/tips-advies/herstel-gespleten-nagels/",
        products: [
          {
            name: "Nourishing Nail Oil",
            image: require("../src/images/products/nourishing-nail-oil.png"),
            info: "Heb je last van zeer droge, breekbare nagels en nagelriemen? De voedende nagelolie herstelt de conditie van de nagels en houdt ze soepel. Bovendien stimuleert de olie slecht groeiende nagels en verzorgt de nagelriemen.",
            price: "€ 14.50",
          },
          {
            name: "Glass Nail File",
            image: require("../src/images/products/glass-nail-file.png"),
            info: "Door de speciale structuur van het glas houd je de nagelplaten perfect gesloten en komt er geen lucht tussen. Je nagels zijn weerbaarder tegen water en vuil. Bovendien voorkom je met de glazen nagelvijl dat je een zagende beweging maakt. De vijl maakt het alleen mogelijk om vanaf de zijkant richting het midden van de nagel te vijlen. Splijtende, brekende of scheurende nagels zijn dus verleden tijd.",
            price: "€ 11.48",
          },
          {
            name: "Caring Nail Polish Remover",
            image: require("../src/images/products/caring-nail-polish-remover.png"),
            info: "Veel nagellakremovers zijn agressief en verslechten de conditie van je nagels. Doordat deze removers onder andere het vocht uit je nagels onttrekken is de kans op o.a. splijtende nagels veel groter. Met de Caring Nail Polish Remover reinig je de nagels op een milde wijze. Het toegevoegde ingrediënt Lanoline voorkomt uitdroging en geeft de nagels een mooie glans. En fijn: de nagellakremover is acetonvrij en heeft een aangename geur.",
            price: "€ 9.37",
          },
        ],
      },
      {
        id: 1,
        typeProblem: "nee",
        isSelected: false,
        title: "Jouw persoonlijke hand- en nageladvies",
        advice:
          "Zorg er met een fijne vijl voor dat de 3 nagellagen waaruit de nagel bestaat dicht worden 'geseald'.\n\n Wij adviseren onderstaande producten voor een snel herstel van jouw zachte, splijtende nagels. ",
        url: "https://www.herome.com/tips-advies/herstel-gespleten-nagels/",
        products: [
          {
            name: "Nail Hardener (Extra) Strong",
            image: require("../src/images/products/caring-nail-polish-remover.png"),
            info: "Wie droomt er niet van lange, supersterke nagels? Met deze nagelverharder breng je een beschermlaag aan op de nagel en voorkom je ingescheurde nagels. Zo kunnen je nagels eindeloos groeien.",
            price: "€ 13.85",
          },
          {
            name: "Glass Nail File",
            image: require("../src/images/products/glass-nail-file.png"),
            info: "Door de speciale structuur van het glas houd je de nagelplaten perfect gesloten en komt er geen lucht tussen. Je nagels zijn weerbaarder tegen water en vuil. Bovendien voorkom je met de glazen nagelvijl dat je een zagende beweging maakt. De vijl maakt het alleen mogelijk om vanaf de zijkant richting het midden van de nagel te vijlen. Splijtende, brekende of scheurende nagels zijn dus verleden tijd.",
            price: "€ 11.48",
          },
          {
            name: "Cuticle Cream",
            image: require("../src/images/products/cuticle-cream.png"),
            info: "Deze rijke samenstelling van ingrediënten bevordert de wondheling en herstelt droge nagelriemen. De Cuticle Cream maakt je nagelriemen zacht en bestrijdt harde nagelriemranden, waardoor er geen vervelende velletjes of scheurtjes aan de nagelriemen ontstaan.",
            price: "€ 9.55",
          },
          {
            name: "Caring Nail Polish Remover",
            image: require("../src/images/products/caring-nail-polish-remover.png"),
            info: "Veel nagellakremovers zijn agressief en verslechten de conditie van je nagels. Doordat deze removers onder andere het vocht uit je nagels onttrekken is de kans op o.a. splijtende nagels veel groter. Met de Caring Nail Polish Remover reinig je de nagels op een milde wijze. Het toegevoegde ingrediënt Lanoline voorkomt uitdroging en geeft de nagels een mooie glans. En fijn: de nagellakremover is acetonvrij en heeft een aangename geur.",
            price: "€ 9.37",
          },
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
        typeProblem: "ja",
        isSelected: false,
        title: "Jouw persoonlijke hand- en nageladvies",
        advice:
          "Je nagels zijn uitgedroogd en hebben een voedende olie nodig om te herstellen.\n\nWij adviseren onderstaande producten voor een snel herstel van jouw harde, broze nagels.",
        url: "https://www.herome.com/tips-advies/broze-nagels-versterken/",
        products: [
          {
            name: "Nourishing Nail Oil",
            image: require("../src/images/products/nourishing-nail-oil.png"),
            info: "Heb je last van zeer droge, breekbare nagels en nagelriemen? De voedende nagelolie herstelt de conditie van de nagels en houdt ze soepel. Bovendien stimuleert de olie slecht groeiende nagels en verzorgt de nagelriemen.",
            price: "€ 14.50",
          },
          {
            name: "Caring Nail Polish Remover",
            image: require("../src/images/products/caring-nail-polish-remover.png"),
            info: "Veel nagellakremovers zijn agressief en verslechten de conditie van je nagels. Doordat deze removers onder andere het vocht uit je nagels onttrekken is de kans op o.a. splijtende nagels veel groter. Met de Caring Nail Polish Remover reinig je de nagels op een milde wijze. Het toegevoegde ingrediënt Lanoline voorkomt uitdroging en geeft de nagels een mooie glans. En fijn: de nagellakremover is acetonvrij en heeft een aangename geur.",
            price: "€ 9.37",
          },
        ],
      },
      {
        id: 1,
        typeProblem: "nee",
        isSelected: false,
        title: "Jouw persoonlijke hand- en nageladvies",
        advice:
          "Wij adviseren onderstaande producten voor een snel herstel van jouw zachte, broze nagels.",
        url: "https://www.herome.com/tips-advies/broze-nagels-versterken/",
        products: [
          {
            name: "Nail Hardener (Extra) Strong",
            image: require("../src/images/products/caring-nail-polish-remover.png"),
            info: "Wie droomt er niet van lange, supersterke nagels? Met deze nagelverharder breng je een beschermlaag aan op de nagel en voorkom je ingescheurde nagels. Zo kunnen je nagels eindeloos groeien.",
            price: "€ 13.85",
          },
          {
            name: "Caring Nail Polish Remover",
            image: require("../src/images/products/caring-nail-polish-remover.png"),
            info: "Veel nagellakremovers zijn agressief en verslechten de conditie van je nagels. Doordat deze removers onder andere het vocht uit je nagels onttrekken is de kans op o.a. splijtende nagels veel groter. Met de Caring Nail Polish Remover reinig je de nagels op een milde wijze. Het toegevoegde ingrediënt Lanoline voorkomt uitdroging en geeft de nagels een mooie glans. En fijn: de nagellakremover is acetonvrij en heeft een aangename geur.",
            price: "€ 9.37",
          },
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
        typeProblem: "ja",
        isSelected: false,
        title: "Jouw persoonlijke hand- en nageladvies",
        advice:
          "De kleurpigmenten in een kleurlak kunnen zonder een Base Coat doordringen in de nagels. Gebruik daarom altijd een Base Coat onder een kleurlak.\n\nWij adviseren onderstaande producten voor een snel herstel van jouw gele nagels.",
        url: "https://www.herome.com/tips-advies/herstel-geel-verkleurde-nagels/",
        products: [
          {
            name: "Ridge Filling Base Coat",
            image: require("../src/images/products/ridge-filling-base-coat.png"),
            info: "De Ridge Filling Base Coat zorgt ervoor dat kleurpigmenten uit nagellak de nagels niet verkleuren. Bovendien egaliseert de basecoat een oneffen of ribbelige nagelplaat. De nagels worden gladder en mooi egaal.",
            price: "€ 11.95",
          },
          {
            name: "Super Shine",
            image: require("../src/images/products/super-shine.png"),
            info: "Geen zin om je nagels te lakken? Met deze nagelvijl zorg je voor glanzende nagels. Bovendien maakt de vijl het nageloppervlak glad, waardoor een nagellak langer en beter hecht. Is het op je werk niet toegestaan om nagellak te dragen? Deze vijl is dan de uitkomst! Zonder nagellak creëer je een langdurige natuurlijke glans.",
            price: "€ 8.29",
          },
          {
            name: "Natural Nail Whitener Pink Glow",
            image: require("../src/images/products/natural-nail-whitener-pink-glow.png"),
            info: "Deze lak camoufleert verkleuringen en geeft een schitterende glans. Ideaal als je geen tijd hebt om je nagels te lakken met een basecoat, kleurlak en topcoat. Al binnen één minuut is de Natural Nail Whitener Pink Glow droog en zien je nagels er perfect verzorgd uit.",
            price: "€ 12.44",
          },
        ],
      },
      {
        id: 1,
        typeProblem: "nee",
        isSelected: false,
        title: "Jouw persoonlijke hand- en nageladvies",
        advice:
          "De kleurpigmenten in een kleurlak kunnen zonder een Base Coat doordringen in de nagels. Gebruik daarom altijd een Base Coat onder een kleurlak.\n\nWij adviseren onderstaande producten voor een snel herstel van jouw gele nagels.",
        url: "https://www.herome.com/tips-advies/herstel-geel-verkleurde-nagels/",
        products: [
          {
            name: "Ridge Filling Base Coat",
            image: require("../src/images/products/ridge-filling-base-coat.png"),
            info: "De Ridge Filling Base Coat zorgt ervoor dat kleurpigmenten uit nagellak de nagels niet verkleuren. Bovendien egaliseert de basecoat een oneffen of ribbelige nagelplaat. De nagels worden gladder en mooi egaal.",
            price: "€ 11.95",
          },
          {
            name: "Super Shine",
            image: require("../src/images/products/super-shine.png"),
            info: "Geen zin om je nagels te lakken? Met deze nagelvijl zorg je voor glanzende nagels. Bovendien maakt de vijl het nageloppervlak glad, waardoor een nagellak langer en beter hecht. Is het op je werk niet toegestaan om nagellak te dragen? Deze vijl is dan de uitkomst! Zonder nagellak creëer je een langdurige natuurlijke glans.",
            price: "€ 8.29",
          },
          {
            name: "Natural Nail Whitener Pink Glow",
            image: require("../src/images/products/natural-nail-whitener-pink-glow.png"),
            info: "Deze lak camoufleert verkleuringen en geeft een schitterende glans. Ideaal als je geen tijd hebt om je nagels te lakken met een basecoat, kleurlak en topcoat. Al binnen één minuut is de Natural Nail Whitener Pink Glow droog en zien je nagels er perfect verzorgd uit.",
            price: "€ 12.44",
          },
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
      products: [
        {
          name: "Ridge Filling Base Coat",
          image: require("../src/images/products/ridge-filling-base-coat.png"),
          info: "De Ridge Filling Base Coat zorgt ervoor dat kleurpigmenten uit nagellak de nagels niet verkleuren. Bovendien egaliseert de basecoat een oneffen of ribbelige nagelplaat. De nagels worden gladder en mooi egaal.",
          price: "€ 11.95",
        },
        {
          name: "Super Shine",
          image: require("../src/images/products/super-shine.png"),
          info: "Geen zin om je nagels te lakken? Met deze nagelvijl zorg je voor glanzende nagels. Bovendien maakt de vijl het nageloppervlak glad, waardoor een nagellak langer en beter hecht. Is het op je werk niet toegestaan om nagellak te dragen? Deze vijl is dan de uitkomst! Zonder nagellak creëer je een langdurige natuurlijke glans.",
          price: "€ 8.29",
        },
      ],
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
      products: [
        {
          name: "Bye Bite",
          image: require("../src/images/products/bye-bite.png"),
          info: "De Bye Bite van Herome heeft een bittere smaak, waardoor nagelbijten wordt tegengegaan. Het product is verrijkt met vitamine E, zodat niet alleen de nagelstructuur wordt versterkt maar ook de nagelgroei een extra boost krijgt. Bovendien is dit nagelproduct geschikt tegen duimzuigen en kan het ook gebruikt worden door kinderen. Goed om te weten: het product is niet schadelijk voor de gezondheid.",
          price: "€ 10.45",
        },
        {
          name: "Cuticle Night Repair",
          image: require("../src/images/products/cuticle-night-repair.png"),
          info: "Met de Cuticle Night Repair tover je kapotte nagelriemen om in gezonde nagelriemen die gevoed en gehydrateerd zijn. Het serum met o.a. jojoba- en amandelolie en sheabutter herstelt droge, ontstoken en pijnlijke nagelriemen terwijl je slaapt. Geen wondjes of scheurtjes meer dankzij deze nagelriem pen.",
          price: "€ 11.41",
        },
      ],
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
        {
          name: "Ridge Filling Base Coat",
          image: require("../src/images/products/ridge-filling-base-coat.png"),
          info: "De Ridge Filling Base Coat zorgt ervoor dat kleurpigmenten uit nagellak de nagels niet verkleuren. Bovendien egaliseert de basecoat een oneffen of ribbelige nagelplaat. De nagels worden gladder en mooi egaal.",
          price: "€ 11.95",
        },
        {
          name: "Protecting Top Coat",
          image: require("../src/images/products/protecting-top-coat.png"),
          info: "Maak je gelakte nagels af met de Protecting Top Coat. De waterafstotende beschermlaag intensiveert de kleur van je nagellak en geeft een glanzend effect. Bovendien blijft je gekleurde nagellak dubbel zo lang mooi op de nagels zitten. De transparante topcoat kan ook direct op ongelakte nagels aangebracht worden voor een mooie glans. Al binnen tien seconden is de lak stofdroog.",
          price: "€ 12.10",
        },
        {
          name: "Caring Nail Polish Remover",
          image: require("../src/images/products/caring-nail-polish-remover.png"),
          info: "Veel nagellakremovers zijn agressief en verslechten de conditie van je nagels. Doordat deze removers onder andere het vocht uit je nagels onttrekken is de kans op o.a. splijtende nagels veel groter. Met de Caring Nail Polish Remover reinig je de nagels op een milde wijze. Het toegevoegde ingrediënt Lanoline voorkomt uitdroging en geeft de nagels een mooie glans. En fijn: de nagellakremover is acetonvrij en heeft een aangename geur.",
          price: "€ 9.37",
        },
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
      products: [
        {
          name: "Glass Nail File",
          image: require("../src/images/products/glass-nail-file.png"),
          info: "Door de speciale structuur van het glas houd je de nagelplaten perfect gesloten en komt er geen lucht tussen. Je nagels zijn weerbaarder tegen water en vuil. Bovendien voorkom je met de glazen nagelvijl dat je een zagende beweging maakt. De vijl maakt het alleen mogelijk om vanaf de zijkant richting het midden van de nagel te vijlen. Splijtende, brekende of scheurende nagels zijn dus verleden tijd.",
          price: "€ 11.48",
        },
        {
          name: "Nail Contour White or Without",
          image: require("../src/images/products/nail-contour-white-or-without.png"),
          info: "De witte contourrand van de nagels wordt extra geaccentueerd waardoor je nagels een parelwitte nagelrand krijgen. Als één of meerdere nagels iets korter zijn, kan dit op slimme manier opgelost worden door de lak op de korte nagel iets breder aan te zetten. Bovendien beschermt en verhardt de Perfect Nail Contour ‘White of Without’ de nagelranden waardoor ze minder snel scheuren of splijten.",
          price: "€ 12.10",
        },
      ],
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
      products: [
        {
          name: "Cuticle Remover",
          image: require("../src/images/products/cuticle-remover.png"),
          info: "De Cuticle Remover maakt vastzittende nagelriemen los, waardoor deze weer flexibel en elastisch worden. Dat is belangrijk, want met soepele nagelriemen verklein je de kans op scheurtjes en stimuleer je de natuurlijke nagelgroei. Met de Cuticle Remover heb je binnen no-time schone en zachte nagelriemen.",
          price: "€ 11.79",
        },
        {
          name: "Cuticle Pusher",
          image: require("../src/images/products/cuticle-pusher.png"),
          info: "Met de Cuticle Pusher worden de nagelriemen op een voorzichtige manier teruggeduwd. Hierdoor zorg je ervoor dat de nagel beter gevoed wordt en stimuleer je de natuurlijke nagelgroei.",
          price: "€ 4.14",
        },
        {
          name: "Cuticle Night Repair",
          image: require("../src/images/products/cuticle-night-repair.png"),
          info: "Met de Cuticle Night Repair tover je kapotte nagelriemen om in gezonde nagelriemen die gevoed en gehydrateerd zijn. Het serum met o.a. jojoba- en amandelolie en sheabutter herstelt droge, ontstoken en pijnlijke nagelriemen terwijl je slaapt. Geen wondjes of scheurtjes meer dankzij deze nagelriem pen.",
          price: "€ 11.41",
        },
      ],
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
      products: [
        {
          name: "Cuticle Night Repair",
          image: require("../src/images/products/cuticle-night-repair.png"),
          info: "Met de Cuticle Night Repair tover je kapotte nagelriemen om in gezonde nagelriemen die gevoed en gehydrateerd zijn. Het serum met o.a. jojoba- en amandelolie en sheabutter herstelt droge, ontstoken en pijnlijke nagelriemen terwijl je slaapt. Geen wondjes of scheurtjes meer dankzij deze nagelriem pen.",
          price: "€ 11.41",
        },
      ],
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
      products: [
        {
          name: "Cuticle Remover",
          image: require("../src/images/products/cuticle-remover.png"),
          info: "De Cuticle Remover maakt vastzittende nagelriemen los, waardoor deze weer flexibel en elastisch worden. Dat is belangrijk, want met soepele nagelriemen verklein je de kans op scheurtjes en stimuleer je de natuurlijke nagelgroei. Met de Cuticle Remover heb je binnen no-time schone en zachte nagelriemen.",
          price: "€ 11.79",
        },
        {
          name: "Cuticle Pusher",
          image: require("../src/images/products/cuticle-pusher.png"),
          info: "Met de Cuticle Pusher worden de nagelriemen op een voorzichtige manier teruggeduwd. Hierdoor zorg je ervoor dat de nagel beter gevoed wordt en stimuleer je de natuurlijke nagelgroei.",
          price: "€ 4.14",
        },
        {
          name: "Cuticle Night Repair",
          image: require("../src/images/products/cuticle-night-repair.png"),
          info: "Met de Cuticle Night Repair tover je kapotte nagelriemen om in gezonde nagelriemen die gevoed en gehydrateerd zijn. Het serum met o.a. jojoba- en amandelolie en sheabutter herstelt droge, ontstoken en pijnlijke nagelriemen terwijl je slaapt. Geen wondjes of scheurtjes meer dankzij deze nagelriem pen.",
          price: "€ 11.41",
        },
      ],
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
        typeProblem: "ja",
        isSelected: false,
        title: "Jouw persoonlijke hand- en nageladvies",
        advice:
          "Wij adviseren onderstaande producten voor een snel herstel van jouw kloven.",
        url: "https://www.herome.com/",
        products: [
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
      {
        id: 1,
        typeProblem: "nee",
        isSelected: false,
        title: "Jouw persoonlijke hand- en nageladvies",
        advice:
          "Wij adviseren onderstaande producten voor een snel herstel van jouw droge handen.",
        url: "https://www.herome.com/",
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
      products: [
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
      products: [
        {
          name: "Hand Cream Extra Anti Aging",
          image: require("../src/images/products/hand-creme-extra-anti-aging.png"),
          info: "De Hand Cream Extra Anti Aging activeert de celvernieuwing, waardoor vertraagde huidfuncties weer actief worden. De uv-filters beschermen de huid tegen de schadelijke invloeden van het zonlicht. Door de toevoeging van retinol voorkomt de crème hyperpigmentatie waardoor vlekken ontstaan. Deze handcreme is speciaal ontwikkeld voor de rijpere handhuid.",
          price: "€ 14.57",
        },
        {
          name: "Overnight Hand Mask",
          image: require("../src/images/products/overnight-hand-mask.png"),
          info: "Deze intensieve nachtkuur is ideaal voor mensen die gedurende de dag hun handen niet kunnen verzorgen. Het handmasker heeft een celvernieuwende werking en stimuleert de bloedcirculatie voor een goede weerstand van de huid. Bovendien zorgt de toevoeging van aloë vera en bisabolol voor een kalmerend effect en voorkomt het vervelende kloofjes op de huid. Het Overnight Hand Mask is ook geschikt voor diverse soorten eczeem.",
          price: "€ 12.35",
        },
      ],
    },
    followUpQuestion: [],
  },
];

function getCategory(categoryName) {
  return data.filter((item) => item.category === categoryName);
}

const quest = [
  { id: 0, isSelected: false, typeProblem: "ja" },
  { id: 1, isSelected: false, typeProblem: "nee" },
];

const nagels = getCategory("Nagels");
const nagelRiemen = getCategory("Nagelriemen");
const handen = getCategory("Handen");

export { nagels, nagelRiemen, handen, quest };

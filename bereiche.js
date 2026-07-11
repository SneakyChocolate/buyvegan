let rectangles = [
  {
    "x": 766,
    "y": 462,
    "w": 98,
    "h": 22,
    "description": "gebaeck"
  },
  {
    "x": 868,
    "y": 426,
    "w": 18,
    "h": 56,
    "description": "brot"
  },
  {
    "x": 888,
    "y": 406,
    "w": 58,
    "h": 18,
    "description": "smoothies"
  },
  {
    "x": 948,
    "y": 404,
    "w": 54,
    "h": 22,
    "description": "kartoffelpuffer"
  },
  {
    "x": 1000,
    "y": 406,
    "w": 62,
    "h": 20,
    "description": "vegan"
  },
  {
    "x": 1064,
    "y": 406,
    "w": 52,
    "h": 20,
    "description": "obst"
  },
  {
    "x": 1118,
    "y": 406,
    "w": 54,
    "h": 20,
    "description": "obst"
  },
  {
    "x": 1174,
    "y": 406,
    "w": 54,
    "h": 20,
    "description": "nuesse"
  },
  {
    "x": 930,
    "y": 454,
    "w": 20,
    "h": 56,
    "description": "sushi"
  },
  {
    "x": 986,
    "y": 452,
    "w": 20,
    "h": 56,
    "description": "joghurt"
  },
  {
    "x": 1048,
    "y": 452,
    "w": 22,
    "h": 58,
    "description": "tomaten"
  },
  {
    "x": 1108,
    "y": 452,
    "w": 18,
    "h": 56,
    "description": "banenen"
  },
  {
    "x": 1172,
    "y": 452,
    "w": 20,
    "h": 56,
    "description": "kartoffeln"
  },
  {
    "x": 894,
    "y": 536,
    "w": 56,
    "h": 20,
    "description": "planzen"
  },
  {
    "x": 950,
    "y": 536,
    "w": 58,
    "h": 20,
    "description": "weissbrot"
  },
  {
    "x": 1006,
    "y": 538,
    "w": 56,
    "h": 20,
    "description": "weissbrot"
  },
  {
    "x": 1066,
    "y": 538,
    "w": 56,
    "h": 20,
    "description": "kaese"
  },
  {
    "x": 1124,
    "y": 538,
    "w": 242,
    "h": 20,
    "description": "wurst"
  },
  {
    "x": 1366,
    "y": 538,
    "w": 56,
    "h": 20,
    "description": "fleisch"
  },
  {
    "x": 1426,
    "y": 538,
    "w": 62,
    "h": 18,
    "description": "fleisch"
  },
  {
    "x": 1486,
    "y": 404,
    "w": 54,
    "h": 154,
    "description": "fleischteke"
  },
  {
    "x": 1488,
    "y": 344,
    "w": 22,
    "h": 58,
    "description": "zaziki"
  },
  {
    "x": 1276,
    "y": 376,
    "w": 60,
    "h": 26,
    "description": "tee"
  },
  {
    "x": 1276,
    "y": 402,
    "w": 60,
    "h": 22,
    "description": "muesli"
  },
  {
    "x": 1336,
    "y": 402,
    "w": 62,
    "h": 24,
    "description": "muesli"
  },
  {
    "x": 1396,
    "y": 402,
    "w": 56,
    "h": 24,
    "description": "cornflakes"
  },
  {
    "x": 1394,
    "y": 380,
    "w": 58,
    "h": 20,
    "description": "kafffe"
  },
  {
    "x": 1336,
    "y": 378,
    "w": 60,
    "h": 24,
    "description": "tee"
  },
  {
    "x": 1276,
    "y": 318,
    "w": 22,
    "h": 58,
    "description": "sossen"
  },
  {
    "x": 1298,
    "y": 318,
    "w": 22,
    "h": 58,
    "description": "milch"
  },
  {
    "x": 1342,
    "y": 340,
    "w": 58,
    "h": 22,
    "description": "zimtschnecken"
  },
  {
    "x": 1402,
    "y": 340,
    "w": 56,
    "h": 22,
    "description": "chibo"
  },
  {
    "x": 1400,
    "y": 318,
    "w": 58,
    "h": 20,
    "description": "backen"
  },
  {
    "x": 1342,
    "y": 318,
    "w": 58,
    "h": 20,
    "description": "fillinchen"
  },
  {
    "x": 1242,
    "y": 458,
    "w": 34,
    "h": 42,
    "description": "frischeteke"
  },
  {
    "x": 1348,
    "y": 458,
    "w": 20,
    "h": 56,
    "description": "grillfleisch"
  },
  {
    "x": 1408,
    "y": 456,
    "w": 22,
    "h": 56,
    "description": "bratwurst"
  },
  {
    "x": 1490,
    "y": 146,
    "w": 22,
    "h": 58,
    "description": "butter"
  },
  {
    "x": 1488,
    "y": 86,
    "w": 24,
    "h": 58,
    "description": "grieschischer joghurt"
  },
  {
    "x": 1432,
    "y": 66,
    "w": 56,
    "h": 20,
    "description": "joghurt"
  },
  {
    "x": 1372,
    "y": 64,
    "w": 60,
    "h": 22,
    "description": "joghurt"
  },
  {
    "x": 1310,
    "y": 64,
    "w": 60,
    "h": 22,
    "description": "tiramisu"
  },
  {
    "x": 1344,
    "y": 114,
    "w": 54,
    "h": 20,
    "description": "kuehl"
  },
  {
    "x": 1400,
    "y": 112,
    "w": 58,
    "h": 24,
    "description": "kuehl"
  },
  {
    "x": 1344,
    "y": 152,
    "w": 52,
    "h": 22,
    "description": "kuehl"
  },
  {
    "x": 1398,
    "y": 154,
    "w": 62,
    "h": 20,
    "description": "kuehl"
  },
  {
    "x": 1342,
    "y": 262,
    "w": 56,
    "h": 20,
    "description": "mehl"
  },
  {
    "x": 1400,
    "y": 260,
    "w": 56,
    "h": 22,
    "description": "kuchen"
  },
  {
    "x": 1342,
    "y": 240,
    "w": 56,
    "h": 20,
    "description": "schokososse"
  },
  {
    "x": 1400,
    "y": 240,
    "w": 58,
    "h": 20,
    "description": "marmelade"
  },
  {
    "x": 1276,
    "y": 240,
    "w": 40,
    "h": 20,
    "description": "eier"
  },
  {
    "x": 1300,
    "y": 262,
    "w": 18,
    "h": 56,
    "description": "schlagsahne"
  },
  {
    "x": 1274,
    "y": 260,
    "w": 22,
    "h": 60,
    "description": "ketchup"
  },
  {
    "x": 1264,
    "y": 140,
    "w": 24,
    "h": 60,
    "description": "alkohol"
  },
  {
    "x": 1290,
    "y": 140,
    "w": 20,
    "h": 60,
    "description": "eingelegtes"
  },
  {
    "x": 1262,
    "y": 80,
    "w": 24,
    "h": 60,
    "description": "alkohol"
  },
  {
    "x": 1286,
    "y": 80,
    "w": 22,
    "h": 60,
    "description": "wein"
  },
  {
    "x": 1204,
    "y": 60,
    "w": 56,
    "h": 20,
    "description": "alkohol"
  },
  {
    "x": 1148,
    "y": 60,
    "w": 56,
    "h": 22,
    "description": "alkohol"
  },
  {
    "x": 1206,
    "y": 100,
    "w": 20,
    "h": 100,
    "description": "alkohol"
  },
  {
    "x": 1184,
    "y": 102,
    "w": 20,
    "h": 98,
    "description": "alkohol"
  },
  {
    "x": 1180,
    "y": 234,
    "w": 20,
    "h": 54,
    "description": "russisch"
  },
  {
    "x": 1202,
    "y": 232,
    "w": 22,
    "h": 56,
    "description": "asia"
  },
  {
    "x": 1204,
    "y": 286,
    "w": 22,
    "h": 60,
    "description": "siracha"
  },
  {
    "x": 1180,
    "y": 288,
    "w": 24,
    "h": 56,
    "description": "russisch"
  },
  {
    "x": 1126,
    "y": 232,
    "w": 22,
    "h": 56,
    "description": "mexico"
  },
  {
    "x": 1126,
    "y": 286,
    "w": 20,
    "h": 58,
    "description": "mexico"
  },
  {
    "x": 1102,
    "y": 286,
    "w": 24,
    "h": 58,
    "description": "trockenfrucht"
  },
  {
    "x": 1102,
    "y": 232,
    "w": 24,
    "h": 56,
    "description": "leinsamen"
  },
  {
    "x": 1102,
    "y": 140,
    "w": 22,
    "h": 58,
    "description": "nudeln"
  },
  {
    "x": 1124,
    "y": 140,
    "w": 24,
    "h": 60,
    "description": "alokohl"
  },
  {
    "x": 1126,
    "y": 82,
    "w": 20,
    "h": 56,
    "description": "alokohl"
  },
  {
    "x": 1102,
    "y": 78,
    "w": 22,
    "h": 60,
    "description": "nudeln"
  },
  {
    "x": 1044,
    "y": 60,
    "w": 60,
    "h": 20,
    "description": "asia nudeln"
  },
  {
    "x": 1044,
    "y": 98,
    "w": 20,
    "h": 102,
    "description": "tomatenmark"
  },
  {
    "x": 1022,
    "y": 100,
    "w": 22,
    "h": 96,
    "description": "konserven"
  },
  {
    "x": 1040,
    "y": 230,
    "w": 22,
    "h": 152,
    "description": "glutenfrei"
  },
  {
    "x": 1062,
    "y": 380,
    "w": 56,
    "h": 24,
    "description": "oel"
  },
  {
    "x": 1116,
    "y": 380,
    "w": 60,
    "h": 24,
    "description": "gewuerze"
  },
  {
    "x": 1174,
    "y": 382,
    "w": 56,
    "h": 22,
    "description": "gewuerze"
  },
  {
    "x": 1018,
    "y": 230,
    "w": 20,
    "h": 152,
    "description": "gummibaerchen"
  },
  {
    "x": 946,
    "y": 382,
    "w": 72,
    "h": 20,
    "description": "milka"
  },
  {
    "x": 886,
    "y": 384,
    "w": 60,
    "h": 20,
    "description": "biscoff"
  },
  {
    "x": 828,
    "y": 382,
    "w": 56,
    "h": 20,
    "description": "popcorn"
  },
  {
    "x": 790,
    "y": 380,
    "w": 38,
    "h": 24,
    "description": "erdnussflips"
  },
  {
    "x": 768,
    "y": 230,
    "w": 24,
    "h": 152,
    "description": "chips"
  },
  {
    "x": 746,
    "y": 230,
    "w": 22,
    "h": 152,
    "description": "haushalt"
  },
  {
    "x": 676,
    "y": 384,
    "w": 72,
    "h": 20,
    "description": "haushalt"
  },
  {
    "x": 616,
    "y": 386,
    "w": 58,
    "h": 20,
    "description": "haushalt"
  },
  {
    "x": 556,
    "y": 384,
    "w": 58,
    "h": 20,
    "description": "haushalt"
  },
  {
    "x": 516,
    "y": 382,
    "w": 36,
    "h": 22,
    "description": "haushalt"
  },
  {
    "x": 496,
    "y": 230,
    "w": 22,
    "h": 150,
    "description": "haushalt"
  },
  {
    "x": 568,
    "y": 230,
    "w": 20,
    "h": 60,
    "description": "haushalt"
  },
  {
    "x": 568,
    "y": 288,
    "w": 22,
    "h": 54,
    "description": "haushalt"
  },
  {
    "x": 590,
    "y": 230,
    "w": 20,
    "h": 58,
    "description": "haushalt"
  },
  {
    "x": 592,
    "y": 288,
    "w": 20,
    "h": 56,
    "description": "haushalt"
  },
  {
    "x": 660,
    "y": 230,
    "w": 22,
    "h": 58,
    "description": "haushalt"
  },
  {
    "x": 660,
    "y": 286,
    "w": 22,
    "h": 60,
    "description": "haushalt"
  },
  {
    "x": 682,
    "y": 226,
    "w": 22,
    "h": 62,
    "description": "haushalt"
  },
  {
    "x": 684,
    "y": 288,
    "w": 22,
    "h": 58,
    "description": "haushalt"
  },
  {
    "x": 838,
    "y": 228,
    "w": 24,
    "h": 56,
    "description": "nuesse"
  },
  {
    "x": 840,
    "y": 280,
    "w": 26,
    "h": 64,
    "description": "asiasnacks"
  },
  {
    "x": 862,
    "y": 230,
    "w": 24,
    "h": 54,
    "description": "pralinen"
  },
  {
    "x": 864,
    "y": 282,
    "w": 22,
    "h": 62,
    "description": "pralinen"
  },
  {
    "x": 932,
    "y": 232,
    "w": 20,
    "h": 56,
    "description": "pralinen"
  },
  {
    "x": 934,
    "y": 286,
    "w": 20,
    "h": 60,
    "description": "pralinen"
  },
  {
    "x": 956,
    "y": 230,
    "w": 20,
    "h": 58,
    "description": "ausland suess"
  },
  {
    "x": 954,
    "y": 284,
    "w": 24,
    "h": 62,
    "description": "ausland suess"
  },
  {
    "x": 980,
    "y": 58,
    "w": 64,
    "h": 22,
    "description": "instant nudeln"
  },
  {
    "x": 916,
    "y": 60,
    "w": 64,
    "h": 20,
    "description": "konserven"
  },
  {
    "x": 856,
    "y": 60,
    "w": 58,
    "h": 18,
    "description": "konserven"
  },
  {
    "x": 798,
    "y": 60,
    "w": 56,
    "h": 18,
    "description": "konserven"
  },
  {
    "x": 838,
    "y": 98,
    "w": 24,
    "h": 100,
    "description": "konserven"
  },
  {
    "x": 864,
    "y": 98,
    "w": 22,
    "h": 100,
    "description": "konserven"
  },
  {
    "x": 932,
    "y": 98,
    "w": 22,
    "h": 96,
    "description": "reis"
  },
  {
    "x": 954,
    "y": 98,
    "w": 20,
    "h": 98,
    "description": "konserven"
  },
  {
    "x": 776,
    "y": 76,
    "w": 22,
    "h": 60,
    "description": "kichererbsen"
  },
  {
    "x": 774,
    "y": 134,
    "w": 24,
    "h": 62,
    "description": "kichererbsen"
  },
  {
    "x": 740,
    "y": 78,
    "w": 32,
    "h": 60,
    "description": "hygiene"
  },
  {
    "x": 738,
    "y": 138,
    "w": 32,
    "h": 60,
    "description": "hygiene"
  },
  {
    "x": 686,
    "y": 58,
    "w": 56,
    "h": 20,
    "description": "hygiene"
  },
  {
    "x": 632,
    "y": 58,
    "w": 52,
    "h": 20,
    "description": "hygiene"
  },
  {
    "x": 570,
    "y": 58,
    "w": 60,
    "h": 20,
    "description": "hygiene"
  },
  {
    "x": 588,
    "y": 96,
    "w": 22,
    "h": 100,
    "description": "hygiene"
  },
  {
    "x": 608,
    "y": 98,
    "w": 22,
    "h": 98,
    "description": "hygiene"
  },
  {
    "x": 664,
    "y": 98,
    "w": 24,
    "h": 100,
    "description": "hygiene"
  },
  {
    "x": 686,
    "y": 98,
    "w": 24,
    "h": 104,
    "description": "hygiene"
  },
  {
    "x": 528,
    "y": 100,
    "w": 22,
    "h": 96,
    "description": "brottrunk"
  },
  {
    "x": 504,
    "y": 98,
    "w": 22,
    "h": 98,
    "description": "protein"
  },
  {
    "x": 466,
    "y": 56,
    "w": 58,
    "h": 20,
    "description": "burgertk"
  },
  {
    "x": 404,
    "y": 56,
    "w": 60,
    "h": 22,
    "description": "erbsentk"
  },
  {
    "x": 350,
    "y": 56,
    "w": 52,
    "h": 22,
    "description": "fruechtetk"
  },
  {
    "x": 428,
    "y": 98,
    "w": 24,
    "h": 98,
    "description": "pizzatk"
  },
  {
    "x": 406,
    "y": 98,
    "w": 22,
    "h": 98,
    "description": "pizzatk"
  },
  {
    "x": 324,
    "y": 78,
    "w": 24,
    "h": 118,
    "description": "eis"
  },
  {
    "x": 418,
    "y": 308,
    "w": 22,
    "h": 100,
    "description": "kasse"
  },
  {
    "x": 354,
    "y": 308,
    "w": 22,
    "h": 100,
    "description": "kasse"
  },
  {
    "x": 294,
    "y": 310,
    "w": 18,
    "h": 100,
    "description": "kasse"
  },
  {
    "x": 226,
    "y": 312,
    "w": 22,
    "h": 98,
    "description": "kasse"
  },
  {
    "x": 302,
    "y": 76,
    "w": 20,
    "h": 118,
    "description": "saefte"
  },
  {
    "x": 240,
    "y": 60,
    "w": 62,
    "h": 20,
    "description": "saefte"
  },
  {
    "x": 182,
    "y": 60,
    "w": 58,
    "h": 20,
    "description": "saefte"
  },
  {
    "x": 122,
    "y": 58,
    "w": 56,
    "h": 22,
    "description": "wasser"
  },
  {
    "x": 64,
    "y": 58,
    "w": 56,
    "h": 22,
    "description": "wasser"
  },
  {
    "x": 50,
    "y": 80,
    "w": 20,
    "h": 230,
    "description": "energy"
  },
  {
    "x": 96,
    "y": 108,
    "w": 56,
    "h": 20,
    "description": "cola"
  },
  {
    "x": 154,
    "y": 112,
    "w": 62,
    "h": 18,
    "description": "fanta"
  },
  {
    "x": 214,
    "y": 112,
    "w": 56,
    "h": 20,
    "description": "sprite"
  },
  {
    "x": 96,
    "y": 162,
    "w": 60,
    "h": 22,
    "description": "bier"
  },
  {
    "x": 154,
    "y": 164,
    "w": 56,
    "h": 20,
    "description": "bier"
  },
  {
    "x": 212,
    "y": 164,
    "w": 58,
    "h": 22,
    "description": "bier"
  },
  {
    "x": 100,
    "y": 220,
    "w": 56,
    "h": 24,
    "description": "bier"
  },
  {
    "x": 156,
    "y": 220,
    "w": 60,
    "h": 24,
    "description": "bier"
  },
  {
    "x": 214,
    "y": 222,
    "w": 62,
    "h": 20,
    "description": "bier"
  }
];


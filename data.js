// ==========================================
// DATA CONFIGURATIE (PAST DIT AAN MET JOUW DATA)
// ==========================================

// Deelnemers en hun 10 gekozen ploegen met wegingen (10 t/m 1)
const participants = [
    {
        "naam": "Mathijs",
        "goalsGuessed": 279,
        "selectie": [
            { "ploeg": "Spanje", "weging": 10 },
            { "ploeg": "Frankrijk", "weging": 9 },
            { "ploeg": "Argentinië", "weging": 8 },
            { "ploeg": "Uruguay", "weging": 7 },
            { "ploeg": "Colombia", "weging": 6 },
            { "ploeg": "Noorwegen", "weging": 5 },
            { "ploeg": "Japan", "weging": 4 },
            { "ploeg": "Mexico", "weging": 3 },
            { "ploeg": "Ivoorkust", "weging": 2 },
            { "ploeg": "Zweden", "weging": 1 }
        ]
    },
    {
        "naam": "Tiebe",
        "goalsGuessed": 278,
        "selectie": [
            { "ploeg": "Frankrijk", "weging": 10 },
            { "ploeg": "Spanje", "weging": 9 },
            { "ploeg": "Engeland", "weging": 8 },
            { "ploeg": "Noorwegen", "weging": 7 },
            { "ploeg": "Japan", "weging": 6 },
            { "ploeg": "Colombia", "weging": 5 },
            { "ploeg": "Zweden", "weging": 4 },
            { "ploeg": "Mexico", "weging": 3 },
            { "ploeg": "Turkije", "weging": 2 },
            { "ploeg": "Saudi-Arabië", "weging": 1 }
        ]
    },
    {
        "naam": "Papa Wouter",
        "goalsGuessed": 266,
        "selectie": [
            { "ploeg": "Spanje", "weging": 10 },
            { "ploeg": "Argentinië", "weging": 9 },
            { "ploeg": "Frankrijk", "weging": 8 },
            { "ploeg": "Uruguay", "weging": 7 },
            { "ploeg": "Japan", "weging": 6 },
            { "ploeg": "Colombia", "weging": 5 },
            { "ploeg": "Mexico", "weging": 4 },
            { "ploeg": "Noorwegen", "weging": 3 },
            { "ploeg": "Bosnië", "weging": 2 },
            { "ploeg": "Ivoorkust", "weging": 1 }
        ]
    },
    {
        "naam": "Moes",
        "goalsGuessed": 274,
        "selectie": [
            { "ploeg": "Frankrijk", "weging": 10 },
            { "ploeg": "Spanje", "weging": 9 },
            { "ploeg": "Argentinië", "weging": 8 },
            { "ploeg": "Uruguay", "weging": 7 },
            { "ploeg": "Japan", "weging": 6 },
            { "ploeg": "Colombia", "weging": 5 },
            { "ploeg": "Oostenrijk", "weging": 4 },
            { "ploeg": "Noorwegen", "weging": 3 },
            { "ploeg": "Paraguay", "weging": 2 },
            { "ploeg": "Zweden", "weging": 1 }
        ]
    }
];

// Handmatige invoer van gespeelde wedstrijden (Uitslag na 120 minuten!)
const matches = [
    { "thuis": "Spanje", "uit": "Portugal", "goalsThuis": 2, "goalsUit": 1 },
    { "thuis": "Frankrijk", "uit": "Panama", "goalsThuis": 3, "goalsUit": 0 },
    { "thuis": "Argentinië", "uit": "Saudi-Arabië", "goalsThuis": 1, "goalsUit": 1 }, // Gelijkspel na 120 min
    { "thuis": "België", "uit": "Kroatië", "goalsThuis": 0, "goalsUit": 2 }
];

// Categorieën op basis van het reglementenformulier (optioneel voor styling/checks)
const teamCategories = {
    "favorieten": ["Frankrijk", "Spanje", "Argentinië", "Engeland", "Portugal", "Brazilië", "Nederland", "Marokko", "België", "Duitsland"],
    "outsiders": ["Kroatië", "Colombia", "Senegal", "Mexico", "Verenigde Staten", "Uruguay", "Japan", "Zwitserland", "Iran", "Turkije", "Ecuador", "Oostenrijk", "Zuid-Korea", "Australië", "Algerije", "Egypte", "Canada", "Noorwegen"],
    "underdogs": ["Panama", "Ivoorkust", "Zweden", "Paraguay", "Tsjechië", "Schotland", "Tunesië", "DR Congo", "Oezbekistan", "Qatar", "Irak", "Zuid-Afrika", "Saudi-Arabië", "Jordanië", "Bosnië-Herzegovina", "Kaapverdië", "Ghana", "Curaçao", "Haïti", "Nieuw-Zeeland"]
};

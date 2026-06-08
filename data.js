// ==========================================
// DATA CONFIGURATIE (PAST DIT AAN MET JOUW DATA)
// ==========================================

// Deelnemers en hun 10 gekozen ploegen met wegingen (10 t/m 1)
const participants = [
    {
        "naam": "Mathijs",
        "selectie": [
            { "ploeg": "Spanje", "weging": 10 },
            { "ploeg": "Kroatië", "weging": 9 },
            { "ploeg": "Engeland", "weging": 8 },
            { "ploeg": "Mexico", "weging": 7 },
            { "ploeg": "Japan", "weging": 6 },
            { "ploeg": "Uruguay", "weging": 5 },
            { "ploeg": "Marokko", "weging": 4 },
            { "ploeg": "Zweden", "weging": 3 },
            { "ploeg": "Ghana", "weging": 2 },
            { "ploeg": "Panama", "weging": 1 }
        ]
    },
    {
        "naam": "Thomas",
        "selectie": [
            { "ploeg": "Frankrijk", "weging": 10 },
            { "ploeg": "Argentinië", "weging": 9 },
            { "ploeg": "België", "weging": 8 },
            { "ploeg": "Colombia", "weging": 7 },
            { "ploeg": "Zwitserland", "weging": 6 },
            { "ploeg": "Verenigde Staten", "weging": 5 },
            { "ploeg": "Turkije", "weging": 4 },
            { "ploeg": "Ivoorkust", "weging": 3 },
            { "ploeg": "Schotland", "weging": 2 },
            { "ploeg": "Qatar", "weging": 1 }
        ]
    },
    {
        "naam": "Jef Vandermeiren",
        "selectie": [
            { "ploeg": "Brazilië", "weging": 10 },
            { "ploeg": "Nederland", "weging": 9 },
            { "ploeg": "Duitsland", "weging": 8 },
            { "ploeg": "Senegal", "weging": 7 },
            { "ploeg": "Oostenrijk", "weging": 6 },
            { "ploeg": "Zuid-Korea", "weging": 5 },
            { "ploeg": "Denemarken", "weging": 4 }, // Let op: niet in originele lijst maar als voorbeeld
            { "ploeg": "Tsjechië", "weging": 3 },
            { "ploeg": "Saudi-Arabië", "weging": 2 },
            { "ploeg": "Tunesië", "weging": 1 }
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

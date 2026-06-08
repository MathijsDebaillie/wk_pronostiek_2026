// ==========================================
// DATA CONFIGURATIE (PAST DIT AAN MET JOUW DATA)
// ==========================================

// Deelnemers en hun 10 gekozen ploegen met wegingen (10 t/m 1)
// ZORG DAT DEZE NAMEN EXACT OVEREENKOMEN MET DE ENGELSE NAMEN VAN DE API
const participants = [
    {
        "naam": "Mathijs",
        "goalsGuessed": 279,
        "selectie": [
            { "ploeg": "Spain", "weging": 10 },
            { "ploeg": "France", "weging": 9 },
            { "ploeg": "Argentina", "weging": 8 },
            { "ploeg": "Uruguay", "weging": 7 },
            { "ploeg": "Colombia", "weging": 6 },
            { "ploeg": "Norway", "weging": 5 },
            { "ploeg": "Japan", "weging": 4 },
            { "ploeg": "Mexico", "weging": 3 },
            { "ploeg": "Ivory Coast", "weging": 2 },
            { "ploeg": "Sweden", "weging": 1 }
        ]
    },
    {
        "naam": "Tiebe",
        "goalsGuessed": 278,
        "selectie": [
            { "ploeg": "France", "weging": 10 },
            { "ploeg": "Spain", "weging": 9 },
            { "ploeg": "England", "weging": 8 },
            { "ploeg": "Norway", "weging": 7 },
            { "ploeg": "Japan", "weging": 6 },
            { "ploeg": "Colombia", "weging": 5 },
            { "ploeg": "Sweden", "weging": 4 },
            { "ploeg": "Mexico", "weging": 3 },
            { "ploeg": "Turkey", "weging": 2 },
            { "ploeg": "Saudi Arabia", "weging": 1 }
        ]
    },
    {
        "naam": "Papa Wouter",
        "goalsGuessed": 266,
        "selectie": [
            { "ploeg": "Spain", "weging": 10 },
            { "ploeg": "Argentina", "weging": 9 },
            { "ploeg": "France", "weging": 8 },
            { "ploeg": "Uruguay", "weging": 7 },
            { "ploeg": "Japan", "weging": 6 },
            { "ploeg": "Colombia", "weging": 5 },
            { "ploeg": "Mexico", "weging": 4 },
            { "ploeg": "Norway", "weging": 3 },
            { "ploeg": "Bosnia-Herzegovina", "weging": 2 },
            { "ploeg": "Ivory Coast", "weging": 1 }
        ]
    },
    {
        "naam": "Moes",
        "goalsGuessed": 274,
        "selectie": [
            { "ploeg": "France", "weging": 10 },
            { "ploeg": "Spain", "weging": 9 },
            { "ploeg": "Argentina", "weging": 8 },
            { "ploeg": "Uruguay", "weging": 7 },
            { "ploeg": "Japan", "weging": 6 },
            { "ploeg": "Colombia", "weging": 5 },
            { "ploeg": "Austria", "weging": 4 },
            { "ploeg": "Norway", "weging": 3 },
            { "ploeg": "Paraguay", "weging": 2 },
            { "ploeg": "Sweden", "weging": 1 }
        ]
    }
];

// Handmatige invoer van gespeelde wedstrijden (Uitslag na 120 minuten!)
// OPMERKING: Deze lijst is nu leeggemaakt omdat de scores automatisch via de API
// worden binnengehaald. Mocht de API ooit falen, kan je ze hier alsnog manueel ingeven.
const matches = [];

// Categorieën op basis van het reglementenformulier (optioneel voor styling/checks)
const teamCategories = {
    "favorieten": ["France", "Spain", "Argentina", "England", "Portugal", "Brazil", "Netherlands", "Morocco", "Belgium", "Germany"],
    "outsiders": ["Croatia", "Colombia", "Senegal", "Mexico", "United States", "Uruguay", "Japan", "Switzerland", "Iran", "Turkey", "Ecuador", "Austria", "South Korea", "Australia", "Algeria", "Egypt", "Canada", "Norway"],
    "underdogs": ["Panama", "Ivory Coast", "Sweden", "Paraguay", "Czechia", "Scotland", "Tunisia", "Congo DR", "Uzbekistan", "Qatar", "Iraq", "South Africa", "Saudi Arabia", "Jordan", "Bosnia-Herzegovina", "Cape Verde", "Ghana", "Curaçao", "Haiti", "New Zealand"]
};

// ==========================================
// VERTALINGEN (ENGELS -> NEDERLANDS)
// ==========================================
// Vul deze lijst gerust aan als je op het scherm nog ergens een Engelse naam ziet staan!
const teamTranslations = {
    "Spain": "Spanje",
    "France": "Frankrijk",
    "Argentina": "Argentinië",
    "England": "Engeland",
    "Brazil": "Brazilië",
    "Netherlands": "Nederland",
    "Belgium": "België",
    "Germany": "Duitsland",
    "Croatia": "Kroatië",
    "United States": "Verenigde Staten",
    "Switzerland": "Zwitserland",
    "South Korea": "Zuid-Korea",
    "Australia": "Australië",
    "Algeria": "Algerije",
    "Egypt": "Egypte",
    "Norway": "Noorwegen",
    "Sweden": "Zweden",
    "Czechia": "Tsjechië",
    "Scotland": "Schotland",
    "Tunisia": "Tunesië",
    "South Africa": "Zuid-Afrika",
    "Saudi Arabia": "Saudi-Arabië",
    "Cape Verde Islands": "Kaapverdië",
    "Cape Verde": "Kaapverdië",
    "Ivory Coast": "Ivoorkust",
    "Côte d'Ivoire": "Ivoorkust",
    "Morocco": "Marokko",
    "Turkey": "Turkije",
    "Austria": "Oostenrijk",
    "Poland": "Polen",
    "Denmark": "Denemarken",
    "Italy": "Italië",
    "Bosnia and Herzegovina": "Bosnië en Herzegovina",
    "Bosnia-Herzegovina": "Bosnië en Herzegovina",
    "Republic of Ireland": "Ierland",
    "Northern Ireland": "Noord-Ierland",
    "Greece": "Griekenland"
};

function translateTeam(englishName) {
    if (!englishName) return '';
    return teamTranslations[englishName] || englishName;
}

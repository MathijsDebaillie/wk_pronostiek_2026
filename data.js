// ==========================================
// DATA CONFIGURATIE (PAST DIT AAN MET JOUW DATA)
// ==========================================

// Helper functie om compact nieuwe deelnemers toe te voegen
function createParticipant(naam, goalsGuessed, teams) {
    return {
        naam: naam,
        goalsGuessed: goalsGuessed,
        selectie: teams.map((ploeg, index) => ({
            ploeg: ploeg,
            weging: 10 - index
        }))
    };
}

// Deelnemers en hun 10 gekozen ploegen met wegingen (10 t/m 1)
// ZORG DAT DEZE NAMEN EXACT OVEREENKOMEN MET DE ENGELSE NAMEN VAN DE API
const allParticipants = [
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
    },
    // Vanaf hier de ingelezen deelnemers uit de Excel:
    createParticipant("Adriaensen Thomas", 279, ["Portugal", "Belgium", "England", "Turkey", "Senegal", "Japan", "Mexico", "Uruguay", "Scotland", "Bosnia-Herzegovina"]),
    createParticipant("Allaeys Michael", 285, ["Spain", "Brazil", "Portugal", "Switzerland", "Uruguay", "Turkey", "Mexico", "United States", "Ivory Coast", "Czechia"]),
    createParticipant("Beck Paul 1", 239, ["France", "Spain", "Brazil", "Norway", "Uruguay", "Ecuador", "Senegal", "Mexico", "Sweden", "Ivory Coast"]),
    createParticipant("Beck Paul 2", 218, ["Spain", "France", "Brazil", "Norway", "Ecuador", "Colombia", "Mexico", "Senegal", "Ivory Coast", "Sweden"]),
    createParticipant("Bert Siglinde 1", 278, ["Spain", "France", "Brazil", "Mexico", "Switzerland", "United States", "Colombia", "Japan", "Paraguay", "Sweden"]),
    createParticipant("Bert Siglinde 2", 280, ["France", "Argentina", "Belgium", "Mexico", "Switzerland", "Colombia", "Japan", "Egypt", "Czechia", "Paraguay"]),
    createParticipant("Bert Siglinde 3", 275, ["Brazil", "Spain", "France", "Norway", "Colombia", "Switzerland", "Mexico", "United States", "Czechia", "Ivory Coast"]),
    createParticipant("Blancquaert Kenny", 282, ["Spain", "Argentina", "Portugal", "Switzerland", "Mexico", "Turkey", "Japan", "Norway", "Ivory Coast", "Czechia"]),
    createParticipant("Bludts Nora", 313, ["Spain", "Argentina", "France", "Senegal", "Ivory Coast", "Algeria", "South Africa", "Egypt", "Ghana", "Sweden"]),
    createParticipant("Bogaerts Bram 1", 285, ["France", "Argentina", "England", "Uruguay", "Colombia", "Croatia", "United States", "Japan", "Ivory Coast", "Czechia"]),
    createParticipant("Bogaerts Bram 2", 317, ["Spain", "France", "England", "Norway", "Japan", "Uruguay", "Mexico", "Senegal", "Ghana", "Bosnia-Herzegovina"]),
    createParticipant("Bogaerts Bram 3", 286, ["Portugal", "Spain", "Brazil", "Mexico", "Turkey", "Colombia", "Norway", "Senegal", "Ivory Coast", "Ghana"]),
    createParticipant("Bogaerts Bram 4", 223, ["France", "Morocco", "England", "Colombia", "Turkey", "Switzerland", "Mexico", "Ivory Coast", "Congo DR", "Norway"]),
    createParticipant("Bruynooghe Hans 1", 241, ["France", "Spain", "England", "Japan", "Ecuador", "South Korea", "Switzerland", "Mexico", "Paraguay", "Congo DR"]),
    createParticipant("Bruynooghe Hans 2", 282, ["Spain", "France", "Argentina", "Norway", "Japan", "Mexico", "Turkey", "Ivory Coast", "Colombia", "Tunisia"]),
    createParticipant("Claes Jeroen", 297, ["Spain", "France", "England", "Switzerland", "Turkey", "Mexico", "Croatia", "Uruguay", "Czechia", "Bosnia-Herzegovina"]),
    createParticipant("Claeys Dominiek", 273, ["France", "Spain", "Colombia", "England", "Uruguay", "Japan", "Switzerland", "Norway", "Ivory Coast", "Sweden"]),
    createParticipant("Coene Sophie 1", 250, ["France", "Belgium", "Argentina", "Uruguay", "Croatia", "Turkey", "Mexico", "Czechia", "Sweden", "Paraguay"]),
    createParticipant("Coene Sophie 2", 282, ["Spain", "Brazil", "Belgium", "Uruguay", "Senegal", "Japan", "Paraguay", "Turkey", "Norway", "Ivory Coast"]),
    createParticipant("Cools Dominique", 113, ["Spain", "France", "Portugal", "Norway", "Croatia", "Senegal", "Uruguay", "Mexico", "Sweden", "Czechia"]),
    createParticipant("Cools Kurt 1", 226, ["France", "Brazil", "Portugal", "Mexico", "Turkey", "Switzerland", "Uruguay", "Algeria", "Sweden", "Paraguay"]),
    createParticipant("Cools Kurt 2", 220, ["Spain", "Argentina", "Germany", "Norway", "Turkey", "Japan", "Ecuador", "Sweden", "Paraguay", "Algeria"]),
    createParticipant("Cools Kurt 3", 222, ["France", "Spain", "England", "Turkey", "Norway", "Japan", "Uruguay", "Canada", "Sweden", "Czechia"]),
    createParticipant("Cools Robbe", 305, ["Spain", "Argentina", "Belgium", "Norway", "Japan", "Mexico", "Croatia", "Ivory Coast", "Saudi Arabia", "Turkey"]),
    createParticipant("Costermans Véronique 1", 254, ["Germany", "France", "Brazil", "Uruguay", "Norway", "Croatia", "Ivory Coast", "Bosnia-Herzegovina", "Scotland", "United States"]),
    createParticipant("Costermans Véronique 2", 271, ["Brazil", "Spain", "Belgium", "Norway", "Uruguay", "United States", "Ivory Coast", "Bosnia-Herzegovina", "Croatia", "Mexico"]),
    createParticipant("Covens Sandra", 272, ["Spain", "France", "Belgium", "Norway", "Croatia", "Austria", "Japan", "Uruguay", "Sweden", "Scotland"]),
    createParticipant("Daeninck Katrien 1", 302, ["Spain", "Argentina", "Germany", "Mexico", "Switzerland", "Uruguay", "Croatia", "Senegal", "Paraguay", "Ivory Coast"]),
    createParticipant("Daeninck Katrien 2", 285, ["Spain", "France", "Argentina", "Japan", "Mexico", "Turkey", "Croatia", "Senegal", "Ivory Coast", "Congo DR"]),
    createParticipant("Daguilar Stijn Chaves 1", 255, ["England", "Germany", "Belgium", "Croatia", "Austria", "Switzerland", "Turkey", "Norway", "Czechia", "Sweden"]),
    createParticipant("Daguilar Stijn Chaves 2", 240, ["England", "Argentina", "Morocco", "Mexico", "Austria", "Norway", "United States", "Japan", "Ivory Coast", "South Africa"]),
    createParticipant("Daguilar Stijn Chaves 3", 270, ["France", "Brazil", "Switzerland", "Belgium", "Norway", "Croatia", "Japan", "Mexico", "Paraguay", "Congo DR"]),
    createParticipant("De Bondt Sandra 1 (Davy)", 265, ["Spain", "Brazil", "France", "Croatia", "Japan", "Norway", "Czechia", "Mexico", "Ivory Coast", "United States"]),
    createParticipant("De Bondt Sandra 2 (Davy)", 265, ["Spain", "Argentina", "Portugal", "Norway", "Switzerland", "Croatia", "Mexico", "Czechia", "Uruguay", "Paraguay"]),
    createParticipant("De Bondt Sandra 3 (Sandra)", 198, ["Germany", "Belgium", "Spain", "Croatia", "Norway", "Uruguay", "Turkey", "Egypt", "Sweden", "Czechia"]),
    createParticipant("De Bondt Sandra 4 (Koen)", 230, ["Brazil", "Argentina", "Belgium", "Croatia", "Mexico", "Turkey", "Austria", "Norway", "Bosnia-Herzegovina", "Czechia"]),
    createParticipant("De Bondt Sandra 5 (Koen)", 230, ["Brazil", "Germany", "France", "Croatia", "Switzerland", "Austria", "Norway", "United States", "Sweden", "Czechia"]),
    createParticipant("De Bondt Sandra 6 (Jens)", 228, ["Argentina", "France", "Brazil", "Turkey", "Croatia", "Canada", "Czechia", "Japan", "Colombia", "Ivory Coast"]),
    createParticipant("De Bondt Sandra 7 (Jens)", 213, ["France", "Brazil", "Spain", "Switzerland", "Czechia", "United States", "Austria", "South Korea", "Norway", "Sweden"]),
    createParticipant("De Coninck Tom", 277, ["France", "Argentina", "Spain", "Uruguay", "Croatia", "Austria", "Japan", "Turkey", "Sweden", "Ivory Coast"]),
    createParticipant("De Geyter Véronique 1 (Linn)", 280, ["Brazil", "Morocco", "Belgium", "Scotland", "Qatar", "Panama", "Turkey", "Mexico", "Canada", "Japan"]),
    createParticipant("De Geyter Véronique 2 (Karen)", 276, ["Argentina", "France", "Spain", "Uruguay", "Colombia", "Mexico", "Norway", "United States", "Paraguay", "Ivory Coast"]),
    createParticipant("De Geyter Véronique 3 (V)", 125, ["Spain", "Argentina", "France", "Mexico", "Japan", "Turkey", "Scotland", "Switzerland", "Croatia", "Ivory Coast"]),
    createParticipant("de Haen Carole", 249, ["France", "Spain", "Argentina", "Mexico", "Norway", "Uruguay", "Japan", "Ivory Coast", "South Korea", "South Africa"]),
    createParticipant("De Schepper Nico", 327, ["Spain", "France", "Germany", "Uruguay", "Mexico", "Colombia", "Japan", "Canada", "Ivory Coast", "Scotland"]),
    createParticipant("De Vos Tina", 292, ["France", "Argentina", "Brazil", "Croatia", "Uruguay", "Mexico", "Japan", "Senegal", "Ivory Coast", "Ghana"]),
    createParticipant("Deman Elly 1 (Elly)", 312, ["France", "Argentina", "England", "Croatia", "Ecuador", "Colombia", "Japan", "Uruguay", "Tunisia", "Bosnia-Herzegovina"]),
    createParticipant("Deman Elly 2 (Dany)", 321, ["France", "Spain", "England", "Turkey", "Mexico", "Croatia", "Norway", "Japan", "Sweden", "Czechia"]),
    createParticipant("Deman Elly 3 (Vince)", 366, ["France", "Spain", "Germany", "Norway", "Sweden", "Turkey", "Croatia", "Uzbekistan", "Uruguay", "Egypt"]),
    createParticipant("Geens Koen", 395, ["Spain", "France", "Argentina", "Norway", "Turkey", "Croatia", "Switzerland", "Uruguay", "South Africa", "Bosnia-Herzegovina"]),
    createParticipant("Geerts Inge 1", 275, ["Spain", "France", "England", "Colombia", "Mexico", "Croatia", "Switzerland", "Norway", "Czechia", "Sweden"]),
    createParticipant("Geerts Inge 2", 286, ["Spain", "France", "Argentina", "Mexico", "Croatia", "Uruguay", "Japan", "Switzerland", "Ivory Coast", "Paraguay"]),
    createParticipant("Geerts Inge 3", 281, ["Argentina", "Spain", "Belgium", "Turkey", "Switzerland", "Mexico", "Croatia", "Norway", "Ivory Coast", "Sweden"]),
    createParticipant("Geerts Inge 4", 282, ["Portugal", "Spain", "England", "Norway", "Mexico", "Turkey", "Switzerland", "Austria", "Sweden", "South Africa"]),
    createParticipant("Geirnaert Matthew 1", 304, ["Portugal", "Spain", "Brazil", "Switzerland", "Norway", "Croatia", "Mexico", "Czechia", "Egypt", "Bosnia-Herzegovina"]),
    createParticipant("Geirnaert Matthew 2", 286, ["France", "Portugal", "Spain", "Turkey", "Mexico", "Switzerland", "Croatia", "Norway", "Czechia", "Ivory Coast"]),
    createParticipant("Geirnaert Simon", 275, ["France", "England", "Spain", "Turkey", "Mexico", "Japan", "Norway", "Switzerland", "Czechia", "Bosnia-Herzegovina"]),
    createParticipant("Genoe Mathias", 314, ["Spain", "England", "Portugal", "Mexico", "Turkey", "Croatia", "Switzerland", "Czechia", "Ivory Coast", "Uzbekistan"]),
    createParticipant("Geraedts Mark 1", 274, ["Spain", "France", "Germany", "Mexico", "Japan", "Colombia", "Switzerland", "Uruguay", "Sweden", "Scotland"]),
    createParticipant("Geraedts Mark 2", 341, ["Germany", "Spain", "Belgium", "Croatia", "Colombia", "Senegal", "Japan", "Switzerland", "Czechia", "Ghana"]),
    createParticipant("Geraedts Mark 3 (Ewout)", 416, ["Spain", "Argentina", "France", "Mexico", "Switzerland", "Turkey", "Uruguay", "Ivory Coast", "Senegal", "Czechia"]),
    createParticipant("Gijbels Tuur", 267, ["France", "Portugal", "Belgium", "Norway", "Turkey", "Switzerland", "Japan", "Croatia", "Czechia", "Congo DR"]),
    createParticipant("Gysels Cynthia", 176, ["France", "Spain", "Morocco", "Norway", "Uruguay", "Switzerland", "Japan", "Croatia", "Ivory Coast", "Bosnia-Herzegovina"]),
    createParticipant("Gondry Tommy", 156, ["France", "Spain", "Morocco", "Japan", "Senegal", "Canada", "United States", "Egypt", "South Africa", "Sweden"]),
    createParticipant("Grillaert Kurt 1", 290, ["Brazil", "Germany", "Spain", "Switzerland", "Colombia", "Croatia", "Austria", "Norway", "Czechia", "Sweden"]),
    createParticipant("Grillaert Kurt 2", 290, ["Brazil", "France", "Spain", "Switzerland", "Colombia", "Mexico", "Austria", "Norway", "Czechia", "Ivory Coast"]),
    createParticipant("Grillaert Kurt 3", 290, ["Brazil", "France", "Spain", "Switzerland", "Colombia", "Mexico", "Austria", "United States", "Czechia", "Ivory Coast"]),
    createParticipant("Grillaert Kurt 4", 290, ["Brazil", "Germany", "Spain", "Switzerland", "Colombia", "Japan", "Austria", "United States", "Czechia", "Ivory Coast"]),
    createParticipant("Hammit Youssef", 301, ["Spain", "Portugal", "Argentina", "Colombia", "Uruguay", "Senegal", "Switzerland", "Canada", "Paraguay", "Bosnia-Herzegovina"]),
    createParticipant("Haverals Tom", 280, ["Spain", "Argentina", "France", "Uruguay", "Switzerland", "Turkey", "Colombia", "Senegal", "Scotland", "Ivory Coast"]),
    createParticipant("Herremans Jeroen", 159, ["Germany", "France", "Spain", "Mexico", "Scotland", "Congo DR", "Switzerland", "Turkey", "Austria", "Croatia"]),
    createParticipant("Heveraedt Arno", 244, ["Spain", "Brazil", "England", "Norway", "Japan", "Austria", "Uruguay", "Colombia", "Sweden", "Paraguay"]),
    createParticipant("Heveraedt Jelle 1", 287, ["Croatia", "Ecuador", "France", "Switzerland", "Belgium", "Paraguay", "Ivory Coast", "United States", "Norway", "Mexico"]),
    createParticipant("Heveraedt Jelle 2", 278, ["Spain", "Netherlands", "Uruguay", "Portugal", "Croatia", "Egypt", "Scotland", "Sweden", "Ghana", "Ivory Coast"]),
    createParticipant("Hofkens Marc", 263, ["France", "Spain", "Brazil", "Turkey", "Mexico", "Uruguay", "Austria", "Switzerland", "Czechia", "Ghana"]),
    createParticipant("Houben Bert 1", 298, ["Spain", "France", "Japan", "Colombia", "Croatia", "Norway", "Mexico", "Uruguay", "Czechia", "Sweden"]),
    createParticipant("Houben Bert 10 (Thomas)", 270, ["England", "Germany", "Portugal", "Mexico", "Norway", "Colombia", "Japan", "Ecuador", "Ivory Coast", "Paraguay"]),
    createParticipant("Houben Bert 11 (Fré)", 290, ["Spain", "England", "Brazil", "Ecuador", "Senegal", "Switzerland", "Mexico", "Austria", "Ivory Coast", "Scotland"]),
    createParticipant("Houben Bert 2 (Robby)", 187, ["France", "Morocco", "Spain", "Norway", "Uruguay", "Mexico", "Japan", "Senegal", "Czechia", "Ivory Coast"]),
    createParticipant("Houben Bert 3 (Robby)", 196, ["Spain", "Germany", "Portugal", "Colombia", "Japan", "Ecuador", "Senegal", "Croatia", "Czechia", "Ivory Coast"]),
    createParticipant("Houben Bert 4 (Robby)", 194, ["Germany", "England", "Spain", "Norway", "Turkey", "Mexico", "Senegal", "Croatia", "Czechia", "Ivory Coast"]),
    createParticipant("Houben Bert 5 (Eva)", 286, ["France", "Spain", "Portugal", "Turkey", "Senegal", "Norway", "Croatia", "Japan", "Scotland", "Sweden"]),
    createParticipant("Houben Bert 6 (Jef)", 286, ["Spain", "France", "Argentina", "Norway", "Colombia", "Croatia", "Uruguay", "Turkey", "Sweden", "Ivory Coast"]),
    createParticipant("Houben Bert 7 (Simon)", 302, ["Spain", "Brazil", "Portugal", "Turkey", "Switzerland", "Japan", "Norway", "Mexico", "Czechia", "Scotland"]),
    createParticipant("Houben Bert 8 (Robrecht)", 196, ["Spain", "France", "Norway", "Japan", "United States", "Colombia", "Scotland", "Uruguay", "Paraguay", "Mexico"]),
    createParticipant("Houben Bert 9 (Thomas)", 270, ["France", "Brazil", "Spain", "Mexico", "Norway", "Switzerland", "South Korea", "United States", "Ivory Coast", "Paraguay"]),
    createParticipant("Hylin Yves 1", 229, ["Spain", "England", "France", "Norway", "Colombia", "United States", "Japan", "Switzerland", "Sweden", "Ivory Coast"]),
    createParticipant("Hylin Yves 2", 22, ["Jordan", "Curaçao", "Haiti", "Uzbekistan", "Panama", "Cape Verde", "Iraq", "Saudi Arabia", "New Zealand", "Qatar"]),
    createParticipant("Jacques Steven", 269, ["Spain", "Argentina", "England", "Mexico", "Norway", "Ecuador", "Senegal", "Switzerland", "Paraguay", "Ivory Coast"]),
    createParticipant("Janssens Annelies 1", 270, ["France", "Argentina", "Belgium", "Colombia", "Mexico", "Croatia", "Switzerland", "Turkey", "Tunisia", "Saudi Arabia"]),
    createParticipant("Janssens Annelies 2", 300, ["New Zealand", "Jordan", "Uzbekistan", "Haiti", "Qatar", "Cape Verde", "Panama", "Iraq", "Curaçao", "South Africa"]),
    createParticipant("Janssens Annelies 3", 274, ["Portugal", "France", "Spain", "Turkey", "Croatia", "Switzerland", "Senegal", "Bosnia-Herzegovina", "Ivory Coast", "United States"]),
    createParticipant("Janssens Jonas 1", 323, ["France", "Spain", "Argentina", "Japan", "Norway", "Mexico", "Colombia", "Uruguay", "Czechia", "Paraguay"]),
    createParticipant("Janssens Jonas 2", 278, ["Spain", "France", "England", "Switzerland", "Norway", "Turkey", "Uruguay", "Senegal", "Ivory Coast", "Czechia"]),
    createParticipant("Janssens Maaike", 283, ["Spain", "France", "Belgium", "Colombia", "Uruguay", "Japan", "Senegal", "Norway", "Ghana", "Bosnia-Herzegovina"]),
    createParticipant("Karreman Maxim 1", 318, ["Spain", "England", "Brazil", "Uruguay", "Colombia", "Croatia", "Japan", "Switzerland", "Ivory Coast", "Sweden"]),
    createParticipant("Karreman Maxim 2", 318, ["Paraguay", "Haiti", "Curaçao", "New Zealand", "Cape Verde", "Qatar", "Ghana", "Egypt", "Panama", "Morocco"]),
    createParticipant("Keveryn Kim", 264, ["Spain", "France", "England", "Norway", "Colombia", "Japan", "Uruguay", "United States", "Paraguay", "Scotland"]),
    createParticipant("Laethem Nick 1", 171, ["France", "Spain", "Belgium", "Croatia", "Switzerland", "Japan", "Sweden", "Paraguay", "Czechia", "Ivory Coast"]),
    createParticipant("Laethem Nick 2", 163, ["Brazil", "Argentina", "Germany", "Japan", "Mexico", "Senegal", "Sweden", "Tunisia", "South Africa", "Ghana"]),
    createParticipant("Laga Sybren", 267, ["France", "Norway", "Spain", "England", "United States", "Austria", "Tunisia", "Mexico", "Sweden", "Ivory Coast"]),
    createParticipant("Laureys Reinaart", 278, ["Spain", "Brazil", "Morocco", "Colombia", "Mexico", "Japan", "Norway", "South Korea", "Tunisia", "Sweden"]),
    createParticipant("L'Host Cedric", 176, ["Spain", "Argentina", "Brazil", "Croatia", "Colombia", "Turkey", "Mexico", "Austria", "Sweden", "Panama"]),
    createParticipant("Lieckens Philip 1", 282, ["Spain", "England", "France", "United States", "Mexico", "Switzerland", "Norway", "Japan", "Scotland", "Ivory Coast"]),
    createParticipant("Lieckens Philip 2", 282, ["France", "Portugal", "Spain", "Norway", "Mexico", "Switzerland", "United States", "Croatia", "Ivory Coast", "Scotland"]),
    createParticipant("Lieckens Philip 3", 1000, ["Curaçao", "Iraq", "Haiti", "Cape Verde", "Panama", "Jordan", "Uzbekistan", "Qatar", "New Zealand", "South Africa"]),
    createParticipant("Lins Dries", 305, ["Spain", "France", "England", "Turkey", "Mexico", "Senegal", "Switzerland", "Austria", "Congo DR", "Sweden"]),
    createParticipant("Maenhout Wouter", 272, ["Brazil", "England", "Germany", "Mexico", "Uruguay", "Japan", "Switzerland", "Egypt", "Paraguay", "Scotland"]),
    createParticipant("Maes Annique", 228, ["Belgium", "Portugal", "Netherlands", "Austria", "Japan", "Senegal", "Croatia", "Canada", "Sweden", "Panama"]),
    createParticipant("Mbayi Kazadi 1", 302, ["Spain", "Germany", "Portugal", "Mexico", "Norway", "Japan", "Ghana", "Austria", "Switzerland", "Paraguay"]),
    createParticipant("Mbayi Kazadi 2", 271, ["France", "Netherlands", "Brazil", "Colombia", "Ivory Coast", "Mexico", "Uruguay", "Egypt", "United States", "Ghana"]),
    createParticipant("Meeusen Wim 1", 281, ["France", "Spain", "Morocco", "Colombia", "Senegal", "Mexico", "Japan", "Croatia", "Panama", "Saudi Arabia"]),
    createParticipant("Meeusen Wim 2", 255, ["Argentina", "England", "Belgium", "Austria", "South Korea", "Switzerland", "Japan", "Croatia", "Scotland", "Ivory Coast"]),
    createParticipant("Mels Andreas", 312, ["France", "Spain", "Belgium", "Senegal", "South Korea", "Mexico", "Japan", "Switzerland", "South Africa", "Congo DR"]),
    createParticipant("Meuwissen Bert", 267, ["Brazil", "England", "Spain", "Croatia", "Switzerland", "Colombia", "United States", "Senegal", "Sweden", "Ivory Coast"]),
    createParticipant("Moons Kathleen", 316, ["France", "Brazil", "Argentina", "United States", "Mexico", "Switzerland", "Ecuador", "Japan", "Paraguay", "Scotland"]),
    createParticipant("Morillo Yolanda", 204, ["Spain", "France", "Belgium", "Austria", "Colombia", "United States", "Mexico", "Norway", "Scotland", "Sweden"]),
    createParticipant("Mous David", 282, ["Spain", "France", "Portugal", "Ecuador", "Colombia", "Norway", "Croatia", "Switzerland", "Ivory Coast", "Sweden"]),
    createParticipant("Pacqué Kurt", 287, ["Argentina", "Spain", "Canada", "Paraguay", "Japan", "Norway", "South Korea", "Egypt", "Mexico", "Congo DR"]),
    createParticipant("Pauwels Jan", 281, ["Spain", "Portugal", "France", "Mexico", "Uruguay", "Croatia", "Japan", "Senegal", "Congo DR", "Czechia"]),
    createParticipant("Pauwels Koen", 198, ["France", "Spain", "Portugal", "Colombia", "Japan", "United States", "Norway", "Egypt", "South Africa", "Czechia"]),
    createParticipant("Pauwels Mark-Filip", 333, ["Belgium", "Spain", "France", "Croatia", "Turkey", "United States", "Sweden", "Norway", "Switzerland", "New Zealand"]),
    createParticipant("Peeters Stefan 1 (SP)", 219, ["Spain", "France", "Germany", "Switzerland", "Norway", "Uruguay", "Austria", "Mexico", "Sweden", "Bosnia-Herzegovina"]),
    createParticipant("Peeters Stefan 2 (N)", 278, ["Spain", "Morocco", "France", "Norway", "Croatia", "Turkey", "South Korea", "Egypt", "Saudi Arabia", "Iraq"]),
    createParticipant("Peeters Stefan 3 (D)", 219, ["France", "Spain", "Portugal", "South Korea", "Sweden", "Croatia", "Senegal", "Switzerland", "Norway", "Iraq"]),
    createParticipant("Peeters Stefan 4 (S)", 239, ["Belgium", "Spain", "France", "Austria", "South Korea", "Turkey", "Switzerland", "Tunisia", "Czechia", "New Zealand"]),
    createParticipant("Peeters Stijn", 278, ["Spain", "Brazil", "Germany", "Switzerland", "Uruguay", "Canada", "Ecuador", "South Korea", "Czechia", "Sweden"]),
    createParticipant("Peters Georges 1", 301, ["France", "Brazil", "England", "Norway", "Uruguay", "Japan", "Canada", "Mexico", "Sweden", "Ivory Coast"]),
    createParticipant("Peters Georges 2", 290, ["Germany", "Brazil", "England", "Norway", "Uruguay", "Japan", "Canada", "Switzerland", "Sweden", "Ivory Coast"]),
    createParticipant("Piessens Jan 1", 269, ["Spain", "Brazil", "France", "Croatia", "Uruguay", "Mexico", "Switzerland", "Japan", "Ghana", "Saudi Arabia"]),
    createParticipant("Piessens Jan 2", 276, ["Belgium", "England", "Portugal", "Croatia", "Mexico", "Norway", "Canada", "Japan", "Czechia", "Ivory Coast"]),
    createParticipant("Piessens Jan 3 (Kamiel)", 299, ["England", "Germany", "Belgium", "Japan", "Turkey", "United States", "Norway", "Czechia", "Sweden", "Uruguay"]),
    createParticipant("Robbroeckx Bart 1", 383, ["Brazil", "Germany", "Belgium", "Croatia", "Senegal", "Uruguay", "Egypt", "Ghana", "Turkey", "Czechia"]),
    createParticipant("Robbroeckx Bart 2", 333, ["Brazil", "Argentina", "France", "Egypt", "Sweden", "Scotland", "Turkey", "Mexico", "Austria", "Congo DR"]),
    createParticipant("Rottiers Steve 1", 275, ["Spain", "France", "Belgium", "Japan", "Colombia", "Switzerland", "United States", "Mexico", "Paraguay", "Ghana"]),
    createParticipant("Rottiers Steve 2", 270, ["Spain", "Argentina", "Brazil", "Colombia", "Japan", "Uruguay", "Mexico", "Switzerland", "Sweden", "Scotland"]),
    createParticipant("Stuurman Léon", 295, ["Spain", "France", "Brazil", "Uruguay", "Croatia", "Senegal", "Norway", "Colombia", "Qatar", "Curaçao"]),
    createParticipant("Thoen Luc", 321, ["Brazil", "France", "Spain", "Japan", "Mexico", "Switzerland", "Senegal", "Colombia", "Czechia", "Ghana"]),
    createParticipant("Tindemans Maarten", 375, ["France", "Argentina", "Mexico", "Colombia", "Croatia", "Belgium", "Austria", "Canada", "Ivory Coast", "Scotland"]),
    createParticipant("Van Crombruggen Dirk 1", 265, ["France", "Portugal", "Morocco", "Senegal", "Turkey", "Norway", "Japan", "Sweden", "Ghana", "Mexico"]),
    createParticipant("Van Crombruggen Dirk 2", 210, ["Spain", "Brazil", "France", "Japan", "Croatia", "Senegal", "Scotland", "Sweden", "Turkey", "Austria"]),
    createParticipant("Van De Mierop Glenn", 272, ["France", "Spain", "Portugal", "Colombia", "Uruguay", "Norway", "Switzerland", "Japan", "Czechia", "Paraguay"]),
    createParticipant("Van de Walle An 1 (FB)", 300, ["Spain", "Portugal", "England", "Colombia", "Norway", "Japan", "Turkey", "Uruguay", "Ivory Coast", "Sweden"]),
    createParticipant("Van de Walle An 2 (EVH)", 282, ["France", "Argentina", "Spain", "Switzerland", "Colombia", "Mexico", "Croatia", "Uruguay", "Czechia", "Bosnia-Herzegovina"]),
    createParticipant("Van de Walle An 3 (AB)", 262, ["Spain", "France", "Belgium", "Mexico", "Norway", "Turkey", "Switzerland", "United States", "Czechia", "Bosnia-Herzegovina"]),
    createParticipant("Van de Walle An 4", 213, ["Portugal", "France", "Brazil", "Japan", "Senegal", "Mexico", "Uruguay", "Croatia", "Sweden", "Czechia"]),
    createParticipant("Van den Bogaert Bart", 239, ["Portugal", "Spain", "Argentina", "Croatia", "Uruguay", "Mexico", "Turkey", "Colombia", "Paraguay", "South Africa"]),
    createParticipant("Van Den Bosch Ward", 180, ["France", "Croatia", "Mexico", "England", "Germany", "Sweden", "Japan", "Congo DR", "Switzerland", "Canada"]),
    createParticipant("Van Den Bossche Daisy 1", 520, ["France", "Portugal", "Belgium", "Canada", "Australia", "Japan", "United States", "Sweden", "Uruguay", "South Africa"]),
    createParticipant("Van Den Bossche Daisy 2", 105, ["Spain", "France", "Belgium", "Croatia", "Mexico", "Norway", "Japan", "Sweden", "Paraguay", "Ivory Coast"]),
    createParticipant("Van Den Bossche Daisy 3 (Géne)", 105, ["France", "Belgium", "England", "Mexico", "Bosnia-Herzegovina", "Senegal", "Japan", "Czechia", "Uruguay", "Scotland"]),
    createParticipant("Van Den Brande Leen", 326, ["Spain", "France", "England", "United States", "Ecuador", "Uruguay", "Austria", "Colombia", "Sweden", "South Africa"]),
    createParticipant("Van den Broeck Sven", 176, ["France", "Spain", "Portugal", "Croatia", "Turkey", "Senegal", "Japan", "Ivory Coast", "Colombia", "Paraguay"]),
    createParticipant("Van den heuvel Jeroen", 288, ["Spain", "Portugal", "Belgium", "Norway", "Switzerland", "Turkey", "Japan", "Ivory Coast", "Austria", "Paraguay"]),
    createParticipant("Van Eycken Marnik 1", 293, ["Spain", "Portugal", "France", "Colombia", "Senegal", "Austria", "Norway", "Uruguay", "Sweden", "Scotland"]),
    createParticipant("Van Eycken Marnik 2", 293, ["Germany", "Argentina", "Brazil", "Turkey", "Norway", "Mexico", "Senegal", "United States", "Ivory Coast", "Czechia"]),
    createParticipant("Van Eycken Marnik 3", 307, ["Portugal", "Spain", "France", "Uruguay", "Turkey", "Senegal", "Ivory Coast", "Japan", "Austria", "Czechia"]),
    createParticipant("Van Eycken Marnik 4", 307, ["New Zealand", "Haiti", "Congo DR", "Paraguay", "Bosnia-Herzegovina", "Canada", "Egypt", "Algeria", "Morocco", "Netherlands"]),
    createParticipant("Van Eycken Marnik 5", 277, ["Argentina", "Spain", "France", "Mexico", "Canada", "Switzerland", "United States", "Colombia", "Paraguay", "Ivory Coast"]),
    createParticipant("Van Eycken Marnik 6", 289, ["Portugal", "France", "Spain", "Switzerland", "Turkey", "Mexico", "South Korea", "Senegal", "Paraguay", "Bosnia-Herzegovina"]),
    createParticipant("Van Gesetel Nico 1", 326, ["Spain", "France", "Argentina", "Uruguay", "Croatia", "Colombia", "Mexico", "Japan", "Sweden", "Paraguay"]),
    createParticipant("Van Gesetel Nico 2", 294, ["France", "Brazil", "Belgium", "Norway", "Japan", "Turkey", "Switzerland", "Ghana", "Sweden", "Uruguay"]),
    createParticipant("Van Gesetel Nico 3", 303, ["Spain", "Netherlands", "Morocco", "Colombia", "Japan", "Sweden", "Austria", "Switzerland", "Paraguay", "Czechia"]),
    createParticipant("Van Gesetel Nico 4", 299, ["Brazil", "Belgium", "Germany", "Mexico", "Colombia", "Uruguay", "Japan", "Turkey", "Sweden", "Ghana"]),
    createParticipant("Van Hal Myrthe", 302, ["Spain", "France", "Belgium", "Mexico", "Uruguay", "Switzerland", "Turkey", "Colombia", "Czechia", "Tunisia"]),
    createParticipant("Van Hecke Joke", 231, ["Portugal", "Spain", "France", "Colombia", "Algeria", "Japan", "South Korea", "Norway", "Congo DR", "Ghana"]),
    createParticipant("Van Hoeck Robert", 291, ["France", "Brazil", "England", "Norway", "Uruguay", "Japan", "Canada", "Mexico", "Sweden", "Ivory Coast"]),
    createParticipant("Van Hove Matthias 1", 243, ["Brazil", "France", "Croatia", "Argentina", "Japan", "Mexico", "Uruguay", "Colombia", "Czechia", "Ghana"]),
    createParticipant("Van Hove Matthias 2 (Paula Gomez)", 310, ["Spain", "Argentina", "France", "Senegal", "Ecuador", "Norway", "Colombia", "Czechia", "Congo DR", "Cape Verde"]),
    createParticipant("Van Hove Matthias 3 (Nicholas Van Den Berghe)", 303, ["Spain", "Portugal", "France", "Turkey", "Switzerland", "Ecuador", "Japan", "Austria", "Congo DR", "Czechia"]),
    createParticipant("Van Linden Tasha", 281, ["Spain", "Argentina", "France", "United States", "Norway", "Colombia", "Turkey", "Croatia", "Czechia", "Sweden"]),
    createParticipant("Van Meir Sofie 1 (Noa)", 308, ["Spain", "Argentina", "Belgium", "Croatia", "Norway", "Mexico", "Turkey", "Ecuador", "Bosnia-Herzegovina", "Paraguay"]),
    createParticipant("Van Meir Sofie 2", 256, ["Germany", "France", "Belgium", "Colombia", "Croatia", "Austria", "Turkey", "Japan", "Paraguay", "Czechia"]),
    createParticipant("Van Meirvenne Jerry", 291, ["France", "Germany", "Belgium", "Japan", "Canada", "Colombia", "Uruguay", "Croatia", "South Africa", "Paraguay"]),
    createParticipant("Van Reybrouck Jo", 271, ["Spain", "England", "France", "Norway", "Ecuador", "Turkey", "Croatia", "Senegal", "Czechia", "Sweden"]),
    createParticipant("Van Uytven Dirk", 231, ["Spain", "England", "Brazil", "Turkey", "Uruguay", "Japan", "United States", "Norway", "Czechia", "Tunisia"]),
    createParticipant("Vanleene Ruben", 278, ["Argentina", "Spain", "France", "Norway", "Mexico", "Switzerland", "Colombia", "Turkey", "Ivory Coast", "Paraguay"]),
    createParticipant("Verbeken Jelle", 276, ["Argentina", "Spain", "England", "Norway", "Canada", "Colombia", "Uruguay", "Croatia", "Paraguay", "Sweden"]),
    createParticipant("Verplancke Bert", 343, ["Spain", "France", "Portugal", "Uruguay", "Japan", "Switzerland", "United States", "Canada", "Sweden", "Paraguay"]),
    createParticipant("Verrelst Ilse 1", 308, ["England", "France", "Spain", "Senegal", "Algeria", "Turkey", "Colombia", "Croatia", "Ivory Coast", "Cape Verde"]),
    createParticipant("Verrelst Ilse 2", 312, ["Germany", "England", "France", "Turkey", "Ghana", "Algeria", "Senegal", "Uruguay", "Ivory Coast", "South Africa"]),
    createParticipant("Verrelst Ilse 3", 402, ["Brazil", "Spain", "Belgium", "Japan", "Colombia", "Turkey", "Mexico", "Senegal", "Ghana", "Ivory Coast"]),
    createParticipant("Verrelst Ilse 4", 315, ["Spain", "England", "Belgium", "Japan", "Colombia", "Mexico", "Switzerland", "Turkey", "Ivory Coast", "Paraguay"]),
    createParticipant("Verschueren Gerd", 279, ["France", "Spain", "Portugal", "Croatia", "Mexico", "Turkey", "Switzerland", "Austria", "Sweden", "Ivory Coast"]),
    createParticipant("Volkaerts Ken 1", 272, ["Brazil", "England", "Spain", "Turkey", "Ecuador", "Norway", "Australia", "Czechia", "Ivory Coast", "Egypt"]),
    createParticipant("Volkaerts Ken 2", 211, ["Spain", "France", "Argentina", "Turkey", "Colombia", "Switzerland", "Senegal", "Ecuador", "Czechia", "Sweden"]),
    createParticipant("Volkaerts Ken 3", 326, ["Brazil", "Spain", "Argentina", "Japan", "Switzerland", "Senegal", "Congo DR", "Turkey", "United States", "Ivory Coast"]),
    createParticipant("Volkaerts Ken 4", 342, ["France", "Brazil", "Germany", "Turkey", "Austria", "Uruguay", "Switzerland", "Ecuador", "Paraguay", "South Africa"]),
    createParticipant("Waterschoot Gunther (Reimond)", 369, ["Argentina", "Brazil", "Germany", "Mexico", "Croatia", "Austria", "Czechia", "United States", "Scotland", "Sweden"]),
    createParticipant("Waterschoot Gunther 1", 312, ["France", "Brazil", "Spain", "Ecuador", "Switzerland", "Turkey", "Mexico", "Cape Verde", "Colombia", "Sweden"]),
    createParticipant("Waterschoot Gunther 2 (Staf)", 276, ["Brazil", "Spain", "Portugal", "Mexico", "Switzerland", "Croatia", "Senegal", "Turkey", "Tunisia", "Ghana"]),
    createParticipant("Waterschoot Gunther 3 (Bart)", 308, ["France", "Brazil", "Spain", "Egypt", "Switzerland", "Mexico", "Turkey", "Norway", "Paraguay", "Czechia"]),
    createParticipant("Waterschoot Gunther 4 (Dries)", 260, ["Portugal", "France", "Spain", "Norway", "Senegal", "Mexico", "South Korea", "Switzerland", "Ivory Coast", "Paraguay"]),
    createParticipant("Waterschoot Gunther 5 (Yarne)", 408, ["Argentina", "Spain", "Brazil", "Norway", "South Korea", "Switzerland", "Croatia", "Turkey", "Scotland", "Ghana"]),
    createParticipant("Waterschoot Gunther 6 (Toon)", 261, ["France", "Brazil", "Spain", "Mexico", "United States", "Canada", "Colombia", "Uruguay", "Czechia", "Paraguay"]),
    createParticipant("Waterschoot Gunther 7 (Marnik)", 281, ["France", "Spain", "Argentina", "Mexico", "South Korea", "Norway", "Japan", "Croatia", "Scotland", "Congo DR"]),
    createParticipant("Waterschoot Gunther 8 (Yens)", 287, ["Germany", "Colombia", "France", "Spain", "Egypt", "Scotland", "Switzerland", "Turkey", "Mexico", "Sweden"]),
    createParticipant("Waterschoot Gunther 9 (Koen)", 285, ["France", "Netherlands", "Argentina", "Senegal", "Switzerland", "United States", "Norway", "Japan", "Ivory Coast", "Qatar"]),
    createParticipant("Wijnen Yasmien", 280, ["Spain", "Argentina", "England", "Japan", "Croatia", "Austria", "Uruguay", "Mexico", "Sweden", "Tunisia"])
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

const stageTranslations = {
    "GROUP_STAGE": "Groepsfase",
    "LAST_32": "1/16 Finales",
    "LAST_16": "Achtste finales",
    "QUARTER_FINALS": "Kwartfinales",
    "SEMI_FINALS": "Halve finales",
    "THIRD_PLACE": "Troostfinale",
    "FINAL": "Finale"
};

function translateStage(stageName) {
    if (!stageName) return '';
    return stageTranslations[stageName] || stageName;
}

// ==========================================
// LANDENCODES VOOR VLAGGEN (ISO 3166-1 alpha-2)
// ==========================================
const countryCodes = {
    "Spain": "es", "France": "fr", "Argentina": "ar", "England": "gb-eng", "Brazil": "br",
    "Netherlands": "nl", "Belgium": "be", "Germany": "de", "Croatia": "hr", "United States": "us",
    "Switzerland": "ch", "South Korea": "kr", "Australia": "au", "Algeria": "dz", "Egypt": "eg",
    "Norway": "no", "Sweden": "se", "Czechia": "cz", "Scotland": "gb-sct", "Tunisia": "tn",
    "South Africa": "za", "Saudi Arabia": "sa", "Cape Verde Islands": "cv", "Cape Verde": "cv",
    "Ivory Coast": "ci", "Côte d'Ivoire": "ci", "Morocco": "ma", "Turkey": "tr", "Austria": "at",
    "Poland": "pl", "Denmark": "dk", "Italy": "it", "Bosnia and Herzegovina": "ba",
    "Bosnia-Herzegovina": "ba", "Republic of Ireland": "ie", "Northern Ireland": "gb-nir",
    "Greece": "gr", "Uruguay": "uy", "Colombia": "co", "Japan": "jp", "Mexico": "mx",
    "Portugal": "pt", "Senegal": "sn", "Iran": "ir", "Ecuador": "ec", "Canada": "ca",
    "Panama": "pa", "Paraguay": "py", "DR Congo": "cd", "Congo DR": "cd", "Uzbekistan": "uz",
    "Qatar": "qa", "Iraq": "iq", "Jordan": "jo", "Ghana": "gh", "Curaçao": "cw", "Haiti": "ht",
    "New Zealand": "nz", "Chile": "cl", "Peru": "pe", "Wales": "gb-wls", "Cameroon": "cm",
    "Serbia": "rs", "Mali": "ml"
};

function getFlagHtml(englishName, extraClasses = "mr-1.5") {
    if (!englishName) return '';
    const code = countryCodes[englishName];
    if (code) {
        return `<img src="https://flagcdn.com/${code}.svg" class="inline-block w-4 h-3 object-cover shadow-[0_0_2px_rgba(0,0,0,0.2)] rounded-[1px] ${extraClasses}" alt="${englishName}">`;
    }
    return '';
}

// Standaard deelnemers (Vrienden van de Nuts) voor de rest van de applicatie
const participants = allParticipants.slice(0, 4);
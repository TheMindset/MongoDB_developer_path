boxOffice: [ { "country": "USA", "revenue": 228.4 },
             { "country": "Australia", "revenue": 19.6 },
             { "country": "UK", "revenue": 33.9 },
             { "country": "Germany", "revenue": 16.2 },
             { "country": "France", "revenue": 19.8 } ]

/*
 * On trouve un résultat parce que :
 * "boxOffice.country": "Germany" ==> est présent dans un document 
 * "boxOffice.revenue": {$gt: 17} ==> est présent dans un autre document . 
 * Qui n'est pas forcément au même endroit.
 */
db.movieDetails.find({"boxOffice.country": "Germany", "boxOffice.revenue": {$gt: 17}})

/**
 * Même chose que la 1ère requête
 */
db.movieDetails.find({"boxOffice.country": "Germany", "boxOffice.revenue": {$gt: 228}})

/**
 * Ici, un exemple de comment utiliser "$elemMatch" efficacement
 */
// use video
martian = db.movieDetails.findOne({title: "The Martian"})
martian
delete martian._id;
martian
martian.boxOffice = [
    {"country": "USA", "revenue": 228.4},
    {"country": "Australia", "revenue": 19.6},
    {"country": "UK", "revenue": 33.9},
    {"country": "Germany", "revenue": 16.2},
    {"country": "France", "revenue": 19.8}
]
db.movieDetails.insertOne(martian);

/**
 * "$elemMatch"retourne un résultat si dans *LE MEME DOCUMENT* le filtre match
 * On trouve pas de résultat parce que:
 * les éléments "country": "Germany" et "revenue": {$gt: 17} doivent obligatiorement
 * se trouver dans le même document or ici la valeur de "revenue" est 16.2.
 */
db.movieDetails.find({boxOffice: {$elemMatch: {"country": "Germany", "revenue": {$gt: 17}}}})

/**
 * Ici on trouve un élément
 */
db.movieDetails.find({boxOffice: {$elemMatch: {"country": "Germany", "revenue": {$gt: 16}}}})

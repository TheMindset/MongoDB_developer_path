/**
 * not equal
 */
db.movieDetails.find({ rated: {$ne: "UNRATED"}}, {_id: 0, title: 1, rated: 1})

/**
 * Equal
 */
db.movieDetails.find({ rated: {$eq: "UNRATED"}}, {_id: 0, title: 1, rated: 1})

/**
 * Match in "PG" or "G"
 */
db.movieDetails.find({ rated: {$in: ["PG", "G"]}}, {_id: 0, title: 1, rated: 1})

/**
 * Not match in "PG" or "G"
 */
db.movieDetails.find({ rated: {$nin: ["PG", "G"]}}, {_id: 0, title: 1, rated: 1})

/**
 * greater than or equal, last than or equal
 */
db.movieDetails.find({ runtime: {$gte: 90, $lte: 120} }, {_id: 0, title: 1, runtime: 1})

/**
 * equal
 */
db.movieDetails.find({ runtime: {$eq: 90} }, {_id: 0, title: 1, runtime: 1})
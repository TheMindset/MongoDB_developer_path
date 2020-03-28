// https://docs.mongodb.com/manual/reference/operator/query-array/

/**
 * '$all' take an array as arguments
 * Find all documents which have as a value of the field 'genres'
 * "Drama", "Comedy" or "Romance" (the order do not matter)
 */
db.movieDetails.find({
  genres: {$all: ["Comedy", "Drama", "Romance"]}}, 
  { _id: 0, title: 1, genres: 1 }
).pretty()


/**
 * '$size' ==> the lengeth of the array
 * Find all documents which have as value an array containig 1 element
 */

db.movieDetails.find({
  countries: {$size: 1}
}).count()

// https://docs.mongodb.com/manual/reference/operator/query-logical/

/**
 * '$or' take an array as arguments
 */
db.movieDetails.find({
  $or: [
    {"tomato.meter": {$gt: 95}},
    {"metacritic": {$gt: 88}}
  ]}, { _id: 0, title: 1, "tomato.meter": 1, "metacritic": 1 }
)

/**
 * '$and' take an array as arguments
 * These 2 queries return the same results
 */
db.movieDetails.find({
  $and: [
    {"tomato.meter": {$gt: 95}},
    {"metacritic": {$gt: 88}}
  ]}, { _id: 0, title: 1, "tomato.meter": 1, "metacritic": 1 }
)

db.movieDetails.find({"tomato.meter": {$gt: 95},
  "metacritic": {$gt: 88}},
  { _id: 0, title: 1, "tomato.meter": 1, "metacritic": 1 }
)

/**
 * '$and' is useful if you want to be more specific.
 * Find all documents where the field 'metacritic' exists; and has a value no equal to 'null'
 */

db.movieDetails.find({
  $and: [
    {"metacritic": {$ne: null}},
    {"metacritic": {$exists: true}}
  ]}, { _id: 0, title: 1, "tomato.meter": 1, "metacritic": 1 }
)

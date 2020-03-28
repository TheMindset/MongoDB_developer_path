/**
 * Find the fields which has a "rated" value equal to "PG" and has "awards.nominations" equal to 10
 */
db.movieDetails.find({"rated": "PG", "awards.nominations": {$eq:10}}).count()


/**
 * Find the fields wich has the "writers" values are equal in *order* to "Ethan Coen" and "Joel Coen"
 */
db.movieDetails.find({"writers": ["Ethan Coen", "Joel Coen"]}).count()


/**
 * Find the fields wich has the "writers" in the index 0 (the writers field has an array as value)
 * equal to "Ethan Coen"
 */
db.movieDetails.find({"writers.0": "Ethan Coen"}).count()


/**
 * exclude or include fields
 * "find()" permit second parameter: 
 *    the fiels you want exclude (value = 0) or include (value = 1)
 */
db.movieDetails.find({"writers.0": "Ethan Coen"}, {"title": 0, _id: 1}).count()

/**
 * '$exists: true' check if the field exists
 * '$exists: false' check if the field do not exists
 */
db.movieDetails.find({ rated: {$exists: true}})

/**
 * '$type: "int"' check if the field matches with then 'integer' type.
 * '$type: "double"' check if the field matches with then 'double' type.
 */
db.movieDetails.find({ rated: {$type: "int"}})


/**
 * **WARNING**
 * Ici la requête va aller chercher tous les documents où le 'field' 'director' est null ou n'éxiste pas.
 * Faire attention!!
 */
db.movieDetails.find({ director: null})
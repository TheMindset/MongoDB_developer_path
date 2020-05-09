/**
 * lookup()
 * Permet un left "outer joins" entre deux documents d'une même database
 * {
      $lookup: {
        from: <collection to join>,
        localField: <field from the input documents>,
        foreignField: <field from the documents of the "from" collection>,
        as: <output array field>
      }
    }
 */

//Exemple.

db.books.aggregate([
  { 
    $lookup: {
      // dans quel "collection chercher ?"
      from: "authors",
      // Dans la collection actuel "books", quel field allons nous utiliser pour chercher ?
      localField: "authors",
      // Dans la collection "authors" quel field doit matcher avec les éléments présent dans "localField" ?
      foreignField: "_id",
      // une fois trouver je vais renvoyer un "array" qui s'appelle comment ?
      as: "creators"
    }
  }
])
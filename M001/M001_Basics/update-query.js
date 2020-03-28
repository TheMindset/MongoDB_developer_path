/**
 * '$set' => find and replace the value of specified field
 * Find the document wich has the "_id" equal to 100 and udpate the value of the "poster" field.
 * If the field do not exists create the field
 */
db.movieDetails.updateOne({
  _id: 100
}, {
  $set: {
    "poster": "http://ia.media-imdb.com/images/M/MV5BMTc2MTQ3MDA1Nl5BMl5anBnXkFtZT"
  }
})

/**
 * Find and udpate the field.
 * If the embedded document do not exists create it
 */
db.movieDetails.updateOne({
  _id: 100,
}, {
  $set: {
    "awards": {
      "wins": 8,
      "nominations": 24,
      "text": "Nominated for 3 Golden Globes. Another 8 wins & 14 nominations"
    }
  }
})

/**
 * "$inc"
 * Increment by the value the number of 'tomato.reviews' and 'tomato.userReviews'
 */
db.movieDetails.updateOne({
  title: "The Martien",
}, {
  $inc: {
    "tomato.reviews": 3,
    "tomato.userReviews": 25
  }
})

/**
 * 'reviews' has an array as value
 * insert in this array many document '$each'
 */

db.movieDetails.updateOne({
  title: "The Martian",
}, {
  $push: {
    "reviews": {
      $each: [{
        rating: 0.5,
        date: ISODate("2016-01-12T07:00:00Z"),
        reviewer: "Yaabo A.",
        text: "RRRR EEEEE"
      }, {
        rating: 0.5,
        date: ISODate("2016-01-12T07:00:00Z"),
        reviewer: "Yabo B.",
        text: "RRRR EEEEE"
      }, {
        rating: 0.5,
        date: ISODate("2016-01-12T07:00:00Z"),
        reviewer: "Yabo C.",
        text: "RRRR EEEEE"
      }, {
        rating: 0.5,
        date: ISODate("2016-01-12T07:00:00Z"),
        reviewer: "Yabo D.",
        text: "RRRR EEEEE"
      }]
    }
  }
})

/**
 * '$unset' delete a particular field
 * Find all field has null value and remove these fields
db.movieDetails.updateMany({
  "rated": null,
}, {
  $unset: {
    "rated": ""
  }
})

/**
 * 'upsert' if there is no document that matches the filter then create this document.
 * With the specified fields.
 */
const detail = {
  imdb: {
    id: 1220,
    link: "http://ia.media-imdb.com/images/M/MV5BMTc2MTQ3MDA1Nl5BMl5anBnXkFtZT"
  }
}

db.movieDetails.updateOne({
  // matching the filter
  "imdb.id": detail.imdb.id
}, {
  // add the imdb document
  $set: detail
}, {
  // if there is no document that matches the filter then return a new document.
  upsert: true
})


/**
 * 'replaceOne' au contraire de 'updateOne'
 *  remplace le document par un nouveau.
 *  alors que updateOne permet de changer un/des champs spécifiques de un seul document
 */
let filter = { title: "House, M.D., Season Four: New Beginnings" }

let doc = db.movieDetails.findOne(filter)

doc.poster
doc.poster = "https://imdb.com/title/tt1329164/mediaviewer..."

doc.genres
doc.genres.push("TV Series")

db.movieDetails.replaceOne(filter, doc)

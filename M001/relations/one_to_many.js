// Use Embedded relation

db.questionsThreads.insertOne({
  creator: "Guillaume",
  question: "Are you good ?",
  answers: [
    { text: "I'm fine" },
    { text: "Not soo bad" }
  ]
})

// Use Refences 

db.cities.insertOne({
  _id: ObjectId("sdasdazd"),
  name: "Paris",
  coordinates: { lat: 44, long: 47 }
})

db.citizens.insertMany([
  { name: "Guillaume", cityID: ObjectId("sdasdazd") },
  { name: "Guigui", cityID: ObjectId("sdasdazd") },
  { name: "Hola", cityID: ObjectId("sdasdazd") }
])
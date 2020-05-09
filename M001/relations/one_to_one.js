// Use Embedded relation

db.patients.insertOne({ _id: ObjectId("45dsggrreffzd"), name: "Hola", diseaseSummary: "summary-hola-1" })

// Use Refences 

db.patients.insertOne({ _id: ObjectId("hasss"), name: "Hola" })

db.diseaseSummary.insertOne({
  _id: ObjectId("sdasdazd"),
  diseaseSummary: "summary-hola-1",
  patientsId: ObjectId("hasss")
})


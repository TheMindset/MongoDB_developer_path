// Use Embedded relation

db.products.insertMany([
  { _id: ObjectID("product1"), title: "A book", price: 7.99, quantity: 1000 },
  { _id: ObjectID("product2"), title: "A phone", price: 777.99, quantity: 500 }
])

db.customers.insertMany([
  { name: "Guillaume", orders: [
    { title: "A book", price: 7.99, quantity: 2 },
    { title: "A phone", price: 777.99, quantity: 1 }
    ] 
  }
])

// Use Refences 

db.products.insertMany([
  { _id: ObjectID("product1"), title: "A book", price: 7.99, quantity: 1000 },
  { _id: ObjectID("product2"), title: "A phone", price: 777.99, quantity: 500 }
])

db.customers.insertMany([
  { name: "Guillaume", orders: [
    ObjectID("product1"),
    ObjectID("product2")
    ] 
  }
])

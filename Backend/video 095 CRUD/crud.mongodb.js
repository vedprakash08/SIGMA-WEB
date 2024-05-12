use('cruddb')

console.log(db)

db.createCollection("courses")
//CREATE
// db.courses.insertOne({
//     name : "Harry course",
//     price: 443,
//     assignment: 13,
//     projects: 23
// })

// db.courses.insertMany([
//     {
//       "name": "Harry course 1",
//       "price": 443,
//       "assignment": 13,
//       "projects": 23
//     },
//     {
//       "name": "Harry course 2",
//       "price": 325,
//       "assignment": 9,
//       "projects": 17
//     },
//     {
//       "name": "Harry course 3",
//       "price": 510,
//       "assignment": 18,
//       "projects": 30
//     },
//     {
//       "name": "Harry course 4",
//       "price": 275,
//       "assignment": 7,
//       "projects": 14
//     },
//     {
//       "name": "Harry course 5",
//       "price": 390,
//       "assignment": 11,
//       "projects": 20
//     },
//     {
//       "name": "Harry course 6",
//       "price": 480,
//       "assignment": 15,
//       "projects": 25
//     },
//     {
//       "name": "Harry course 7",
//       "price": 370,
//       "assignment": 10,
//       "projects": 18
//     },
//     {
//       "name": "Harry course 8",
//       "price": 420,
//       "assignment": 12,
//       "projects": 22
//     },
//     {
//       "name": "Harry course 9",
//       "price": 300,
//       "assignment": 8,
//       "projects": 16
//     },
//     {
//       "name": "Harry course 10",
//       "price": 455,
//       "assignment": 14,
//       "projects": 24
//     }
//   ]
//   )

//READ
// let a = db.courses.find({price: 420})
// console.log(a.count())
// console.log(a.toArray()) 

//UPDATE
db.courses.updateOne({price: 420},{$set:{price:100}})
db.courses.updateMany({price: 420},{$set:{price:1000}})


//DELETE
db.courses.deleteOne({price:100})
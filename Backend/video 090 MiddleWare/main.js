const express = require('express')
const app = express()
const port = 3000
const fs = require("fs")
const blog = require('./routes/blog')
// buil in middleware
// app.use(express.static("public"))

app.use('/blog',blog)

//middleware1-> logger for application
app.use((req,res,next)=>{

    console.log(req.headers)
    req.ved="I am ved"
    // console.log("middleware1")
    fs.appendFileSync("logs.txt",`${Date.now()} is a ${req.method}\n`)
    console.log(`${Date.now()} is a ${req.method}`)
    // res.send("Hacked by middlleware 1")
    next();
})

app.use((req,res,next)=>{
    console.log("middleware2")
    next();
})

app.get('/', (req, res) => {
  res.send('Hello World! '+ req.ved)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
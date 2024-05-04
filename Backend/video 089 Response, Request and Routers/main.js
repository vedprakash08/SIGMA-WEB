const express = require('express')
const blog = require('./route/blog')
const info = require('./route/info')

const app = express()
const port = 3000

app.use(express.static("public"))
app.use('/blog', blog)
app.use('/info', info)
// app.get('/:slug', (req, res) => {
//     console.log(req.query)
//     console.log(req.params)
//   res.send(`Hello World vipin! ${req.params.slug}`)
// })

app.get('/', (req,res)=>{
    res.send('Hello word from get request')
})
app.post('/', (req,res)=>{
    console.log("From post request")
    res.send('Hello word from post request')
})
app.put('/', (req,res)=>{
    console.log("From put request")
    res.send('Hello word from put request')
})
app.delete('/', (req,res)=>{
    console.log("From delete request")
    res.send('Hello word from delete request')
})


app.get('/index', (req,res)=>{
    res.sendFile('templates/index.html', {root: __dirname})
})

app.get('/api', (req,res)=>{
    res.json({a:1,b:2,c:3, name : ["vipin"]})
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
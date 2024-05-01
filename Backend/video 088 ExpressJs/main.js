const express = require('express')
const app = express()
const port = 3000


//to public your file
// app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Hello World2345!')
})
app.get('/user', (req, res) => {
  res.send('Hello USer kaisa hai!')
})
app.get('/contact', (req, res) => {
  res.send('koi dikkat ho to batana mujhe!')
})
app.get('/about', (req, res) => {
  res.send('About me!')
})
app.get('/blog', (req, res) => {
  res.send('About bloggindg!')
})
app.get('/blog/:slug', (req, res) => {
    // URL:: http://localhost:3000/blog/vipin?mode=dark?regin=in
    console.log(req.params);// will output { slug: 'vipin' },
    console.log(req.query); // will output { mode: 'dark?regin=in' }
    res.send(`About bloggindg! ${req.params.slug}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
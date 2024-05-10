const express = require('express')
const app = express()
const port = 3000
// https://github.com/mde/ejs/wiki/Using-EJS-with-Express
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    let siteName = "Adidas"
    let searchText = "Search Now"
    let arr = ["hey",45,"vipin",456]
    // res.sendFile('templates/index.html',{root: __dirname})
    res.render("index",{siteName: siteName, searchText: searchText,arr})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
const express = require('express')
const router = express.Router()


// define the home page route
router.get('/', (req, res) => {
  res.send('INFOrmation home page')
})
// define the about route
router.get('/about', (req, res) => {
  res.send('About the team of srijan')
})

router.get('/information/:slug', (req, res) => {
  res.send(`Information of the team member ${req.params.slug}`)
})

module.exports = router
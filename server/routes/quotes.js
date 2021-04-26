const express = require('express')

const db = require('../db/dbFuncs')

const router = express.Router()

router.get('/', (req, res) => {
  db.getQuotes()
  .then(quotes => {
    res.json(quotes)
  })
  .catch(err => {
    return "the error is: ", err.message
  })
})

router.get('/random', (req, res) => {
  db.getQuotes()
  .then(quotes => {
    const index = Math.floor(Math.random() * quotes.length)
    return res.json(quotes[index])
  })
})

module.exports = router

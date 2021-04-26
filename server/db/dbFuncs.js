 
const config = require('./knexfile').development
const connection = require('knex')(config)

function getQuotes (db = connection) {
  return db('quotes').select()
  .catch((err) => {
    console.log(err.message)
  })
}

module.exports = {
  getQuotes
}

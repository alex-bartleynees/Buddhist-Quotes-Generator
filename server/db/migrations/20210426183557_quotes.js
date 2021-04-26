
exports.up = function(knex) {
    return knex.schema.createTable('quotes', function (table) {
        table.increments('id').primary()
        table.string('text')
        table.integer('author')
      })
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('quotes')
};

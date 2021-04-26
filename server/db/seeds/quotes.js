
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('quotes').del()
    .then(function () {
      // Inserts seed entries
      return knex('quotes').insert([
        {id: 1, text: "Peace comes from within. Do not seek it without.", author:"Buddha" },
        {id: 2, text: "Work out your own salvation. Do not depend on others.", author:"Buddha" },
        {id: 3, text: "It is better to travel well than to arrive.", author:"Buddha" },
        {id: 4, text:  "The mind is everything. What you think you become.", author:"Buddha" },
        {id: 5, text:  "In separateness lies the world's great misery, in compassion lies the world's true strength.", author: "Buddha" },
        {id: 6, text:  "No one saves us but ourselves. No one can and no one may. We ourselves must walk the path.", author: "Buddha" },
        {id: 7, text:  "Holding on to anger is like grasping a hot coal with the intent of throwing it at someone else; you are the one who gets burned.", author: "Buddha" },
        {id: 8, text:  "True love is born from understanding.", author: "Buddha" },
        {id: 9, text:  "It is a man's own mind, not his enemy or foe, that lures him to evil ways", author: "Buddha" },
        {id: 10, text:  "Doubt everything. Find your own light.", author:"Buddha" },
      ]);
    });
  };
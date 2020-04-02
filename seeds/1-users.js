
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, name: 'Laniyuk', pic_link: '../images/ash.jpg'},
        {id: 2, name: 'Tom', pic_link: '../images/ash.jpg'},
        {id: 3, name: 'Richard', pic_link: '../images/ash.jpg'},
        {id: 4, name: 'Vincent', pic_link: '../images/ash.jpg'}
      ]);
    });
};

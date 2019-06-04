
exports.seed = function( knex , Promise ) {
  return knex( 'guardians' ).del()
    .then(function () {
      return knex( 'guardians' ).insert([
        { 
          name: 'StarLord',
          appearence: 'Human',
          weapon: 'Pistols & Rocket Boots'
        },
        { 
          name: 'Rocket',
          appearence: 'Racoon',
          weapon: 'Big Guns'
        }
      ]);
    });
};

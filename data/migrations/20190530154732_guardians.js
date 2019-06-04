
exports.up = function ( knex , Promise ) {
    return knex.schema.createTable( 'guardians' , tbl => {
        tbl.increments();
        tbl.string( 'name' , 255 ).notNullable();
        tbl.string( 'appearence' ).notNullable();
        tbl.string( 'weapon' ).notNullable();
        tbl.timestamps( true , true );
    });
};

exports.down = function ( knex , Promise ) {
    return knex.schema.dropTableIfExists( 'guardians' );
};

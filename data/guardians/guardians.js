
const db = require("../db.js");

module.exports = {
  insert,
  remove,
  getAll,
};

async function insert( guardian ) {
  const [id] = await db( "guardians" ).insert( guardian , "id" );

  return db( "guardians" )
    .where({ id })
    .first();
}

function remove(id) {
  return db( "guardians" )
  .where( "id" , Number(id) )
  .del()
}

function getAll() {
  return db( "guardians" );
}
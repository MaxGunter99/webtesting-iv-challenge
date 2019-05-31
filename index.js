
//IMPORTS
require('dotenv').config();
const server = require( './api/server' );

//SERVER SETUP
const PORT = 4242;
server.listen( PORT , () => {
   console.log( `\n Server is up on http://localhost:${PORT} \n` )
});
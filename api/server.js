
//IMPORTS
const express = require( 'express' );
const server = express();

//IMPORT THE GUARDIANS OF THE GALAXY
const guardians = require( '../data/guardians/guardians' );

//MIDDLEWARE
server.use( express.json());

//HOME PAGE
server.get( '/' , async ( req , res ) => {
    res.status( 200 ).json({ message: 'GUARDIANS OF THE GALAXY!' })
});

//GET ROUTE
server.get( '/guardians' , async ( req , res ) => {
    const rows = await guardians.getAll();
    res.status( 200 ).json( rows )
});

//ADD ROUTE
server.post( '/guardians' , ( req , res ) => {
    guardians.insert( req.body )
    res.status( 201 ).json({ guardian: req.body })
});

//DELETE ROUTE
server.delete('/guardians/:id', async ( req, res )  => {
    const { id } = req.params;
    try {
        const ind = await guardians.remove( id ).then( ind => {
            res.status( 200 ).json({ guardianId: ind })
        });
        {
            res.status( 404 ).end({ message: 'Guardian not found'})
        } res.json( ind );
    } catch ( err ) {
        res.status( 500 ).json({ message: 'Server Error Deleting' });
    }
});

//EXPORTS
module.exports = server;
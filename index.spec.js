
//IMPORTS
const request = require( 'supertest' );
const server = require( './api/server' );

describe( 'GET /guardians' , () => {
    it ( 'Should return a 200 status' , async () => {
        const response = await request( server ).get( '/guardians' )
        expect( response.status ).toBe( 200 )
    });
});
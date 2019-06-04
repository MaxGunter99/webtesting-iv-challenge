
const request = require("supertest");
const db = require( '../db' );
const server = require("../../api/server");
beforeEach( async () => {
    await db('guardians').truncate();
});

describe('DELETE /guardians/:id', () => {
    it('should remove the provided Guardian from db', async () => {
        await db('guardians').insert({
            name: "Nebula",
            appearence: "Cyborg",
            weapon: "Batteries Included"
        });

        const res = await request(server).del('/guardians/1');
        expect( res.status ).toBe( 200 )
    })
});
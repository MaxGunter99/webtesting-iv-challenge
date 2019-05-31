
const request = require("supertest");
const db = require( '../data/db' );
const server = require("./server");
const helper = require( '../data/guardians/guardians' );
beforeEach( async () => {
    await db('guardians').truncate();
});

describe("server.js", () => {
    it("should set the testing env", () => {
        expect(process.env.DB_ENV).toBe("testing");
    });

    it("should return 200", async () => {
        const res = await request(server).get("/");

        expect(res.status).toBe(200);
    });

    it("should return JSON", async () => {
        const res = await request(server).get("/");

        expect(res.type).toBe("application/json");
    })

    it('should return { message: "GUARDIANS OF THE GALAXY!" }', async () => {
        const res = await request(server).get("/");

        expect(res.body).toEqual({ message: "GUARDIANS OF THE GALAXY!" });
    })

    it ( 'should return list of guardians are JSON format', async () => {
        const res = await request( server ).get( '/guardians' );
        expect( res.type ).toBe("application/json")
    })

});

describe('POST /guardians', () => {
    it('should return length of 1', async () => {

        const guardians = await helper.insert({
            name: "Nebula",
            appearence: "Cyborg",
            weapon: "Batteries Included"
        });

        expect( guardians.id ).toBe(1);
    });

    it('should return 201 if successfully created', async () => {
        const res = await request( server ).post( '/guardians' , {
            name: "Nebula",
            appearence: "Cyborg",
            weapon: "Batteries Included"
        })
        expect( res.status ).toBe(201)
    });

});

describe('DELETE /guardians/:id', () => {
    it('should remove the provided Guardian from db', async () => {
        await db('guardians').insert({
            name: "Nebula",
            appearence: "Cyborg",
            weapon: "Batteries Included"
        });

        const res = await request(server).delete('/guardians/1');
        expect( res.status ).toBe( 200 )
    })
});
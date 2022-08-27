const {postgres} = require(".")
const jestConfig = require("../../../../jest.config")

jest.mock("../logger")
jest.mock("pg")

beforeEach(()=>{
    jest.clearAllMocks();
})

describe("DB", ()=>{
    describe("postgres", ()=>{
        test("Calls connect when no database connection is found", async ()=>{
            postgres.isConnected = false;

            await postgres.connect();
            expect(postgres.isConnected).toBe(true)
            expect(postgres.client.connect).toHaveBeenCalled()

        })
        test("Doesn't call connect when database connection is found", async ()=>{
            postgres.isConnected = true;

            await postgres.connect();
            expect(postgres.isConnected).toBe(true)
            expect(postgres.client.connect).not.toHaveBeenCalled()
            
        })
        test("Calls close when no database connection is found", async ()=>{
            postgres.isConnected = true;

            await postgres.close();
            expect(postgres.isConnected).toBe(false)
            expect(postgres.client.end).toHaveBeenCalled()
            
        })
        test(" Doesn't Calls connect when no database connection is found", async ()=>{
            postgres.isConnected = false;

            await postgres.close();
            expect(postgres.isConnected).toBe(false)
            expect(postgres.client.end).not.toHaveBeenCalled()
            
        })
    })
})
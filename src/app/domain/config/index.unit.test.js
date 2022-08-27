const { validateEnvProvidedConfig } = require(".")
const jestConfig = require("../../../../jest.config")

jest.mock("../logger")

beforeEach(() =>{
    jest.clearAllMocks();
})


describe("Config,", ()=>{
    describe("validateEnvProvidedConfig", ()=>{
        test("Basic Test to show off jest", ()=>{
            const process = global.process
            global.process ={
                exit: jest.fn(),
                env:{

                }
            }

            validateEnvProvidedConfig();
            expect(global.process.exit).toHaveBeenCalledWith(1)
            
            global.process = process;

        })
        test("Returns undefuned  when no missing variables are found", ()=>{
            const process = global.process
            global.process ={
                exit: jest.fn(),
                env:{
                    ENV: "dev",
                    EXPRESS_PORT:"3333" ,
                    SECRET: "secret",
                    API_URL:"http://localhost:3333",
                    POSTGRES_DATABASE:"CarraraPets_dbo",
                    POSTGRES_USER:"postgres",
                    POSTGRES_PASSWORD:"HACKERNAOENTRA",
                    POSTGRES_HOST:"localhost",
                    POSTGRES_PORT:"5432"

                }
            }

            const res = validateEnvProvidedConfig();

            expect(global.process.exit).not.toHaveBeenCalledWith();
            expect(res).toBe(undefined);

            global.process = process;
            

        })
    })
})
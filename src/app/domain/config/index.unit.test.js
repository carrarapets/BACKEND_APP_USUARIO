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
                    EXPRESS_PORT:"5003" ,
                    SECRET: "secret",
                    API_URL:"postgresql://postgres:HACKERNAOENTRA@localhost:5003/Carrarapets_dbo",
                    POSTGRES_DATABASE:"Carrarapets_dbo",
                    POSTGRES_USER:"postgres",
                    POSTGRES_PASSWORD:"HACKERNAOENTRA",
                    POSTGRES_HOST:"localhost",
                    POSTGRES_PORT:"5003"

                }
            }

            const res = validateEnvProvidedConfig();

            expect(global.process.exit).not.toHaveBeenCalledWith();
            expect(res).toBe(undefined);

            global.process = process;
            

        })
    })
})
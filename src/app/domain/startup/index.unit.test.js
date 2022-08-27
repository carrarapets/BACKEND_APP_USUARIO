const { AppStarter } = require(".")



jest.mock("../config")
jest.mock("../http-server")

beforeEach(() =>{
    jest.clearAllMocks();
})


describe("Startup,", ()=>{
    describe("AppStarter", ()=>{
        test("when start service is called,validateEnvProvidedConfig is returning undefined", ()=>{
            const res = AppStarter.startServices();


            expect(require("../config").validateEnvProvidedConfig).toHaveBeenCalled()
            expect(res).toBe(undefined)


        })
        
    })
})
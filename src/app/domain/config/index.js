const dotenv =  require("dotenv")
const {logger} = require("../logger");
dotenv.config()

const config = {
    ENV: "PRODUCTION",
    EXPRESS_PORT:5432,
    SECRET: "SECRET",
    API_URL: "postgres://hhkaraiurohita:92aa7f1eb10c78458370cb8ee5256f28a2732f3a57f79475a85e7cc25a3a0fa6@ec2-34-200-205-45.compute-1.amazonaws.com:5432/d3q042tprckimk",
    POSTGRES_DATABASE: "d3q042tprckimk",
    POSTGRES_USER: "hhkaraiurohita",
    POSTGRES_PASSWORD: "92aa7f1eb10c78458370cb8ee5256f28a2732f3a57f79475a85e7cc25a3a0fa6",
    POSTGRES_HOST: "ec2-34-200-205-45.compute-1.amazonaws.com",
    POSTGRES_PORT: 5432

    
}


function validateEnvProvidedConfig(){
    const requiredConfigVaribles =[
        "ENV",
        "EXPRESS_PORT",
        "SECRET",
        "API_URL",
        "POSTGRES_DATABASE",
        "POSTGRES_USER",
        "POSTGRES_PASSWORD",
        "POSTGRES_HOST",
         "POSTGRES_PORT"
    ];

    const missingConfigVaribles= [];

    for(requiredConfigVarible of requiredConfigVaribles){
        if(!process.env[requiredConfigVarible]){
            missingConfigVaribles.push(requiredConfigVarible)
        }

    }

    
    if(missingConfigVaribles.length !== 0){
        logger.error("MISSING ENVIROMENT VARIABLE IN CONFIG")

        for (const missingConfigVarible of missingConfigVaribles) {
          logger.error('Missing Variable: ${missingConfigVarible}')
            
        }

        process.exit(1);

    }


}
module.exports = {
    config,
    validateEnvProvidedConfig
        
}
const dotenv =  require("dotenv")
const {logger} = require("../logger");
dotenv.config()

const config = {
    ENV: process.env.ENV,
    EXPRESS_PORT:parseInt(process.env.EXPRESS_PORT, 10)  ,
    SECRET: process.env.SECRET,
    API_URL: process.env.API_URL,
    POSTGRES_DATABASE: process.env.POSTGRES_DATABASE,
    POSTGRES_USER: process.env.POSTGRES_USER,
    POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD,
    POSTGRES_HOST: process.env.POSTGRES_HOST,
    POSTGRES_PORT: process.env.POSTGRES_PORT

    
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
const { validateEnvProvidedConfig } = require("../config");
const { postgres } = require("../db");
const { AppHttpServer } = require("../http-server");
const {logger} = require("../logger");



class AppStarter{
    static startServices(){

        logger.info("Preparing enviroment variables")


        validateEnvProvidedConfig();

        logger.info("Starting services for application")


        postgres.connect()
        AppHttpServer.start()

        logger.info("Service Starting Application" )
    }
}

module.exports = {
    AppStarter
}
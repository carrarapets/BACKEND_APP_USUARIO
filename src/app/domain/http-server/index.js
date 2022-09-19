const express = require("express")
const cors = require("cors")
const {config} = require("../config")
const {logger} = require("../logger");
const pg = require('pg');
const rotasUsuario = require("../routes/user");
const dotenv = require("dotenv");
const { response } = require("express");
const port = 8000 || config.EXPRESS_PORT;
dotenv.config();



class AppHttpServerFactory{


    start(){

        return new Promise((resolve)=>{
            const app = express();

            app.use(cors())
            app.use(express.json())
            app.use(rotasUsuario)
            
            
            app.listen(port, ()=> {
               logger.info('HTTP SERVER STARTED ON PORT  '+(this.port))


                resolve()
            })
        })

        
    }
}

module.exports ={
    AppHttpServer: new AppHttpServerFactory()
}
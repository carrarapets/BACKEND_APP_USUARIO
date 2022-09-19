const express = require("express")
const cors = require("cors")
const {config} = require("../config")
const {logger} = require("../logger");
const pg = require('pg');
const rotasUsuario = require("../routes/user");
const dotenv = require("dotenv");
const { response } = require("express");
dotenv.config();
const PORT = process.env.PORT || 3000;





class AppHttpServerFactory{

    start(){

        return new Promise((resolve)=>{
            const app = express();

            app.use(cors())
            app.use(express.json())
            app.use(rotasUsuario)
            
            
            app.listen(PORT, ()=> {
               logger.info('HTTP SERVER STARTED ON PORT  '+(this.PORT))
                resolve()
            })
        })

        
    }
}

module.exports ={
    AppHttpServer: new AppHttpServerFactory()
}
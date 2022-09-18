const {config} = require("../config")
const {Client} = require("pg")
const {logger} = require("../logger")
const pg = require('pg');
require('dotenv').config();
//const {Client} = require("prisma")

const isProduction = process.env.NODE_ENV === 'production';
const connectionString = `postgresql://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@${process.env.POSTGRES_HOST}:${process.env.POSTGRES_PORT}/${process.env.POSTGRES_DATABASE}`;


const pool = new pg.Pool({
    connectionString: isProduction ? process.env.DATABASE_URL : connectionString,
    ssl: isProduction,
  }); 

  pool.on('connect', () => {
    console.log('Teamwork Database connected successfully!');
  });
class PostgresDBFactory{
    client;
    isConnected = false;

    constructor(){
        this.client = new Client({
            user: config.POSTGRES_USER,
            database: config.POSTGRES_DATABASE,
            password: config.POSTGRES_PASSWORD,
            port: config.POSTGRES_PORT,
            host: config.POSTGRES_HOST
        })
    }

    async connect(){
        if(!this.isConnected){
            await this.client.connect();
            this.isConnected = true;
            logger.info("Called with database is ok" )

        }
    }

    async close(){
        if(this.isConnected){
            await this.client.end();
            this.isConnected = false;
            logger.info("Called with database is crashed" )
            
        }
    }
}

module.exports ={
    postgres: new PostgresDBFactory() 
}
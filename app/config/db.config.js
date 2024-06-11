module.exports = {
  HOST: "testdb.c1k0giykwp31.eu-north-1.rds.amazonaws.com",  //localhost if we have db in local system
  USER: "root",         
  PASSWORD: "12345678",  
  DB: "testdb",
  dialect: "mysql",    //as we use MySQL DB - purpose to transform our query based on out DB
  pool: {       //connection pools
    max: 5,            // Max connections to be opened- next connection should wait
    min: 0,            // min connection for the db
    acquire: 30000,   //  While openings connection it should take 30000ms above that connection will be closed
    idle: 10000       //one connection can wait till 10000ms then connection will be closed
  }
};

//import 
const { pool } = require('pg');
const dotenv = require('dotenv');

//Set config of db 
const db_config = {
    connectionString:proccess.env.DATABASE_URL,

  // all valid client config options are also valid here
  // in addition here are the pool specific configuration parameters:
  // number of milliseconds to wait before timing out when connecting a new client
  // by default this is 0 which means no timeout
  connectionTimeoutMillis: 300,
  // number of milliseconds a client must sit idle in the pool and not be checked out
  // before it is disconnected from the backend and discarded
  idleTimeoutMillis?: 200,
  // maximum number of clients the pool should contain
  max?: 20,
  
}
  //pool emit the connect event 
  const pool = new pool(db_config);
pool.on('connect', client => {
    console.log('database is connected');
  });
  //pool emit the remove event 
  pool.on('remove', client => {
    console.log('database is removed');
  });

module.exports = pool;
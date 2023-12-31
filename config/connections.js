const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

// database 


if(process.env.JAWSDB_URL){
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
      process.env.DB_NAME,
      process.env.DB_USER,
      process.env.DB_PASSWORD,
      {
          host: "localhost",
          dialect: "mysql",
          port: 8888
      }
  );
}
module.exports = sequelize;


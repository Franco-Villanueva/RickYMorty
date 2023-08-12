const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '..', '.env') });
const { Sequelize } = require('sequelize');
const  userModel = require('./models/User')
const characterModel = require('./models/Character')
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

// EJERCICIO 03
// A la instancia de Sequelize le falta la URL de conexión. ¡Agrégala!
// Recuerda pasarle la información de tu archivo '.env'.
// URL ----> postgres://DB_USER:DB_PASSWORD@DB_HOST/rickandmorty
const sequelize = new Sequelize(
   "rickandmorty",
   DB_USER,
   DB_PASSWORD,
   // URL
   { logging: false, native: false, host:DB_HOST, dialect:"postgres" }
);

// async function testConnection(){
//    try {
//       await sequelize.authenticate()
//       console.log('Conexion correcta');
//    } catch (error) {
//       console.log('Conexion fallida');
//    }
// }
// testConnection()

// EJERCICIO 05
// Debajo de este comentario puedes ejecutar la función de los modelos.

//
   userModel(sequelize)
   characterModel(sequelize)
//

// Ejercicio 06
// ¡Relaciona tus modelos aquí abajo!

const { User, Character } = sequelize.models;

User.belongsToMany(Character,{through:"user_favorites"})
Character.belongsToMany(User,{through:"user_favorites"})


module.exports = {
   User,
   Character,
   conn: sequelize,
};

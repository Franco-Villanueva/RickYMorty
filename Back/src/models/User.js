const { DataTypes, UUIDV4 } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('User', {
      id:{
         type: DataTypes.UUID, //TIPO DE DATO : HEXADECIMALES
         allowNull:false,
         primaryKey:true,
         defaultValue: UUIDV4 //GENERAR HEXADECIMAL
      },
      email:{
         type:DataTypes.STRING,
         allowNull:false,
         isEmanil:true,
         unique:true
      },
      password:{
         type: DataTypes.STRING,
         allowNull: false
      }
   }, { timestamps: false });
};

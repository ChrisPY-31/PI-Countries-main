const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Country', {
    cca3: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image:{
      type:DataTypes.STRING,
      allowNull: false,

    },
    continente:{
      type:DataTypes.STRING,
      allowNull:false
    },
    capital:{
      type:DataTypes.STRING,
      allowNull:false
    },
    subregion:{
      type:DataTypes.STRING,
      allowNull:false
    },
    area:{
      type:DataTypes.INTEGER,
      allowNull:false
    },
    region:{
      type:DataTypes.STRING,
      allowNull:false
    },
    poblation:{
      type:DataTypes.INTEGER,
      allowNull:false
    }
  },{timestamps:false});
};

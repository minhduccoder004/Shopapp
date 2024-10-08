'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Catagory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Catagory.hasMany(models.Product, {
        foreignKey: 'catagory_id'
      });
    }
  }
  Catagory.init({
    name: DataTypes.STRING,
    image: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Catagory',
    tableName: 'catagories',
    underscored: true
  });
  return Catagory;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.UserAddress, {
        foreignKey: 'userId',
        as: 'userAddress',
        //onDelete: 'CASCADE',
      });
    }
  };
  User.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,        
      allowNull: false,
    },
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      unique: true   
    },
    role: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    underscored: true,
    sequelize,
    modelName: 'User',
    tableName: 'Users'
  });
  return User;
};
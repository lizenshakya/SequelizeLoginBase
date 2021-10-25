'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserAddress extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      UserAddress.belongsTo(models.User, {
        foreignKey: 'id',
        as: 'user',
        //onDelete: 'CASCADE',
      })
    }
  };
  UserAddress.init({
    userAddressId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,        
      allowNull: false,
    },
    country: DataTypes.STRING,
    address1: DataTypes.STRING,
    address2: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zone: DataTypes.STRING,
    provision: DataTypes.STRING,
    longitude: DataTypes.STRING,
    latitude: DataTypes.STRING,
    userId: DataTypes.STRING
  }, {
    underscored: true,
    sequelize,
    modelName: 'UserAddress',
    tableName: 'UserAddress'
  });
  return UserAddress;
};
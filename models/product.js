'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Product.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,        
      allowNull: false,
    },
    product_name: DataTypes.STRING,
    product_price: DataTypes.DECIMAL(10,2),
    quantity: DataTypes.INTEGER,
    is_deleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
  }, {
    sequelize,
    modelName: 'Product',
    tableName: 'Product'
  });
  return Product;
};
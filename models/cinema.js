'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cinema = sequelize.define('Cinema', {
    name: DataTypes.STRING,
    province: DataTypes.STRING,
    premiere: DataTypes.BOOLEAN
  }, {});
  Cinema.associate = function(models) {
    Cinema.belongsTo(models.Movie)
  };
  return Cinema;
};
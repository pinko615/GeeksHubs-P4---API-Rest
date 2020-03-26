'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cinema = sequelize.define('Cinema', {
    name: DataTypes.STRING,
    province: DataTypes.STRING,
    premiere: DataTypes.STRING
  }, {});
  Cinema.associate = function(models) {
    // associations can be defined here
    Cinema.hasMany(models.Movie)
  };
  return Cinema;
};
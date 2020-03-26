'use strict';
module.exports = (sequelize, DataTypes) => {
  const Movie = sequelize.define('Movie', {
    title: DataTypes.STRING,
    year: DataTypes.STRING,
    duration: DataTypes.STRING,
    language: DataTypes.STRING,
    country: DataTypes.STRING,
    date: DataTypes.STRING
  }, {});
  
  Movie.associate = function(models) {
    Movie.hasMany(models.Actor)
    Movie.belongsTo(models.Cinema)
  };
  return Movie;
};
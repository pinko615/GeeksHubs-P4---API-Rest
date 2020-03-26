'use strict';
module.exports = (sequelize, DataTypes) => {
  const Actor = sequelize.define('Actor', {
    name: DataTypes.STRING,
    surname: DataTypes.STRING,
    genre: DataTypes.STRING
  }, {});
  Actor.associate = function(models) {
    Actor.belongsTo(models.Movie)
  };
  return Actor;
};
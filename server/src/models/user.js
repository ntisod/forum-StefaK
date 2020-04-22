'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});
  User.associate = function(models) {
    // Doesn't change the user table at all but instead
    // establishes a two-way connection allowing us to write
    // queries that include our auth tokens with our users
    User.hasMany(models.AuthToken);
  };
  return User;
};
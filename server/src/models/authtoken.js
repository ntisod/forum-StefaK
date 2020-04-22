'use strict';
module.exports = (sequelize, DataTypes) => {
  const AuthToken = sequelize.define('AuthToken', {
    token: { 
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});
  // Set up the associations so that we can make
  // queries that include related objects
  AuthToken.associate = function(models) {
    AuthToken.belongsTo(models.User);
  };

  // Generates a 15-character string and associates
  // it with a user
  AuthToken.generate = async userId => {
    if (!userId) {
      throw new Error("AuthToken.generate requires a user id");
    }

    let token = "";

    const possibleCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
      'abcdefghijklmnopqrstuvwxyz0123456789';
    
    // Add 15 random characters from the possibleCharacters string
    // to the token string
    for (let i = 0; i < 15; i++) {
      token += possibleCharacters.charAt(
        Math.floor(Math.random() * possibleCharacters.length)
      );
    }

    return AuthToken.create({ token, userId});
  }

  return AuthToken;
};
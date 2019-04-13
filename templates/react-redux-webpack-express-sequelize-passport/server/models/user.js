/* eslint-disable */
const bcrypt = require('bcrypt-nodejs');

module.exports = function (sequelize, DataTypes) {
  let User = sequelize.define('user', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
        len: [4, 100],
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [3, 100],
      },
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [3, 100],
      },
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [7, 14],
      },
    },
    role: {
      type: DataTypes.INTEGER,
      validate: {
        isInt: true,
      },
    },
    last_login: {
      allowNull: true,
      type: DataTypes.INTEGER,
    },
    status: {
      type: DataTypes.ENUM,
      values: ['active', 'disabled', 'pending', 'inactive', 'deleted'],
      defaultValue:'active',
    },

  }, {
    hooks: {
      beforeCreate: (user) => {
        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync(user.password, salt);
      },
      beforeUpdate: (user) => {
        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync(user.password, salt);
      },
    },
  });
  User.prototype.comparePassword = function (password) {
    return bcrypt.compareSync(password, this.password);
  };

  return User;
};

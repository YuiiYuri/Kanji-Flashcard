// models/User.js

const { Sequelize, DataTypes } = require('sequelize');

// const sequelize = require('./config/database/db');
// const sequelize = require('C:\Users\pc\OneDrive - Hanoi University of Science and Technology\itss1jpdev\Kanji-Flashcard\config\database\db.js'); // Đảm bảo thay đổi đường dẫn tới file kết nối cơ sở dữ liệu

const sequelize = new Sequelize('8yearcard', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});


const User = sequelize.define('User', {
  user_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  role: {
    type: DataTypes.INTEGER,
    defaultValue: 1,
    allowNull: true,
  },
});

// Đồng bộ hóa model với cơ sở dữ liệu
User.sync();

module.exports = User;

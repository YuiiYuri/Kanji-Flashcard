// models/Word.js

const { Sequelize, DataTypes } = require('sequelize');
// const sequelize = require('../config/database/db'); // Đảm bảo thay đổi đường dẫn tới file kết nối cơ sở dữ liệu
const sequelize = new Sequelize('8yearcard', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
});
const Word = sequelize.define('Word', {
  word_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  mean: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING, // Điều này có thể phải thay đổi tùy thuộc vào cách bạn lưu trữ hình ảnh
    allowNull: true,
  },
  example: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
});

// Đồng bộ hóa model với cơ sở dữ liệu
Word.sync();

module.exports = Word;

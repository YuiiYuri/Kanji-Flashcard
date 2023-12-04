// models/Course.js

const { Sequelize, DataTypes } = require('sequelize');
// const sequelize = require('../config/database/db'); // Đảm bảo thay đổi đường dẫn tới file kết nối cơ sở dữ liệu
const sequelize = new Sequelize('8yearcard', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
  });
const Course = sequelize.define('Course', {
  course_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  image: {
    type: DataTypes.STRING, // Điều này có thể phải thay đổi tùy thuộc vào cách bạn lưu trữ hình ảnh
    allowNull: true,
  },
  author_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.fn('NOW'),
    allowNull: false,
  },
  is_public: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },
});

// Đồng bộ hóa model với cơ sở dữ liệu
Course.sync();

module.exports = Course;

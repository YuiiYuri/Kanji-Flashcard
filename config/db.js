// config/database/db.js

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('8yearcard', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  define: {
    timestamps: false, // Tắt tự động thêm createdAt và updatedAt cho mỗi bản ghi
  },
});

module.exports = sequelize;

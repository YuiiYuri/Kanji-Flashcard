// models/CourseWordItem.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('8yearcard', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
});

const CourseWordItem = sequelize.define('CourseWordItem', {
  course_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  word_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});
CourseWordItem.sync();
module.exports = CourseWordItem;

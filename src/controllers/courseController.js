const express = require('express');
const Course = require('../models/courseModel');

const courseRouter = express.Router();

// Route để nhận course_id và trả về thông tin về khóa học
const courseController = {
    getcourse: async (req, res) => {
    const course_id_to_find = req.params.course_id;
  
    try {
      const course = await Course.findOne({
        where: {
          course_id: course_id_to_find,
        },
      });
  
      if (course) {
        console.log('Khóa học được tìm thấy:', course.toJSON());
        res.json(course);
      } else {
        console.log('Không tìm thấy khóa học với course_id:', course_id_to_find);
        res.status(404).json({ error: 'Không tìm thấy khóa học với course_id được cung cấp.' });
      }
    } catch (error) {
      console.error('Lỗi khi tìm kiếm khóa học:', error);
      res.status(500).json({ error: 'Lỗi server.' });
    }
  },
  getallcourse: async (req, res) => {
    try {
      const courses = await Course.findAll();
  
      if (courses.length > 0) {
        console.log('Danh sách khóa học:', courses.map(course => course.toJSON()));
        res.json(courses);
      } else {
        console.log('Không có khóa học nào.');
        res.status(404).json({ error: 'Không có khóa học nào.' });
      }
    } catch (error) {
      console.error('Lỗi khi lấy danh sách khóa học:', error);
      res.status(500).json({ error: 'Lỗi server.' });
    }
  },
}

module.exports = courseController;
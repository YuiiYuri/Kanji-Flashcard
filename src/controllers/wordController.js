const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('8yearcard', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
});

const getWordRoute = express.Router();
const getWordInfoRoute = express.Router();
const Word = require('../models/wordModel');
const CourseWordItem = require('../models/courseworditemModel');
wordController = {
    getallwordfromcourse :(req, res) => {
        try {
            const { find_course_id } = req.params;
            CourseWordItem.findAll({
                attributes: ['word_id'],
                where: {
                    course_id: find_course_id,
                  },
            }).then(results => {
                    // Xử lý dữ liệu trả về, ví dụ lấy giá trị của word_id từ mỗi instance
                    const wordIds = results.map(result => result.word_id);
                    wordIds.forEach((element) => {
                        res.status(200).json( Word.findOne({
                            where: {
                                word_id: element,
                            },
                            }))
                    });
                })
                .catch(error => {
                    console.error('Lỗi truy vấn:', error);
                    });
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: 'Internal server error' });
        }
    },
    getword: (req, res) => {
        try {
          const { word_id } = req.params;
      
          // Thực hiện truy vấn SQL để lấy thông tin về từ dựa trên word_id
          const sql = 'SELECT * FROM word WHERE word_id = ?';
          db.query(sql, [word_id], (error, results) => {
            if (error) {
              console.error(error);
              res.status(500).json({ error: 'Internal server error' });
            } else {
              if (results.length === 0) {
                res.status(404).json({ error: 'Không tìm thấy từ' });
              } else {
                const wordInfo = results[0];
                res.status(200).json({ wordInfo });
              }
            }
          });
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: 'Internal server error' });
        }
    },
}

module.exports = wordController;
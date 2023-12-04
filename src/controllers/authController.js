const passport = require('passport');
const userModel = require('../models/userModel');
const bcrypt = require('bcrypt');

const authController = {
  login: passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true,
  }),

  register: async (req, res) => {
    try {
      const { username, password, name, email } = req.body;
      const newUser = await userModel.createUser({
        username: req.body.username,
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
      });
      res.redirect('/login'); 
    } catch (error) {
      console.error(error);
      res.redirect('/register');
    }
  },
};

module.exports = authController;

const express = require('express');
const passport = require('passport');
const session = require('express-session');
const authController = require('./src/controllers/authController');
const courseController = require('./src/controllers/courseController');
const wordController = require('./src/controllers/wordController');

const LocalStrategy = require('passport-local').Strategy; // Import LocalStrategy
const mysql = require('mysql2');
// const User = require('./src/models/userModel');
const Course = require('./src/models/courseModel');
const courseRouter = require('./src/controllers/courseController');
const app = express();
app.set('views', './src/resources/views'); // Replace 'path_to_views_directory' with the actual path

app.set('view engine', 'ejs');                                         

app.use(express.urlencoded({ extended: true }));
app.use(session({ secret: 'your-secret-key', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.get('/', (req, res) => {
  res.render('home', { user: req.user });
});

app.get('/login', (req, res) => {
  res.render('login');
});

app.get('/courses/:course_id', courseController.getcourse);
app.get('/courses', courseController.getallcourse);
app.post('/login', authController.login);

app.get('/register', (req, res) => {
  res.render('register');
});
app.get('/course/courseDetail/:course_id', wordController.getallwordfromcourse);

app.post('/register', authController.register);

app.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
passport.use(new LocalStrategy(async (username, password, done) => {
    try {
      const user = await userModel.findUserByUsername(username);
  
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
  
      const isPasswordValid = await bcrypt.compare(password, user.password);
  
      if (!isPasswordValid) {
        return done(null, false, { message: 'Incorrect password.' });
      }
  
      return done(null, user);
    } catch (error) {
      return done(error);
    }
  }));
  
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });
  
  passport.deserializeUser(async (id, done) => {
    try {
      const user = await userModel.findUserById(id);
      done(null, user);
    } catch (error) {
      done(error);
    }
  });
// const { Sequelize } = require('sequelize');

// const sequelize = new Sequelize('8yearcard', 'root', '', {
//   host: 'localhost',
//   dialect: 'mysql',
// });

// Kiểm tra kết nối
// try {
//   await sequelize.authenticate();
//   console.log('Connection to the database has been established successfully.');
// } catch (error) {
//   console.error('Unable to connect to the database:', error);
// }
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

mongoose.connect(process.env.MONGO_URI);

const app = express();
app.use(passport.initialize());
app.use(passport.session());

if (process.env.NODE_ENV === 'production') {
  // serve up production assets inside client/build folder
  app.use(express.static('client/build'));

  // serve up index.html file if it doesn't recognize the route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// Passport Configuration
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: '/auth/google/callback',
      proxy: true
    },
    (accessToken, refreshToken, profile, done) => {
      // check if user exists in DB
      // if exists, return existing user
      // else save user in db and return user
    }
  )
);

// Auth Routes
app.get('/auth/google', passport.authenticate('google'), {
  scope: ['profile', 'email']
});

app.get(
  '/auth/provider/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    res.redirect('/dashboard');
  }
);

app.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

// test route to see if user logged in
app.get('/current_user', (req, res) => {
  res.send(req.user);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);

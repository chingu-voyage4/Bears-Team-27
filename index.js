require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const User = require('./models/user');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

mongoose.connect(process.env.MONGO_URI);

const app = express();
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [process.env.COOKIE_SECRET]
  })
);
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
    async (accessToken, refreshToken, profile, done) => {
      // check if user exists in DB
      // if exists, return existing user
      // else save user in db and return user
      // check if user exists in DB
      const existingUser = await User.findOne({ googleId: profile.id });

      if (existingUser) {
        // already have record with given profile ID
        done(null, existingUser); // error object, user
      } else {
        // make new record
        const user = await new User({ googleId: profile.id }).save();
        done(null, user);
      }
    }
  )
);

// Passport Session
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// restores to req.user
passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});

// Auth Routes
app.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email']
  })
);

app.get(
  '/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    res.redirect('/current_user');
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

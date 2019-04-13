const JwtStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');

// load up the user model
const db = require('../models');
const settings = require('./settings.js'); // get settings file

function passports(passport) {
  const opts = {};
  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt');
  opts.secretOrKey = settings.secret;
  return passport.use(new JwtStrategy(opts, ((jwtPayload, done) => db.User.findOne({ where: { id: jwtPayload.id } })
    .then((user) => {
      if (user) {
        return done(null, user);
      }
      return done(null, false);
    })
    .catch(err => done(err, false)))));
}
module.exports.passports = passports;

const router = require('express').Router();
const passport = require('passport');
const bodyParser = require('body-parser').json();
const userController = require('../../controllers/user');
require('../../config/passport').passports(passport);

// Matches with "/api/user"
router.route('/')
  .get(userController.listUsers)
  .post(bodyParser, userController.createUser);
// Matches with "/api/user/:id"
router
  .route('/:id')
  .get(passport.authenticate('jwt', { session: false }), userController.listUser)
  .put(bodyParser, passport.authenticate('jwt', { session: false }), userController.updateUser)
  .delete(passport.authenticate('jwt', { session: false }), userController.deleteUser);


module.exports = router;

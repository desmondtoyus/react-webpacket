const db = require('../models');


function createUser(req, res) {
  // console.log("SUER SIN UP=>", req.body);
  return db.user.findAndCountAll({
    where: {
      email: req.body.email,
    },
  })
    .then((user) => {
      if (!user.count) {
        const payload = {
          email: req.body.email,
          password: req.body.password,
          first_name: req.body.first_name,
          last_name: req.body.last_name,
          phone: req.body.phone,
          status: req.body.status,
          role: 1,
        };
        return db.user.create(payload)
          .then(dbUser => res.status(201).send(dbUser))
          .catch(error => res.status(400).send(error));
      // eslint-disable-next-line no-else-return
      } else {
        return res.status(503).send({ msg: 'User Already exists, please edit this user instead' });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(503).send({ msg: 'Could not create the user at this time. Please try again later' });
    });
}

function listUsers(req, res) {
  db.user.findAll({})
    .then(dbAuthor => res.status(201).send(dbAuthor))
    .catch(error => res.status(400).send(error));
}

function listUser(req, res) {
  db.user.findOne({
    where: { id: req.params.id },
    include: [db.Comment],
  })
    .then(dbAuthor => res.status(201).send(dbAuthor))
    .catch(error => res.status(400).send(error));
}


function deleteUser(req, res) {
  db.user.findOne({
    where: {
      id: req.params.id,
    },
  })
    .then((dbUser) => {
      if (dbUser) {
        db.user.update({ status: 'deleted' }, {
          where: {
            id: req.params.id,
          },
        })
          .then(() => res.status(201).send('Success'))
          .catch(error => res.status(400).send(error));
      } else {
        res.status(200).send('User Does not exist');
      }
    })
    .catch(error => res.status(400).send(error));
}

function updateUser(req, res) {
  db.user.findOne({
    where: {
      email: req.body.email,
    },
  }).then((author) => {
    if (author) {
      db.user.update(req.body, {
        where: {
          email: req.body.email,
        },
      })
        .then(dbAuthor => res.json(dbAuthor))
        .catch(error => res.json(error));
    } else {
      res.json('No User Found!');
    }
  })
    .catch(error => console.log(error));
}
module.exports.createUser = createUser;
module.exports.listUsers = listUsers;
module.exports.listUser = listUser;
module.exports.deleteUser = deleteUser;
module.exports.updateUser = updateUser;

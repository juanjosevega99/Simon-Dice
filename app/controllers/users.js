const User = require('../models/user');

exports.createOne = async (req, res, next) => {
  try {
    const USER_MODEL = {
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      role: req.body.role
    };
    try {
      const user = await User.create(USER_MODEL);
      return res.status(201).json(user);
    } catch (error) {
      return res.status(500).json(error);
    }
  } catch (error) {
    return res.status(400).json('Bad request');
  }
};

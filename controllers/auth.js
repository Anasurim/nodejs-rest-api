const { User } = require("../models/user");

const bcrypt = require("bcrypt");

const gravatar = require("gravatar");

const { HttpError } = require("../helpers");

const register = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (user) {
      throw HttpError(409, "Email in use");
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const avatarURL = gravatar.url(email);

    const newUser = await User.create({
      ...req.body,
      password: hashPassword,
      avatarURL,
    });

    res.status(201).json({
      email: newUser.email,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = register;

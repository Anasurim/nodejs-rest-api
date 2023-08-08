const { HttpError } = require("../helpers");
const { User } = require("../models/user");

const verifyEmail = async (req, res, next) => {
  try {
    const { verificationToken } = req.params;
    const user = await User.findOne({ verificationToken });

    if (!user) {
      throw HttpError(401, "Not found");
    }

    await User.findByIdAndUpdate(user._id, {
      verify: true,
      verificationToken: "",
    });

    res.json({ message: "Verification successful" });
  } catch (error) {
    next(error);
  }
};

module.exports = verifyEmail;

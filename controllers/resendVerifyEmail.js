const { HttpError, sendEmail } = require("../helpers");
const { User } = require("../models/user");

const { BASE_URL } = process.env;

const resendVerifyEmail = async (req, res, next) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });

    if (!email) {
      throw HttpError(400, "Missing required field: email");
    }

    if (!user) {
      throw HttpError(401, "Not found");
    }

    if (user.verify) {
      throw HttpError(401, "Verification has already been passed");
    }

    const verifyEmail = {
      to: email,
      subject: "Verify email",
      html: `<a target="_blank" href="${BASE_URL}/api/auth/verify/${user.verificationToken}">Click verify email</a>`,
    };

    await sendEmail(verifyEmail);

    res.json({ message: "Verification email sent" });
  } catch (error) {
    next(error);
  }
};

module.exports = resendVerifyEmail;

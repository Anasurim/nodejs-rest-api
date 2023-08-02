const Contact = require("../models/contact");

const getAll = async (req, res, next) => {
  try {
    const { _id: owner } = req.user;
    const { page = 1, limit = 20 } = req.query;
    const skip = (page - 1) * limit;
    const result = await Contact.find({ owner }, "", { skip, limit }).populate(
      "owner",
      "email"
    );
    res.json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = getAll;

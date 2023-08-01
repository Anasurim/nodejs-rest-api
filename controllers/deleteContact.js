const Contact = require("../models/contact");

const { HttpError } = require("../helpers");

const deleteContact = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await Contact.findByIdAndRemove(id);
    if (!result) {
      throw HttpError(404, "Not Found");
    }
    res.json({ message: "Removed succesfull" });
  } catch (error) {
    next(error);
  }
};

module.exports = deleteContact;

const getAll = require("./getAll");
const getById = require("./getById");
const createContact = require("./createContact");
const updateById = require("./updateById");
const updateFavorite = require("./updateFavorite");
const deleteContact = require("./deleteContact");

module.exports = {
  getAll,
  getById,
  createContact,
  deleteContact,
  updateById,
  updateFavorite,
};
